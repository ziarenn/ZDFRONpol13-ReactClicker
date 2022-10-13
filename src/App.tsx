import React from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  // props === properties
  // propsy działają tylko w dół
  const propToPassDown = 5;
  const y = "test"
  return (
    <div className="App">
      <Display jakisProps={propToPassDown} x="5" jakisProps2={y}/>
      
      <Manipulator />
    </div>
  );
}

export default App;
