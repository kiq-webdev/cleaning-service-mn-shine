import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingContact from "./components/FloatingContact";




function App() {
  return (
    <div>
      <Hero />
      <Services/>
      <Testimonials/>
      <Contact/>

      <FloatingContact/>
    </div>
  );
}

export default App;