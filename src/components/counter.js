import React, { useState } from 'react';


   function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  let[count, setCount] = useState(0);


  return (
    
    <div>
      <input
      type="number"
      count={count}
      onChange={e => setCount(e.target.value)}/>
      <p>The counter is at : {count}
       </p>
      <button onClick={() => setCount(Number(count) + 1)}>
        +1
      </button>
      <button onClick={() => setCount(Number(count) - 1)}>
        -1
      </button>
    </div>  
  );
}

export default Counter;