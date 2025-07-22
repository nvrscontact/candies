import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../assets/hamburger_right.svg'
import User from '../assets/user.jpg'


function NavBar() {

  const menuRef = useRef();

  const toggleMenu = () => {
    const menu = menuRef.current;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  const closeMenu = () => {
    menuRef.current.style.display = 'none';
  }

  return (

    <>

    <section className=' bg-black/70 flex justify-between py-4 '>

      <div className='flex flex-col pl-6'>
        <h1 className='text-white/70 text-[18px] '>Candies Center<span className='align-top text-[12px] ' >®</span></h1>
        <span className='text-[9px] mt-[-2px] text-white/40 '>Alacant, Barcelona, Madrid</span>
      </div>
      <div className='flex items-center gap-3'>

      <section>
        <img src={User} alt="" className='h-[28px] rounded-2xl' />
      </section>
      <button onClick={toggleMenu} className='pr-3'> <img src={HamburgerMenu} alt="" className='h-8' />
        <div ref={menuRef} className='hidden absolute right-3'>
          <ul className=' inter-200 text-[16px] bg-black/40 backdrop-blur-xl flex flex-col gap-1 text-start pr-1 pl-2 py-2'>
              <span className=' py-1 px-2 '><Link to='/'>Gallery</Link></span>
              <span className=' py-1 px-2 '><Link to='/'>About us</Link></span>
              <span className=' py-1 px-2'><Link to='/'>Home</Link></span>
          </ul>
        </div>
      </button>
      </div>


    </section>
    </>
  )
}

export default NavBar