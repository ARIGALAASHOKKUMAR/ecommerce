import { Component } from "react";
import Header from "../Header"
import Caarousel from "../carousel"
import Products from "../products"
import "./index.css"
import { Navigate, useNavigate } from "react-router";
import Cookies from "js-cookie";

const Home =()=>{
    const navigate=useNavigate()
    const res=Cookies.get("result")
    if(res!==undefined){
    return(       
            <>
            <h1 className="dummy">kahidjoidsajoisajdoisajdoisajdosajdjsajskajdsadsaidjsaidjsadjsadsakjdnsakjdnsakjdnsakjdsjdsakjdnsakjdkjsdsdjasjdnsajdoasjoiasjoaoiaoiaoaooassdnfkjndssadjsidjsaodjsiokajsndsajdoisajdoisajdoisisjIJOIAjsoiajoiaJDKJSAODOSAKDPOS<br/>AKDPOSAK</h1>
            <Header/>
            <Caarousel/>
            <Products/>
            </>
)
}
else{
    return(
       <Navigate to="/"/>
    )
}
}
export default Home