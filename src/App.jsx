import { useState } from 'react'

import './App.css'

function App() {
  const [hover,setHover] = useState('button center');
  const [isButtonMoved,setIsButtonMoved] = useState(true);
  let isValidate = false;

  const handleMouseOver = () =>{
    if(isValidate){
      setHover("button center");
    }else{
      setHover(!isButtonMoved ? "button-right disable button" :"button-left disable button")
      setIsButtonMoved(!isButtonMoved);
    }
  }

  const handleSubmit = () =>{
    if(isValidate){
      setHover("button center");
    }
  }

  return (
  <>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="passsword" />
        <button className={hover} onClick={handleSubmit} onMouseOver={handleMouseOver}>Submit</button>
      </div>
    </div>
  </>
  )
}

export default App
