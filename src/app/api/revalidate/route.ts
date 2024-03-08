import {revalidateTag} from "next/cache";

export async function GET() {
  revalidateTag("models");

  return {message: "Revalidate models"};
}
