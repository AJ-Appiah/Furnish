import { Handshake } from "lucide-react"
import K from "../../../constants"
const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 p-4 ">
      {
    K.SERVICES.map(
      (item, index) =>{
        return <div key={index} 
        className={'py-10 flex flex-col px-9'} 
        style={{backgroundColor: item.bgColor}}
        >
          
          <span className=" w-fit rounded-full p-3 text-white"
          style={{backgroundColor: item.iconColor}}
          >
            {item.icon}
            </span>
          <h3 className="font-bold">{item.title}</h3> 
          <p className="text-black/80">{item.description}</p>
        </div>
      }
    )
      }
    </div>
  )
}

export default Services