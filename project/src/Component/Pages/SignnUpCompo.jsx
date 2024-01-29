// import React from 'react';
// // import { Link } from 'react-router-dom';
// import CustomHook from './../Hooks/CustomHook.jsx';

// const SignnUPCompo = () => {
//     const { handleChange, inp, error } = CustomHook({ username: "", password: "" }, {})

//     const register = (event) => {
//         // console.log(inp);
//         fetch("http://localhost:5000/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ inp }),
//         }).then((res) => res.json()).then((result) => {
//             console.log(result);
//         })
//     }
//     return (
//         <>
//             <div className="row mt-5 ">
//                 <div className="col-4 shadow bg-body rounded offset-4 mt-5">
//                     <div className="card ">
//                         <div className="card-header text-center"> <h3>Registration</h3></div>
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col">
//                                     <input type="text" onChange={handleChange} placeholder='Enter your name' className='form-control' />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col">
//                                     <input type="password " onChange={handleChange} placeholder='Enter your password' className='form-control' />
//                                 </div>
//                             </div>
//                             <div className="row mt-3 text-center">
//                                 <div className="col">
//                                     <input type="submit" className='btn btn-primary mx-4' onClick={register} value="login" />
//                                     <input type="submit" className='btn btn-danger ' value="cancel" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignnUPCompo;

import React from 'react';
import ReactDOM from 'react-dom';

import { Formik, Field, Form } from 'formik';


const SignnUpCompo = () => {
    return (
        <>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />
<br />
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />
<br />
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};
export default SignnUpCompo;
