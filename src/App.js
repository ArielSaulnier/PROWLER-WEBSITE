import './App.css';
import Hero from './Components/Hero';
import Features from './Components/Features';
import CTA from './Components/CTA';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Stats from './Components/Stats';


function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Stats></Stats>
      <Features></Features>
     
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
