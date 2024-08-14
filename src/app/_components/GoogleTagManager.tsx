'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleTagManagerProps {
  gtmId: string;
  measurementId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({
  gtmId,
  measurementId,
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && measurementId) {
      // Ensure dataLayer is defined
      window.dataLayer = window.dataLayer || [];

      // Define gtag as a function expression
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      // Initialize gtag
      gtag('js', new Date());
      gtag('config', measurementId);
    }
  }, [measurementId]);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <noscript>
        <iframe
          title={`noscript`}
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  );
};

export default GoogleTagManager;
