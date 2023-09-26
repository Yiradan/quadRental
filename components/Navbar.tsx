'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  
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
      <div id='nav' className='header absolute left-0 top-0 bg-transparent '>
        <Link href='/' className="headerLeft">
          <img src='/static/quadW.png' alt='logo' />
          <div className="headerLeftR">
            <i>Quad</i>
            <h2>rental</h2>
          </div>
        </Link>

        <div className="headerRight sm:w-[50%] lg:w-[35%]">
          <Link href='/'>
            Home
          </Link>
          
          <Link href='/about'>
            About
          </Link>

          <Link href='/quads'>
            Quads
          </Link>

          <Link href='/contact'>
            Contact
          </Link>
        </div>
        <img
          onClick={()=> setMenu(prev => true)}
          src='/static/menuW.png' alt='menu'
          className='h-[40%] w-auto md:hidden cursor-pointer'
        />
        <div className={`menu ${menu ? 'left-0 opacity-100' : 'opacity-0 left-[-100vw]'}`}>
          <div onClick={()=> setMenu(false)} className="menuTop">
            ×
          </div>
          <div className="menuMiddle">
            <Link href='/'>
              Home
            </Link>
            
            <Link href='/about'>
              About
            </Link>

            <Link href='/quads'>
              Quads
            </Link>

            <Link href='/contact'>
              Contact
            </Link>
          </div>
          <div className="menuBottom"></div>
        </div>
      </div>

      <div className={`
        header fixed top-0 left-0 duration-300 bg-slate-700 z-10
        ${scrollPosition < 100 ?  'translate-y-[-10vh]' : 'translate-y-0'}
        `}>
        <Link href='/' className="headerLeft">
          <img src='/static/quadW.png' alt='logo' />
          <div className="headerLeftR">
            <i>Quad</i>
            <h2>rental</h2>
          </div>
        </Link>

        <div className="headerRight sm:w-[50%] lg:w-[35%]">
          <Link href='/'>
            Home
          </Link>
          
          <Link href='/about'>
            About
          </Link>

          <Link href='/quads'>
            Quads
          </Link>

          <Link href='/contact'>
            Contact
          </Link>
        </div>
        <img
          onClick={()=> setMenu(prev => true)}
          src='/static/menuW.png' alt='menu'
          className='h-[40%] w-auto md:hidden cursor-pointer'
        />
      </div>
      <div onClick={()=> window.scrollTo(0,0)} className={`z-10 up ${scrollPosition > 300 ? 'visible' : 'hidden'} `}>
        <img src='/static/up.png' alt='up' />
      </div>
    </>
  )
}

export default Navbar
