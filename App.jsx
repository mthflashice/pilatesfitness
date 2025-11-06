import './Styless/styless.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Video from './components/Video';
import Contact from './components/Contact';

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