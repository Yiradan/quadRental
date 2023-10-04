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

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [number, setNumber] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const ref = useRef<null | HTMLFormElement>(null)

  const [finalisation, setFinalization] = useState(false)
  const [error, setError] = useState(false)

  let vehUrl
  let vehName

  for(let i = 0; i<vehicleList.length; i++){
    if(vehicleList[i].id == parseInt(vehicle)){
      vehUrl = vehicleList[i].image
      vehName = vehicleList[i].name
    }
      
  }
  
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
            <img src='/static/quad.png' alt='atv' />
            Vehicle
          </h1>
        <select
          required
          id='vehicle'
          onChange={e =>  setVehicle(e.target.value)}
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
          <div onClick={()=> setFinalization(false)} className="backdrop"></div>
          
          <div className="finalisation">
            
            <div className="finalisationT">
              <h1>COMPLETE YOUR RESERVATION</h1>
              <h1 onClick={()=> setFinalization(prev => false)}
              className='text-[5vh] font-extralight'>×</h1>
            </div>

            <div className="finalisationM">

              <div className="finalisationML">

                <h1 className='text-slate-700 my-[30px]'>Location & Date</h1>

                <label className='flex flex-col'>
                  <div className='flex flex-row items-center'>
                    <img src='/static/calendar.png' />
                    <h2>Pick-up Date & Time</h2>
                  </div>
                  <p>{pDate} / {pTime}</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex items-center'>
                    <img src='/static/calendar.png' />
                    <h2>Drop-off Date</h2>
                  </div>
                  <p>{dDate} / before 10 PM</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex items-center'>
                    <img src='/static/map.png' />
                    <h2>Pick-up location</h2>
                  </div>
                  <p>{location}</p>
                </label>

                <label className='flex flex-col'>
                  <div className='flex items-center'>
                    <img src='/static/map.png' />
                    <h2>Drop-off location</h2>
                  </div>
                  <p>{location}</p>
                </label>
              </div>

              <div className="finalisationMR">
                <h1 className='h-[20%]'>Vehicle - <h1 className="text-orange-500">{vehName}</h1></h1>
                <img className='h-full w-auto p-10' alt='car' src={vehUrl} />
              </div>
            </div>
            <div className="finalisationB flex-col flex my-[3vh]">
              <div className="text-xl text-orange-500 font-bold">
                PERSONAL INFORMATION
              </div>

              <div>

                <div className='sm:grid sm:grid-cols-2 sm:grid-flow-row flex flex-col
                my-[3vh] sm:gap-5 sm:place-content-center'>
                  <label htmlFor="fName"><h1>First Name</h1>
                  <input
                    required
                    id='fName'
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    placeholder='Enter your first name'
                    />
                  </label>

                  <label htmlFor="lName"><h1>Last Name</h1>
                  <input
                    required
                    id='lName'
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    placeholder="Enter your last name"
                    />
                  </label>

                  <label htmlFor="number"><h1>Phone number</h1>
                  <input
                    required
                    id='number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Enter your phone number'
                    />
                  </label>

                  <label htmlFor="age"><h1>Age</h1>
                  <input
                    required
                    id='age'
                    type='number'
                    min={18}
                    value={age || 18}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Enter your age'
                    />
                  </label>
                </div>

                <label htmlFor="email"><h1>E-mail</h1>
                  <input
                    required
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your e-mail address'
                    />
                  </label>

                  <label htmlFor="address"><h1>Address</h1>
                  <input
                    required
                    id='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Enter your address'
                    />
                  </label>

                    <div className='sm:grid sm:grid-cols-2 sm:grid-flow-row flex flex-col
                my-[3vh] sm:gap-5 sm:place-content-center'>
                    <label htmlFor="city"><h1>City</h1>
                    <input
                      required
                      id='city'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder='Enter your city'
                      />
                    </label>

                    <label htmlFor="zip"><h1>Zip code</h1>
                  <input
                    required
                    id='zip'
                    type='number'
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder='Enter your zip code'
                    />
                  </label>
                  </div>

              </div>
              <button type='submit' className='w-auto bg-orange-500
                text-xl my-[3vh] p-2 font-bold text-white hover:shadow-orange-500
                hover:shadow-2xl duration-300 hover:bg-slate-700'>
              Place reservation</button>
            </div>
            
          </div>
          </>
        }
    </form>
  )
}

export default Rental
