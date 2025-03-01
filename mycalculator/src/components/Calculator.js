import React, { useState } from 'react';
import './Calculator.css';
import axios from 'axios';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: input,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLastCharacter = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateSquareRoot = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: `√${input}`,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  const calculateFactorial = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: `${input}!`,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  const calculateNaturalLog = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: `ln${input}`,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  const calculatePower = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: `${input}^`,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input}
          placeholder="Enter expression"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={clearInput}>C</button>
        <button onClick={deleteLastCharacter}>DEL</button>
        <button onClick={calculateSquareRoot}>√</button>
        <button onClick={calculateFactorial}>!</button>
        <button onClick={calculateNaturalLog}>ln</button>
        <button onClick={() => handleInput('^')}>^</button>
      </div>
    </div>
  );
};

export default Calculator;