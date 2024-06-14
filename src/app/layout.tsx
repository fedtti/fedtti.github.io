import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';
import '@/app/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const ibm_plex_mono: any = IBM_Plex_Mono({
                             weight: ['400', '700'],
                             style: ['normal'],
                             subsets: ['latin'],
                             display: 'swap',
                             variable: '--font-ibm-plex-mono'
                           });

const ibm_plex_sans: any = IBM_Plex_Sans({
                             weight: ['400', '700'],
                             style: ['normal'],
                             subsets: ['latin'],
                             display: 'swap',
                             variable: '--font-ibm-plex-sans'
                           });

const ibm_plex_serif: any = IBM_Plex_Serif({
                              weight: ['400', '700'],
                              style: ['normal'],
                              subsets: ['latin'],
                              display: 'swap',
                              variable: '--font-ibm-plex-serif'
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
    <html className={`no-js ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${ibm_plex_serif.variable}`} lang="en">
      <head>
        <meta httpEquiv="content-security-policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
