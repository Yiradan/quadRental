import Image from "next/image"
import About from "./About"
import Best from "./Best"
import Featured from "./Featured"
import Mobile from "./Mobile"
import Rental from "./Rental"

const HomePage = () => {
  return (
    <div className='home w-full'>
      <div className="absolute top-0 left-0 w-full h-[70vh]">
        <Image
          priority
          fill
          objectFit="cover"
          src='/static/background.jpg'
          alt='background'
          className='background'
        />
      </div>
      <div className="title">
        <div className='flex'><h1 className='text-orange-500'>
          Quad</h1><h1 className='pl-[15px]'>rental</h1></div>
        <h2>Constantly ready for an adventure!</h2>
      </div>
      <div className='rentForm'>
        <Rental />
      </div>
      <About />
      <Featured />
      <Best />
      <Mobile />
    </div>
  )
}

export default HomePage
