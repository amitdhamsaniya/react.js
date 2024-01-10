import React, { useRef } from 'react';
import ButtonsCompo from './ButtonsCompo.jsx';

const UseImperativeHandleFunctionalComponentInReact = () => {
    const buttonRef = useRef(null);

    return (
        <>
            <button onClick={(event) => { buttonRef.current.alertToggle() }}>click</button>
            <ButtonsCompo ref={buttonRef} data="this will containes props data" />

            <div className="alert alert-info">
                <div>
                    <h2>syntax</h2>
                    <p className='alert alert-info'>useImperativeHandle(ref, createHandle, [dependencies])</p>
                </div>
                <p>The useImperativeHandle, which allow you to customize the imperative  behavior of child component when accessed from it parent component. </p>
                <p> In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.</p>

            </div>

        </>
    );
};

export default UseImperativeHandleFunctionalComponentInReact;
