import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context';
import Button from "../Button"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./index.css"

class Products extends Component{
    state={data:[],cartItems:[]}


    componentDidMount(){
        this.getProducts()
    }


    getProducts = async () => {
        const options = {
          method: 'GET',
        }
        const newapi="https://dummyjson.com/products?limit=200"
        const newresponse=await fetch(newapi,options)
        const newdata=await newresponse.json()
        this.setState({data:newdata.products})
        }

    renderproductdetails=()=>{
        return(
        <CartContext.Consumer>
        {value=>{
        let {addCartItem,text}=value
        if(text==="mob"){
            text="sma"
        }
        const {data}=this.state
        const onclickaddtocart=(item)=>{
            addCartItem(item)
        }
        const filteredProducts = data.filter((product) =>
            product.category.toLowerCase().includes(text.toLowerCase())
            );
        return(
        <>
        <ul className='products'>
        {filteredProducts.map(each=>(
        <li>
        <Link to={`products/${each.id}`} className='specific'>
        <img src={each.images[0]} alt="data" className="item"/>
        <p className="h1">{each.title}</p>
        <p className='rating'>{each.rating}</p>
        <p className="price">${each.price}</p>
        </Link>
        <Button func={onclickaddtocart} data={each}/>
        </li>
        ))
        } 
        </ul>
        </>
        )   
        }
        }
    </CartContext.Consumer>
)
    }


    render(){
       return(
        <>
        {this.renderproductdetails()}
        </>
       )
    }
}
export default Products

