import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import IconTray from './components/IconTray';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="h-screen ">
      <Navbar />

      <Home />
      <IconTray />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}
