import React from 'react';
import TaskCount from "./TaskCount"
import Heading from "./Heading"
import './App.css';
import Tables from "./Tables"
import Addsection from "./Addsection"


// Only class componenets can have state 
// State must live in the parent of any components that need access to it 
class App extends React.Component {
  state = {
    tasks: [
      { name: "Task 1", available: true, id: 1 },
      { name: "Task 2", available: true, id: 2 },
      { name: "Task 3", available: false, id: 3 },
      { name: "Task 4", available: true, id: 4 },
      { name: "Task 5", available: false, id: 5 },
      { name: "Task 6", available: false, id: 6 },
    ],
  }

  render() {
    const Taskstocomplete = this.state.tasks.filter(tasks => {
      return tasks.available === true;
    });

    const Taskscompleted = this.state.tasks.filter(tasks => {
      return tasks.available === false;
    });


    return (
      <div className="App">
          <Heading />
          <Addsection />
          <TaskCount count={this.state.tasks.length} />
    
          <div className="h1">In Progress Tasks:</div>
          {Taskstocomplete.map(tasks => {
            return (
              <Tables
                key={tasks.id}
                available={tasks.available}
                name={tasks.name}
            
              />
            )
          })}
          
          <div className="h2">Tasks Completed:</div>
        {Taskscompleted.map(tasks => {
          return (
            <Tables
              key={tasks.id}
              available={tasks.available}
              name={tasks.name}
             
            />
          )
        })}

      </div>
      

    );
  }
}

export default App;


