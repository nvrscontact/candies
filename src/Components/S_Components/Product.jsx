
import LinkImg from '../../assets/arrow_link.svg'
import {Link} from 'react-router-dom'

function Product({
    bg,
    py,
    premise,
    titleProduct, 
    price, 
    imgProduct,
    flavours = [],
    star_one,
    star_two,
    star_three,
    star_four,
    star_five,
    stars_number,
    paragraph,
}) {
  return (
     <div className={`flex flex-col items-center ${bg} ${py}`} >
    
            <section className='flex mb-4 text-center border-y py-3 border-white/20'>
    
                <section className='flex flex-col ml-7'>
                  <h1 className='inter-800 text-[26px] text-white/80 flex items-center gap-[6px]'>{premise} </h1>
                  <span className='text-center text-white/50 inter-300 mt-[-4px] ml-3 text-[12px]'>{titleProduct} </span>
                </section>
                <span className='mt-[10px] ml-[6px] text-[11px] text-white/70 border-b-[1px] border-white/20 h-fit p-1 inter-200 bg-[#1a1a1ad5] '>{price}</span>
  
            </section>
    
            <section className='flex relative w-full'>
              <div className="degraded"></div>
              <img src={imgProduct} alt="" className='h-60 w-52 mx-auto pr-2' />
              <div className='flex flex-col gap-1 items-end absolute right-7 mt-6 inter-200'>
                {flavours
                .filter(Boolean)
                .map((flavour,index) => (
                    <span key={index} className='text-[9px] rounded-[6px] py-1 px-2 bg-white/10 '>{flavour}</span>
                ))}
                
              </div>
            </section>

            <section className='mt-3 px-6 flex flex-col '>
                <div className='flex justify-center items-center'>
                  <span className='border border-white/30 w-18 h-fit mr-3'></span>
                  
                    <section className='flex flex-col items-center gap-[2px] '>
                      <div className='flex items-center'>
                        <img src={star_one} alt="" className='h-4' />
                        <img src={star_two} alt="" className='h-4' />
                        <img src={star_three} alt="" className='h-4' />
                        <img src={star_four} alt="" className='h-4' />
                        <img src={star_five} alt="" className='h-4' />
                      </div>
                      <span className='text-[8px] pl-[2px] text-white/60 inter-200'>{stars_number} reviews</span>
                    </section>

                  <span className='border border-white/30 w-18 h-fit ml-3'></span>
                </div>

                <p className='text-[10px] text-center text-white/60 inter-200 mb-4 mt-2'>{paragraph}</p>
              
                <button className='flex items-center mx-auto border border-white/20 rounded-md'>
                <Link to='/order' className='flex items-center gap-3 pr-4 bg-white/10 m-[2px] pl-6 py-2 gap-[6px] inter-200 text-[14px] rounded-[4px] '>Place Order <img src={LinkImg} alt="" className='h-[12px]'/></Link>
               </button>

          </section>
    
        </div>
  )
}

export default Product