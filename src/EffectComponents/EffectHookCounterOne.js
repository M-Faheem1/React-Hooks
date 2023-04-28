import React, { useEffect, useState } from 'react'

function EffectHookCounterOne() {
  const [count, setCount] = useState (0)
  const [name, setName] = useState ('')
  useEffect (()=>{
    document.title = `Clicked ${count} times`
  })
  return (
    <div >
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick = { ()=> setCount(count+1)}>Clicked {count} times.</button>
    </div>
  )
}

export default EffectHookCounterOne
