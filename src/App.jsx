import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState(" ");



  const bmisubmit=(e)=>{
e.preventDefault()
if(weight==="" || height===""){
  alert('please enter something')
}
else{
  let bmi = (weight)/(height*height)*10000
  setBmi(`Your BMI is :  ${bmi.toFixed(2)}`)

 if(bmi>=25 && bmi<30){
setMessage("you are under healthy")
 }
 else if(bmi>25){
setMessage("you are under Weight")
 }


 else(setMessage("you are unhealthy healthy"))
}
  }

  const reset =()=>{
    window.location.reload()
  }
  return (
    <>
      <div
        className="main-container">
        <h1 className="m-5">BMI Calculator</h1>

        <form action="" className="m-5 outline p-5 rounded-3xl" onSubmit={bmisubmit}>
          <div>
            <p className="m-5 ">Weight (Kg)</p>
            <input  className="px-10 py-2 rounded-xl"
              type="number"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="m-5">Height (Inch)</p>
            <input  className="m-5  px-10 py-2 rounded-xl"
              type="number"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <button className="m-5 cursor-pointer">Sumit</button>
          <button className="m-5 cursor-pointer" onClick={reset}>Reset</button>
        </form>
        <h3>{bmi}</h3>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
