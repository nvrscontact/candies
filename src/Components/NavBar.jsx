import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../assets/hamburger_right.svg'

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

    <section className=' bg-black/70 flex justify-between py-3 '>

      <div className='flex flex-col pl-6'>
        <h1 className='text-white/70 text-[18px] '>Candies Center<span className='align-top text-[12px] ' >®</span></h1>
        <span className='text-[9px] mt-[-2px] text-white/40 '>Alacant, Barcelona, Madrid</span>
      </div>
      <div className='flex items-center gap-3'>

      <section>
        <span className='text-[12px] text-white/40 border border-white/20 rounded-md py-1 px-2'> Closed</span>
      </section>
      <button onClick={toggleMenu} className='pr-3'> <img src={HamburgerMenu} alt="" className='h-8' />
        <div ref={menuRef} className='hidden absolute right-3'>
          <ul className=' inter-200 text-[12px] bg-white/10 backdrop-blur-xl flex flex-col gap-[2px] text-start border-[2px] border-[#241603] rounded-xl p-1 ml-2 mt-2'>
              <span className='bg-black/50 py-1 px-2 rounded-t-md'><Link to='/'>About us</Link></span>
              <span className='bg-black/50 py-1 px-2 '><Link to='/'>Gallery</Link></span>
              <span className='bg-black/50 py-1 px-2 '><Link to='/'>About us</Link></span>
              <span className='bg-black/50 py-1 px-2 rounded-b-md'><Link to='/'>Home</Link></span>
          </ul>
        </div>
      </button>
      </div>


    </section>
    </>
  )
}

export default NavBar