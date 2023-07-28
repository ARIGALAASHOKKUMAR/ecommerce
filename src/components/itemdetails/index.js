import { useState ,useEffect} from "react"
import { useParams,useNavigate } from "react-router"
import { Carousel } from 'react-responsive-carousel';
import CartContext from "../../context";
import Header from "../Header";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./index.css"
const ProductItemDetails=()=>{
    const [selected_pro,setselectpro]=useState([])
    console.log(selected_pro.images && selected_pro.images[0])
    const { id } = useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        first_set()
        window.scrollTo(0, 0);
    },[])

    const first_set=async ()=>{
        const options = {
        method: 'GET',
      }
        const newapi="https://dummyjson.com/products?limit=100"
        const newresponse=await fetch(newapi,options)
        const newdata=await newresponse.json()
        setselectpro(newdata.products[id-1])
    }
    return(
        <CartContext.Consumer>
            {value=>{
                 let {addCartItem}=value
                 const descaddcart=()=>{
                    addCartItem(selected_pro)
                 }

                return(
                    <div>
                        <Header/>
                    <div className="item-details-mother">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                        className="itemm"
                    >
                  {selected_pro.images && selected_pro.images.map(each=>(
                    <div>
                        <img src={each} alt="no data"/>
                    </div>
                  ))}          
                  </Carousel>
                    <div className="remain">
                        <h1>{selected_pro.title}</h1>
                        <h1>${selected_pro.price}</h1>
                        <p>Rating:{selected_pro.rating}</p>
                        <p>Stock({selected_pro.stock})</p>
                        <h1>Description</h1>
                        <p>{selected_pro.description}</p>
                        <div>
                            <button className="addcart" onClick={descaddcart}>ADD TO CART</button>
                            <button className="buy">BUY NOW</button>
                        </div>
                        <button onClick={()=>navigate("/home")}>Back to Home</button>
                        <h1>Rating and reviews</h1>
                        <h3>1.Awesome</h3>
                        <p>Best Item I have purchased</p>
                        <h3>2.Faboulous</h3>
                        <p>It is working fine</p>
                    </div>
                </div>
                </div>
                )
            }}
        </CartContext.Consumer>
    )

}

export default ProductItemDetails