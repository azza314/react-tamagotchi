import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="egg"></div>
      <Screen />
      <CreateButton type="bathroom" />
    </div>
  );
}

function Screen() {
  const [hungerState, setHunger] = React.useState({
    feed: 0, 
  })

  return <div className="screen">
  <div>
    <FeedButton onClick={(e) => {
      setHunger({
        ...hungerState, 
        feed: hungerState.feed + 1,
      })
      alert(hungerState.feed)
    }}> Feed</FeedButton>
  </div>
  </div>;
}
// Every component takes an object to access properties
function FeedButton({ onClick }) {
  return (
    <button
      onClick={() => {
        console.log('Clicking button:', )
        onClick()
      }}
    ><i class="fa fa-cutlery" aria-hidden="true"></i>
    </button>
  )
}

function CreateButton(){
  return (
      <button onClick={() => {
        
      }}>
        <i class="fa fa-bath" aria-hidden="true"></i>
      </button>
  )
}

export default App;
