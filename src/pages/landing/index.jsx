import Navbar from "../../components/navbar"
import About from "./components/about"
import Blog from "./components/blog"
import Collection from "./components/collection"
import Footer from "../../components/footer"
import Hero from "./components/hero"
import Services from "./components/services"
import Statistics from "../../components/statistics"
import Testimonials from "../../components/testimonials"
import ProductionFlows from "./production-flows"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
        <Statistics/>
        <Testimonials/>
        <ProductionFlows/>
        <Blog/>
        
        
    
    </div>
  )
}

export default LandingPage 