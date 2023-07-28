import Raect,{useState} from "react"

const Button=(props)=>{

    const [status,setStatus]=useState(true)
    const {func,data}=props
    const cart=(data)=>{
        func(data)
        setStatus((false))

    }
    const text=status?"Add To Cart":"Added To Cart"
    return(
        <button onClick={()=>cart(data)}>{text}</button>
    )
}

export default Button