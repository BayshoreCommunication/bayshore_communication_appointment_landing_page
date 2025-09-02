import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ✅ Headings (H1, H2)

export const metadata: Metadata = {
  title: "Bayshore Communication Appointments",
  description: " We Help Lawyers Dominate Search Results, Grow Reputation, And Generate Consistent Leads</span> Without Wasting Time On Outdated Marketing.",
  metadataBase: new URL(
    "https://www.business-growth.bayshorecommunication.com"
  ),
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
    <html lang="en">
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
