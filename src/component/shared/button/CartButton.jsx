import React from 'react'

const CartButton = ({a,href}) => {
  return (
    <div>
         <button className="rounded-lg p-2 w-[15rem] bg-green-500 hover:opacity-80 hover:text-white"><a href={href}>{a}</a></button>
    </div>
  )
}

export default CartButton