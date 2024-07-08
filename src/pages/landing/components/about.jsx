import { Play } from "lucide-react"
import { aboutImg } from "../../../assets"

const About = () => {
  return (
    <div className="flex flex-row bg-[#F4EEE6]">
      <img src={aboutImg} alt="About image" className="w-1/2 " />

      <div>
        <h3 className="text-black/80">ABOUT GRAND VOYAGE</h3>
        <h1 className="">Quality Makes the Belief for Customers</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, our yachts sail in a sea of luxury. Separated from the ordinary, they glide gracefully across the waters of distinction, embodying the pinnacle of nautical craftsmanship.</p>
        <span>
          <Play/>
          Watch Video
        </span>
      </div>
    </div>
  )
}

export default About