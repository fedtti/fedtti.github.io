import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federico Moretti AKA “fedtti” • Full-Stack Developer",
  description: "A full-stack developer who realizes solutions in HTML, CSS, and JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="content-security-policy" content="default-src 'self'" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
