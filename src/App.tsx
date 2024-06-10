import Home from './components/Home';
import IconTray from './components/IconTray';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="h-screen ">
      <Navbar />

      <Home />
      <IconTray />
    </div>
  );
}
