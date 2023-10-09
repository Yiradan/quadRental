import Link from "next/link"
import { vehicleList } from "./data"

const Featured: React.FC = () => {
  return (
    <div className="bg-gray-300 h-auto w-full p-[5vh] py-[6rem] flex justify-center">
      <div className="px-[5%] flex flex-col items-center max-w-[1920px]">
      <div className="w-full flex flex-col md:flex-row md:items-center font-bold md:justify-between text-[5vh]">
        <h1 className="flex text-2xl md:text-4xl lg:text-6xl">Featured rent <p className="pl-2 text-orange-500">Quads</p></h1>
        <Link className='md:inline hidden' href="/quads">
          <button className='bg-orange-500 mt-[2vh] md:m-0 hover:bg-slate-700  duration-300 text-white text-2xl shadow p-3 rounded-md'>View All Quads</button>
        </Link>
      </div>

        <div className='fm mt-10 w-full flex flex-col lg:justify-center
        lg:items-center'>
          <Link href='/quads'>
            <img className='h-full' src={vehicleList[0].image} alt='quad' />
            <div className="h1Div sm:text-[2rem] text-[15px]">
              <div className="">
                <img src='/static/quadW.png' alt='quad' />
                <p>{vehicleList[0].name}</p>
              </div>
              <div className="">
                <img src='/static/engine.png' alt='engine' />
                <p>{vehicleList[0].power} hp</p>
              </div>
              <div className="">
                <img src='/static/fuel.png' alt='fuel' />
                <p>{vehicleList[0].fuel}</p>
              </div>
              <div className="">
                <img src='/static/tank.png' alt='gasoline' />
                <p>{vehicleList[0].tank} l</p>
              </div>
              <div className="">
                  <img src='/static/price.png' alt='price' />
                  <p>$ {vehicleList[0].price} / day</p>
                </div>
            </div>
          </Link>
          <div className="vehicleGrid lg:m-0 my-5 flex flex-col sm:grid">

            <Link href='/quads' className="col-start-1 col-end-3 row-start-1 row-end-3">
              <img src={vehicleList[1].image} alt="quad" />
              <div className="h1Div">
                <div className="">
                  <img src='/static/quadW.png' alt='quad' />
                  <p>{vehicleList[1].name}</p>
                </div>
                <div className="">
                  <img src='/static/engine.png' alt='engine' />
                  <p>{vehicleList[1].power} hp</p>
                </div>
                <div className="">
                  <img src='/static/fuel.png' alt='fuel' />
                  <p>{vehicleList[1].fuel}</p>
                </div>
                <div className="">
                  <img src='/static/tank.png' alt='gasoline' />
                  <p>{vehicleList[1].tank} l</p>
                </div>
                <div className="">
                  <img src='/static/price.png' alt='price' />
                  <p>$ {vehicleList[1].price} / day</p>
                </div>
              </div>
            </Link>

            <Link href='/quads' className="col-start-3 col-end-5 row-start-1 row-end-3">
            <img src={vehicleList[2].image} alt="quad" />
              <div className="h1Div">
              <div className="">
                  <img src='/static/quadW.png' alt='quad' />
                  <p>{vehicleList[2].name}</p>
                </div>
                <div className="">
                  <img src='/static/engine.png' alt='engine' />
                  <p>{vehicleList[2].power} hp</p>
                </div>
                <div className="">
                  <img src='/static/fuel.png' alt='fuel' />
                  <p>{vehicleList[2].fuel}</p>
                </div>
                <div className="">
                  <img src='/static/tank.png' alt='gasoline' />
                  <p>{vehicleList[2].tank} l</p>
                </div>
                <div className="">
                  <img src='/static/price.png' alt='price' />
                  <p>$ {vehicleList[2].price} / day</p>
                </div>
              </div>
            </Link>

            <Link href='/quads' className="col-start-1 col-end-3 row-start-3 row-end-5">
            <img src={vehicleList[3].image} alt="quad" />
              <div className="h1Div">
              <div className="">
                  <img src='/static/quadW.png' alt='quad' />
                  <p>{vehicleList[3].name}</p>
                </div>
                <div className="">
                  <img src='/static/engine.png' alt='engine' />
                  <p>{vehicleList[3].power} hp</p>
                </div>
                <div className="">
                  <img src='/static/fuel.png' alt='fuel' />
                  <p>{vehicleList[3].fuel}</p>
                </div>
                <div className="">
                  <img src='/static/tank.png' alt='gasoline' />
                  <p>{vehicleList[3].tank} l</p>
                </div>
                <div className="">
                  <img src='/static/price.png' alt='price' />
                  <p>$ {vehicleList[3].price} / day</p>
                </div>
              </div>
            </Link>

            <Link href='/quads' className="col-start-3 col-end-5 row-start-3 row-end-5">
            <img src={vehicleList[4].image} alt="quad" />
              <div className="h1Div">
              <div className="">
                  <img src='/static/quadW.png' alt='quad' />
                  <p>{vehicleList[4].name}</p>
                </div>
                <div className="">
                  <img src='/static/engine.png' alt='engine' />
                  <p>{vehicleList[4].power} hp</p>
                </div>
                <div className="">
                  <img src='/static/fuel.png' alt='fuel' />
                  <p>{vehicleList[4].fuel}</p>
                </div>
                <div className="">
                  <img src='/static/tank.png' alt='gasoline' />
                  <p>{vehicleList[4].tank} l</p>
                </div>
                <div className="">
                  <img src='/static/price.png' alt='price' />
                  <p>$ {vehicleList[4].price} / day</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Featured
