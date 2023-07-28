import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItem:()=>{},
  text:"",
  setText:()=>{},
})

export default CartContext
