




const Button = ({a,href}) => {
  return (
    <div><button  className='lg:w-[16rem] p-2 rounded text-white bg-gradient-to-r from-lime-400 to-green-500 text-[1.2rem] drop-shadow-lg hover:-translate-y-1 duration-700'><a href={href}>{a}</a></button></div>
  )
} 
 
export default Button