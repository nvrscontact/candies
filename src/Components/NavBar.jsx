import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../assets/hamburger_right.svg'
import MoreLeft from '../assets/more_left.svg'
import Person from '../assets/person.jpg'
import Moreinfo from '../assets/moreinfo.svg'
import bagWhite from '../assets/bagWhite.svg'
import bellWhite from '../assets/bellWhite.svg'


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

    <header className='bg-[#1a1411] flex justify-between items-center py-[10px] px-5'>

      <div className='flex gap-4 items-center pr-4'>
        <details className='relative'>
          <summary className='list-none' ><img src={Moreinfo} alt="" className='h-[14px] ' /></summary>
          <p className='absolute'>que ocurre</p>
        </details>
        <section className='flex gap-1 items-center relative'>
          <img src={bagWhite} alt="" className='h-4' />
          <span className='text-white/60 absolute border-b border-white/40 ml-6'>26</span>
        </section>
      </div>

      <div className='flex flex-col items-center inter-300'>
        <h1 className='text-white/70 text-[18px] '>Candies Center</h1>
        <span className='text-white/40 text-[9px]'>Alacant - Barcelona - Madrid</span>
      </div>
      
      <div className='flex gap-4 items-center'>
        <img src={bellWhite} alt="" className='h-5' />
        <img src={Person} alt="" className='h-[28px] rounded-2xl' />
      </div>


    </header>
    </>
  )
}

export default NavBar