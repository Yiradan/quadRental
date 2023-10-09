import Image from "next/image"

const Best = () => {
  return (
    <div className="w-full flex justify-center bg-white shadow-black shadow-2xl py-[6rem]">
      <div className='max-w-[1920px] best'>
      <div className="bestT flex-col">
        <div className="flex">Riding a<h1 className="text-orange-500 pl-[1rem]">beast</h1></div>
        <p className='text-2xl my-3 text-gray-400'>Choosing the right one</p>
      </div>
      <div className="bestB">
        <div className="bestBCh mb-[5vh] lg:m-0 lg:border-r-2 border-slate-400">
          <Image width={200} height={200} src='/static/best1.png' alt='utility' />
          <h1>Utility ATV</h1>
          <p>Not as powerful as a sport ATV, the utility ATV is strong enough to get you through some rough landscape.</p>
        </div>
        <div className="bestBCh">
          <Image width={200} height={200} alt='sport' src='/static/best2.png' />
          <h1>Sport ATV</h1>
          <p>Sport ATVs are just right for roaming trails, climbing up and down mountainsides, and simply having fun.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Best
