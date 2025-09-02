import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ✅ Headings (H1, H2)


export const metadata: Metadata = {
  title: "Bayshore Communication Appointments",
  description: "Bayshore Communication Appointments",
  metadataBase: new URL("https://www.business-growth.bayshorecommunication.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Bayshore Communication Appointments",
    description: "Bayshore Communication Appointments",
    url: "https://www.business-growth.bayshorecommunication.com/",
    siteName: "Bayshore Communication",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,  
        height: 630,
        alt: "Bayshore Communication Appointments Preview",
      },
    ],
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
