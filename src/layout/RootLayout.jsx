import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from '../assets/logo.svg'
import hamburger from '../assets/Group.svg'

export default function RootLayout() {
    const [isClicked, setIsClicked] = useState(false)
    const hamburgerHandle = () => {
        setIsClicked(!isClicked)
       
    }
    useEffect(() => {
        console.log(isClicked)
    },[isClicked])

  return (
    <>
        <div className="h-[80px] w-[100vw]  flex items-center bg-white justify-between  ">
            <img className="w-[120px] h-[32px] ml-[24px]" src={logo} alt="pic"/>
            <img className="w-[24px] h-[21px] mr-[24px] " src={hamburger} alt="pic1" onClick={hamburgerHandle}/>
        </div>
        {isClicked ? (
            <div className="w-[100vw] flex justify-center z-10  absolute">
                <div className="w-[327px] bg-color3 rounded flex justify-center items-center flex-col">
                    <div className="border-b-[1px] h-[220px] border-color2 w-[279px] flex  items-center flex-col">
                        <h2 className="text-[18px] font-bold text-white mt-[40px] mb-[30px]">Features</h2>
                        <h2 className="text-[18px] font-bold text-white mb-[30px]">Pricing</h2>
                        <h2 className="text-[18px] font-bold text-white mb-[30px]">Resources</h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1 className="text-[18px] font-bold text-white mt-[32px] mb-[30px]">login</h1>
                        <div className="w-[279px] h-[48px] mb-[30px] bg-color5 flex justify-center items-center">
                            <p className="text-[18px] font-bold text-white">Sign Up</p>
                        </div>
                    </div>
                </div>
            
            </div>
        ):null}
        <Outlet/>
    </>
    
  )
}
