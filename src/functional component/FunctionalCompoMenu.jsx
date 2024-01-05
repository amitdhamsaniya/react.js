import React, { Component } from "react";
import { Link, Outlet } from 'react-router-dom';


const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ol>
                        <li><Link to="whatisfunctionalcomponent">what is functional component</Link></li>
                        <li><Link to="stateinfuncompo">what is state</Link></li>
                        <li><Link to="propsinfuncompo">props</Link></li>
                        <li><Link to="JSXinfuncompo">JSX</Link></li>
                        <li><Link to="controlledcomponent">Controlled component</Link></li>
                        <li><Link to="multiplecomponent">Multiple Input in single state component</Link></li>                        
                        <li><Link to="hookincomponent">Hooks</Link></li>                        
                        <li><Link to="useeffectincomponent">Use Effcet</Link></li>                        
                        <li><Link to="uselayouteffectincomponent">Use layout Effcet</Link></li>                        
                        <li><Link to="userefincomponent">Use Ref</Link></li>                        
                        <li><Link to="usecallbackincomponent">Use Callback</Link></li>                        
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;
