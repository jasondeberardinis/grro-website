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
          href="https://fonts.googleapis.com/css2?family=Michroma&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-deep text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
