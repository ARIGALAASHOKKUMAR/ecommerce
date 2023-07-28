import order from "../images/order.gif"
import { useNavigate } from "react-router"
import "./index.css"
const Final=()=>{
    const Navigate=useNavigate()
    return(
        <div className="Final">
            <img src={order} alt="no data" className="success-image"/>
            <button onClick={()=>Navigate("/Home")}>Back To shopping</button>
        </div>
    )
}

export default Final