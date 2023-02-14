import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function App() {
  return (
      <div className="App">
        <Header/>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
      </div>
  );
}

export default App;
