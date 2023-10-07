import CallUs from '@/components/CallUs'
import CoverImage from '@/components/CoverImage'

const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <CoverImage
        title='Contact'
      />
      <div className="w-full bg-white flex items-center flex-col py-[10vh]">
        <div className="w-[90%] md:w-4/5 items-center flex lg:flex-row flex-col max-w-[1920px] justify-between">
          <div className="flex flex-col w-full">
            <h1 className='font-bold text-4xl'>Need additional information?</h1>
            <p className='text-lg py-8 text-gray-500 text-justify font-normal'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
            <div className="flex flex-col">
              <div className="flex items-center">
                <img src='/static/phone.png' alt='phone' className='pr-3 h-5' />
                <h1 className='text-xl font-semibold'>(123) 456 - 789</h1>
              </div>

              <div className="flex items-center py-3">
                <img src='/static/email.png' alt='email' className='pr-3 h-5' />
                <h1 className='text-xl font-semibold'>info@quad-rental.com</h1>
              </div>

              <div className="flex items-center">
                <img src='/static/map.png' alt='map' className='pr-3 h-5' />
                <h1 className='text-xl font-semibold'>Borrego Springs, CA, USA</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col w-full ">
            {'<3'}
          </div>
        </div>
      </div>
      <CallUs />
    </div>
  )
}

export default Contact
