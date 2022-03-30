
import './App.css';
import React from 'react';
// import Increment from './Increment';

function App() {
  const [state,setSate]=React.useState(false);
 function toggle(){
 setSate(!state)
  
}
  const [count, setCount]=React.useState(0)

  function increment(){
   setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
   }
  return (
    <>
    <div>
      <h1>{state?"salam":"sagol"}</h1>
      <button onClick={()=>toggle()}>cahngeme</button>
    </div>
    <div>
      <h1>
      {count}
      </h1>
      {/* < Increment count /> */}
     <button onClick={()=>increment()}>+</button>
      <button onClick={()=>decrement()}>-</button>
    </div>
    </>
  );
}

export default App;
