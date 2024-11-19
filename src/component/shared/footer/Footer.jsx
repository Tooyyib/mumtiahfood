import facebook from "../../../assets/facebook.svg"
import whatsapp from "../../../assets/whatsapp.png"
import { FiArrowUp } from "react-icons/fi";


const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

const Footer = () => {


  
  return (

<>

  <div className="md:flex justify-evenly bg-gradient-to-r from-lime-400 to-lime-500 sm:text-sm  my-[-1rem] text-[#fdf7fb] lg:text-[1.1rem]  p-3 font-semibold sm:block">
    <div className="text-green-900 flex flex-col gap-3 " id="contactus">
      <div className="text-[#ffff] my-[0.7rem]">Contact</div>
      <div>+2348035791134</div>
      <div>+2347087126470</div>
      <div>+2349016791320</div>
      
    </div>
    <div className="text-green-900 flex flex-col gap-3 my-[0.7rem]">
      <div className="text-[#ffff]">Location</div>
      <div>Lagos</div>
      <div>35,Arobadade,after sawmill,Bariga</div>
    </div>
    <div className="text-green-900 flex flex-col gap-3 my-[0.7rem]">
      <div className="text-[#ffff]">Connect</div>
      <div className="flex gap-2">
        <img
          src={facebook}
          alt="facebook"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="https://web.facebook.com/Mumtiahfoods/about">
          Mumtiah Foods
          </a>
        </div>
      </div>
     
      <div className="flex gap-2">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://wa.me/2348035791134">
            Mumtiah Foods
          </a>
        </div>
      </div>

      <div className="flex gap-2">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://wa.me/2347087126470">
            Mumtiah Foods
          </a>
        </div>
      </div>

      <div className="flex gap-2">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://wa.me/2349016791320">
            Mumtiah Foods
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center fonts-semibold bg-gradient-to-r from-lime-400 to-lime-500 text-[0.8rem] text-[#fdf7fb]">Copyright © {`${year}`}.
   All rights reserved | Mumtiah_Foods <br />
  <span className=" font-bold">{`${day} - ${month +1} - ${year} `}</span>
  <div className="animate-bounce">
     <a className="text-2xl font-bold text-green-600" href="#top">
     <FiArrowUp className="text-3xl" />
     </a>
     </div>
  </div>
</>
  );
};

export default Footer;
