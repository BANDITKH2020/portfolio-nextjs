import About from '@/components/About';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/components/Service';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  )
}
