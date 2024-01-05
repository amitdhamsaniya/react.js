import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu'
import FunctionalComponentInReact from './1FunctionalComponentInReact'
import StateFunctionalComponentInReact from './2StateFunctionalComponentInReact.jsx'
import PropsFunctionalComponentInReact from './3PropsFunctionalComponentInReact.jsx'
import JSXFunctionalComponentInReact from './4JSXFunctionalComponentInReact.jsx'
import ControlledFunctionalComponentInReact from './5ControlledFunctionalComponentInReact.jsx'
import MultipleFunctionalComponentInReact from './6MultipleFunctionalComponentInReact.jsx'
import HookInFunctionalComponentInReact from './7HookInFunctionalComponentInReact.jsx'
import UseEffectHookinFunctionalComponentInReact from './8UseEffectHookinFunctionalComponentInReact.jsx'
import UseLayEffectHookinFunctionalComponentInReact from './9UseLayEffectHookinFunctionalComponentInReact.jsx'
import UseRefHookinFunctionalComponentInReact from './10UseRefHookinFunctionalComponentInReact.jsx'
import UseCallbackHookinFunctionalComponentInReact from './11UseCallbackHookinFunctionalComponentInReact.jsx'

// import React from 'react';

const FunctionalCompoReact = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                path: "whatisfunctionalcomponent",
                element: <FunctionalComponentInReact />
            },
            {
                path: "stateinfuncompo",
                element: <StateFunctionalComponentInReact />
            },
            {
                path: "propsinfuncompo",
                element: <PropsFunctionalComponentInReact />
            },{
                path:"JSXinfuncompo",
                element:<JSXFunctionalComponentInReact/>
            }
            ,{
                path:"controlledcomponent",
                element:<ControlledFunctionalComponentInReact/>
            }
            ,{
                path:"multiplecomponent",
                element:<MultipleFunctionalComponentInReact/>
            }
            ,{
                path:"hookincomponent",
                element:<HookInFunctionalComponentInReact/>
            }
            ,{
                path:"useeffectincomponent",
                element:<UseEffectHookinFunctionalComponentInReact/>
            }
            ,{
                path:"uselayouteffectincomponent",
                element:<UseLayEffectHookinFunctionalComponentInReact/>
            }
            ,{
                path:"userefincomponent",
                element:<UseRefHookinFunctionalComponentInReact/>
            }
            ,{
                path:"usecallbackincomponent",
                element:<UseCallbackHookinFunctionalComponentInReact/>
            }
            ]

        }
    ])
    return routes;
};

export default FunctionalCompoReact;