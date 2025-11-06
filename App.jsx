import './Styless/styless.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Schedule from './components/Schedule.jsx';
import Gallery from './components/Gallery.jsx';
import Video from './components/Video.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Video />
      <Schedule />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;