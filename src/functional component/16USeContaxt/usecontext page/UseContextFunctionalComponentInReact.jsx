import React from 'react';
import NoteContext from './NoteContext.jsx'
const UseContextFunctionalComponentInReact = (props) => {
const state = {
    "name":"amit",
    "class":"science"
}
    return (
        <>
            <NoteContext.provider vaule={state}>
                {props.children}
            </NoteContext.provider>
            <NoteContext />
        </>
    );
};

export default UseContextFunctionalComponentInReact;