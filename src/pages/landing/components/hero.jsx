import { heroImage } from "../../../assets"

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#E3D0CA] place-content-center">
          <div className="mx-auto w-fit flex flex-col items-start gap-y-4 pl-20">
          <div className="flex flex-col text-5xl">
            <span className="font-thin py-2">Experience Yacht Perfection</span>
            <span className="font-bold py-2">Luxurious Yacht Collections</span>
          </div>
          <p className="w-80">Each yacht is a masterpiece, meticulously crafted to provide an exceptional cruising experience.</p>
          <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-[#267CB8]">DISCOVER</button>
          </div>
      </div>
      <div className="w-1/2">
        <img
          src={heroImage}
          alt="Hero background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default Hero;