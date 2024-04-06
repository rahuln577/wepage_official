import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Our Projects/Section'
import AboutUs from './components/AboutUs'

export default function App()
{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <AboutUs/>
    </div>
  );
}