import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import './globals.css';
import GoogleTagManager from './_components/GoogleTagManager';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
        <GoogleTagManager gtmId="GTM-TNHPFHSC" measurementId="GTM-HWDT2R6R7G" />
      </head>
      <body
        className={`${inter.className} bg-iron text-white text-center font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
