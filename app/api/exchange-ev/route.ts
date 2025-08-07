import {
  getAllNewEVVehicleDetails,
  registerEvExchangeDetails,
} from "@/actions/exchangeEV.action";
import { uploadFileToCloudinary } from "@/lib/cloudinary"; // Import from your separate file
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Check if the request is FormData or JSON
    const contentType = req.headers.get("content-type");

    let data: any;

    if (contentType?.includes("multipart/form-data")) {
      // Handle FormData with files
      const formData = await req.formData();

      // Extract regular form fields
      data = {};
      const images: File[] = [];

      for (const [key, value] of formData.entries()) {
        if (key === "images") {
          // Handle multiple images with same key
          images.push(value as File);
        } else if (key === "additionalFeatures") {
          // Parse JSON string back to object
          try {
            data[key] = JSON.parse(value as string);
          } catch {
            data[key] = value;
          }
        } else {
          // Convert numeric fields back to numbers
          if (
            [
              "phone",
              "makeYear",
              "kmDriven",
              "expectedValuation",
              "downpayment",
            ].includes(key)
          ) {
            data[key] = value === "" ? 0 : Number(value);
          } else {
            data[key] = value;
          }
        }
      }

      // Process images if any exist
      if (images.length > 0) {
        console.log(`Processing ${images.length} images for upload...`);

        const imageResults = await Promise.all(
          images.map(async (file, index) => {
            try {
              // Use the imported Cloudinary function
              const uploadResult = await uploadFileToCloudinary(file);
              return uploadResult;
            } catch (error) {
              console.error(
                `Error uploading image ${index} (${file.name}):`,
                error,
              );
              return null;
            }
          }),
        );

        // Filter out failed uploads
        data.images = imageResults.filter((result) => result !== null);
        console.log(
          `Successfully uploaded ${data.images.length} out of ${images.length} images`,
        );
      } else {
        data.images = [];
      }
    } else {
      // Handle regular JSON data (fallback for backward compatibility)
      data = await req.json();
    }

    console.log("Processed data:", {
      ...data,
      images: `${data.images?.length || 0} images`,
    });

    // Pass the processed data to your action
    const result = await registerEvExchangeDetails(data);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "something went wrong",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "EV exchange data submitted successfully",
        data: result.data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in exchange ev request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Failed to process request",
      },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const result = await getAllNewEVVehicleDetails();
    if (!result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to fetch categories" },
        { status: 500 },
      );
    }
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
