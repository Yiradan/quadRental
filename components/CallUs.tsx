import Image from "next/image"

const CallUs = () => {
  return (
    <div className='w-full h-auto'>
      <div className="relative h-auto min-h-[20vh] bg-slate-700 shadow-xl
      shadow-black/50 flex">
        <Image
          src='/static/callUs.jpeg'
          alt='callUs'
          fill
          className='absolute opacity-40 object-cover'
        />
        <div className="text-center py-8 md:py-16 flex flex-col xl:flex-row
        justify-evenly items-center w-full">
          <h1 className='text-[3vh] md:p-0 p-5 md:text-[6vh] text-white z-[1] font-bold'>Book a quad by getting in touch with us</h1>
          <h1 className='text-[3vh] md:text-[6vh] flex text-orange-500 z-[1] font-bold items-center'>
            <img className='pr-3 h-[3vh] md:h-[6vh] w-auto' src='/static/phoneOrange.png' alt='phone' />
            (123) - 456 - 789</h1>
        </div>
      </div>
    </div>
  )
}

export default CallUs
