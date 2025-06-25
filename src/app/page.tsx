import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Volunteer from '../components/Volunteer';
import Contact from '../components/Contact';
import Donate from '../components/Donate';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Volunteer />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
