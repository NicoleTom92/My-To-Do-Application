import React from 'react';
import TaskCount from "./TaskCount"
import Heading from "./Heading"
import './App.css';
import ToDoTable from "./ToDoTable"


function App() {
  return (
    <div className="App">
      <Heading/>
      <TaskCount />
      <div className ="container">
      <ToDoTable name="Task 1" skills={["To Add"]}/>
      
    </div>
    </div>
  );
}

export default App;

