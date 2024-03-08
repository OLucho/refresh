import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Refresh",
  description: "Refresh is an agency for models",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <body
        className="dark container m-auto grid 
      grid-rows-[auto,1fr,auto] bg-background px-4 antialiased"
      >
        <main className="min-h-[42rem] font-ArchivoBlack">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Refresh - All rights reserved
        </footer>
      </body>
    </html>
  );
}
