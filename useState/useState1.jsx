import React,{useState} from 'react'

function Counter() {
    let [counter,updateCounter] = useState(0);

    

  return (
    <div>
        <h1>Click to count</h1>
        <p>you clicked {counter-2}times.</p>
        <button onClick={()=>updateCounter(counter+2)}>Count</button>
        
    </div>
  )
}

export default Counter;