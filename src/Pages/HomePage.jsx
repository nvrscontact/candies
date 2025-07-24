import Products from '../Components/S_Components/Products'

import Star from '../assets/star.svg'
import CupcakeThree from '../assets/cupcake_three.png'
import CupcakeFour from '../assets/cupcake_four.png'
import CupcakeFive from '../assets/cupcake_five.png'


function HomePage() {
  return (
    <>
    
    <section className=' '>
    
      <Products 
        py={'pt-16 pb-24'}
        bg='bg-black/70 '
        premise={'Magnificent Essence'} 
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

      <Products
        py={'py-30'} 
        bg={'bg-black/70'}
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
        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary. Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
      
        <Products
        py={'py-30'} 
        bg={'bg-black/70'}
        premise={'Summer Surprise'} 
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
        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam voluptatibus aliquam praesentium another vocabulary. Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
        
        <section className='my-10'>
          <p className='text-[10px] text-white/60 text-center px-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non unde porro delectus a esse perspiciatis reiciendis architecto cupiditate numquam!</p>
        </section>
      
    </section>
    </>
  )
}

export default HomePage