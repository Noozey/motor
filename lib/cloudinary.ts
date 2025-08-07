// lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  url: string;
  publicId: string;
  originalName: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
}

export async function uploadFileToCloudinary(
  file: File,
): Promise<CloudinaryUploadResult> {
  try {
    console.log(`Uploading file: ${file.name} (${file.size} bytes)`);

    const buffer = await file.arrayBuffer();
    const bufferData = Buffer.from(buffer);

    const result = await new Promise<any>((resolve, reject) => {
      const publicId = `ev-exchange-${Date.now()}-${file.name.split(".")[0]}`;

      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "ev-exchange-images",
            public_id: publicId,
            quality: "auto:good",
            transformation: [
              { width: 1200, height: 1200, crop: "limit" },
              { quality: "auto:good" },
              { fetch_format: "auto" }, // Automatically choose best format
            ],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          },
        )
        .end(bufferData);
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
      originalName: file.name,
      size: file.size,
      mimeType: file.type,
      uploadedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Failed to upload file ${file.name}:`, error);
    throw new Error(`Upload failed for ${file.name}: ${error.message}`);
  }
}

export async function deleteFileFromCloudinary(
  publicId: string,
): Promise<boolean> {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result === "ok";
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    return false;
  }
}

// Get optimized image URL with transformations
export function getOptimizedImageUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  },
): string {
  return cloudinary.url(publicId, {
    width: options?.width || 800,
    height: options?.height || 600,
    crop: "fill",
    quality: options?.quality || "auto:good",
    fetch_format: options?.format || "auto",
  });
}

export default cloudinary;
