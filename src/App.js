import React from 'react';
import DeveloperCount from "./DeveloperCount"
import Heading from "./Heading"
import './App.css';
import Developer from "./Developer"


function App() {
  return (
    <div className="App">
      <Heading/>
      <DeveloperCount />
      <div className ="container">
      <Developer name="Task 1" skills={["To Add"]}/>
      
      
    </div>
    </div>
  );
}

export default App;

