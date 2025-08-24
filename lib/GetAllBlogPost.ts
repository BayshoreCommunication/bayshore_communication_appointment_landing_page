import { BlogPostData } from "./types";

export default async function GetAllBlogPost(): Promise<BlogPostData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      "https://backend-sabbir-nasir.vercel.app/site/blog",
      {
        next: { revalidate: 5 },
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BlogPostData = await response.json();

    // Validate the response structure
    if (!data || !Array.isArray(data.data)) {
      throw new Error("Invalid response format: expected data array");
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    // Return empty data structure as fallback instead of throwing
    // This prevents the entire page from crashing
    return {
      data: [],
      success: false,
      message: "Failed to fetch blog posts",
    };
  }
}
