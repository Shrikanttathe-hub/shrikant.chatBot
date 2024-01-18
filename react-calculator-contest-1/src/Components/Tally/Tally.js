import React from 'react';
import './Tally.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus, faMinus, faXmark, faDivide } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Tally=()=>{

   // State to store input values and result/error messages
   const [numbers, setNumbers] = useState({Num1:"", Num2:""})
   const [result, setResult] = useState(null);
   const [error, setError] = useState("");

     //icons
     const add = <FontAwesomeIcon icon={faPlus} />
     const subtract = <FontAwesomeIcon icon={faMinus} />
     const multiply = <FontAwesomeIcon icon={faXmark} />
     const divide = <FontAwesomeIcon icon={faDivide} />

     // handle input changes
    
function handleChange(e){
    e.preventDefault();
    setResult()
   console.log(e);
  const {name, value} = e.target;
  setNumbers(prevNumbers => {
    return {
      ...prevNumbers,
      [name] : value
    }
  })
  console.log(value)
}

const validateInput = (Num1, Num2) => {
  
  if(Num1 === "" || Num2 === "" || isNaN(Num1) || isNaN(Num2)){
    setError("Error!")
    setResult("Number cannot be empty")
    return false
  }
  setError("Success");
  return true;
}
  // Perform calculation based on the selected operation
  function calculate(operation){
   
   
    if(validateInput(numbers.Num1, numbers.Num2)){
        let res

        if(operation === "add"){
            res = parseFloat(numbers.Num1) + parseFloat(numbers.Num2)
        } 
        else if(operation === "subtract"){
            res = parseFloat(numbers.Num1) - parseFloat(numbers.Num2)
        }
        else if(operation === "multiply"){
            res = parseFloat(numbers.Num1) * parseFloat(numbers.Num2)
        }
        else if(operation === "divide"){
            if(numbers.Num1 === "0"){
                setError("Error!")
                setResult("Cannot divide by zero")
                return
            }
            res = parseFloat(numbers.Num1) / parseFloat(numbers.Num2)
        }

        setResult(res);
       
    }

    
}



//const Tally = () => {



    return (
      <div className="wrapper">
          <form action="">
           <h1>React Calculator</h1>
           <div className="input-box">
           <input type='number' placeholder='Num 1' value={numbers.Num1} name="Num1" onChange={handleChange}/>
           </div>
           <div className="input-box">
           <input type='number' placeholder='Num 2' value={numbers.Num2} name="Num2" onChange={handleChange}/>
           </div>
           <div className="buttonContainer">
           <button onClick={() => calculate("add")}>{add}</button>     
           <button onClick={() => calculate("subtract")}>{subtract}</button>   
           <button onClick={() => calculate("multiply")}>{multiply}</button>   
           <button onClick={() => calculate("divide")}>{divide}</button> 
           </div> 
           <div className="errors">
            {error && <h3 className='p1' style={{color:error==="Error!" ? 'red' : 'green'}}>{error}</h3>}
            {result && <p className='p2'>Result - {result}</p>}
            </div> 
           </form>
      </div>
    );
  };
  
  export default Tally;
  