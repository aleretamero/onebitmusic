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

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--montserrat',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--raleway',
});

export default function Home() {
  return (
    <>
      <Head>
        <Meta />

        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={`${montserrat.variable} ${raleway.variable}`}>
        <Header />
        <main className="main">
          <Hero />
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
