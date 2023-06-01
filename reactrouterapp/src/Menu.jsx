import React from "react";
import {Link} from "react-router-dom";

const Menu=()=>{
    return(
        <>
        <div className="menu_style"> 
         <Link style={{color:"red",textDecoration:"none"}} to="/">About US</Link>
         <Link  style={{color:"red",textDecoration:"none"}}  to="/service">Service</Link>
         <Link style={{color:"red",textDecoration:"none"}}  to="/search">Search</Link>
         <Link  style={{color:"red",textDecoration:"none"}}  to="/contact">Contact US</Link> 
         <Link  style={{color:"red",textDecoration:"none"}}  to="/user">User</Link> 
         </div>
        </>
    )
}
export default Menu;