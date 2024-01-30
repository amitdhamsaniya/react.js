import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from './../Hooks/CustomHook.jsx';

const LoginCompo = () => {
    const navigate = useNavigate();

    const { handleChange, inp, errors } = CustomHook({ username: "", password: "",role:"2" }, {})
    const register = (event) => {
        event.preventDefault()
        // console.log(inp);
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({"username":"insert","password":"insert","email":"insert@mail.com"})
            body: JSON.stringify(inp)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
            navigate("/login")
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <div className="card">
                        <div className="card-header text-center"><h2>Registration</h2></div>
                        <div className="card-body">
                            <form method="post">

                                <div className="row ">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} placeholder='Enter User Name' className='form-control' name="username" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="password" onChange={handleChange} placeholder='Enter Password' className='form-control' name="password" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" onChange={handleChange} placeholder='Enter Email' className='form-control' name="email" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        {/* <input type="button" className='btn btn' name="" id="" /> */}
                                        <input type="submit" className='btn btn-primary' onClick={register} name="btn-save" value="Login" id="" /> &nbsp;
                                        <input type="reset" className='btn btn-danger' name="" value="Cancel" id="" />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LoginCompo;