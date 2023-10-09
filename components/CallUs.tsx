import Image from "next/image"

const CallUs = () => {
  return (
    <div className='w-full h-auto'>
      <div className="relative h-auto bg-slate-700 shadow-xl
      shadow-black/50 flex">
        <Image
          src='/static/callUs.jpeg'
          alt='callUs'
          fill
          className='absolute opacity-40 object-cover'
        />
        <div className="text-center py-8 xl:py-16 flex flex-col
        justify-evenly items-center w-full">
          <h1 className='text-4xl xl:p-0 p-5 xl:text-6xl text-white z-[1] font-bold'>Book a quad by getting in touch with us</h1>
          <h1 className='text-4xl xl:text-6xl my-6 flex text-orange-500 z-[1] font-bold items-center'>
            <Image width={50} height={50} className='pr-3 h-9 md:h-16 w-auto' src='/static/phoneOrange.png' alt='phone' />
            (123) - 456 - 789</h1>
        </div>
      </div>
    </div>
  )
}

export default CallUs
