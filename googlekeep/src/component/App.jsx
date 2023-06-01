import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const[addItem,setAddItem]=useState([]);


  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData,note]
    })
  }
  return (
    <>
    <Header/>
   
    <CreateNote passNote={addNote}/>

    <Note/>
   { addItem.map((value,index)=>{
      return <Note key={index}
       id={index}
       title={value.title}
       content={value.content}
       />
    })}

    <Footer/>
    </>
  );
}

export default App;
