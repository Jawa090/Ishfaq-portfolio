import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>M. Ishfaq Khan | Digital Marketing Strategist & Lead Generation Expert</title>
        <meta 
          name="description" 
          content="Results-driven Digital Marketing Strategist specializing in lead generation, social media marketing, and content strategy. Helping brands grow through data-driven marketing in Lahore, Pakistan." 
        />
        <meta name="keywords" content="Digital Marketing, Lead Generation, Social Media Marketing, Content Strategy, B2B Marketing, Lahore, Pakistan" />
        <meta property="og:title" content="M. Ishfaq Khan | Digital Marketing Strategist" />
        <meta property="og:description" content="Helping brands grow through data-driven marketing, lead generation, and content strategy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ishfaqkhan.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
