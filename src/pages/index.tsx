import Head from 'next/head';

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

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Onebitmusic - Especialistas em eventos músicais"
        />
        <meta
          name="description"
          content=" Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical."
        />
        <link rel="icon" href="/logo.svg" />
        <title>Onebitmusic - Especialistas em eventos músicais</title>
      </Head>
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
    </>
  );
}
