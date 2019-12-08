import React from 'react';
import TaskCount from "./TaskCount"
import Heading from "./Heading"
import './App.css';
import ToDoTable from "./ToDoTable"
import TasksCompleteTable from "./TasksCompleteTable"
import Addsection from "./Addsection"


function App() {
  return (
    <div className="App">
      <Heading/>
      <TaskCount />
      <Addsection/>
      <div className ="container">
      <h><u>Tasks to Complete</u></h>
      <ToDoTable task="Task 1" addbutton={["Add"]} deletebutton={["Delete"]}/>
      <ToDoTable task="Task 2" addbutton={["Add"]} deletebutton={["Delete"]}/>
      <ToDoTable task="Task 3" addbutton={["Add"]} deletebutton={["Delete"]}/>
      </div>
      <div className ="container">
      <h><u>Tasks Completed</u></h>
      <TasksCompleteTable task="Task 1" deletebutton={["Delete"]}/>
      <TasksCompleteTable task="Task 2" deletebutton={["Delete"]}/>
      <TasksCompleteTable task="Task 3" deletebutton={["Delete"]}/>
    
    </div>
    </div>

  );
}

export default App;

