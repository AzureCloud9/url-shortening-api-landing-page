import img1 from '../assets/icon-brand-recognition.svg'
import img2 from '../assets/icon-detailed-records.svg'
import img3 from '../assets/icon-fully-customizable.svg'



export default function InfoSection() {
  return (
<>
    <div className='lg:hidden w-[100vw] flex flex-col justify-center items-center pt-[54px] relative bg-color1'>
        <h1 className='text-center font-bold mb-[16px] text-color4 text-[28px] '>Advanced Statistics</h1>
        <p className='text-center mb-[92px] text-color2 ' >Track how your links are performing<br></br> across the web with our advanced<br></br> statistics dashboard.</p>
        <div className='w-[327px] h-[267px] mb-[92px] relative flex flex-col  justify-start items-center bg-white'>
            <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                <img src={img1} alt='pic'/>                
            </div>
                <h1 className='mt-[33px] font-bold text-color6 text-[22px] '> Brand Recognition</h1>
                <p className='text-center text-color2 text-[15px] mt-[12px]'>Boost your brand recognition with <br></br> each click. Generic links don’t <br></br> mean a thing. Branded links help  <br></br>instil confidence in your content.</p>
        </div>

        <div className='w-[327px] h-[267px] mb-[92px] relative flex flex-col  justify-start items-center bg-white'>
            <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                <img src={img2} alt='pic'/>                
            </div>
                <h1 className='mt-[33px] font-bold text-color6 text-[22px] '>Detailed Records</h1>
                <p className='text-center text-color2 mt-[12px] text-[15px]'>Gain insights into who is clicking your <br></br> links. Knowing when and where people <br></br> engage with your content helps inform <br></br> better decisions.</p>
        </div>

        <div className='w-[327px] h-[267px] mb-[80px] relative flex flex-col  justify-start items-center bg-white'>
            <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                <img src={img3} alt='pic'/>                
            </div>
                <h1 className='mt-[33px] font-bold text-color6 text-[22px] '>Fully Customizable</h1>
                <p className='text-center text-[15px] text-color2 mt-[12px]'>Improve brand awareness and <br></br> content discoverability through <br></br>customizable links, supercharging <br></br> audience engagement.</p>
                <p className='text-[15px]'></p>
        </div>
     </div>

     <div className='hidden lg:flex w-[100vw] flex-col justify-center items-center pt-[54px] pb-[120px] relative bg-color1'>
        <h1 className='text-center font-bold mb-[18px] text-color4 text-[40px] '>Advanced Statistics</h1>
        <p className='text-center mb-[92px] text-[18px] text-color2 ' >Track how your links are performing across the web with <br></br> our advanced statistics dashboard.</p>
        <div className='flex '>
            <div className='w-[327px] h-[267px] mb-[92px] relative flex flex-col  justify-start items-center bg-white'>
                <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                    <img src={img1} alt='pic'/>                
                </div>
                    <h1 className='mt-[33px] font-bold text-color6 text-[22px] '> Brand Recognition</h1>
                    <p className='text-center text-color2 text-[15px] mt-[12px]'>Boost your brand recognition with <br></br> each click. Generic links don’t <br></br> mean a thing. Branded links help  <br></br>instil confidence in your content.</p>
            </div>

            <div className='w-[327px] h-[267px] mb-[92px] ml-[30px] mr-[30px]  top-[50px]  relative flex flex-col  justify-start items-center bg-white'>
                <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                    <img src={img2} alt='pic'/>                
                </div>
                    <h1 className='mt-[33px] font-bold text-color6 text-[22px] '>Detailed Records</h1>
                    <p className='text-center text-color2 mt-[12px] text-[15px]'>Gain insights into who is clicking your <br></br> links. Knowing when and where people <br></br> engage with your content helps inform <br></br> better decisions.</p>
            </div>

            <div className='w-[327px] h-[267px] mb-[80px] relative flex flex-col  justify-start items-center bg-white'>
                <div className='w-[88px] h-[88px]  flex justify-center items-center bg-color3 rounded-full z-50 mt-[-40px]'>
                    <img src={img3} alt='pic'/>                
                </div>
                    <h1 className='mt-[33px] font-bold text-color6 text-[22px] '>Fully Customizable</h1>
                    <p className='text-center text-[15px] text-color2 mt-[12px]'>Improve brand awareness and <br></br> content discoverability through <br></br>customizable links, supercharging <br></br> audience engagement.</p>
                    <p className='text-[15px]'></p>
            </div>
        </div>
     </div>
</>     
  )
}
