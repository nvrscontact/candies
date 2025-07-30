import React from 'react'
import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'

function Footer() {
  return (
        <>
        <div className='inter-200 '>
            
            <section className='bg-[#1a1411] pl-6 pt-6 border-t border-white/20'>
                <li className='flex gap-3 [&>*>*]:h-[14px] '>
                    <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/spotify.svg" alt=""  /></a>
                    <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
                    <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
                </li>
            </section>

            <section className='bg-[#1a1411] p-6'>
                
                <section className='grid grid-cols-3 grid-rows-2 gap-y-8 text-[10px] text-white/50'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[12px] text-white/70 mb-1'>Company</h2>
                        <span>Contact</span>    
                        <span>Franchises</span>
                        <span>Delivery</span>
                        <span>Promotions</span>
                        <span>Gift Card</span>
                    </div>
                    <section className='col-span-2'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[12px] text-white/70 mb-1'>Company</h2>
                            <span>Contact</span>    
                            <span>Franchises</span>
                            <span>Delivery</span>
                            <span>Promotions</span>
                            <span>Gift Card</span>
                        </div>
                    </section>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[12px] text-white/70 mb-1'>Security</h2>
                        <span>Nutritional Information</span>
                        <span>Privacy & Cookies</span>
                        <span>Terms and Conditions</span>
                        <span>Legal</span>
                    </div>
                </section>

                <p className='text-white/50 text-[10px] mb-2 w-fit pb-1'>Spain</p>
                <section className='text-white/40 mb-6 flex flex-col gap-1 text-[9px] '>
                    <p className=''>Alicante:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                    <p className=''>Madrid:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                    <p className=''>Barcelona:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                </section>

        
                
                <section className='flex justify-between'>
                    <div>
                        <p className='text-white/40 text-[8px]'>Copyright © 2025 Candies Center. <br /> All Right Reserved.</p>
                    </div>
                    <div className='flex gap-2 [&>*]:h-6 '>
                        <img src={ApplePay} alt="" />
                        <img src={Mastercard} alt="" />
                        <img src={AmericanExpress} alt="" />
                        <img src={Paypal} alt="" />
                        <img src={Visa} alt="" />
                        </div>
                </section>

            
            </section>


        </div>
        </>
    )
}

export default Footer