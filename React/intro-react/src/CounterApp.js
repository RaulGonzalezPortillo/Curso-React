import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './style.css';

export const CounterApp = ({value = 0}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter (counter + 1);
        //setCounter ((c) => c + 1);
    };

    const handleSubstract = (e) => {
        if(counter > 0) {
            setCounter (counter - 1);
        }
    }

    const handleReset = (e) => {
        setCounter (value);
    }

    return (
        <>
            <h1>Counter</h1>
            <hr/>
            <h2>{counter}</h2>
            <div className="row">
                <button id="addButton" className="btn" onClick={handleAdd}>+</button>
                <button id="substractButton" className="btn" onClick={handleSubstract}>-</button>
                <button id="resetButton" className="btn" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}