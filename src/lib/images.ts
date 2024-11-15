import { getImage } from "astro:assets";

export async function resolveImage(src: string) {
  if (src.startsWith("http")) {
    return src;
  }

  try {
    const image = await getImage({ src });
    return image.src;
  } catch (error) {
    console.error(`Failed to resolve image: ${src}`, error);
    return src;
  }
}
