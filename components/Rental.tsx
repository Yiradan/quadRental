'use client';
import { vehicleListProps } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { vehicleList } from "./data";

const Rental = () => {

  const route = useRouter()

  const [pDate, setPDate] = useState('')
  const [pTime, setPTime] = useState('')
  const [dDate, setDDate] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [location, setLocation] = useState('')

  const ref = useRef<null | HTMLFormElement>(null)

  const [finalisation, setFinalization] = useState(false)
  const [error, setError] = useState(false)
  
  const check = (e:FormEvent) => {
    e.preventDefault()
    if(pDate && pTime && dDate && vehicle && location){
      setFinalization(prev => true)
      setError(prev => false)
    }
    else{
      setError(prev => true)
      ref.current?.scrollIntoView()
    }
  }

  return (
    <form ref={ref} className='rental'>
      <div className="rentalT">
        Book a quad
        <div className={`${error ? 'visible' : 'hidden'}
          mt-3 flex items-center justify-between w-[90%] h-auto
          bg-red-200 rounded-md p-1
          `}>
          <p className='pl-2 text-[17px] font-semibold text-red-900'>
            All fields required!
          </p>
          <h1
            onClick={()=> setError(prev => false)}
            className="pr-2 text-[35px] font-normal text-red-900 cursor-pointer"
          >×</h1>
        </div>
      </div>
      <div className="rentalM">

        <label htmlFor="pickup">
          <h1>
            <img src='/static/calendar.png' alt='map' />
            Pick-up date</h1>
          <input
            required
            id='pickup'
            min={new Date().toJSON().slice(0, 10)}
            type='date'
            placeholder='Pick-up date'
            onChange={e => setPDate(e.target.value)}
          />
        </label>

        <label htmlFor="pickupTime">
          <h1>
            <img src='/static/clock.png' alt='clock' />
            Pick-up time
          </h1>
          <input
            required
            type='time'
            id='pickupTime'
            onChange={e => setPTime(e.target.value)}
          />
        </label>

        <label htmlFor="dropoff">
          <h1>
            <img src='/static/calendar.png' alt='map' />
            Drop-off date
          </h1>
          <input
            required
            id='dropoff'
            min={new Date().toJSON().slice(0, 10)}
            type='date' placeholder='Drop-off date'
            onChange={e => setDDate(e.target.value)}
          />
        </label>
        
        <label htmlFor="vehicle">
          <h1>
            <img src='/static/atv.png' alt='atv' />
            Vehicle
          </h1>
        <select
          required
          id='vehicle'
          onChange={e => setVehicle(e.target.value)}
        >
          <option value=''>Select vehicle</option>
          {vehicleList.map((vehicle:vehicleListProps) => {
            return <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
          })}
        </select></label>
        
        <label htmlFor="location">
          <h1>
            <img src='/static/map.png' alt="map" />
            Location
          </h1>
        <select
          required
          id='location'
          onChange={e => setLocation(e.target.value)}
        >
          <option value=''>Select rent location</option>
          <option value='Island Park' >Island Park, Idaho</option>
          <option value='Borrego Springs'>Borrego Springs, CA</option>
          <option value='Cody'>Cody, WY</option>
          <option value='Marysvale'>Marysvale, UT</option>
        </select></label>
        
        <button onClick={check}>Find your Quad</button>

      </div>

      {
          finalisation &&
          <>
          <div className="backdrop"></div>
          
          <div className="finalisation">
            
            <div className="finalisationT">
              <h1>COMPLETE YOUR RESERVATION</h1>
              <h1 onClick={()=> setFinalization(prev => false)}>×</h1>
            </div>

            <div className="finalisationM">

              <div className="finalisationML">

                <label className='flex flex-col'>
                  <div className='flex'>
                    <img src='/static/calendar.png' />
                    <h2>Pick-up Date & Time</h2>
                  </div>
                  <p>{pDate} / {pTime}</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex'>
                    <img src='/static/calendar.png' />
                    <h2>Drop-off Date</h2>
                  </div>
                  <p>{dDate} / before 10 PM</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex'>
                    <img src='/static/map.png' />
                    <h2>Pick-up location</h2>
                  </div>
                  <p>{location}</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex'>
                    <img src='/static/map.png' />
                    <h2>Drop-off location</h2>
                  </div>
                  <p>{location}</p>
                </label>
              </div>

              <div className="finalisationMR">

              </div>

            </div>

          </div>
          </>
        }
    </form>
  )
}

export default Rental
