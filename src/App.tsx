
import './App.css'
import { useState } from 'react'

import Img from './wave.svg'



export default function App(){


  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")



  function verifica(){

    if(login === "joao" && password === "123"){
      window.alert("osk")
    }else{
      window.alert("Try Again")
    }
  }

  return(
    <div className="geral">
      <div className="container">
        <div className="form">
          <h1>Sign in</h1>
          <h3>Sig in and start managing your candidates</h3>


          <input type="text" placeholder='Login' value={login} onChange={(evt)=>setLogin(evt.target.value)} required/>
          
          <input type="password"  placeholder='Password' value={password} onChange={(evt)=> setPassword(evt.target.value)} required/>


          <div className="extra">
            <span id='remember'><input type="checkbox" name="" id="remember-box" /> <h4>Remember-me</h4></span>
            <h4 id='link-forgot'><a href="">Forgot Password ?</a> </h4>
          </div>
          <button onClick={() => verifica()}>Login</button>
        </div>
      </div>


      <div className="context">
        <h1></h1>
    </div>


<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >


    </div>
    
  )
}

