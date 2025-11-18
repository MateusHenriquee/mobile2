import { useState } from "react";

function App(){
  const [message, setMessage] = useState('hello world');
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={
        ()=>{setMessage('olá fui clicado');}
      }></button>

    </div>
  )
}  
export default App