'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);

  const router = usePathname()
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <div className="absolute z-10 top-0 left-0 h-[7vh] max-h-12 w-full flex justify-center items-center">
        <div id='nav' className='header'>
          <Link href='/' className="headerLeft">
            <img src='/static/quadW.png' alt='logo' />
            <div className="headerLeftR">
              <h1 className='text-orange-500 pr-2'>Quad</h1>
              <h2>rental</h2>
            </div>
          </Link>

          <div className="headerRight md:w-[50%] xl:w-[35%]">
            <Link href='/' className={ router === '/' ? 'active' : 'not-active'}>
              Home
            </Link>
            
            <Link href='/about' className={ router === '/about' ? 'active' : 'not-active'}>
              About
            </Link>

            <Link href='/quads' className={ router === '/quads' ? 'active' : 'not-active'}>
              Quads
            </Link>

            <Link href='/contact' className={ router === '/contact' ? 'active' : 'not-active'}>
              Contact
            </Link>
          </div>
          <img
            onClick={()=> setMenu(prev => true)}
            src='/static/menuW.png' alt='menu'
            className='h-[40%] w-auto md:hidden cursor-pointer'
          />
        </div>
      </div>

      <div className={`menu z-20 ${menu ? 'left-0 opacity-100' : 'opacity-0 left-[-100vw]'}`}>
          <div className="menuTop">
            <p onClick={()=> setMenu(false)}
            className='duration-300 absolute top-0 right-[4%]
          hover:text-orange-500 cursor-pointer'
            >×</p>
          </div>
          <div className="menuMiddle">
            <Link
              onClick={()=> setMenu(false)}
              href='/'
              className={ router === '/' ? 'active' : 'not-active'}
            >
              Home
            </Link>
            
            <Link onClick={()=> setMenu(false)} href='/about' className={ router === '/about' ? 'active' : 'not-active'}>
              About
            </Link>

            <Link onClick={()=> setMenu(false)} href='/quads'
              className={ router === '/quads' ? 'active' : 'not-active'}
            >
              Quads
            </Link>

            <Link onClick={()=> setMenu(false)} href='/contact'
            className={ router === '/contact' ? 'active' : 'not-active'}
            >
              Contact
            </Link>
          </div>
          <div className="menuBottom"></div>
        </div>

      <div className={`h-[7vh] w-full max-h-12 shadow-xl fixed top-0
      left-0 duration-300 bg-orange-500 z-10 flex justify-center items-center
        ${scrollPosition < 100 ?  'translate-y-[-15vh]' : 'translate-y-0'}
        `}>
      <div className='header'>
        <Link href='/' className="headerLeft">
          <img src='/static/quadW.png' alt='logo' />
          <div className="headerLeftR">
            <h1 className='pr-2 text-slate-700'>Quad</h1>
            <h2>rental</h2>
          </div>
        </Link>

        <div className="headerRightOrange sm:w-[50%] lg:w-[35%]">
          <Link href='/' className={ router === '/' ? 'activeS' : 'not-active'}>
            Home
          </Link>
          
          <Link href='/about' className={ router === '/about' ? 'activeS' : 'not-active'}>
            About
          </Link>

          <Link href='/quads' className={ router === '/quads' ? 'activeS' : 'not-active'}>
            Quads
          </Link>

          <Link href='/contact' className={ router === '/contact' ? 'activeS' : 'not-active'}>
            Contact
          </Link>
        </div>
        <img
          onClick={()=> setMenu(prev => true)}
          src='/static/menuW.png' alt='menu'
          className='h-[40%] w-auto md:hidden cursor-pointer'
        />
      </div>
      </div>

      <div onClick={()=> window.scrollTo(0,0)} className={`z-10 up ${scrollPosition > 300 ? 'visible' : 'hidden'} `}>
        <img src='/static/up.png' alt='up' />
      </div>
    </>
  )
}

export default Navbar
