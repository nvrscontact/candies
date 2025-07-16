import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (

    <>
    <section className='flex gap-4 inter-200 text-[12px] w-full items-center justify-center mt-6 text-white/60 '>
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>About Us</Link>
      <Link to='/aboutme'>Gallery</Link>
      <Link to='/aboutme'>Store</Link>
      <Link to='/aboutme'>Carreers</Link>
    </section>
    </>
  )
}

export default NavBar