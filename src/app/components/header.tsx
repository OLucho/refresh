import Link from "next/link";

import {Separator} from "@/components/ui/separator";

import {Navigation} from "./navigation";

export function Header({subtitle}: {subtitle?: string}) {
  return (
    <header className="mb-6 mt-8 flex flex-col items-center">
      <Link href="/">
        <h1 className="text-6xl font-bold tracking-wide hover:cursor-pointer">REFRESH</h1>
      </Link>
      {subtitle ? <h2 className="my-2 text-5xl font-medium">{subtitle}</h2> : null}
      <Navigation />
      <Separator />
    </header>
  );
}
