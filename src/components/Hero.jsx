import hero1 from '../assets/illustration-working.svg'
import GetStartedButton from './GetStartedButton'


export default function Hero() {
    return (
      <div className='w-[100vw] flex flex-col mt-[55px] justify-center items-center mb-[139px]'>
          <img className='ml-[100px] mb-[37px] w-full h-auto' src={hero1} alt='pic' ></img>
          <h1 className=' text-color6 font-bold text-[42px] mb-[15px] leading-tight'>More than just <br></br> shorter links</h1>
          <p className='text-center text-[18px] font-medium text-color2 mb-[32px]' >Build your brand’s recognition and <br></br> get detailed insights on how your  <br></br>links are performing.</p>
          <GetStartedButton/>
      </div>
    )
  }
  