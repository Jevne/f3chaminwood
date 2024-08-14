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
        <h2 className="text-4xl py-5">PAX STATS</h2>
      </main>

      <section className={`bg-gloom leading-tight py-4 px-4`}>
        <center><iframe width="100%" height="600" src="https://lookerstudio.google.com/embed/reporting/634f2be2-61c7-4384-8794-a870704c5239/page/dBx8D" allowFullScreen align-center='true' sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe></center>
      </section>

      <Footer />
    </>
  );
}
