
const Mobile = () => {
  return (
    <div className='mobile p-[10vh]'>
      <div className="mobileL">
        <h3 className='text-2xl font-semibold'>Get our mobile app for easy and convenient usage</h3>
        <h1 className='text-5xl py-2 font-bold'>Download our application</h1>
        <div className="flex flex-col items-center my-10 md:flex-row md:justify-evenly mt-5">
          <button className="store">
            <img src='/static/google.png' alt='gplay'/>
            <div className="storeR flex flex-col">
              <h5 className='text-lg'>Get in</h5>
              <h3 className='text-xl font-bold'>Google play</h3>
            </div>
          </button>
          <button className="store">
            <img src='/static/apple.png' alt='pstore' />
            <div className="storeR flex flex-col">
              <h5 className='text-xl'>Get in</h5>
              <h3 className='text-lg font-bold'>Play store</h3>
            </div>
          </button>
        </div>
      </div>

      <div className="mobileR">
        <img src='/static/ad.png' alt='mobile ad' />
      </div>
    </div>
  )
}

export default Mobile