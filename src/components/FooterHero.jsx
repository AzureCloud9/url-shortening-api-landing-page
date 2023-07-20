
export default function FooterHero() {
  return (

<>
    <div className="lg:hidden w-[100vw] h-[300px] flex justify-center items-center flex-col bg-color4 " >
        <h1 className="text-[28px] font-bold text-white mb-[24px]" >Boost your links today</h1>
        <div className="w-[195px] h-[56px] bg-color5 flex justify-center items-center rounded-2xl"><p className="text-white text-[20px] font-bold">Get Started</p></div>
    </div>

    <div className="hidden lg:flex w-[100vw] h-[250px] flex justify-center items-center flex-col bg-color4 " >
        <h1 className="text-[40px] font-bold text-white mb-[24px]" >Boost your links today</h1>
        <div className="w-[197px] h-[56px] bg-color5 hover:bg-color7 cursor-pointer flex justify-center items-center rounded-2xl"><p className="text-white text-[20px] font-bold">Get Started</p></div>
    </div>


</>
  )
}
