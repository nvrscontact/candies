import React from 'react'

import ChocoTwo from '../assets/chocotwo.png'
import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'


function HomePage() {
  return (
    <>
    
    <section className='mt-10 flex flex-col items-center '>
       
      <div className='flex flex-col items-center inter-200 mb-12 ' >
      <h1 className='text-white/50 text-2xl'>Candies Center</h1>
      <span className=' text-white/40 text-xs'>Alacant, Barcelona, Madrid</span>
      </div>


      <div className='mb-12 w-full'>

        <section className='flex flex-col mx-12 mb-4 items-center border-y py-3 border-white/20'>
          <h1 className='inter-800 text-xl text-center text-white/60'>Newest Creation</h1>
          <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px] '>cereza con aromas tropicales</span>
        </section>

        <section className=''>

          <div className='flex'>
            <span className='mt-10 flex flex-col inter-200 text-white/40 text-center ml-9 text-sm '><span className='text-white/80 bg-black/40 py-1 px-2 rounded-md'>$ 6.99</span></span>
            <img src={ChocoTwo} alt="" className='h-52 w-52' />
          </div>
          <div className='flex flex-col items-center mt-2'>
            <h2 className='text-white/40 mb-2 text-s '>Available Tastes</h2>
              <section className='flex items-center text-[10px] text-white/70 gap-1 '>
                <span className='py-1 px-2 rounded-md bg-[rgba(16,43,133,0.6)] border-black/80 w-fit text-[#6768c0] '>Blueberry</span>
                <span className='py-1 px-2 rounded-md bg-[rgb(133,16,65,0.6)] border-black/80 w-fit text-[#a86386] '>Strawberry</span>
                <span className='py-1 px-2 rounded-md bg-[rgb(104,85,22,0.6)] border-black/80 w-fit text-[#9e8f3c] '>Coconut</span>
                <span className='py-1 px-2 rounded-md bg-[rgba(37,85,37,0.6)] border-black/80 w-fit text-[#63a880] '>Limonade</span>
              </section>
          </div> 


        </section>

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
          <div className='flex gap-1 [&>*]:h-6 '>
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