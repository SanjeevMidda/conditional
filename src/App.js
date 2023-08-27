import { useState } from 'react';
import './index.css';
import tick from "./imgs/tick.svg";

function App() {

  const [status, setStatus] = useState(true);

  // if(!status){
  //  return <h1>HELLO</h1>
  // }

  return (
    <div className="App">

      <div className="tick" onClick={() => {setStatus(!status)}}>
        {status && <img src={tick} alt="tick"/>}
        <h3 className={status && "underline"}>Apple</h3>
      </div>

      <h3>Pear {status && '✅'}</h3>
      <h3>{status && <img src={tick} alt="tick"/>} Strawberry</h3>
    </div>
  );
}

export default App;
