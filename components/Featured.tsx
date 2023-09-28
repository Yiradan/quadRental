import Link from "next/link"
import { vehicleList } from "./data"

const Featured = () => {
  return (
    <div className="featured bg-gray-300 w-full p-[5vh] px-[10vw]">
      <div className="featuredT flex flex-col md:flex-row md:items-center font-bold md:justify-between text-[5vh]">
        <h1 className="flex">Featured rent <p className="pl-2 text-orange-500">Quads</p></h1>
        <Link className='md:inline hidden' href="/quads">
          <button className='bg-orange-500 mt-[2vh] md:m-0 hover:bg-slate-700  duration-300 text-white text-2xl shadow p-3 rounded-md'>View All Quads</button>
        </Link>
      </div>

        <div className='vehicleGrid my-10 lg:grid flex flex-col'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-5'>
            <img src={vehicleList[0].image} alt="quad" />
            <h1 className='gridh1'>{vehicleList[0].name}</h1>
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-3'>
            <img src={vehicleList[1].image} alt='quad' />
            <h1 className='gridh1'>{vehicleList[1].name}</h1>
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-3'>
            <img src={vehicleList[2].image} alt='quad' />
            <h1 className='gridh1'>{vehicleList[2].name}</h1>
          </div>
          <div className='col-start-3 col-end-4 row-start-3 row-end-5'>
            <img className='' src={vehicleList[3].image} alt='quad' />
            <h1 className='gridh1'>{vehicleList[3].name}</h1>
          </div>
          <div className='col-start-4 col-end-5 row-start-3 row-end-5'>
            <img src={vehicleList[4].image} alt='quad' />
            <div>
              <h1 className='gridh1'>{vehicleList[4].name}</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured
