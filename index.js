import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentExample from './myfile.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './custom.css';
// import * as React from "react";
// import { createRoot } from "react-dom/client";
import { RouterProvider,createBrowserRouter,Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ComponentExample></ComponentExample>)
// root.render(
// <ComponentExample/>
// );
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                {/* <a href='/'>home</a>
                <a href='/about'>about</a> */}
                <a href='/'>home with anchor</a>
                <a href='/about'>about with anchor</a>
                <br/>
                <Link to="/">Home with Link</Link>
                <Link to="/about">About Us with Link</Link>
                
                {/* <SliderData/> */}
                <h1>Hello World</h1>

                {/* <Link to="about">About Us</Link> */}
            </div>
        ),
    },{
        path: "/about",
        element: (
            <div>
                <a href='/'>home with anchor</a>
                <a href='/about'>about with anchor</a>
                <br/>
                <Link to="/">Home with Link</Link>
                <Link to="/about">About Us with Link</Link>
                <h2>About us page data</h2>
            </div>
        ),
    }
])
root.render(
    <RouterProvider router={router} />
);
// reportWebVitals();
