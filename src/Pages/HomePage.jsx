import React from 'react'

import ChocoTwo from '../assets/chocotwoo.png'
import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'


function HomePage() {
  return (
    <>
    
    <section className='mt-10 flex flex-col items-center '>
       
       <section className='w-full mb-12'>
         
          <div className='flex flex-col items-center inter-200 ' >
          <h1 className='text-white/50 text-2xl'>Candies Center</h1>
          <span className=' text-white/40 text-xs'>Alacant, Barcelona, Madrid</span>
          </div> 

          <div>

          </div>
       </section>


      <div className='mb-12 w-full'>

        <section className='flex flex-col mx-12 mb-4 text-center border-y py-3 border-white/20'>
          <h1 className='ml-17 inter-800 text-xl text-white/60 flex items-center gap-1 '>Newest Creation <span className='text-[10px] bg-black/60 p-1 rounded-md '>$ 6. 99</span></h1>
          <span className='text-center text-white/50 inter-300 mt-[-3px] text-[10px] '>cereza con aromas tropicales</span>
        </section>

        <section className=''>


          <div className='flex justify-center mb-4'>
            <img src={ChocoTwo} alt="" className='h-40 ml-24' />
            <section className='mt-14 pl-2 flex flex-col gap-2 text-[10px] text-white/30 pr-2 inter-300 '>
              <span className=''>New tastes</span>
              <span className='pl-1'>A new experience</span>
              <span>Your delicious</span>
            </section>
          </div>


          <div className='flex flex-col items-center'>
            <h2 className='text-white/40 text-[10px] inter-300 '>Available Tastes</h2>
              <section className='flex items-center text-[10px] text-white/70 gap-2 inter-200 '>
                <span className='py-1 px-2 rounded-md bg-[rgba(16,43,133,0.6)] border-black/80 w-fit text-[#6768c0] '>Blueberry</span>
                <span className='py-1 px-2 rounded-md bg-[rgb(133,16,65,0.6)] border-black/80 w-fit text-[#a86386] mt-2 '>Strawberry</span>
                <span className='py-1 px-2 rounded-md bg-[rgb(104,85,22,0.6)] border-black/80 w-fit text-[#9e8f3c] mt-2'>Coconut</span>
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