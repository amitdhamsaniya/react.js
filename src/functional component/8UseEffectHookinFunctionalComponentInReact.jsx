import React, { useEffect, useState } from 'react';

const UseEffectHookinFunctionalComponentInReact = () => {
    const [counter, setCnt] = useState(0)
    const [secoundcounter, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(0)
    // useEffect(() => {
    //     console.log("called");
    //     fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((result) => {
    //         console.log(result);
    //     })
    // }, [refreshStatus])
    return (
        <>
            <button onClick={() => { setCnt(counter + 1) }}>incment{counter}</button>
            <button onClick={() => { anything(secoundcounter + 1) }}>incment{secoundcounter}</button>
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

            <div className="alert alert-info mt-5">
                <p>The useEffect Hook is a powerful tool in React that helps developers manage side effects in functional components. It runs asynchronously after the browser repaints the screen.</p>
                <p>This hook is commonly used for handling side effects such as fetching data, working with subscriptions, or interacting with the DOM. Essentially, useEffect lets you control what happens in your component based on different situations, making your code more flexible and efficient.</p>

            </div>
        </>
    );
};

export default UseEffectHookinFunctionalComponentInReact;