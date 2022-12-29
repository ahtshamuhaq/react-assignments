import React from 'react'
import MyImage from './git.png';
import { useState } from 'react';
export default function Counter() {
  const  subtracting=()=>{
    setcounter (counter-parseInt(value))

    }
    const adding = ()=>{
       setcounter (counter+parseInt(value))
    }
    const zero = ()=>{
       
         setcounter(0)
    }
    const [value, setValue] = useState(1)

    const [counter, setcounter] = useState(0)
  const  incrementValue =(e)=>{
      setValue(e.target.value)
      
}
  return (
    <div>
<nav className="navbar bg-body-tertiary container ">
  <form className="container-fluid justify-content-between align-items-center ">
   <a href="/">Home</a>
    <h3>Counter</h3>
    <img  width={"50px"} height={"50px"} src={MyImage} alt="horse" />

  </form>
</nav>
<div className="container my-4">
    <h2>{counter}</h2>
</div>
<div className="container ">
    <button className="btn mx-2 btn-primary" onClick={subtracting}>-</button>
    <button className="btn mx-2 btn-primary" onClick={adding}>+</button>
</div>
<div className="container my-4">
    <p>
    Increment/Decrement by:<input type="number" onChange={incrementValue} id="changeBy" defaultValue="1" min="1" max="10"/>
    </p>
    
</div>
<div className="container ">
    <button className="btn mx-2 btn-primary" onClick={zero}>Reset</button>
</div>
    </div>
  )
}
