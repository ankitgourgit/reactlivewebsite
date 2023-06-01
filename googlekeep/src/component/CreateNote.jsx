import React, { useState } from "react";

const CreateNote= (props)=>{
    const[note,setNote]=useState({
        title: "",
        content: "",
    });

    const InputEvent=(event)=>{
        const value=event.target.value
        const name=event.target.name
      //  const {name,value}=event.target

        setNote((prevData)=>{
            return {
                ...prevData,
                 [name]:value,
                }
        })
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })  
    };

    return(
        <>
        <div className="main_note">
            <form action="">
                <input 
                type=" text"
                 value={note.title}
                 name="title"
                 onChange={InputEvent} 
                 placeholder="Title" 
                 autoComplete="off" 
                 />
                <textarea
                  value={note.content}
                  name="content"
                  onChange={InputEvent} 
                 placeholder="Write a note..."
                  cols="30" 
                  rows="10"
                  ></textarea>
                <button onClick={addEvent}>
                    +
                </button>
            </form>

        </div>
        </>
    )
}
export default CreateNote