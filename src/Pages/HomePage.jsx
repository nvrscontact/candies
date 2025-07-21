import React from 'react'

import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'

import Star from '../assets/star.svg'

import CupcakeThree from '../assets/cupcake_three.png'
import CupcakeFour from '../assets/cupcake_four.png'
import CupcakeFive from '../assets/cupcake_five.png'

import Products from '../Components/S_Components/Products'


function HomePage() {
  return (
    <>
    
    <section className=' '>
       

      
      
      <Products 
      
      premise={'Newest Creation'} 
      titleProduct={'sabor a cerezas tropicales'} 
      imgProduct={CupcakeFive} 
      price={'$3.89'}
      flavours={['Strawberry','Blueberry','Limonade','Cherry']}
      star_one={Star}
      star_two={Star}
      star_three={Star}
      star_four={Star}
      star_five={Star}
      stars_number={'+23'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary.'} />
     
      <Products 
      bg='bg-black/50'
      premise={'Newest Creation'} 
      titleProduct={'sabor a cerezas tropicales'} 
      imgProduct={CupcakeThree} 
      price={'$3.89'}
      flavours={['Strawberry','Blueberry','Limonade','Cherry']}
      star_one={Star}
      star_two={Star}
      star_three={Star}
      star_four={Star}
      star_five={Star}
      stars_number={'+23'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary.'} />
     
      <Products 
      bg={''}
      premise={'Newest Creation'} 
      titleProduct={'sabor a cerezas tropicales'} 
      imgProduct={CupcakeFour} 
      price={'$3.89'}
      flavours={['Strawberry','Blueberry','Limonade','Cherry']}
      star_one={Star}
      star_two={Star}
      star_three={Star}
      star_four={Star}
      star_five={Star}
      stars_number={'+23'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary.'} />
      
      <Products 
      bg={'bg-black/50'}
      premise={'Newest Creation'} 
      titleProduct={'sabor a cerezas tropicales'} 
      imgProduct={CupcakeFour} 
      price={'$3.89'}
      flavours={['Strawberry','Blueberry','Limonade','Cherry']}
      star_one={Star}
      star_two={Star}
      star_three={Star}
      star_four={Star}
      star_five={Star}
      stars_number={'+23'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary.'} />
        
  

        {/* payments */}
        <section className='flex flex-col items-center gap-1 mt-10 mb-5'>
          <span className='text-[10px] text-white/70 '>Pay with your favorites</span>
          <div className='flex gap-2 [&>*]:h-7 '>
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