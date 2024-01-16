import React, { useEffect, useState, useLayoutEffect } from 'react';

const UseLayEffectHookinFunctionalComponentInReact = () => {
  const [counter, setCnt] = useState(0)
  const [secondState, anything] = useState(0)
  const [refreshStatus, setRefreshStatus] = useState(true)
  useEffect(() => {
    console.log("called useEffect");
    getData()
  })
  const getData = async () => {
    await fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
      console.log(result);
    })
  }
  useLayoutEffect(() => {
    console.log("called useLayoutEffect");
    fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
      console.log(result);
    })
    return () => {
      console.log("called return");
    }
  })
  return (
    <>
      UseEffectHooksInFunctionalCompo
      <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button><br />
      {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
      <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>
      <div className="mt-5">
        <p>The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. </p>
      </div>
    </>
  );
};


export default UseLayEffectHookinFunctionalComponentInReact;



// import React from 'react';
// import { useLayoutEffect } from 'react';
// import { useState } from 'react';

// const UseLayEffectHookinFunctionalComponentInReact = () => {
//   const [value, setvalue] = useState('hello.');
//   useLayoutEffect(() => {
//     // console.log("hello..");
//   });
//   setTimeout(() => {
//     setvalue("geeks")
//   }, 2000);
//   return (
//     <>
//       <h1>this is {value} number</h1>
//     </>
//   );
// };

// export default UseLayEffectHookinFunctionalComponentInReact;