import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // tom state - what our current state is 
  // set tom state - what we want our state to be 

  const [tomState, setTomState] = React.useState({
    age: 0, 
    light: 0,
    hunger: 0,
  })

  return (
    <div className="App">
      <div className="egg"></div>
      <Screen />

      <Button id="feedButton" onClick={()=>{
        setTomState({
          ...tomState,
          hunger: tomState.hunger - 1,
        })
        alert(tomState.age)
      }}/>
    </div>
  );
}

function Screen() {
  return <div className="screen">Screen</div>;
}
// Every component takes an object to access properties
function Button({ onClick }) {
  return (
    <button
      onClick={() => {
        console.log('Clicking button:', )
        onClick()
      }}
    >Feed</button>
  );
}


export default App;
