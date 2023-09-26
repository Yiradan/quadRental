
const Best = () => {
  return (
    <div className='best shadow-black shadow-2xl'>
      <div className="bestT flex-col">
        <div className="flex">Riding a <h1 className="text-orange-500">beast</h1></div>
        <p className='text-2xl my-3 text-gray-400'>Choosing the right one</p>
      </div>
      <div className="bestB">
        <div className="bestBCh mb-[5vh] lg:m-0 lg:border-r-2 border-slate-400">
          <img src='https://powersports.honda.com/-/media/products/segment/atv/atv-assets/fourtrax-foreman-rubicon-4x4-750x750.jpg' alt='utility' />
          <h1>Utility ATV</h1>
          <p>Not as powerful as a sport ATV, the utility ATV is strong enough to get you through some rough landscape.</p>
        </div>
        <div className="bestBCh">
          <img alt='sport' src='https://www.motoboom.ro/image/cache/catalog/0_motoboom/2023/CAN-AM/ATV/Renegade%201000R%20XXC/ATV-MY23-Can-Am-Renegade-XXC-1000R-Catalyst-Gray-Neo-Yellow-0005VPD00_2-650x1.jpg' />
          <h1>Sport ATV</h1>
          <p>Sport ATVs are just right for roaming trails, climbing up and down mountainsides, and simply having fun.</p>
        </div>
      </div>
    </div>
  )
}

export default Best
