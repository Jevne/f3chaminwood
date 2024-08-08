import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from '../_components/Hero';
import CorePrinciple from '../_components/CorePrinciple';


import f3HeroImg from '../../../public/leading.jpg';
import Button from '../_components/Button';
import shelter from '../../../public/f3-white.png';
import Image from 'next/image';

/**
 * TODO: Either delete or update this page if not relevant to your region
 */
export default function Page() {
  const href = '/convergence';
  const formHref = 'https://forms.gle/RLMD7FcBrGkW1FNm6';
  const geolocationHref = 'https://maps.app.goo.gl/nFYveVBeoLAAY4Jf6';
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="F3 MISSION AND CORE PRICIPLES"
          subtitle="CALLING MEN TO VIRTUOUS LEADERSHIP"
          imgUrl={f3HeroImg.src}
        />
      </main>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <p className="text xl">THE MISSION IS</p>
        <h2 className="pb-5">TO PLANT, GROW, AND SERVE SMALL WORKOUT GROUPS FOR MEN FOR THE PURPOSE OF INVIGORATING MALE COMMUNITY LEADERSHIP</h2>
        <p className="text-cmu w-4/5 pb-10" style={{ margin: '0 auto' }}>
          F3 is much more than just a workout group for men.  We believe that we can make huge positive impacts in our community, our work, and with our family and friends.  F3 is the accelerant pushing us all forward to be better MEN.
        </p>
        <Button href={formHref} text="HARD COMMIT NOW" target="_blank" />
      </section>
      <section className={`bg-iron leading-tight py-16 px-4`}>
        <h2>OUR CORE PRINCIPLES</h2>
        <ul className="pt-10">
          <CorePrinciple
            principle="Free of Charge"
            description="Never pay to workout, ever."
          />
          <CorePrinciple
            principle="Open to all Men"
            description="No matter the man, you are welcome here."
          />
          <CorePrinciple
            principle="Held Outdoors"
            description="Rain or Shine, Hot or Cold, we are out there."
          />
          <CorePrinciple
            principle="Peer Led"
            description="Rotating fashion of men leading each other."
          />
          <CorePrinciple
            principle="Ends with a COT"
            description="Always ends with a Circle of Trust."
          />
        </ul>
      </section>
      <section className={`bg-gloom leading-tight py-16 px-4`}>
        <h2 className="pb-5">WE HAVE A MOTTO TO LEAVE NO MAN BEHIND, BUT LEAVE NO MAN WHERE YOU FIND HIM</h2>
        <p>We push each other to be better both during the workouts and at home.  We have your 6!</p>
      </section>
      <Footer />
    </>
  );
}
