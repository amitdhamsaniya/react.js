import React, { useState } from 'react';

const ControlledFunctionalComponentInReact = () => {
    const [data,anything] = useState("defult")
    const [state2,setState] = useState("defult")
    let variable_data = "default"
    const inpChangEvent = (event) =>{
        console.log("called",event.target.value);
        anything (event.target.value) ;
    }
    return (
        <>
         <input type="text" onChange={inpChangEvent} name='' id='' />   
         <input type="text" onChange={(event)=>setState(event.target.value)} name='' id='' />   
         {/* <p>{variable_data}</p> */}
         <p>{data}</p>
         <p>{state2}</p>

         <p>React’s Controlled Components manage form data via component state, receiving values through props and updating through callbacks like onChange. The parent component maintains the state, passing updated values as props to the controlled component.</p>
        </>
    );
};

export default ControlledFunctionalComponentInReact; 