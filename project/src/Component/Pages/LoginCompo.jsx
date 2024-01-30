import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from './../Hooks/CustomHook.jsx';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const SignnUpCompo = () => {
    // const handleChange = CustomHook()
    const navigate = useNavigate();
    const [loginError,setLoginError] = useState(false);
    const [serverError,setServerError] = useState(false);
    const { handleChange, inp, errors } = CustomHook({ username: "", password: "" }, {})
    const [cookies, setCookie] = useCookies(['name']);
    const login = (event) => {
        event.preventDefault()
        // console.log("inp Data", inp);
        // axios.get('http://localhost:5000/users?username=test&password=123').then(function (response) { console.log(response); })
        // axios.get('http://localhost:5000/users?username='+inp.username+'&password='+inp.password).then(function (response) { console.log(response); })
        axios.get(`http://localhost:5000/users?username=${inp.username}&password=${inp.password}`).then(function (response) { 
            // console.log(response.data.length);
            if (response.data.length > 0) {
                localStorage.setItem('itemsLocalStorage', JSON.stringify({"data":"itemsLocalStorage"}));
                sessionStorage.setItem('itemsSessionStorage', JSON.stringify({"data":"itemsSessionStorage"}));
                setCookie('loggedin', "1");
                // console.log(response.data[0].role);
                if (response.data[0].role == 1) {
                    console.log("inside if");
                    setCookie('role', "1");
                    navigate("/admin")
                } else {
                    navigate("/")
                    setCookie('role', "2");
                    console.log("inside else");
                }
                setLoginError(false)
            } else {
                setLoginError(true)
            } 
        }).catch((error)=>{
            console.log(error);
            setServerError(true)
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <div className="card">
                        <div className="card-header text-center"><h2>Login</h2></div>
                        <div className="card-body">

                        { (serverError)?<> <p className="alert alert-danger">Server is not started yet</p> </>:<>
                        <form method="post">
                                <div className="row ">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} onBlur={handleChange} placeholder='Enter User Name' className='form-control' name="username" id="" />
                                        {/* {JSON.stringify(inp)}
                                        {JSON.stringify(errors)} */}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="password" onChange={handleChange} placeholder='Enter User Name' className='form-control' name="password" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        {/* <input type="button" className='btn btn' name="" id="" /> */}
                                        <input type="submit" onClick={login} className='btn btn-primary' name="btn-save" value="Login" id="" /> &nbsp;
                                        <input type="reset" className='btn btn-danger' name="" value="Cancel" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <Link to="/registration">Create new account</Link>
                                    </div>
                                </div>
                            </form>
                            { (loginError)?<> <p className="alert alert-danger">Invalid user</p> </>:"" }
                            </> }


                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignnUpCompo;
