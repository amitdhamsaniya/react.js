// import React, { forwardRef, useImperativeHandle, useState } from 'react';

// const ButtonsCompo = forwardRef((props,Ref) => {
//     const[toggle, setToggle] = useState(false);
//     useImperativeHandle(Ref,()=>({

//         alertToggle(){
//             console.log("called");
//             setToggle(!toggle);
//         }
//     }))

//     return (
//         <>
//        <p>props:{props.data}</p> 
//        <p>this contant child :{toggle&&<span>Toggle</span>}</p>    
//         </>
//     );
// });

// export default ButtonsCompo;

import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const ButtonsCompo = forwardRef((props, ref) => {
    const [ele, setEle] = useState()
    const [ele2, setEle2] = useState()
    const arr = [1, 2, 3, 4, 5, 6];
    useImperativeHandle(ref, () => ({
        getAlert() {
            // suffres(arr)
            let suffRes = suffle(arr)
            setEle(suffRes[0]);

        }
    }));
    useEffect(() => {
        let suffRes = suffle(arr)
        setEle(suffRes[0])
        setEle2(suffRes[1])
        suffRes.shift();
        suffRes.shift();
        props.onAddHandler(suffRes)
    }, [ele])
    const suffle = (Array) => {
        for (let index = Array.length - 1; index > 0; index--) {
            const j = Math.floor(Math.random() * (index + 1));
            const temp = Array[index];
            Array[index] = Array[j]
            Array[j] = temp
        }
        return Array
    }
    return (
        <>
            <h3>element{ele}</h3>
            <h3>element{ele2}</h3>
        </>
    );
});

export default ButtonsCompo;