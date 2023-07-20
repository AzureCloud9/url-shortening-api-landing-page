import hero1 from '../assets/illustration-working.svg'
import GetStartedButton from './GetStartedButton'


export default function Hero() {
    return (
<>


      <div className='lg:hidden w-[100vw] flex flex-col mt-[55px] justify-center items-center mb-[139px] overflow-hidden'>
          <img className='ml-[100px] mb-[37px] w-full h-auto' src={hero1} alt='pic' ></img>
          <h1 className=' text-color6 font-bold text-[42px] mb-[15px] leading-tight'>More than just <br></br> shorter links</h1>
          <p className='text-center text-[18px] font-medium text-color2 mb-[32px]' >Build your brand’s recognition and <br></br> get detailed insights on how your  <br></br>links are performing.</p>
          <GetStartedButton/>
      </div>

      <div className='hidden lg:flex w-[100vw] h-[100vh] flex mt-[90px] justify-center items-center  overflow-hidden'>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-col mr-[100px] ml-[240px]'>
            <h1 className=' text-color6 font-bold text-[80px] mb-[15px] w-[600px] leading-tight'>More than just <br></br> shorter links</h1>
            <p className=' text-[22px] font-medium text-color2 mb-[38px] w-[600px] ' >Build your brand’s recognition and get detailed <br></br> insights on how your links are performing.</p>
            <GetStartedButton/>
          </div>
          <img className=' w-[780pxpx] h-[500px]' src={hero1} alt='pic' ></img>
        </div>
      </div>

      

      

</>
    )
  }
  