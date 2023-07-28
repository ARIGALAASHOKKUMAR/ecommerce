import {useState,useContext} from "react"
import {Link} from "react-router-dom"
import {useNavigate } from "react-router-dom";
import CartContext from "../../context"; 
import Item from "../cartItem";
import emptycart from "../images/emptycart.png"
import "./index.css"
const Cart=()=>{
    const [total,setotal]=useState(0)
    const navigate=useNavigate()
    const sum=(item)=>{
        setotal((prev=>prev+item))
    }
    return(
        <CartContext.Consumer>
            {value=>{
                const {cartList}=value
                let total=0
                for(let item of cartList){
                    total=total+item.price
                }
                const length=cartList.length
                if(length===0){
                    return(
                        <div className="empty-cart">
                        <h1>Empty Cart</h1>
                        <img src={emptycart} alt="no data"/>
                        <button onClick={()=>navigate("/home")}>Shop Now</button>
                        </div>
                    )
                }
                else{
                
                return(
                    <div className="cart">
                    <h1>My Cart</h1>
                    <button onClick={()=>navigate("/home")}>Back to Home</button>
                    <ul className="cart-items">
                        {cartList.map(each=>(
                           <Item data={each} key={each.id} sum={sum}/>
                        ))}
                    </ul>
                    <p className="para">Total cost:${total.toFixed(2)}</p>
                    <footer className="footer">
                        <button><Link to="/success" className="place-order">Place Order</Link></button>
                    </footer>
                    </div>
                )
            }
            }}
        </CartContext.Consumer>
    )
}

export default Cart