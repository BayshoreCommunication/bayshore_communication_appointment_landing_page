import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ✅ Headings (H1, H2)


export const metadata: Metadata = {
  title: "Bayshore Communication Appointments",
  description: "",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="">
          <main className="">{children}</main>
          
        
      </body>
    </html>
  );
}
