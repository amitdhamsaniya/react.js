import React, { useRef, useState } from 'react';

const UseRefHookinFunctionalComponentInReact = () => {
    const [data,anything] = useState(null)
    const focusPoint = useRef(null)
    const onclickHandler = (event) => {
        console.log(focusPoint);
        console.log(event);
        console.log(event.target);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    }
    return (
        <>
            <div>
                <button onClick={onclickHandler}>Action</button>
            </div>
            <label className='mt-3'>
                click on the action button to focus and populet the text.
            </label ><br />
            <textarea className='mt-3 mx-3'  ref={focusPoint} />
            <textarea onChange={(event) => {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                anything(event.target.value);
            }} />
            {data}

            <div className="alert alert-info">
                <p>The useRef hook is a new addition in React 16.8. </p>
                <h3>syntex</h3>
                const refContainer = useRef(initialValue);
            </div>
            <ol>
                <li><h2>What is useRef hook?</h2></li>
                <p>The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values</p>
            </ol>
        </>
    );
};
export default UseRefHookinFunctionalComponentInReact;