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
      { name: "Task 1", completed: false, available: true, dateCompleted: "01-01-2020", id: uuid() },
      { name: "Task 2", completed: false, available: true, dateCompleted: "01-02-2020", id: uuid() },
      { name: "Task 3", completed: false, available: false, dateCompleted: "01-04-2020", id: uuid() },
    ],
  }

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(tasks => {
      return tasks.id !== id;
    });
    this.setState({
      tasks: filteredTasks
    });
  }

  completeTask = () => {
    this.setState(state => ({
      id: !state.id
    }))
  }

  addNewTask = (name, completed, dateCompleted) => {
    const newTask = {
      name: name,
      completed: completed,
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
      return tasks.completed === false;
    });

    const Taskscompleted = this.state.tasks.filter(tasks => {
      return tasks.completed === true;
    });


    return (

      <div className="container">
        <Heading />
        <Addsection addNewTaskFunc={this.addNewTask} />
        <TaskCount count={this.state.tasks.length} />



        
          <div className = "y1">Tasks To Complete</div>
          {Taskstocomplete.map(tasks => {

            return (
              <Tables
                deleteTaskFunc={this.deleteTask}
                completeTaskFunc={this.completeTask}
                key={tasks.id}
                available={tasks.available}
                name={tasks.name}
                furtherinfo={tasks.furtherinfo}
                dateCompleted={tasks.dateCompleted}
                id={tasks.id}

              />
            )
          })}

          <div className="y2">Tasks Completed</div>
            {Taskscompleted.map(tasks => {
              return (
                <Tables
                  deleteTaskFunc={this.deleteTask}
                  completeTaskFunc={this.completeTask}
                  key={tasks.id}
                  available={tasks.available}
                  name={tasks.name}
                  furtherinfo={tasks.furtherinfo}
                  dateCompleted={tasks.dateCompleted}
                  id={tasks.id}
                />
              )
            })}

          </div>
        
      


    );
  }
}

export default App;


