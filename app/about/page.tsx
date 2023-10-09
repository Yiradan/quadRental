import About from '@/components/About'
import CallUs from '@/components/CallUs'
import CoverImage from '@/components/CoverImage'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='about-page w-full h-auto'>
      <CoverImage
        title='About'
      />

      <div className="ourCompany">
          <div className="ocB relative">
          <Image width={500} height={500} src='/static/company.png' alt='company' className='md:w-1/2 w-full h-auto object-cover' />
          <div className="ocR py-16 md:p-0">
            <h2 className='text-[4vh] font-semibold text-gray-800'>About the company</h2>
            <h1 className='text-[6vh] py-5 font-bold'>You start the engine, and the adventure begins</h1>
            <p className='text-[3vh] text-gray-600 text-justify font-light'>Our company aims to provide everyone an unforgettable experience through the vehicles we offer. 
            We have to embrace life&apos;s possibilities,  and the only way to do that is to live our days to the fullest. We believe that every day is another gift to prove that living an action-packed life is essential.</p>
          </div>
        </div>
      </div>

      <div className="ourTeam">

        <div className="py-10 text-[4rem] md:text-[8rem] font-bold">
          Our team
        </div>

        <div className="flex flex-col md:grid sm:grid-cols-2
        lg:grid-cols-3 w-4/5 sm:3/5 h-auto md:gap-10 py-10 md:place-content-between">

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/1.jpg' alt='member' />
          <div className="cardB">
            <h1>Oskar Costantino</h1>
            <h2>Mechanic</h2>
          </div>
        </div>

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/2.jpg' alt='member' />
          <div className="cardB">
            <h1>Johnson Elishua</h1>
            <h2>Vehicle detailist</h2>
          </div>
        </div>

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/3.jpg' alt='member' />
          <div className="cardB">
            <h1>Nicole Lillie</h1>
            <h2>Photographer</h2>
          </div>
        </div>

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/4.jpg' alt='member' />
          <div className="cardB">
            <h1>Sydne Dallas</h1>
            <h2>Receptionist</h2>
          </div>
        </div>

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/5.jpg' alt='member' />
          <div className="cardB">
            <h1>Reagan Johnie</h1>
            <h2>Business owner</h2>
          </div>
        </div>

        <div className="card">
          <Image
            width={300}
            height={400}
            src='/static/ourTeam/6.jpg' alt='member' />
          <div className="cardB">
            <h1>Ciara Keeley</h1>
            <h2>Manager</h2>
          </div>
        </div>
        
        </div>

      </div>
      <About />
      <CallUs />
    </div>
  )
}

export default AboutPage
