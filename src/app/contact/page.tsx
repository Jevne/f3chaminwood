import Link from 'next/link';
import Image from 'next/image'

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero2';

/** replace with a regional image */
import f3contactus from '../../../public/F3ContactUs.jpg';

import en from '../../locales/en.json'

export default function Page() {
  const href = '/fng';
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="INTERESTED TO LEARN MORE"
          subtitle="Fill out the form below"
          imgUrl={f3contactus.src}
        />
      </main>
      <center><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVLUWMctpwOu41brwfg_XS8-zi3fB4OyK9IWhG7ggYTbhzmg/viewform?embedded=true" width="640" height="959" align-center='true' >Loading…</iframe></center>

      <Footer />
    </>
  );
}
