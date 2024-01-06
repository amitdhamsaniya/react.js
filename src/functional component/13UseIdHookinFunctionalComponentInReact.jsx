import React, { useId } from 'react';

const UseIdHookinFunctionalComponentInReact = () => {
    const id1 = useId();
    console.log(id1);
    const id5 = useId();
    console.log(id5);
    return (
        <>
         <input type="text" id={id1} />
         <input type="text" id={id5} />
        </>
    );
};

export default UseIdHookinFunctionalComponentInReact;




  
