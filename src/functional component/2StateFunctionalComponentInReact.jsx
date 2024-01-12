import React, { useState } from "react"; 

const StateFunctionalComponentInReact = () => {

    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
        <>
 
    <div className="mb-5">
      <h1>Increment/Decrement Example</h1>
      <p>Current Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div className="alert alert-info mt-5">
        <h3>syntax</h3>
        <p>const [var, setVar] = useState(0);</p>
      </div>
    </div>
         <ol>
          <li><h2>  what is state in raect?</h2></li>
          <p>The state in React is an instance of the React Component Class that can be defined as an object of a set of observable properties that control the behavior of the component.</p>
          <p>In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.</p>
         </ol>

        </>
    );
};

export default StateFunctionalComponentInReact;