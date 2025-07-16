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
       
       <div className='mb-12'>
          <section className='flex flex-col items-center inter-200 bg-black/30 py-4' >
            <h1 className='text-white/50 text-2xl'>Candies Center</h1>
            <span className=' text-white/40 text-xs'>Alacant, Barcelona, Madrid</span>
          </section> 
       </div>


      <div className='mb-24'>

        <section className='flex flex-col mx-12 mb-4 text-center border-y py-3 border-white/20'>
          <h1 className='ml-14 inter-800 text-xl text-white/60 flex items-center gap-[6px] '>Newest Creation <span className='text-[10px] bg-black/70 p-1 '>$ 6.99</span></h1>
          <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px]'>cereza con aromas tropicales</span>
        </section>


              <div className='flex mb-4'>

                <section className='flex flex-col text-[8px] text-white/70 gap-1 inter-200 ml-5 mr-4 mt-10 '>
                    <span className='py-1 px-2 rounded-md bg-[rgba(16,43,133,0.6)] border-black/80 w-fit text-[#6768c0]'>Blueberry</span>
                    <span className='py-1 px-2 rounded-md bg-[rgb(133,16,65,0.6)] border-black/80 w-fit text-[#a86386]'>Strawberry</span>
                    <span className='py-1 px-2 rounded-md bg-[rgb(104,85,22,0.6)] border-black/80 w-fit text-[#9e8f3c]'>Coconut</span>
                    <span className='py-1 px-2 rounded-md bg-[rgba(37,85,37,0.6)] border-black/80 w-fit text-[#63a880]'>Limonade</span>
                </section>
                <img src={ChocoTwo} alt="" className='h-40' />

              </div>

              <div className='flex flex-col items-center gap-1'>
                <section className='[&>*]:h-4 flex '>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </section>
                <p className='text-white/40 text-[8px] text-center w-40 inter-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam accusantium quaerat.</p>
              </div>



      </div>


      <div className=''>

        <section className='flex flex-col mb-4 items-center border-y py-3 border-white/20'>
          <h1 className='inter-800 text-xl text-center text-white/60'>Summer Delight</h1>
          <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px] '>cereza con aromas tropicales</span>
        </section>

  
      </div>

      <div>

        <section className='flex flex-col items-center gap-1 mb-2 mt-10'>
          <span className='text-[9px] text-white/40 '>Pay with your favorites</span>
          <div className='flex gap-2 [&>*]:h-6 '>
            <img src={ApplePay} alt="" />
            <img src={Mastercard} alt="" />
            <img src={AmericanExpress} alt="" />
            <img src={Paypal} alt="" />
            <img src={Visa} alt="" />
          </div>
        </section>

      </div>
      
    </section>
    </>
  )
}

export default HomePage