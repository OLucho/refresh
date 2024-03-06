import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Refresh",
  description: "Refresh is an agency for models",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="justify-center text-xl font-bold leading-[4rem]">
          <Link href="/">refresh</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Refresh - All rights reserved
        </footer>
      </body>
    </html>
  );
}
