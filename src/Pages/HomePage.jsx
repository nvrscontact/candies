import Product from '../Components/S_Components/Product'

import Star from '../assets/star.svg'
import CupcakeThree from '../assets/cupcake_three.png'
import CupcakeFour from '../assets/cupcake_four.png'
import CupcakeFive from '../assets/cupcake_five.png'
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

    <section className='my-10 text-center inter-200'>
      <p className='text-2xl mb-2 text-white/60 inter-200'>See our Menu</p>
      <p className='text-[10px] text-white/40 mx-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat eveniet, numquam eligendi cupiditate saepe voluptates. Nesciunt labore expedita eveniet.</p>

        <button className='flex items-center mx-auto border border-white/20 mt-5'>
          <span className='bg-white/10 m-[2px] px-5 py-2 flex gap-[6px] items-center inter-200 tracking-[2px] text-[14px] '>Visit </span>
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