"use client"

import Script from 'next/script'

export default function FontplusLoader() {
  return (
    <Script
      src="https://webfont.fontplus.jp/accessor/script/fontplus.js?2n4gon2A5A0%3D&box=62E3cdg65GY%3D&pm=1&aa=1&ab=2"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('FONTPLUS script loaded');
        const checkFONTPLUS = () => {
          if (typeof FONTPLUS !== 'undefined') {
            FONTPLUS.reload(false);
            console.log('FONTPLUS reloaded');
          } else {
            console.log('FONTPLUS object not found, retrying...');
            setTimeout(checkFONTPLUS, 100);
          }
        };
        setTimeout(checkFONTPLUS, 100);
      }}
    />
  )
}