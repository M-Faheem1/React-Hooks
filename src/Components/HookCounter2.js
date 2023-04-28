import React, { useState } from 'react'

function HookCounter2() {
  const initialCount = 0
  const [count, setCount]= useState(initialCount)

  const incrementFive = ()=> {
    setCount(prevCount => prevCount + 5)
  }

  const decrementFive = ()=> {
    setCount(prevCount => prevCount -5)
  }

  return (
    <div>
      Count : {count}
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={incrementFive}>Increment 5</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={decrementFive}>Decrement 5</button>
      </div> 
    </div>
  )
}

export default HookCounter2
