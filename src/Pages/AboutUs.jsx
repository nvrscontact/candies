import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function AboutUs() {
    const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);


  return (
    <>
       <div className='flex flex-col items-center mx-auto mt-10 mb-5'>

      <section id='about-us' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>About Us</h1>
          <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
            <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          </p>
      </section>

      <section id='franchises' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>Franchises</h1>
            <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
          <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
        </p>
      </section>

      <section id='sustainability' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>Sustainability</h1>
            <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
          <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
        </p>
      </section>


      <section id='faq' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>Frequently Asked Questions</h1>
            <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
          <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
        </p>
      </section>

    </div>

    </>
  )
}

export default AboutUs