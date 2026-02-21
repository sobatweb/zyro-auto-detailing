import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Comparison from './components/Comparison';


function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Comparison />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;