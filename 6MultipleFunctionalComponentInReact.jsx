import React, { useState } from 'react';

const MultipleFunctionalComponentInReact = () => {
    const [formDate, setFromData] = useState({})
    const inpChangeEvent = (event) => {
        setFromData({ ...formDate, [event.target.name]: event.target.value })
    }
    return (
        <>
            <input type="text" onChange={inpChangeEvent} name="fname" id="fname"/>        
         <input type="text" onChange={inpChangeEvent} name="lname" id="lname"/>        
         <input type="text" onChange={inpChangeEvent} name="email" id="email"/>        
         <p>{JSON.stringify(formDate)}</p>
        </>
    );
};

export default MultipleFunctionalComponentInReact;