import './Styles/styless.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Schedule from './components/Schedule.jsx';
import EquipmentGallery from './components/EquipmentGallery.jsx';
import Video from './components/Video.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Video />
      <Schedule />
      <EquipmentGallery/>
      <Contact />
    </div>
  );
}

export default App;