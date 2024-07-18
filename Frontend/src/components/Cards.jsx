import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/CartSlice'

const Cards = ({item}) => {
  const dispatch = useDispatch()
  const handleClick = (item)=>{
    dispatch(addItem(item))
    toast.success("Added to cart")
  }

  return (
    <>
    <div>
        <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className='md:h-[400px] cursor-pointer' src={item.image} alt="book-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline dark:hover:bg-pink-500 dark:hover:text-white cursor-pointer hover:bg-pink-500 hover:text-white">${item.price}</div>
              <div className=" cursor-pointer px-3 py-2 rounded-3xl border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                <button onClick={()=>handleClick(item)}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Cards;
