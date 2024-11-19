import CartButton from '../button/CartButton'

const Modals = ({text,image,price,className}) => {
  return (
    <div className='flex flex-col gap-5 border drop-shadow-lg p-5 rounded-lg bg-white items-center'>
        <div className='drop-shadow-lg text-2xl'>{text}</div>
        <div><img src={image} className={className} alt="food" /></div>
        <div   className='text-2xl drop-shadow-lg'>{price}</div>
        <div><CartButton /></div>
    </div>
  )
}

export default Modals