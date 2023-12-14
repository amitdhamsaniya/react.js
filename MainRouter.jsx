import {Suspense, lazy} from "react"
import { createBrowserRouter } from "react-router-dom";
import AboutCompo from "../compponent/pages/AboutUs"
import HomeCompo from "../compponent/pages/HomeCompo.jsx"
import HedarCompo from "../compponent/comman/HedarCompo.jsx"
import ContactCompo from "../compponent/pages/ContactCompo.jsx"
import ExampleCompo from "../compponent/pages/ExampleCompo.jsx"
// import ClassesCompo from "../compponent/ClassComponent/ClassesCompoReact.jsx";
import FunctionlCompo from "../compponent/pages/FunctionlCompo.jsx";
import React from "react";


//  const ClassesCompo = React.lazy(()=>)
 const ClassesCompo = React.lazy(()=>import("../compponent/ClassComponent/ClassesCompoReact.jsx"))
const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }, {
        path: "/about",
        element: (<><HedarCompo /><AboutCompo /></>),
    }
    , {
        path: "/Contact",
        element: (<><HedarCompo /><ContactCompo /></>),
    }
    , {
        path: "/example",
        element: (<><HedarCompo /><ExampleCompo /></>),
        children: [{
            path: "/example/classcomponent/*",
            // element: (<><ClassesCompo /></>)
            element: (<Suspense fallback={<>loding..</>}><ClassesCompo /></Suspense>)
        },{
            path:"/example/functioncomponent",
            element:(<><FunctionlCompo/></>)
        }

        ]
    }
])
export default router;