import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';



//function use components ,props and hook
function Calc(props) {
  const [color, setColor] = useState("red");


  //color of the header result will be change depend on the value of the result
  useEffect(() => {
    if (props.result % 2 === 0) {
      //result is even
      setColor("blue");
    } else {
      //result is even
      setColor("red");
    }
  }, [props.result]);
  return <h2 style={{ color }}>the result is {props.result} !</h2>;
}



//function get the value form an input text, and call the function Calc with the props result
function renderResult() {
  const inputValue = document.getElementById('textResult').value; 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <Calc result={inputValue} />
      
    </>
  )
  
}



//call the function renderResult when the button is clicked
document.getElementById('btn').addEventListener('click', renderResult);







