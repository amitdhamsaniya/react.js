import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ButtonsCompo = forwardRef((props,Ref) => {
    const[toggle, setToggle] = useState(false);
    useImperativeHandle(Ref,()=>({

        alertToggle(){
            console.log("called");
            setToggle(!toggle);
        }
    }))

    return (
        <>
       <p>props:{props.data}</p> 
       <p>this contant child :{toggle&&<span>Toggle</span>}</p>    
        </>
    );
});

export default ButtonsCompo;

