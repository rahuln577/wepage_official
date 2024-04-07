import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Our Projects/Section'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import OurServices from './components/OurServices'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App()
{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <AboutUs/>
      <OurServices/>
      <Reviews/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}