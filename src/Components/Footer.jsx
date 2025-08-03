import React from 'react'
import { Link } from 'react-router-dom';


import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'

function Footer() {
  return (
        <>
        <footer className='inter-200 bg-[#1a1411]'>
            
            <section className='pl-6 pt-6 border-t mb-2 border-white/20'>
                <li className='flex gap-4 [&>*>*]:h-[16px] '>
                    <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/spotify.svg" alt=""  /></a>
                    <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
                    <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
                </li>
            </section>

            <section className='p-6'>
                
                <section className='grid grid-cols-3 grid-rows-2 gap-10 mb-10 text-[12px] text-white/50 '>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[14px] text-white/70 mb-1'>Company</h2>
                        <Link to='/contact#contact'>Contact</Link>
                        <Link to='/contact#carreers'>Carreers</Link>
                        <Link to='/promotions#promotions'>Promotions</Link>
                        <Link to='/promotions#gift-card'>Gift Card</Link>
                        <Link to='/promotions#delivery'>Delivery</Link>
    
                    </div>
                    <section className='col-span-2'>
                        <div className='flex flex-col gap-2 '>
                        <h2 className='text-[14px] text-white/70 mb-1'>Information</h2>
                        <Link to='/about-us#about-us'>About Us</Link>
                        <Link to='/about-us#franchises'>Franchises</Link>
                        <Link to='/about-us#sustainability'>Sustainability</Link>
                        <Link to='/about-us#faq'>Frequently Asked Questions</Link>
                        </div>
                    </section>
                    <div className='flex flex-col gap-2 w-52'>
                        <h2 className='text-[14px] text-white/70 mb-1'>Security</h2>
                        <Link to='/security#nutritional-information'>Nutritional Information</Link>
                        <Link to='/security#privacy-cookies'>Privacy & Cookies</Link>
                        <Link to='/security#terms-and-conditions'>Terms and Conditions</Link>
                        <Link to='/security#legal'>Legal</Link>
                    </div>
                </section>

                <p className='text-white/50 text-[10px] mb-3 w-fit'>Spain</p>
                <section className='text-white/40 mb-8 flex flex-col gap-1 text-[10px]  '>
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


        </footer>
        </>
    )
}

export default Footer