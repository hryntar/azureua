import Image from "next/image"
import Navigation from "./Navigation"

const Footer = () => {
  return (
    <footer className=' bg-slate-800 '> 
         <div className="py-[60px] flex items-center justify-between  px-3 mx-auto container">
            <Image width={100} height={100} src="/azure-logo.png" alt="Azure" /> 
            <Navigation className="text-white" />
         </div>
    </footer>
  )
}

export default Footer