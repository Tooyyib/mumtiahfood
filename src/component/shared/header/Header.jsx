import logo from "../../../assets/logo.jpeg"

import { useState } from "react";
import {  VscClose } from 'react-icons/vsc';
import {  GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

  const [drop, setDrop] = useState(false);

  const collapse = () => {
    setDrop(true);
  }
  const close = () => {
    setDrop(false);
  };
  return (
    <>
   
  

{/* navigation bar */}
<div id="top" className="flex justify-between p-5  items-center bg-gradient-to-r from-lime-400 to-green-500 items-center text-white">
<div className="flex  gap-3 items-center">
       <div><img src={logo} className="w-[3rem] rounded-full" alt="logo" /></div>
       <div className="flex flex-col">
         <div className="text-1xl font-bold">Mumtiah Foods</div>
         <div className="text-sm mt-[-0.3rem]">halal foods for you...</div>
       </div>
     </div>



<div className={`${drop ? 'block lg:flex absolute  lg:static z-20 fonts-bold left-[15px] top-[85px]  space-y-3 py-3': 'hidden lg:flex'} gap-10  w-full  lg:w-auto items-center text-[1.1rem]`}>
  <div>
    <a className="hover:opacity-50" href="/">Home</a>
  
  </div>
  <div><button><a className="hover:opacity-50" href="#contactus">Contact us</a></button></div>
  <div><button><a className="hover:opacity-50" href="#aboutus">About us</a></button></div>
  <div className="sm:my-[1rem] lg:my-[0rem]">
    <button className="py-2 px-4 bg-green-500 border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none  text-[#fdfdfd] font-bold rounded hover:-translate-y-1 duration-700 text-[1rem]">
      <a href="#menu">Menu</a>
    </button>
  </div>
  <div className="sm:my-[1rem] lg:my-[0rem]">
    <button className="bg-[#fdb72f] opacity-90 py-2 px-4 border-dotted border-2 hover:opacity-50  focus:animate-none hover:animate-none  rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
      <a href="#location">Locate Us</a>
    </button>
  </div>
</div>
<div className="text-white">
    <div onClick={collapse} className={`${drop?'hidden':'block lg:hidden'}`}><GiHamburgerMenu/></div> 
    <div onClick={close} className={`${!drop?'hidden':'block lg:hidden'}`}><VscClose /> </div>   
</div>
</div>

    </>
  )
}
export default Header