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
            
            <section className='bg-black/50 pl-6 pt-6'>
                <li className='flex gap-3 [&>*>*]:h-[14px] '>
                    <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/spotify.svg" alt=""  /></a>
                    <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
                    <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
                </li>
            </section>

            <section className='bg-black/50 p-6'>
                
                <section className='flex gap-5 text-[10px] text-white/40 mb-5 '>
                    <div className='flex flex-col gap-2'>
                        <span>Contact</span>    
                        <span>Franchises</span>
                        <span>Delivery</span>
                        <span>Promotions</span>
                        <span>Gift Card</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Privacy & Cookies</span>
                        <span>Terms and Conditions</span>
                        <span>Legal</span>
                    </div>
                </section>

                <section className='text-white/50 mb-4 text-[9px] '>
                    <p className=''>Alicante:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                    <p className=''>Madrid:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                    <p className=''>Barcelona:  <span>Calle Na Saurina de Entenza 60, Alcoy</span></p>
                </section>


                    <p className='text-white/40 text-[8px] mb-4'>Located in Spain.</p>
                
                <section className='flex justify-between'>
                <div>
                    <p className='text-white/40 text-[8px]'>Copyright © 2025 Candies Center. <br /> All Right Reserved.</p>
                </div>
                <div>
                    <section className='flex flex-col items-center gap-1'>
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
            
            </section>


        </div>
        </>
    )
}

export default Footer