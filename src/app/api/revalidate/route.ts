import {revalidateTag} from "next/cache";

export async function GET() {
  revalidateTag("models");

  return Response.json({message: "Revalidate tag added"});
}
