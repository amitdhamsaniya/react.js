import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentExample from './myfile.jsx';
// import Interior from './interior/interior.jsx'
// import Index from './interior/index.jsx'
import routes from './Router/MainRouter.jsx';
// import * as React from "react";
// import { createRoot } from "react-dom/client";
import { RouterProvider} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ComponentExample></ComponentExample>)
// root.render(
// <ComponentExample/>
// );

root.render(<RouterProvider router={routes} />
    );
    // reportWebVitals();
