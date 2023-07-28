import { Routes,Route,BrowserRouter} from 'react-router-dom';
import { Component } from 'react';
import Login from "./components/Login"
import Home from "./components/Home"
import Cart from "./components/cart"
import CartContext from './context';
import Final from './components/Sucess';
import Signup from './components/signup'; 
import ProductItemDetails from './components/itemdetails';
import './App.css';


class App extends Component{

  state={cartList:[],text:""}

  addCartItem=(item)=>{
    const {cartList}=this.state
      if(cartList.includes(item)!==true){
      this.setState(each=>({cartList:[...each.cartList,item]}))
      }
      else{
        alert("Item already added to cart")
      }
  }

  setText=(data)=>{
    this.setState({text:data})
  }

  removeCartItem=(id)=>{
    const {cartList}=this.state  
    const update=cartList.filter(each=>(
      each.id!==id
    ))
    this.setState({cartList:update})

  }


  render(){
    const {cartList,text}=this.state
    return(
  <BrowserRouter>
  <CartContext.Provider
  value={{cartList,text,addCartItem:this.addCartItem,setText:this.setText,removeCartItem:this.removeCartItem}}>  
    <Routes>
    <Route exact path="/" Component={Login}/>
    <Route exact path="/Home" Component={Home}/>
    <Route exact path="/cart" Component={Cart}/>
    <Route exact path="/success" Component={Final}/>
    <Route exact path="/signup" Component={Signup}/>
    <Route exact path="home/products/:id" Component={ProductItemDetails}/>
  </Routes>
  </CartContext.Provider>
  </BrowserRouter>
    )
  }
}


export default App;
