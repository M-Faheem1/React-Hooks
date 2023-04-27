import React, { useState } from 'react'

function HookCounter2() {
  const initialCount = 0
  const [count, setCount]= useState(initialCount)

  const incrementFive = ()=> {
    setCount(prevCount => prevCount + 5)
  }
  return (
    <div>
      Count : {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounter2
