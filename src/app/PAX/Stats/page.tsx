import Header from '../../_components/Header';
import Footer from '../../_components/Footer';
import Hero from '../../_components/Hero';

import f3HeroImg from '../../../../public/statistics-banner.png';
import Button from '../../_components/Button';
import shelter from '../../../../public/f3-white.png';
import Image from 'next/image';

/**
 * TODO: Either delete or update this page if not relevant to your region
 */
export default function Page() {
  const href = '/PAX/stats';
  const formHref = 'https://forms.gle/afmWCdgtSPTCKbPD7';
  const geolocationHref = 'https://maps.app.goo.gl/nFYveVBeoLAAY4Jf6';
  return (
    <>
      <Header href={href} />
      <main>
        <Image
            src={f3HeroImg.src}
            height={300}
            width={1200}
            alt={'PAX Statistics'}
            className="grayscale hover:grayscale-0 w-fit pt-5 pb-10"
            style={{ margin: '0 auto' }}
          />
      </main>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <h2 className="text-4xl py-5">TBD</h2>
        
      </section>
    
      <Footer />
    </>
  );
}
