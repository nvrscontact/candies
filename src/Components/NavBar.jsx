import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../assets/hamburger_right.svg'
import arrow_down from '../assets/arrow_down.svg'
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

    <header className='bg-[#1a1411] relative flex justify-between items-center py-[10px] px-5 text-white/70'>

      {/* NavBar */}
      <nav className='flex gap-4 items-center pr-4'>
        <details className=''>
          <summary className='list-none' >
            <section className='flex items-center relative'>
              <img src={Person} alt="" className='h-[28px] rounded-2xl border border-white/60'/>
              <img src={Moreinfo} alt="" className='h-[14px] absolute left-9' />
            </section>
          </summary>
          <div className='absolute left-0 top-15 bg-black/50 backdrop-blur-md w-full z-2 border-b border-white/20'>
            <ul className='flex flex-col gap-1 text-[14px] p-4 inter-200 '>
                <li className='p-3' ><Link to='/store' className='flex justify-between items-center'>Store <img src={arrow_down} alt="" className='h-4' /></Link></li>
                <li className='p-3'><Link to='/promotions' className='flex justify-between items-center'>Promotions <img src={arrow_down} alt="" className='h-4' /></Link></li>
                <li className='p-3'><Link to='/about-us#franchises' className='flex justify-between items-center'>Ubications <img src={arrow_down} alt="" className='h-4' /></Link></li>
                <li className='p-3'><Link to='/about-us' className='flex justify-between items-center'> About Us <img src={arrow_down} alt="" className='h-4' /></Link></li>
                <li className='p-3'><Link to='/' className='flex justify-between items-center'>Home <img src={arrow_down} alt="" className='h-4' /> </Link> </li>
            </ul>
            
            <div className='py-2 px-6 text-center'>
              <button className='bg-white/20 py-2 my-1 px-8 w-full'><Link to='/register'>Register</Link></button>
                <span className='text-[12px] inter-200'>Already have an account? <Link to='/login' className='inter-400'>Log In</Link> </span>
            </div>

          </div>
        </details>
      </nav>

      <div className='flex flex-col items-center inter-300 '>
        <h1 className='text-white/70 text-[18px] '>Candy Center</h1>
        <span className='text-white/40 text-[9px] mt-[-2px] '>Alacant - Barcelona - Madrid</span>
      </div>
      
      <div className='flex gap-4 items-center pl-6'>
        <section className='flex gap-3 relative'>
          <span className='text-white/60 absolute right-6 text-[12px] inter-200 '>2</span>
          <img src={bagWhite} alt="" className='h-4' />
        </section>
      </div>


    </header>
    </>
  )
}

export default NavBar