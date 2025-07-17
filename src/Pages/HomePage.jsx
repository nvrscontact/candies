import React from 'react'

import ChocoTwo from '../assets/chocotwoo.png'
import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'

import Star from '../assets/star.svg'


function HomePage() {
  return (
    <>
    
    <section className=' '>
       

      {/* newest */}
      <div className='mt-12 mb-24 flex flex-col items-center'>

        <section className='flex mb-4 text-center border-y py-3 border-white/20'>

            <section className='flex flex-col ml-5'>
              <h1 className='inter-800 text-xl text-white/60 flex items-center gap-[6px]'>Newest Creation</h1>
              <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px]'>cereza con aromas tropicales</span>
            </section>
            <span className='mt-1 ml-1 text-[9px] bg-black/70 h-fit p-1 inter-200'>$ 6.99</span>

        </section>

        <section className='flex relative w-full'>
        <div className="degraded"></div>
        <img src={ChocoTwo} alt="" className='h-52 w-fit mx-auto' />
        </section>

        
        <section className='mt-4 px-18'>
        <div className='flex gap-1 justify-center items-center mb-2'>
          <span className='text-[8px] rounded-[6px] text-[#fd97c2] bg-[rgba(80,3,42,0.4)] py-1 px-2 border border-white/10'>Strawberry</span>
          <span className='text-[8px] rounded-[6px] text-[#85f58b] bg-[rgba(28,66,25,0.4)] py-1 px-2 border border-white/10'>Lemonade</span>
          <span className='text-[8px] rounded-[6px] text-[#88c0ff] bg-[rgba(20,32,66,0.4)] py-1 px-2 border border-white/10'>Blueberry</span>
        </div>
        <p className='text-[9px] text-white/50 text-center inter-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium a explicabo.</p>
        </section>

      </div>


        {/* summer */}
      <div className='mb-24 flex flex-col items-center'>

        <section className='flex mb-4 text-center border-y py-3 border-white/20'>

            <section className='flex flex-col ml-5'>
              <h1 className='inter-800 text-xl text-white/60 flex items-center gap-[6px]'>Newest Creation</h1>
              <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px]'>cereza con aromas tropicales</span>
            </section>
            <span className='mt-1 ml-1 text-[9px] bg-black/70 h-fit p-1'>$ 6.99</span>

        </section>


        <img src={ChocoTwo} alt="" className='h-52 w-fit' />


      </div>

          {/* hero */}
      <div className='mb-12 mt-2'>
        <section className='flex flex-col items-center inter-200 py-4' >
          <h1 className='text-white/50 text-2xl'>Candies Center</h1>
          <span className=' text-white/40 text-xs'>Alacant, Barcelona, Madrid</span>
        </section> 
      </div>
  

        {/* payments */}
        <section className='flex flex-col items-center gap-1 mb-4 mt-10'>
          <span className='text-[9px] text-white/50 '>Pay with your favorites</span>
          <div className='flex gap-2 [&>*]:h-6 '>
            <img src={ApplePay} alt="" />
            <img src={Mastercard} alt="" />
            <img src={AmericanExpress} alt="" />
            <img src={Paypal} alt="" />
            <img src={Visa} alt="" />
          </div>
        </section>
      
    </section>
    </>
  )
}

export default HomePage