import React, { useState } from "react";
// deconstructure, add hook you wish to use
// hooks only work with a FUNCTION
import './app.css';

function App() {
  const [count, setCount] = useState(4)
  // starts at 4
  // called everytime function is ran
  // useState always return an array with 2 values
  // first value is current state, 2nd is function that updates state


  // if doing something complex like long math, can slow down process bcuz ran so many times
  // useState has function version that runs only one time when rendered
  // function App() {
  //   const [count, setCount] = useState(() => {
  //     console.log('run funtion')
  //     return 4
  //   })
  // }
  // only ran once

  // function downCount() {
  //   setCount(count - 1)
  //   setCount(count - 1)
  // }
  // NOTE: incorrect way to update value based on prev value
  // if needed to decrease value by 2, would not work


  function downCount() {
    setCount(prevCount => prevCount -1)
  }
  // prev count is passed into this
  // subs from prev count
  // will sub 2 each click

  function upCount() {
    setCount(prevCount => prevCount +1)
  }

 return (
  <div className="contain">
    <button onClick={downCount}>-</button>
    <span>{count}</span>
    <button onClick={upCount}>+</button>
  </div>
 )
  
}

export default App;
