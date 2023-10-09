import Image from 'next/image'
import React from 'react'

const About : React.FC = () => {
  return (
    <div className="w-full justify-center flex bg-white py-[4rem]">
      <div className='max-w-[1920px] flex flex-col items-center'>
      <div className='w-4/5 flex flex-col items-center justify-center py-10'>
        <h3 className='text-3xl font-semibold'>Plan your trip now</h3>
        <div className="my-5 text-3xl lg:text-6xl flex flex-col lg:flex-row
        font-bold justify-center">
          Quick & easy
          <div className="flex justify-center items-center">
            <h1 className='text-orange-500 px-3'>Quad</h1>
            <h1 className='text-slate-700'>rental</h1>
          </div>
        </div>
      </div>

      <div className="aboutM">
        <div className="aboutE">
          <div className="aImg">
            <Image width={60} height={60} src='/static/choice.png' alt='choice img' />
          </div>
          <h1 className='py-5 text-3xl font-bold'>Select vehicle</h1>
          <h3 className='text-slate-600 font-semibold text-xl'>
            We offers a big range of vehicles for all your driving needs.
          </h3>
        </div>

        <div className="aboutE">
          <div className="aImg">
            <Image width={60} height={60} src='/static/operator.png' alt='operator' />
          </div>
          <h1 className='py-5 text-3xl font-bold'>Contact operator</h1>
          <h3 className='text-slate-600 font-semibold text-xl'>
            Our knowledgeable and friendly operators are always ready to help with any questions or concerns
          </h3>
        </div>

        <div className="aboutE">
          <div className="aImg">
            <Image width={60} height={60} src='/static/quadW.png' alt='quad' />
          </div>
          <h1 className='py-5 text-3xl font-bold'>
            Let&apos;s drive
          </h1>
          <h3 className='text-slate-600 font-semibold text-xl'>
            Enjoy the speed and the wind while gliding through the enviorment
          </h3>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default About
