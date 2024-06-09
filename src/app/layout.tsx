import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import "@/app/globals.css";

const ibm_plex_sans = IBM_Plex_Sans({
                        weight: ['400', '700'],
                        style: ['normal'],
                        subsets: ['latin'],
                        display: 'swap'
                      });

export const metadata: Metadata = {
  title: 'Federico Moretti AKA “fedtti” • Full-Stack Developer',
  description: 'A full-stack developer who realizes solutions in HTML, CSS, and JavaScript.',
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
      <body className={ibm_plex_sans.className}>{children}</body>
    </html>
  );
}
