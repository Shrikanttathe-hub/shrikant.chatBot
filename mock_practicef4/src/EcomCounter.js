import React,{ useState } from "react";

export default function EcomCounter() {
  const [count, setCount] = useState(0)

  function inc(){
    setCount(count + 1)
  }
   
  function dec(){
    setCount(count - 1)
  }
  
    return (
        <>
        <h1>Quantity : {count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </>
   
  )
}
