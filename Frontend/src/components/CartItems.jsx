import React from 'react'
import {useSelector} from "react-redux";
import image from "../images/cart-image.png"
import { useAuth } from "../context/AuthProvider";

import {Link} from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  const [authUser, setAuthUser] = useAuth();

  return (
    
    <>
    {cartItems.length === 0 ?  // if it is true
    <div>
      <img 
      className='md:ml-[450px] md:h-[600px] md:w-[600px] mt-[40px]'
      src={image} ></img>
      <h1 className='dark:text-white md:mt-[68px] mt-[64px] text-center font-bold text-3xl'> Your Cart is empty </h1>
      <h2 className='text-center mt-3 md:mb-8'>Looks Like you have not added anything to your cart. Go ahead & explore some Books from our store</h2>
    </div>
    :   // if it is false
   <div className=''>
    {cartItems.map((item)=>{
        return (
          <>
          <div className='flex md:h-80 mt-[64px] md:w-auto md:mt-[68px] md:ml-32 ml-10'>

            <div>
              <img className='md:h-80 md:w-auto h-40 ' src={item.image}></img>
            </div>
            <div className='ml-10'>
                <h1 className='text-lg'>{item.name}</h1>
                <h2 className='text-lg'>{item.title}</h2>
                <h2 className='text-lg'><span>$</span>{item.price}</h2>
            </div>
          </div>
          </>
        )
    })}
    <div className='mt-8'>
            <Link className='bg-green-500 text-white p-4 rounded-lg ml-[134px] md:ml-[685px]' to={authUser? "/proceedtobuy":"/signup"}>Proceed to Buy</Link>
          </div>
   </div>
   }
    
    </>
    
  )
}

export default CartItems
