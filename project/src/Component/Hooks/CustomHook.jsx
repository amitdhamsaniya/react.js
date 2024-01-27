import React, { useState } from 'react';

const CustomHook = (initState, initError) => {
    const [inp, setInp] = useState(initState);
    const [error, setError] = useState(initError);
    const handleChange = (e) => {
        // console.log("called");
        let spanId=[e.target.name]+"Error";
        if (e.target.value == "") {
            setError({ ...error, [spanId]: "this fild is req!!.." })
        } else {
            setError({ ...error, [spanId]: "" })
            setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        }
    }
    return { handleChange, inp,error };
};

export default CustomHook;

// import React, { useState } from "react";



// const CustomHook = (initState, initError) => {
//     // console.log("CustomHook");
//     const [inp, setInp] = useState(initState);
//     const [errors, setError] = useState(initError);
//     const handleChange = (e) => {
//         // console.log("inside hangle change");
//         let SpanId = [e.target.name] + "Error";
//         if (e.target.value == '') {
//             setError({ ...errors, [SpanId]: "This field is required" })
//         } else {
//             setError({ ...errors, [SpanId]: "" })
//             setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
//         }
//     }
//     return { handleChange, inp, errors }
//     // return  handleChange
// }



// export default CustomHook;