import React from "react";
import { useParams,useLocation } from "react-router-dom";

const User =()=>{
    const {fname,lname} =useParams();
    const location = useLocation();
    console.log(location)
    return(
        <>
        <h1> user {fname} {lname} page</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/ankit/gour` ? (<button onClick={()=>{
            alert("your are awesome ")
        }} >click me</button> ) :null }
        </>
    )
}
export default User;