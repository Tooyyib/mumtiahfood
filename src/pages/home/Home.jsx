import Container from "../../component/shared/container/Container"
import chicken from "../../assets/chicken.png"
import pepper from "../../assets/pepper.png"
import tomat from "../../assets/tomat.png"
import chicken2 from "../../assets/chicken2.png"
import Button from "../../component/shared/button/Button"
import Modals from "../../component/shared/modals/Modals"

import elegusi from "../../assets/elegusi.jpg"
import friedd from "../../assets/friedd.jpg"
import frozen from "../../assets/frozen.jpeg"
import grillis from "../../assets/grillis.jpg"
import pepperf from "../../assets/pepperf.jpg"
import foodcustom from "../../assets/foodcustom.webp"
import custom from "../../assets/custom.jpg"
import chickenrice from "../../assets/chickenrice.jpg"
import fullchicken from "../../assets/fullchicken.jpg"

import fullchiv from "../../assets/fullchiv.jpg"
import chiv from "../../assets/chiv.jpg"
import moimoi from "../../assets/moimoi.jpg"




import food3 from "../../assets/food3.avif"
import deliveryavater from "../../assets/deliveryavater.jpg"



import React from 'react';
import Typed from 'typed.js';

import { Carousel } from "@material-tailwind/react";



const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Order Mumtiah Foods for today, tomorrow or whenever! '],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <Container>

      {/* mumtiah intro message */}
      <div className="text-green-300 text-center text-4xl h-screen bg-gradient-to-r from-teal-400 to-yellow-200">
        <ul className="circles">
          <li><img src={chicken} alt="chickenlap" /></li>
          <li><img src={chicken} alt="chickenlap" /></li>
          <li><img src={chicken2} alt="chickenlap" /></li>
          <li><img src={tomat} alt="chickenlap" /></li>
          <li><img src={chicken} alt="chickenlap" /></li>
          <li><img src={pepper} alt="chickenlap" /></li>
          <li><img src={chicken} alt="chickenlap" /></li>
          <li><img src={chicken2} alt="chickenlap" /></li>
          <li><img src={pepper} alt="chickenlap" /></li>
          <li><img src={chicken} alt="chickenlap" /></li>
        </ul>
         <div  className="flex justify-center">
          <div className="flex flex-col gap-5 items-center  mt-[10rem] sm:pl-5">
            <div className="lg:text-5xl lg:w-[45rem] font-semibold drop-shadow-lg text-white">
              <span className="" ref={el} />
     
            </div>
            <div className="flex gap-3 items-center">
              <div><Button href="#menu" a="Order a package" /></div>
              <div><Button  href="http://wa.me/2349037938452?text=peace be upon you, i want to build a package of mumtiah food"  a="Build your package" /></div>
            </div>
          </div>


         </div>
      </div>

{/* top selling packages */}

      <div className="flex justify-evenly items-center bg-green-700 h-screen text-white">

        <div className="lg:w-[50%] flex flex-col gap-5 md:pl-5">
          <div className="text-5xl font-semibold drop-shadow-lg px-5">
          Our top selling packages
          </div>
          <div className="text-2xl
           px-5">
          See what our beloving customers loved most this week, join our never ending dish - ORDER NOW!
          </div>
        <div className="flex justify-center pt-[1.5rem]"><img src={custom} className="w-[20rem] rounded-lg lg:hidden md:hidden" alt="custom" /></div>

        </div>
        <div className=""><img src={custom} className="w-[32rem] rounded-[5rem] lg:inline md:inline hidden" alt="custom" /></div>
      </div>

      {/* Food price list  */}
    
      <div className="flex justify-center mt-[3rem]">
        <div id="menu" className="lg:grid lg:grid-cols-3 gap-10 space-y-2 md:grid md:grid-cols-2 lg:block">
          <div><Modals className='w-[20rem] h-[18rem] rounded-[10rem] drop-shadow-lg' text="Jollof Rice and Chicken" price="N1,500"  image={foodcustom}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Frozen Chicken" price="N8-10,000"  image={frozen}/></div>
          <div><Modals className='w-[18em]  h-[18rem] rounded-[50%] drop-shadow-lg' text="Fried Chicken" price="N10,500"  image={friedd}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Grill Chicken" price="N10,000"  image={grillis}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Pepper Fried/Soup Chicken" price="N11,500"  image={pepperf}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Efo/Egusi Chicken" price="N12,000" image={elegusi}/></div>

        </div>
      </div>


  
{/* carousel for other varieties */}

<div className="flex justify-center">
  <div className="flex flex-col gap-5 items-center my-[2.5rem]">

