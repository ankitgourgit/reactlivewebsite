import React, { useEffect, useState } from "react";

const App=()=>{
  const[num,setNum]=useState(0)
  const[nums,setNums]=useState(0)
  useEffect(()=>{
    alert('i m clicked')
  },[num])
  return(
    <>
    <button onClick={()=>{
      setNum(num+1)
    }}> Click Me {num} 
    </button>
    <br />
    <button onClick={()=>{
      setNums(nums+1)
    }}> Click Me {nums} 
    </button>
    </>
  )
}
export default App;