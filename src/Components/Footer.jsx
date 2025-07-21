import React from 'react'


function Footer() {
  return (
        <>
        <div className='flex flex-col m-2 gap-[2px] inter-200 '>
            
            <section className='bg-black/30 p-4'>
                <li className='flex gap-3 [&>*>*]:h-[14px] '>
                    <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/spotify.svg" alt=""  /></a>
                    <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
                    <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" /></a>
                    <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
                </li>
            </section>

            <section className='bg-black/30 p-4'>
                
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

                <p className='text-white/40 text-[8px] w-72 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ea harum iusto facilis, dolore modi numquam! Rerum iusto quis vitae illo.</p>
                <p className='text-white/40 text-[8px]'>© 2025 Candies Center. <br /> All Right Reserved.</p>
            
            </section>


        </div>
        </>
    )
}

export default Footer