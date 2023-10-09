import Image from "next/image"
import Subscription from "./Subscription"

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <footer className='max-w-[1920px]'>
      <div className="foot">
        <div className="footT">
          <b className='text-orange-500 pr-2'>Quad</b>
          <p className='text-slate-700'>rental</p>
        </div>
        <div className="footB">
          <p className='text-gray-700 font-semibold py-3'>We offer a big range of vehicles for all your driving needs.</p>
          <div className="flex items-center">
            <Image width={30} height={30} src='/static/phone.png' alt='phone' />
            <h1 className="pl-2 font-bold">(123) - 456 - 789</h1>
          </div>
          <div className="flex items-center">
            <Image width={30} height={30} src='/static/email.png' alt='email' />
            <h1 className='pl-2 font-bold'>info@quad-rental.com</h1>
          </div>
        </div>
      </div>

      <div className="foot">
        <div className="footT">COMPANY</div>
        <div className="footB text-gray-700">
          <h1>
            Borrego Springs
          </h1>
          <h1>
            Careers
          </h1>
          <h1>
            Mobile
          </h1>
          <h1>
            Blog
          </h1>
          <h1>
            How we work
          </h1>
        </div>
      </div>

      <div className="foot">
        <div className="footT">WORKING HOURS</div>
        <div className="footB text-gray-700">
          <h1>Mon - Fri: 8:00AM - 10:00PM</h1>
          <h1>Sat: 10:00AM - 6:00PM</h1>
          <h1>Sun: Closed</h1>
        </div>
      </div>

      <div className="foot">
        <div className="footT">SUBSCRIPTION</div>
        <div className="footB">
          <h1>Subscribe your Email address for latest news & updates.</h1>
          <Subscription />
      </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
