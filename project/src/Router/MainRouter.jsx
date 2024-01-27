import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutusCompo from "./../Component/Pages/AboutUs"
import HomeCompo from "./../Component/Pages/HomeCompo.jsx"
import HeaderCompo from './../Component/Common/HedaerCompo.jsx';
import LoaderCompo from './../Component/Common/LoaderCompo.jsx';
import ContactCompo from './../Component/Pages/ContactCompo.jsx';
import ApiCalling from './../Component/Pages/APIExample.jsx';
import LoginCompo from './../Component/Pages/LoginCompo.jsx';
import SignUPCompo from '../Component/Pages/SignnUpCompo.jsx';

// const ClassCompo = lazy(()=> import('./../Component/ClassComponent/ClassCompoRoute.jsx'))

const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }, {
        path: "/about",
        element: (<><HeaderCompo /><AboutusCompo /></>),
    }, {
        path: "/contact",
        element: (<><HeaderCompo /><ContactCompo /></>),
    }, {
        path: "/api",
        element: (<><HeaderCompo /><ApiCalling /></>),
    }
    , {
        path: "/login",
        element: (<><HeaderCompo /><LoginCompo /></>),
    }
    , {
        path: "/rigistration",
        element: (<><HeaderCompo /><SignUPCompo /></>),
    }
])

export default router;