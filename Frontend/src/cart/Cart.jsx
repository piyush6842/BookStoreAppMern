import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItems from '../components/CartItems'

const Cart = () => {
  return (
    <>
    <Header />
    <div className=" min-h-screen">
      <CartItems />
    </div>
    <Footer />
  </>
  )
}

export default Cart
