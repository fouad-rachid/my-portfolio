import './app.scss'
// import Test from "./Test";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Parallax from './components/parallax/Parallax';
import Contact from './components/contact/Contact';


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

     <section id="Services"><Parallax type="services"/></section>
    {/* <section><Services/></section> */}
    {/* <section id="Portfolio"><Parallax type="portfolio" /></section> */}
    {/* <section id="Portfolio"></section> */}
    <Portfolio/>
    <section id="Contact"><Parallax type="portfolio" /></section> 
    <section><Contact/></section>
    {/* <Test/> */}
  </div>
};

export default App;
