import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    
    <div>

      <label>Start number : </label>
      <input type="number" onChange={(e) => setCount(parseInt(e.target.value))} />

      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );

}

export default Counter