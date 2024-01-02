// import React, { useEffect, useState, useLayoutEffect} from 'react';

// const UseLayEffectHookinFunctionalComponentInReact = () => {
//   const [Counter,setCnt] = useState(0)
//   const [SecoundState,anything] = useState(0)
//   const [refreshStatus, setRefreshStatus] = useState(true)
//   useEffect(()=>{
//     console.log("called useEffect");
//     getData()
//   })
//   const getData = async () => {
//     await  fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
//         console.log(result);
//     })
// }
// useLayoutEffect(() => {
//   console.log("called useLayoutEffect");
//   fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
//       console.log(result);

//   })
//   return () => {
//     console.log("called return");
// }
// })
//     return (
//         <>
//         <button onClick={setCnt(Counter + 1)}>increment{Counter}</button>
//         <button onClick={anything(SecoundState + 1)}>increment{Counter}</button>
//         <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

//         </>
//     );
// };

// export default UseLayEffectHookinFunctionalComponentInReact;

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Increment/Decrement Example</h1>
      <p>Current Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
