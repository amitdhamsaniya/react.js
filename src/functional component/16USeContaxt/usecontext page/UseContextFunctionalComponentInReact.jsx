import React from 'react';
const UseContextFunctionalComponentInReact = (props) => {

    return (
        <>
       <div className="alert alert-info">
        <div>
            <h2>syntax</h2>
            <p>const authContext = useContext(initialValue);</p>
        </div>
        <p>Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component</p>
       </div>
        </>
    );
};

export default UseContextFunctionalComponentInReact;