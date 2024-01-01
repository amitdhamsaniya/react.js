import React, { Component } from 'react';

class stateClassComponentInReact extends Component {

  btnClickMethodInClass(){
    console.log("btnClickMethodInClass");
  }
  render() {
    let  data = "data inside render value";
    let btnClickHandle = () => {
      console.log("callled");
    }
     
    return (
      <>
        <h3>btn click</h3>
        <button onClick={btnClickHandle} className='my-4'>Click me</button>
        <br />
        <button onClick={this.btnClickMethodInClass}>Click me method</button>
      </>
    );
  }
}

export default stateClassComponentInReact;