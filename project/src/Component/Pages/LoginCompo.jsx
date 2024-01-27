import React from 'react';
import { Link } from 'react-router-dom';
import CustomHook from './../Hooks/CustomHook.jsx';

const LoginCompo = () => {
    const { handleChange, inp, error } = CustomHook({ username: "", password: "" }, {})


    return (
        <>
            <div className="row mt-5 ">
                <div className="col-4 shadow bg-body rounded offset-4 mt-5">
                    <div className="card ">
                        <div className="card-header text-center"> <h3>Login</h3></div>
                        <div className="card-body">
                            <form method="post">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} onBlur={handleChange} placeholder='Enter your name' className='form-control' name="username" />
                                        {/* {JSON.stringify(inp)} */}
                                        {/* {JSON.stringify(error)} */}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} placeholder='Enter your password' className='form-control'  name="password"/>
                                    </div>
                                </div>
                                <div className="row mt-3 text-center">
                                    <div className="col">
                                        <input type="submit" className='btn btn-primary mx-4' value="login" />
                                        <input type="reset" className='btn btn-danger ' value="cancel" />
                                    </div>
                                </div>
                                <div className="row mt-3 text-center">
                                    <div className="col">
                                        <Link to="/rigistration">Creact a new account</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default LoginCompo;