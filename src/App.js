import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  let y;
  // Hooks
  const [num, setNum] = useState("");

  // Methods
  function store(){
    let a = document.getElementById('calc-input').textContent;

    return a;
  }
  function type(dig, opr){
    let x;
    if(dig){
      store();
      x = (e) => setNum(num + e.target.textContent)
    }
    return x;
  }

  return (
    <div className = "App">
      <div id='calc-box'>
        <div id='calc-input'>{num}</div>
        <div id ='button-grid'>
          <div id ='calc-button-box'>
          <div className='calc-s-button' id='ac' onClick={() => setNum("")}><h3>AC</h3></div>
            <div className='calc-s-button' id='pn' onClick={() => setNum(num * -1)}><h3>+/-</h3></div>
            <div className='calc-s-button' id='ms'><h3>%</h3></div>
            <div className='calc-op-button' id='div'><h3>/</h3></div>

            <div className='calc_button' id='one' onClick={type(true, false)}>1</div>
            <div className='calc_button' id='two' onClick={type(true, false)}><h4>2</h4></div>
            <div className='calc_button' id='three' onClick={type(true, false)}><h4>3</h4></div>
            <div className='calc-op-button' id='mul' onClick={type(false, true)}><h3>x</h3></div>
            
            <div className='calc_button' id='four' onClick={type(true, false)}><h4>4</h4></div>
            <div className='calc_button' id='five' onClick={type(true, false)}><h4>5</h4></div>
            <div className='calc_button' id='six' onClick={type(true, false)}><h4>6</h4></div>
            <div className='calc-op-button' id='sub' onClick={type(false, true)}><h3>-</h3></div>

            <div className='calc_button' id='seven' onClick={type(true, false)}><h4>7</h4></div>
            <div className='calc_button' id='eight' onClick={type(true, false)}><h4>8</h4></div>
            <div className='calc_button' id='nine' onClick={type(true, false)}><h4>9</h4></div>
            <div className='calc-op-button' id='add' onClick={type(false, true)}><h3>+</h3></div>

            <div className='calc_button' id='zero' onClick={type(true, false)}><h4>0</h4></div>
            <div className='calc_button' id='dec' onClick={type(true, false)}><h4>.</h4></div>
            <div className='calc-op-button' id='eql' onClick={type(false, false)}><h3>=</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
