import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (

    <>
    <section className='flex mx-2 inter-200 text-[12px]'>
      <div className='w-full rounded-b-xl flex gap-4 justify-center pt-5 pb-4 text-white/60 bg-white/10'>
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>About Us</Link>
      <Link to='/aboutme'>Gallery</Link>
      <Link to='/aboutme'>Store</Link>
      <Link to='/aboutme'>Carreers</Link>
      </div>
    </section>
    </>
  )
}

export default NavBar