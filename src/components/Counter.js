import React, { useState } from 'react';

const Counter = () => {

    let [number, setNumber] = useState(0);

    return (
        <div>
            <h1>COUNTER APP</h1>
            <p style={{ fontSize: '72px' }}>{number}</p>
            <div className="counterBtns">
                <button className="addBtn" onClick={() => setNumber(number + 1)}>+</button>
                <button className="minusBtn" onClick={() => setNumber(number - 1)}>-</button>
                <button className="resetBtn" onClick={() => setNumber(0)}>Reset</button>
            </div>
        </div >
    );
}

export default Counter;
