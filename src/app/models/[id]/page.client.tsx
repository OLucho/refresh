"use client";
import {Button} from "@/components/ui/button";

export function ClientButton({polaroidLink}) {
  return (
    <Button
      className="my-4 "
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      onClick={() => window.open(polaroidLink, "_blank")}
    >
      POLAROID
    </Button>
  );
}
