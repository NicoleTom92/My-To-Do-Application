import React from 'react';
import uuid from "uuid/v4";
import TaskCount from "./TaskCount"
import Heading from "./Heading"
import './App.css';
import Tables from "./Tables"
import Addsection from "./Addsection"

class App extends React.Component {
  state = {
    tasks: [
      { name: "Task 1", available: true, dateCompleted: "01-01-2020", id: uuid() },
      { name: "Task 2", available: true, dateCompleted: "01-02-2020", id: uuid()  },
      { name: "Task 3", available: false, dateCompleted: "01-04-2020", id: uuid()  },
    ],
  }

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(tasks => {
      return tasks.id !== id;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  }

  addNewTask = (name, dateCompleted) => {
    
    const newTask = {
      name: name,
      available: true,
      dateCompleted: dateCompleted,
      id: uuid()
    };

    const copy = this.state.tasks.slice();
    copy.push(newTask);

    this.setState({
      tasks: copy
    });
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
        <div className="container">
          <Heading />
          <Addsection addNewTaskFunc={this.addNewTask}/>
          <TaskCount count={this.state.tasks.length} />
    
          <h4>In Progress Tasks:</h4>
          {Taskstocomplete.map(tasks => {

            return (
              <Tables
                deleteTaskFunc={this.deleteTask}
                key={tasks.id}
                available={tasks.available}
                name={tasks.name}
                dateJoined={tasks.dateJoined}
                id={tasks.id}
            
              />
            )
          })}
          
          <h4>Tasks Completed:</h4>
        {Taskscompleted.map(tasks => {
          return (
            <Tables
              deleteTaskFunc={this.deleteTask}
              key={tasks.id}
              available={tasks.available}
              name={tasks.name}
              dateCompleted={tasks.dateCompleted}
              id={tasks.id}
            />
          )
        })}

      </div>
      </div>

    );
  }
}

export default App;


