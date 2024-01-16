import React, { useState, useRef,} from 'react';
import ChildCompo from './childCompo.jsx'
const UseHoneyComPerentFunctionalComponentInReact = () => {
    const [ele, setEle] = useState()
    const childRef = useRef();
    const perentfunction = async (data) => {
        await setEle(data)
    }

    return (
        <>
            <button onClick={() => childRef.current.getAlert()}>click</button>
            {(ele && ele.length) ?
                <table>
                    <thead>
                        <tr>
                            <th>col-1</th>
                            <th>col-2</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>{ele[0]}</td>
                        <td>{ele[1]}</td>
                    </tr>
                    <tr>
                        <td>{ele[2]}</td>
                        <td>{ele[3]}</td>
                    </tr>
                </table> : "no data"}
            <ChildCompo ref={childRef} onAddHandler={perentfunction} />
        </>
    );
};

export default UseHoneyComPerentFunctionalComponentInReact;