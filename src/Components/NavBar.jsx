import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (

    <>
    <section className='flex mt-2 mx-2 inter-200 text-[12px]'>
      <div className='w-full rounded-xl flex gap-4 justify-center py-4 text-white/60 bg-white/10'>
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