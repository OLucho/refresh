import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

import {Separator} from "@/components/ui/separator";

import {Navigation} from "./components/navigation";

export const metadata: Metadata = {
  title: "Refresh",
  description: "Refresh is an agency for models",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className="dark container m-auto grid min-h-screen 
      grid-rows-[auto,1fr,auto] bg-background px-4 
      font-sans antialiased"
      >
        <header className="mb-2 mt-8 flex flex-col items-center">
          <Link href="/">
            <h1 className="text-6xl font-bold">REFRESH</h1>
          </Link>
        </header>
        <Navigation />
        <Separator />
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Refresh - All rights reserved
        </footer>
      </body>
    </html>
  );
}
