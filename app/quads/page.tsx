import CallUs from "@/components/CallUs"
import CoverImage from "@/components/CoverImage"
import { vehicleList } from "@/components/data"
import Image from "next/image"
import Link from "next/link"

const Quads = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <CoverImage title='Quads' />
      <div className='w-full flex justify-center py-[10vh] bg-white'>
        <div className="w-[90%] md:w-4/5 max-w-[1920px] items-center flex-col flex">
          <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleList.map((vehicle,id)=> {
              return (
                <div key={id} className="vehicleCard">
                  <div className="relative w-full h-[300px]">
                    <Image
                      fill
                      alt='vehicle'
                      style={{objectFit: 'contain',  background: 'white'}}
                      src={vehicle.image}
                    />
                    </div>
                    <div className="flex items-center w-full flex-col text-gray-500 font-semibold">
                      <div className="cardDetails">
                        <Image
                          width={30}
                          height={30}
                          src='/static/quadG.png'
                          className='pr-5 h-[1.5em] w-auto'
                          alt='quad'
                        />
                        <p className='text-[1rem]'>{vehicle.name}</p>
                      </div>

                      <div className="cardDetails">
                        <Image
                          width={30}
                          height={30}
                          src='/static/engineG.png'
                          className='pr-3 h-[1.5em] w-auto'
                          alt='engine'
                        />
                        <p className='text-[1rem]'>{vehicle.power} hp</p>
                      </div>

                      <div className="cardDetails">
                        <Image
                          width={30}
                          height={30}
                          src='/static/fuelG.png'
                          className='pr-3 h-[1.5em] w-auto'
                          alt='fuel'
                        />
                        <p className='text-[1rem]'>{vehicle.fuel}</p>
                      </div>

                      <div className="cardDetails">
                        <Image
                          width={30}
                          height={30}
                          src='/static/tankG.png'
                          className='pr-3 h-[1.5em] w-auto'
                          alt='tank'
                        />
                        <p className='text-[1rem]'>{vehicle.tank} l</p>
                      </div>

                      <div className="cardDetails">
                        <Image
                          width={30}
                          height={30}
                          src='/static/priceG.png'
                          className='pr-3 h-[1.5em] w-auto'
                          alt='price'
                        />
                        <p className='text-[1rem]'>${vehicle.price} / day</p>
                      </div>
                    </div>
                    <hr className='h-[2px] bg-gray-500 w-4/5 my-2'></hr>
                    <div className="w-full m-5 flex flex-row justify-center">
                      <Link className='w-4/5' href='/#rent '>
                      <button
                        className="w-full text-xl bg-orange-500 hover:bg-slate-700
                        duration-300 font-semibold p-3 rounded-md text-white"
                      >Book vehicle</button>
                      </Link>
                    </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <CallUs />
    </div>
  )
}

export default Quads
