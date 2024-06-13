import ScrollSpy from 'react-scrollspy-navigation';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import IconTray from './components/IconTray';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="h-screen hide-scroller">
      <ScrollSpy activeClass="font-bold">
        <Navbar />

        <Home />
        <IconTray />
        <About />
        <Portfolio />
        <Experience />
      </ScrollSpy>
    </div>
  );
}
