import { z } from "astro:content";

export const imageSchema = z.string().refine(
  (val) => {
    // Check if it's a URL, absolute path, or relative path
    return (
      val.startsWith("http") || val.startsWith("/") || val.startsWith("./")
    );
  },
  {
    message: "Image must be a valid URL or file path",
  }
);
