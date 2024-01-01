import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom"
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ol>
                    <li>
                        <Link to="whatiscomponent">what is componenet</Link>
                    </li>
                    <li>
                        <Link to="classcomponent">Class</Link>
                    </li>
                    <li>
                        <Link to="stateclasscomponent">data</Link>
                    </li>
                    <li>
                        <Link to="PropsClassComponentInReact">PropsClassComponentInReact</Link>
                    </li>
                </ol>
                <div className="row">
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoMenu;