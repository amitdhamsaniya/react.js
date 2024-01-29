import React from 'react';
// import { Link } from 'react-router-dom';
import CustomHook from './../Hooks/CustomHook.jsx';

const SignnUPCompo = () => {
    const { handleChange, inp, error } = CustomHook({ username: "", password: "" }, {})

    const register = (event) => {
        // console.log(inp);
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inp }),
        }).then((res) => res.json()).then((result) => {
            console.log(result);
        })
    }
    return (
        <>
            <div className="row mt-5 ">
                <div className="col-4 shadow bg-body rounded offset-4 mt-5">
                    <div className="card ">
                        <div className="card-header text-center"> <h3>Registration</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <input type="text" onChange={handleChange} placeholder='Enter your name' className='form-control' />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <input type="password " onChange={handleChange} placeholder='Enter your password' className='form-control' />
                                </div>
                            </div>
                            <div className="row mt-3 text-center">
                                <div className="col">
                                    <input type="submit" className='btn btn-primary mx-4' onClick={register} value="login" />
                                    <input type="submit" className='btn btn-danger ' value="cancel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignnUPCompo;


// import React from 'react';
// import { Formik, Form, Field } from 'formik';

// function validateEmail(value) {
//     let error;
//     if (!value) {
//       error = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       error = 'Invalid email address';
//     }
//     return error;
//   }
  
//   function validateUsername(value) {
//     let error;
//     if (value === 'admin') {
//       error = 'Nice try!';
//     }
//     return error;
//   }
  
// const SignnUpCompo = () => {
//     return (
//         <>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         username: '',
//         email: '',
//       }}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched, isValidating }) => (
//         <Form>
//           <Field name="email" validate={validateEmail} />
//           {errors.email && touched.email && <div>{errors.email}</div>}

//           <Field name="username" validate={validateUsername} />
//           {errors.username && touched.username && <div>{errors.username}</div>}

//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>        
//         </>
//     );
// };

// export default SignnUpCompo;