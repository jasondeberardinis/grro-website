import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRRO.io | AI-Powered Creative Agency",
  description:
    "We launch brands into orbit with AI-generated ads, custom CRM integrations, and next-gen SEO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#1B263B] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
