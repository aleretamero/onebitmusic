import Head from 'next/head';

import { Montserrat, Raleway } from 'next/font/google';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Singers } from '../components/Singers';
import { EventSchedule } from '../components/EventSchedule';
import { Pricing } from '../components/Pricing';
import { Sponsors } from '../components/Sponsors';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Meta } from '@/components/Meta';
import { GetServerSideProps } from 'next';

import {
  calculateTimeLeft,
  TypeTimeLeft,
} from '@/components/Hero/Timer/calculateTimeLeft';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--montserrat',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--raleway',
});

export const getServerSideProps: GetServerSideProps = async () => {
  const initialTime = calculateTimeLeft();

  return {
    props: {
      initialTime,
    },
  };
};

export default function Home(props: { initialTime: TypeTimeLeft }) {
  return (
    <>
      <Head>
        <Meta />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Onebitmusic - Especialistas em eventos músicais"
        />
        <meta
          name="description"
          content="Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical."
        />
        <title>Onebitmusic - Especialistas em eventos músicais</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={`${montserrat.variable} ${raleway.variable}`}>
        <Header />
        <main className="main">
          <Hero initialTime={props.initialTime} />
          <About />
          <Singers />
          <EventSchedule />
          <Pricing />
          <Sponsors />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
