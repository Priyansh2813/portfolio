import { useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import IconTray from './components/IconTray';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import PageIcons from './components/PageIcons';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 50) {
          current = section.getAttribute('id') || '';
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen hide-scroller">
      <Navbar />
      <PageIcons currentSection={currentSection} />
      <Home />
      <IconTray />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}
