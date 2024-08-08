import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

export default function Calculator() {
    const [output, setOutput] = useState('');

    const insert = (val) => {
        setOutput(output + val);
    };

    const clearDisplay = () => {
        setOutput('');
    };

    const del = () => {
        setOutput(output.slice(0, -1));
    };

    const results = () => {
        try {
            let result = eval(output.replace('%', '/100'));
            setOutput(result.toString());
        } catch (error) {
            setOutput('Error');
        }
    };

    return (
        <div className='body'>
            <div className="cal">
                <input className="output" id="output" type="text" value={output} disabled />
                <div className="row my-2">
                    <div className="col"><button className="button button-grey" onClick={clearDisplay}>AC</button></div>
                    <div className="col"><button className="button button-grey" onClick={del}>DEL</button></div>
                    <div className="col"><button className="button button-grey" onClick={() => insert('%')}>%</button></div>
                    <div className="col"><button className="button button-orange" onClick={() => insert('/')}>÷</button></div>
                </div>
                <div className="row my-2">
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('7')}>7</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('8')}>8</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('9')}>9</button></div>
                    <div className="col"><button className="button button-orange" onClick={() => insert('*')}>&#xd7;</button></div>
                </div>
                <div className="row my-2">
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('4')}>4</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('5')}>5</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('6')}>6</button></div>
                    <div className="col"><button className="button button-orange" onClick={() => insert('-')}>-</button></div>
                </div>
                <div className="row my-2">
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('1')}>1</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('2')}>2</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('3')}>3</button></div>
                    <div className="col"><button className="button button-orange" onClick={() => insert('+')}>+</button></div>
                </div>
                <div className="row my-2">
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('00')}>00</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('0')}>0</button></div>
                    <div className="col"><button className="button button-grey-opacity" onClick={() => insert('.')}>.</button></div>
                    <div className="col"><button className="button button-orange" onClick={results}>=</button></div>
                </div>
            </div>
        </div>
    );
}
