import React from 'react';
import CartContext from '../../context';
import CarouselComponent from '../carouselcompo';
import "./index.css"
const Caarousel = () => {
  return (
    <CartContext.Consumer>
    {value=>{
      const {text}=value
      if(text.length>0){
        return null
      }
      else{
      return(
       <CarouselComponent/>
      )
    }}}
    </CartContext.Consumer>
  );
  };

export default Caarousel;
