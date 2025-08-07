import {
  getAllNewEVVehicleDetails,
  registerEvExchangeDetails,
} from "@/actions/exchangeEV.action";
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
        // Here you would upload to cloud storage and get URLs
        const imageUrls = await Promise.all(
          images.map(async (file, index) => {
            try {
              // Upload to your cloud service (implement this function)
              const cloudUrl = await uploadFileToCloud(file);
              return {
                url: cloudUrl,
                originalName: file.name,
                size: file.size,
                mimeType: file.type,
                uploadedAt: new Date().toISOString(),
              };
            } catch (error) {
              console.error(`Error uploading image ${index}:`, error);
              return null;
            }
          }),
        );

        // Filter out failed uploads and add to data
        data.images = imageUrls.filter((img) => img !== null);
      } else {
        data.images = [];
      }
    } else {
      // Handle regular JSON data (fallback for backward compatibility)
      data = await req.json();
    }

    console.log("Processed data:", {
      ...data,
      images: data.images?.length || 0 + " images",
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

// Placeholder function - implement based on your cloud storage choice
async function uploadFileToCloud(file: File): Promise<string> {
  // Example implementation for different cloud providers:

  // Option 1: AWS S3 (you'll need to install aws-sdk)
  /*
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();

  const buffer = await file.arrayBuffer();
  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `uploads/${Date.now()}-${file.name}`,
    Body: Buffer.from(buffer),
    ContentType: file.type,
    ACL: 'public-read',
  };

  const result = await s3.upload(uploadParams).promise();
  return result.Location;
  */

  // Option 2: Cloudinary (you'll need to install cloudinary)
  /*
  const cloudinary = require('cloudinary').v2;
  const buffer = await file.arrayBuffer();

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    ).end(Buffer.from(buffer));
  });
  */

  // Option 3: Local storage (for development/testing)
  /*
  const fs = require('fs').promises;
  const path = require('path');

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);

  const buffer = await file.arrayBuffer();
  await fs.writeFile(filepath, Buffer.from(buffer));

  return `/uploads/${filename}`;
  */

  // For now, return a placeholder URL
  console.log(`Would upload file: ${file.name} (${file.size} bytes)`);
  return `https://placeholder-storage.com/uploads/${Date.now()}-${file.name}`;
}
