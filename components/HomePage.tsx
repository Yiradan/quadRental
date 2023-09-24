import Best from "./Best"
import Featured from "./Featured"
import Rental from "./Rental"

const HomePage = () => {
  return (
    <div className='home'>
      <img src='/static/background.jpg' alt='background' />
      <div className="title">
        <div className='flex'><h1>Quad</h1><h1 className='pl-[15px]'>rental</h1></div>
        <h2>Constantly ready for an adventure!</h2>
      </div>
      <div className='rentForm'>
        <Rental />
      </div>
      <Best />
      <Featured />
    </div>
  )
}

export default HomePage
