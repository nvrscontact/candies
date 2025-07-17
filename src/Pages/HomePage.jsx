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
              <h1 className='inter-800 text-2xl text-white/60 flex items-center gap-[6px]'>Newest Creation</h1>
              <span className='text-center text-white/50 inter-300 mt-[-3px] text-[12px]'>cereza con aromas tropicales</span>
            </section>
            <span className='mt-[6px] ml-[6px] text-[9px] bg-black/40 h-fit p-1 inter-200 rounded-md'>$ 6.99</span>

        </section>

        <section className='flex relative w-full'>
        <div className="degraded"></div>
        <img src={ChocoTwo} alt="" className='h-60 w-fit mx-auto' />
        <div className='flex flex-col gap-1 items-end absolute right-6 mt-6 inter-200'>
            <span className='text-[8px] rounded-[6px] py-1 px-2 bg-white/10 '>Strawberry</span>
            <span className='text-[8px] rounded-[6px] py-1 px-2 bg-white/10'>Limonade</span>
            <span className='text-[8px] rounded-[6px] py-1 px-2 bg-white/10'>Blueberry</span>
            <span className='text-[8px] rounded-[6px] py-1 px-2 bg-white/10'>Cherry</span>
        </div>
        </section>

        
        <section className='mt-2 px-18 flex flex-col items-center justify-center'>
          <div className='flex items-center  '>
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
          </div>
          <p className='text-[9px] text-white/70 text-center inter-200 mt-1 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium a.</p>
          <span className='text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/20'>Place Order</span>
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