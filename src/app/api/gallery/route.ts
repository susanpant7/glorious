import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET() {
  try {
    // Search for all resources in the root (no folder)
    // Resources without a folder have empty string as folder path
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "",
      max_results: 500,
    });

    // Filter to only image resources without a folder in the public_id
    const images = result.resources
      .filter((resource: any) => {
        // Only include images (not videos or other types)
        if (!resource.resource_type || resource.resource_type !== "image") {
          return false;
        }
        // Only include resources that don't have a folder (public_id doesn't contain /)
        return !resource.public_id.includes("/");
      })
      .map((resource: any) => ({
        id: resource.public_id,
        title: resource.public_id
          .split("_")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        description: `Uploaded on ${new Date(resource.created_at).toLocaleDateString()}`,
        src: resource.secure_url,
        public_id: resource.public_id,
      }));

    return Response.json({
      ok: true,
      images,
      count: images.length,
    });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return Response.json(
      {
        ok: false,
        error: "Failed to fetch gallery images",
      },
      { status: 500 }
    );
  }
}
