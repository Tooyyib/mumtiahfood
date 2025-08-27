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
{/* about us  */}
<div id="aboutus" className="text-white bg-green-700 flex justify-center text-[1.4rem] my-[1.2rem]">
<div className="flex flex-col gap-2 w-[60rem] pl-3 pr-3 pb-3">
  <div>Mumtiah fooods is a food service distributor that provides it's customers with innovative food offerings in halal way</div>
<div>We wish to delight our customers with the rare taste of authentic Nigeria, foreign dishes and to excite them with rich, aromatic and healthy flavours</div>
</div>
</div>

{/* contact us  */}
  <div className="md:flex justify-evenly bg-white sm:text-sm  my-[-1rem] text-black lg:text-[1.1rem]  p-3 font-semibold sm:block">
    <div className="text-green-900 flex flex-col gap-3 " id="contactus">
      <div className="text-green-400 my-[0.7rem]">Contact</div>
      <div>+2348035791134</div>
      <div>+2347087126470</div>
      <div>+2349016791320</div>
      
    </div>
    <div className="text-green-900 flex flex-col gap-3 my-[0.7rem]">
      <div className="text-green-400">Location</div>
      <div>Lagos</div>
      <div id="location">23, Olowu, Bariga</div>
     <div className="flex flex-col gap-2">
       <div className="text-green-400">Dev Team</div>
        <a href="http://wa.me/2349016791320">
       <div>+2349016791320</div>
          </a>
     </div>

    </div>
    <div className="flex flex-col gap-3 my-[0.7rem]">
      <div className="text-green-400">Connect</div>
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

  {/* copyright and current date  */}
  <div className=" text-center fonts-semibold bg-gradient-to-r from-lime-600 to-lime-900 text-[0.8rem] text-[#fdf7fb]">Copyright © {`${year}`}.
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
