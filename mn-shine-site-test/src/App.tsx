import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingContact from "./components/FloatingContact";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services/>
      <Testimonials/>
      <Contact/>

      <FloatingContact/>
    </div>
  );
}

export default App;