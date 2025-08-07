import Product from '../Components/S_Components/Product'

import Star from '../assets/star.svg'
import CupcakeThree from '../assets/cupcake_three.png'
import CupcakeFour from '../assets/cupcake_four.png'
import CupcakeFive from '../assets/cupcake_five.png'
import cupcake from '../assets/cupcake.svg'
import cookie from '../assets/cookie.svg'
import candy from '../assets/candy.svg'
import cake from '../assets/cake.svg'
import LinkImg from '../assets/arrow_link.svg'


function HomePage() {
  return (
    <>
    
    <Product 
    py={'pt-16 pb-24 '}
    bg='bg-black/70 '
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
    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary. Lorem ipsum dolor sit amet consectetur adipisicing elit'} />

    <section className='my-18 inter-200 mx-10'>
      
      <div className='flex justify-between items-center'>
      <h1 className='text-2xl text-white/60 inter-200 border-b border-white/20 pb-1 '>See our Menu </h1>

        <section className='flex gap-2 items-center'>
          <span className='text-[10px] text-white/70 '>+3</span>
          <span className='bg-white/50 p-2 rounded-md h-fit'>
          <img src={cupcake} alt="" className='h-4' />
          </span>
          <span className='bg-white/50 p-2 rounded-md h-fit'>
          <img src={cookie} alt="" className='h-4' />
          </span>
          <span className='bg-white/50 p-2 rounded-md h-fit'>
          <img src={candy} alt="" className='h-4' />
          </span>
        </section>

      </div>
      <p className='text-[10px] text-white/50 my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat eveniet, numquam eligendi cupiditate saepe voluptates. Nesciunt labore expedita eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat eveniet, numquam eligendi </p>


        <button className='flex justify-center rounded-md'>
          <span className='bg-white/50 text-black m-[2px] px-5 py-2 flex justify-end items-end gap-[6px] inter-200 text-[12px] rounded-[4px]'>Visit Site</span>
        </button>



    </section>

    <Product
    py={'py-30'} 
    bg={'bg-black/70'}
    premise={'Magnificent Essence'} 
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
    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary. Lorem ipsum dolor sit amet consectetur adipisicing elit'} />

    <section className='my-10 text-center inter-200'>
      <p className='text-2xl mb-3 text-white/60 inter-200'>What do our customers think?</p>
      <p className='text-[10px] text-white/40 mx-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat eveniet, numquam eligendi cupiditate saepe voluptates. Nesciunt labore expedita eveniet.</p>
    </section>
        
    <Product
    py={'py-30'} 
    bg={'bg-black/75'}
    premise={'Summer Surprise'} 
    titleProduct={'s0bor a cerezas tropicales'} 
    imgProduct={CupcakeFour} 
    price={'$3.89'}
    flavours={['Strawberry','Blueberry','Limonade','Cherry']}
    star_one={Star}
    star_two={Star}
    star_three={Star}
    star_four={Star}
    star_five={Star}
    stars_number={'+23'}
    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary. Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
        
    <section className='my-10 text-center inter-200'>
      <p className='text-2xl mb-3 text-white/60 inter-200'>What ingredients do we use?</p>
      <p className='text-[10px] text-white/40 mx-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat eveniet, numquam eligendi cupiditate saepe voluptates. Nesciunt labore expedita eveniet.</p>
    </section>
      
  </>
  )
}

export default HomePage