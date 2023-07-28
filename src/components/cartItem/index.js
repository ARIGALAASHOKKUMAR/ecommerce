import React,{useState,useContext} from "react"
import CartContext from "../../context"
import "./index.css"
const Item=(props)=>{
    const [quantity,setquantity]=useState(1)
    const {data,sum}=props
    const decrease=()=>{
        if(quantity>1){
        setquantity((prev)=>prev-1)
        }
    sum(data.price)
    }
    const increase=()=>{
        setquantity((prev)=>prev+1)
        sum(data.price)
    }
    
    return(
        <CartContext.Consumer>
            {value=>{
                const {removeCartItem}=value
                const removee=(id)=>{
                    removeCartItem(id)
                }
                return(
                <li className="cart-item">
                <div className="cart-image">
                <img src={data.images[0]} alt="data" className="item-image"/>
                <p><button onClick={decrease}>-</button>{quantity}<button onClick={increase}>+</button></p>
                </div>
                <div className="cart-details">
                    <p>{data.title}</p>
                    <p>{data.rating}</p>
                    <p>${(data.price*quantity).toFixed(2)}</p>
                    <button onClick={()=>removee(data.id)}>Remove Item</button>
                </div>
            </li>
        )
            }}
        </CartContext.Consumer>
    )
}
export default Item