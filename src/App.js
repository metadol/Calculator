import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {


  const [calc, setcalc] = useState('');
  const [result, setresult] = useState('');
  const [eq, seteq] = useState(false)

  const op = ['+', '-', '*', '/', '.']


  const updatecalc = v => {
    console.log(calc)
    if ((op.includes(v) && (calc === '')) || (op.includes(v) && (op.includes(calc.slice(-1))))) {
      return
    }
    if ((eq && op.includes(v) || !eq)) {
      seteq(false)
      setcalc(calc + v)
      if (!(op.includes(v))) {
        setresult(eval(calc + v).toString())
      }
    }

    else if (eq) {
      setresult('')
      setcalc('')
      seteq(false)
      setcalc(v)
      setresult(eval(v).toString())
    }


  }

  const calcu = () => {

    setcalc(result)
    seteq(true)

  }

  const delast = () => {
    if (calc === "") {
      return
    }

    const value = calc.slice(0, -1)
    setcalc(value)
    console.log('here', value)
    if (value) {
      if (op.includes(value.slice(-1))) {
        setresult(eval(value.toString().slice(0, -1)));
      } else {
        console.log('inside', value)
        setresult(eval(value).toString())
      }
    }
    else {
      setresult('')
    }

  }



  const d = [];

  for (let i = 1; i < 10; i++) {
    d.push(<button onClick={() => updatecalc(i.toString())} key={i}>{i}</button>)
  }


  return (
    <div className='container'>
      <div className='calculator'>

        <div className='display'>
          {result ? <span>({result})</span> : ''}&nbsp;

          {calc || ''}
        </div>

        <div className='operators'>
          <button onClick={() => updatecalc('/')}>/</button>
          <button onClick={() => updatecalc('*')}>*</button>
          <button onClick={() => updatecalc('+')}>+</button>
          <button onClick={() => updatecalc('-')}>-</button>
          <button onClick={delast}>DEL</button>
          <button onClick={() => { setcalc(''); setresult('') }}>AC</button>
        </div>

        <div className='digits'>
          {d}
          <button onClick={() => updatecalc('0')}>0</button>
          <button onClick={() => updatecalc('.')}>.</button>
          <button onClick={calcu}>=</button>
        </div>

      </div>
    </div>
  )
}

export default App
// The slice() method returns selected elements in an array, as a new array.
// const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

// const sliced1 = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (['banana', 'cherry'])
// const sliced2 = fruits.slice(2);    // Extracts elements from index 2 to the end (['cherry', 'date', 'fig'])
// const sliced2 = fruits.slice(-2);    // Extracts elements from second last index to the end (['date', 'fig'])
// const sliced3 = fruits.slice(-3, -1); // Extracts elements from the third-to-last to the last (['cherry', 'date'])
//a new array containing elements starting from the third-to-last element up to, but not including, the last element

// console.log(sliced1);
// console.log(sliced2);
// console.log(sliced3);

// negative indices in arrays can be a bit confusing.
// Negative indices are a way to reference elements in an array counting from the end of the array, 
//with -1 representing the last element, 
//-2 representing the second-to-last element, and so on. 
//okay about the slice imm still unable to get the last charater using slice(-3,-1) as it does not include last elemnt even thought -1 means the lst element i
//it does not include that so how will i ge the last element? 
// use slice(-3) this will give you the last 3 elements if you only want one use slice(-1)
