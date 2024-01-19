import React, { createContext, useContext, useState } from "react";
// import styled from 'styled-components'
const ThemeContext = createContext();
const UseContextFunctionalComponentInReact = () => {
//   const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: #BF4F74;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `
  const [theme, setTheme] = useState("light");
  return (
    <>
     {/* <Button>hello..</Button> */}
      <ThemeContext.Provider value={theme}>

      </ThemeContext.Provider>
      <div className="alert alert-info">
        <h2>syntax</h2>
        const authContext = useContext(initialValue);
      </div>
      <p>useContext is a React Hook that lets you read and subscribe to context from your component.</p>
    </>
  );
};

function FromCompo(props) {
  return (
    <>
      child data
      < PanelForDisp>
        <button>signup</button>
        <button>signin</button>
      </PanelForDisp>
    </>
  )
}

function PanelForDisp() {
  const theme = useContext(ThemeContext)
  const customClass = "panel-" + theme;
  return (
    <div className="{customClass}">testing</div>
  )
}
 
export default UseContextFunctionalComponentInReact;


