import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from './sections/AnnouncementBar';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Menu } from './sections/Menu';
import { WhyVisit } from './sections/WhyVisit';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { Visit } from './sections/Visit';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-cream">
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Menu />
        <WhyVisit />
        <Gallery />
        <Reviews />
        <Visit />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
