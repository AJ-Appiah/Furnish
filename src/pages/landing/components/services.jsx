import { Handshake } from "lucide-react"
import K from "../../../constants"
const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 p-4 ">
      {
    K.SERVICES.map(
      (service, index) =>{
        return <div key={index} 
        className={'py-10 flex flex-col px-9'} 
        style={{backgroundColor: service.bgColor}}>
          <span className="px-[80px] py-2 bg-[#D1B54A] h-[50px] w-1 rounded-3xl">
            <Handshake className=""/>
            </span>
          <h3 className="font-bold">{service.title}</h3> 
          <p>{service.description}</p>
        </div>
      }
    )
      }
    </div>
  )
}

export default Services