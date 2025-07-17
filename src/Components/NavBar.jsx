import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../assets/hamburger_menu.svg'

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
   {/*  <section className='flex mt-1 inter-200 text-[12px] bg-black/20 mx-1'>
      <div className='w-full rounded-b-xl flex gap-4 justify-center py-4 text-white/60'>
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>About Us</Link>
      <Link to='/aboutme'>Gallery</Link>
      <Link to='/aboutme'>Store</Link>
      <Link to='/aboutme'>Carreers</Link>
      </div>
    </section> */}

    <section className='border-b border-white/10 '>

      <button onClick={toggleMenu} className='py-3 pl-4' > <img src={HamburgerMenu} alt="" className='h-6' />
        <div ref={menuRef} className='absolute'>
          <ul className=' inter-200 text-[12px] bg-white/10 backdrop-blur-xl flex flex-col gap-[2px] text-start border-[2px] border-[#241603] rounded-xl p-1 ml-2 mt-2'>
              <span className='bg-black/50 py-1 px-2 rounded-t-md'><Link to='/'>About us</Link></span>
              <span className='bg-black/50 py-1 px-2 '><Link to='/'>Gallery</Link></span>
              <span className='bg-black/50 py-1 px-2 '><Link to='/'>About us</Link></span>
              <span className='bg-black/50 py-1 px-2 rounded-b-md'><Link to='/'>Home</Link></span>
          </ul>
        </div>
      </button>
    </section>
    </>
  )
}

export default NavBar