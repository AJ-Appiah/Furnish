import Statistics from "../../components/statistics"
import Testimonials from "../../components/testimonials"
import AboutFurnish from "./components/about-furnish"
import AboutHero from "./components/about-hero"

const About = () => {
  return (
    <div>
        <AboutFurnish/>
        <AboutHero/>
        <Statistics/>
        <Testimonials/>
    </div>
  )
}

export default About