<h1 className="text-5xl text-[#8fd521] lg:hidden md:hidden sm:block">Other Varieties</h1>
{/* carousel */}
{/* insert carousel inside an anchor tag  */}
<Carousel
   autoplay={7}
   transition={{ duration: 2 }} 
      className="rounded-xl bg-green-400 lg:hidden md:hidden sm:w-[22rem] sm:h-[22rem] border border-green-400 "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50  flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all  content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <a  href="http://wa.me/2349037938452?text=peace be upon you, i want to order jollof rice + full-fried chicken">
      <div className="text-center text-2xl text-white my-[0.4rem]">
jollof rice + full chicken N12,500
</div>
<img
        src={fullchicken}
        alt="fullchicken"
        className="object-cover"
      />
</a>

      
     <a  href="http://wa.me/2349037938452?text=peace be upon you, i want to order jollof rice + 3 chicken 8,000">
       <div className="text-center text-2xl text-white my-[0.4rem]">
jollof rice + 3 chicken N8,000
</div>
<img
        src={chickenrice}
        alt="chickenrice"
        className="object-cover"
      />
</a>

     <a  href="http://wa.me/2349037938452?text=peace be upon you, i want to order full-fried chicken">
     <div className="text-center text-2xl text-white my-[0.4rem]">
N10,500
</div>
<img
        src={chiv}
        alt="chiv"
        className="object-cover"
      />
</a>


 <a  href="http://wa.me/2349037938452?text=peace be upon you, i want to order full grilled chicken">
 <div className="text-center text-2xl text-white my-[0.4rem]">
  N10,000
</div>
<img
        src={fullchiv}
        alt="fullchiv"
        className="object-cover h-[84%] w-full"
      />
</a>
<a  href="http://wa.me/2349037938452?text=peace be upon you, i want to order moi-moi jollof rice and chicken">
<div className="text-center text-2xl text-white my-[0.4rem]">
  2 packs N8,000
</div>
<img
        src={moimoi}
        alt="moimoi"
        className="object-cover h-[84%] w-full"
      />
</a>
    </Carousel>
</div>
</div>


{/* our favourite package */}
     <div className="flex  justify-center gap-5 items-center h-screen">
      <div className="md:pl-5">
        <img className="rounded-[50%] lg:w-[30rem]" src={food3} alt="custom" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-5xl w-[25rem] font-bold text-[#8fd521] px-3">Our favorite custom packages this week!</div>
        <div className="mytext text-2xl w-[20rem] sm: hidden lg:block md:block px-3">
          We love it when you create your own custom 
          packages and express your creativity!
          See our favourite custom orders this week
        </div>

        <img className="rounded-[50%] lg:w-[30rem] sm:hidden pr-[1rem]" src={food3} alt="custom" />

      </div>
     </div>


    {/* event and corporate */}
<div className="lg:flex justify-center gap-10  my-[3rem] pl-3 pr-3 md:pl-5 md:text-[1.3rem]">
  {/* event */}
  <div className="flex flex-col gap-3" >
    <a href="http://wa.me/2348035791134?text=peace be upon you. i want to order for our upcoming event" className="cursor-pointer">
      <div  className="flex party text-3xl lg:w-[35rem] h-[10rem] md:w-[47rem] font-bold text-[#ffff] rounded-lg pt-5 pl-7">
    Event
    </div>
    </a>
    
    <div className="lg:w-[25rem] md:w-[30rem] text-1xl">
    An event without Mumtiah Foods is definitely just a gathering. It gets better; you can customise your order however you deem fit.
    </div>
  </div>

{/* corporate */}
  <div className="flex flex-col gap-3">
    <a href="http://wa.me/2348035791134?text=peace be upon you. i want to order for our upcoming hangout" className="cursor-pointer">
      <div  className="flex corporate text-3xl lg:w-[35rem] h-[10rem] md:w-[47rem] font-bold text-[#ffff] rounded-lg pt-5 pl-7">
    Corporate
    </div>
    </a>
    
    <div className="lg:w-[25rem] md:w-[30rem] text-1xl">
    Sometimes all you need for culture fit is a corporate hangout/event with a lot Mumtiah Foods. This is what we go to work for.
    </div>
  </div>
</div>

{/* delivery  message */}

<div className="flex  justify-center gap-5 items-center h-screen">
      <div className="md:pl-5">
        <img className="rounded-[50%] lg:w-[30rem]" src={deliveryavater} alt="custom" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-5xl w-[23rem] font-bold text-[#8fd521] px-3">Deliver to your door step</div>
        <div className="text-2xl w-[20rem] sm: hidden lg:block md:block px-3">
          The level of care and customer service our pilots provide is a testament to the filtering,
          training, and values we've instilled into them from the beginning.
        </div>

        <img className="rounded-[50%] lg:w-[30rem] sm:hidden pr-[1rem]" src={deliveryavater} alt="custom" />

      </div>
     </div>
    </Container>
  )
}

export default Home