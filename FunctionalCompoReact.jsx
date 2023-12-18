import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu'
import FunctionalComponentInReact from './1FunctionalComponentInReact'

// import React from 'react';

const FunctionalCompoReact = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [{
                path: "whatisfunctionalcomponent",
                element: <FunctionalComponentInReact />
            }
            ]

        }
    ])
    return routes;
};

export default FunctionalCompoReact;