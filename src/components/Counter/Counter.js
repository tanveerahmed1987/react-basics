import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    console.log('Counter component rerendered');

    const [count, setCount] = useState(0);

    const onIncrement = function () {
        setCount(count + 1);
    }

    const onDecrement = function () {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={onIncrement}>Increment</button>
             &nbsp;
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;