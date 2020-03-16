import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Egg />
      <Screen />
    </div>
  );
}

// SET STATE FUNCTIONS
function onClickBR(currentState, setState){
  setState({
    ...currentState,
    bathroom: currentState.bathroom + 1
  })
}

function sleep(currentState, setState){
  setState({
    ...currentState, 
    sleep: currentState.sleep + 1
  })
}

function feed(currentState, setState){
  setState({
    ...currentState, 
    hunger: currentState.hunger + 1
  })
}

function play(currentState, setState){
  setState({
    ...currentState, 
    play: currentState.play + 1
  })
}

function weight(currentState, setState){
  setState({
    ...currentState, 
    weight: currentState.weight + 1
  })
}

function health(currentState, setState){
  setState({
    ...currentState, 
    health: currentState.health + 1
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

function Pet(petState){
  // console.log("petState", petState)

  // const styleSheet = document.styleSheets[0];

  // let keyframes =
  // `@keyframes moves {
    
  //   0%   {background-color:red; left:0px; top:0px;}
  //   25%  {background-color:yellow; left:200px; top:0px;}
  //   50%  {background-color:blue; left:200px; top:200px;}
  //   75%  {background-color:green; left:0px; top:200px;}
  //   100% {background-color:red; left:0px; top:0px;}
  // }`;

  // styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  // const style = {
  //   animationName: 'moves',
  //   animationTimingFunction: 'ease-in-out',
  //   animationDuration: '0.6s',
  //   animationDelay: '0.0s',
  //   animationIterationCount: 'pulse 5s infinite;',
  //   animationDirection: 'normal',
  //   animationFillMode: 'forwards'
  // };

  let moodFace = null;
  if(petState.mood >= 70) {
      moodFace = "fa fa-smile-o";
  } else if (petState.mood >= 40) {
      moodFace = "fa fa-meh-o";
  } else {
    moodFace = "fa fa-frown-o"
  }

  return(
    <div className="pet" >
      <i className={`${moodFace} ${"petIcon"}`} aria-hidden="true"></i>
      <p>Mood: {petState.mood}</p>
      <p> Hunger: {petState.hunger} </p> 
      <p> Bathroom: {petState.bathroom} </p> 
      <p>Sleep:{petState.sleep} </p> 
      <p>Play:{petState.play} </p>
      <p>Weight:{petState.weight} </p>
      <p>Health:{petState.health} </p>
    </div>
  )
 

}

function Screen() {
  const [currentState, setState] = React.useState({
    hunger: 100, 
    bathroom: 100, 
    sleep: 100, 
    play: 100,
    weight: 100,
    health: 100,
    mood: 100,
  });
  // What renders on the Screen 
  return (
    <div className="screenContainer">
      <div className="screenItem">
        <FeedButton
          onClick={e => {
            // setState({
            //   ...currentState,
            //   hunger: currentState.hunger + 1
            // });
            feed(currentState, setState)
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

      <div className="screenItem">
        {/* <h1>Pet Here</h1> */}
      </div>

      <div className="screenItem">
        <GameButton
          play = {
            (e) => {
              play(currentState, setState)
            }
          }
        >
        </GameButton>

        <WeightButton
          weight = {
            (e) => {
              weight(currentState, setState)
          }
        }
        >
        </WeightButton>

        <HealthButton health = {
            (e) => 
            health(currentState, setState)
          }>
        </HealthButton>
      </div>
      <Pet 
        mood = {currentState.mood} 
        hunger = {currentState.hunger}
        bathroom= {currentState.bathroom} 
        sleep= {currentState.sleep} 
        play= {currentState.play}
        weight= {currentState.weight}
        health= {currentState.health}
      />
    </div>
  );
}

function HealthButton({ health }){
  return(
    <button className="fnBtn" onClick={ ()=>{
      health()
    }}>
      <i className="fa fa-heartbeat" aria-hidden="true"></i>
    </button>
  )
}

function WeightButton({weight}){
  return(
    <button className="fnBtn" onClick={ ()=>{
      weight()
    }}>
      <i className="fa fa-balance-scale" aria-hidden="true"></i>
      </button>
  )
}

function GameButton({play}){
  return(
    <button className="fnBtn" onClick={()=>{
      play();
    }}>
      <i className="fa fa-trophy" aria-hidden="true"></i>
    </button>
  )
}

function SleepButton({ sleep } ){
  return(
    <button className="fnBtn" onClick={ ()=>{
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
      onClick={ () => {
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
      onClick={ ()=>{
        customOnClick();
      }} 
    >
      <i className="fa fa-bath" aria-hidden="true"></i>
    </button>
  );
}

export default App;
