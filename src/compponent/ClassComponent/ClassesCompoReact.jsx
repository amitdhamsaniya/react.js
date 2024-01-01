// import React from 'react';
import { useRoutes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ComponentInReact from './1ComponentInReact.jsx';
import ClassComponentInReact from './2ClassComponentInReact.jsx';
import StateClassComponentInReact from './3StateClassComponentInReacts.jsx';
import PropsClassComponentInReact from './05PropsClassComponentInReact.jsx';
const ClassesCompoReact = () => {
    const routes = useRoutes([
        {
            path:"/",
            element:<ClassCompoMenu/>,
            children: [
                {
                    path: "whatiscomponent",
                    element: <ComponentInReact />,
                }, 
                {
                    path: "classcomponent",
                    element: <ClassComponentInReact />,
                },
                {
                    path: "stateclasscomponent",
                    element: <StateClassComponentInReact />,
                },
                {
                    path: "PropsClassComponentInReact",
                    element: <PropsClassComponentInReact />,
                }
            ]
    }
    ])
    return routes ;
};

export default ClassesCompoReact;