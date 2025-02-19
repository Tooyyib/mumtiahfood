import Container from "../../component/shared/container/Container"
import chicken from "../../assets/chicken.png"
import pepper from "../../assets/pepper.png"
import tomat from "../../assets/tomat.png"
import chicken2 from "../../assets/chicken2.png"
import jolly1 from "../../assets/jolly1.jpg"
import Button from "../../component/shared/button/Button"
import Modals from "../../component/shared/modals/Modals"

import egusi from "../../assets/egusi.jpeg"
import fried from "../../assets/fried.jpeg"
import frozen from "../../assets/frozen.jpeg"
import grill from "../../assets/grill.jpeg"
import pepperf from "../../assets/pepperf.jpeg"
import foodcustom from "../../assets/foodcustom.webp"
import custom from "../../assets/custom.jpg"
import delivery from "../../assets/delivery.gif"

import React from 'react';
import Typed from 'typed.js';




const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Order Mumtiah Foods for today, tomorrow or whenever!'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <Container>
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
         <div className="flex justify-center">
          <div className="flex flex-col gap-5 items-center  mt-[10rem] sm:pl-5">
            <div className="lg:text-5xl lg:w-[45rem] font-semibold drop-shadow-lg text-white">
              <span className="" ref={el} />
     
            </div>
            <div className="flex gap-3 items-center">
              <div><Button href="#menu" a="Order a package" /></div>
              <div><Button href="http://wa.me/2349037938452" a="Build your package" /></div>
            </div>
          </div>


         </div>

         {/* section 2 */}
      </div>
      <div className="flex justify-evenly items-center bg-[#696d8b] h-screen text-white">

        <div className="lg:w-[50%] flex flex-col gap-5 md:pl-5">
          <div className="text-5xl font-semibold drop-shadow-lg px-5">
          Our top selling packages
          </div>
          <div className="text-2xl px-5">
          See what our beloving customers loved most this week, join our never ending dish - ORDER NOW!
          </div>
        </div>
        <div className=""><img src={jolly1} className="w-[32rem] lg:inline rounded-[5rem] md:inline  hidden" alt="jolly1" /></div>
      </div>
      {/* Food price list  */}
      {/* section 3 */}
      <div className="flex justify-center mt-[3rem]">
        <div id="menu" className="lg:grid lg:grid-cols-3 gap-10 space-y-2 md:grid md:grid-cols-2 lg:block">
          <div><Modals className='w-[20rem] h-[18rem] rounded-[10rem] drop-shadow-lg' text="Jollof Rice and Chicken" price="N1,800"  image={foodcustom}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Frozen Chicken" price="N6,000-N15,000"  image={frozen}/></div>
          <div><Modals className='w-[18em]  h-[18rem] rounded-[50%] drop-shadow-lg' text="Fried Chicken" price="Chicken price + N2,500"  image={fried}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Grill Chicken" price="Chicken price + N2,000"  image={grill}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Pepper Fried/Soup Chicken" price="Chicken price + N3,500"  image={pepperf}/></div>
          <div><Modals className='w-[18rem] h-[18rem] rounded-[50%] drop-shadow-lg' text="Efo/Egusi Chicken" price="Chicken Price + N4,000" image={egusi}/></div>
        </div>
      </div>
     

     <div className="change  flex justify-center gap-5 items-center h-screen">
      <div className="md:pl-5">
        <img className="rounded-[50%] lg:w-[30rem] md:block hidden" src={custom} alt="custom" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-5xl w-[25rem] font-bold text-[#8fd521] px-3">Our favorite custom packages this week!</div>
        <div className="mytext text-2xl w-[20rem] px-3">
          We love it when you create your own custom 
          packages and express your creativity!
          See our favourite custom orders this week
        </div>
      </div>
     </div>
     
    
<div className="lg:flex justify-center gap-10 items-center my-[3rem] pl-3 pr-3 md:pl-5 md:text-[1.3rem]">
  <div className="flex flex-col gap-3">
    <div className="flex floor text-3xl lg:w-[35rem] h-[10rem] md:w-[47rem] font-bold text-[#8ed520] rounded-lg pt-5 pl-7">
      Event
    </div>
    <div className="lg:w-[22rem] md:w-[30rem]">
    An event without Mumtiah Foods is definitely just a gathering. It gets better; you can customise your order however you deem fit.
    </div>
    <div className="">
     <a className="underline text-2xl hover:text-yellow-500" href="http://wa.me/2349037938452">ORDER FOR YOUR EVENT</a> 
    </div>
  </div>

  <div className="flex flex-col gap-3">
    <div className="flex floors text-3xl lg:w-[35rem] h-[10rem] md:w-[47rem] font-bold text-[#ffff] rounded-lg pt-5 pl-7">
    Corporate
    </div>
    <div className="lg:w-[25rem] md:w-[30rem] text-1xl">
    Sometimes all you need for culture fit is a corporate hangout/event with a lot Mumtiah Foods. This is what we go to work for.
    </div>
    <div className="">
      <a className="underline text-2xl hover:text-yellow-500" href="http://wa.me/2349037938452">PLACE ORDER</a>
    </div>
  </div>
</div>

<div className="flex justify-center p-4">
<h2 className="text-4xl font-semibold">We Offers the Best Delivery</h2>
</div>

<div className="flex justify-center gap-10 items-center bg-white mb-[2rem] md:px-5">
      <div className="">
        <img className="lg:block rounded-lg lg:w-[40rem] md:block hidden" src={delivery} alt="custom" />
      </div>
      <div className="flex flex-col gap-4">
        <div  className="text-3xl w-[20rem] font-bold text-[#8fd521]">Delivered to your door step</div>
        <div className="text-2xl w-[20rem]">
         The level of care and customer service our pilots provide is a testament to the filtering,
          training, and values we've instilled into them from the beginning.
        </div>
      </div>
     </div>
    </Container>
  )
}

export default Home