import React from 'react';
import { Link, Outlet } from 'react-router-dom';    
// import img1 from '../img/difference.class and functional.png';    
const ExampleCompo = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <Link to="classcomponent"><h2>class componenet</h2></Link>
                    </div>
                    <div className="col">
                        <Link to="functioncomponent"><h2>functional componenet</h2></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
                {/* <div>
                    <img src={img1} alt="" />
                </div> */}
            </div>

        </>
    );
};

export default ExampleCompo;