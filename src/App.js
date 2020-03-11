import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Egg />
      <Screen />
      {/* <BtmBtns /> */}
      <Pet />
    </div>
  );
}

// SET STATE FUNCTIONS
function onClickBR(currentState, setState){
  setState({
    ...currentState,
    brLevel: currentState.brLevel + 1
  })
  alert(currentState.brLevel)
}

function sleep(currentState, setState){
  setState({
    ...currentState, 
    sleep: currentState.sleep + 1
  })
  alert(currentState.sleep)
}

function feed(currentState, setState){
  setState({
    ...currentState, 
    hungerLevel: currentState.hungerLevel += 1
  })
}

function Egg(){
  return(
    <div className="egg">
      <div className="btmBtns">
      <button className="left"></button>
      <button className="select"></button>
      <button className="right"></button>
    </div>
    </div>
  )
}
function Pet(){
  return(
    <div className="pet"></div>
  )
}
// function BtmBtns(){
//   return(
//     <div className="btmBtns">
//       <button className="left"></button>
//       <button className="select"></button>
//       <button className="right"></button>
//     </div>
//   )
// }

function Screen() {
  const [currentState, setState] = React.useState({
    hungerLevel: 0, 
    brLevel: 0, 
    sleep: 0
  });
  // What renders on the Screen 
  return (
    <div className="screenContainer">
      <div className="screenItem">
        <FeedButton
          onClick={e => {
            // setState({
            //   ...currentState,
            //   hungerLevel: currentState.hungerLevel + 1
            // });
            feed(currentState, setState)
            alert(currentState.hungerLevel);
          }}
        >
          Feed
        </FeedButton>

        <BathroomButton
          customOnClick = { 
            (e) => {
              onClickBR(currentState, setState);
            }
          }
        >
        </BathroomButton>

        <SleepButton
          sleep = { 
            (e) => {
              sleep(currentState, setState)
            }
          }
          >
        </SleepButton>
      </div>

      <div className="screenItem"></div>
      <div className="screenItem"></div>
    </div>
  
  );
}

function SleepButton({ sleep } ){
  return(
    <button className="fnBtn" onClick={()=>{
      sleep();
    }}>
      <i className="fa fa-sun-o" aria-hidden="true"></i>

    </button>
  )
}

// Every component takes an object to access properties
function FeedButton({ onClick }) {
  return (
    <button className="fnBtn"
      onClick={() => {
        onClick();
      }}
    >
      <i className="fa fa-cutlery" aria-hidden="true"></i>
    </button>
  );
}

function BathroomButton({customOnClick}) {
  return (
    <button className="fnBtn"
      onClick={()=>{
        customOnClick();
      }} 
    >
      <i className="fa fa-bath" aria-hidden="true"></i>
    </button>
  );
}

export default App;
