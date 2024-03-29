import React ,{ useMemo, useState }  from 'react';

const UseMemoHookinFunctionalComponentInReact = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    // const factorial =  factorialOf(number);
    console.log("factorial",factorial);
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);
    return (
        <div>

            <img src="/usememo.png" alt="" />
            <br />
            Factorial of
            {/* <input type="number" value={number} onChange={onChange} /> */}
            <input type="number"  onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button>
            <a href="https://dmitripavlutin.com/react-usememo-hook/">Reference</a>

            <div className="alert alert-info mt-5">
                <p>The useMemo is a hook used in the functional component of react that returns a memoized value.</p>
            </div>
        </div>
    );
}

function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemoHookinFunctionalComponentInReact;