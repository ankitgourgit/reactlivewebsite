import React from "react";

const Note=(porps)=>{
    return(
        <>
        <div className="note">
            <h1>{porps.title}</h1>
            <br />
            <p>{porps.content}</p>  
            <button className="btn">Delete</button>
        </div>
        </>
    )
}
export default Note