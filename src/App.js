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
      { name: "Task 1", furtherinfo:["Add comments"], available: true, dateCompleted: "01-01-2020", id: uuid() },
      { name: "Task 2", furtherinfo:["Add comments"], available: true, dateCompleted: "01-02-2020", id: uuid()  },
      { name: "Task 3", furtherinfo:["Add comments"], available: false, dateCompleted: "01-04-2020", id: uuid()  },
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
    this.setState ( state => ({
        id: !state.id
      }))
    }

  addNewTask = (name, furtherinfo , dateCompleted) => {
    const newTask = {
      name: name,
      furtherinfo: furtherinfo,
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
    
          <h5><u>In Progress Tasks:</u></h5>
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
          
          <h5><u>Tasks Completed:</u></h5>
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
      </div>

    );
  }
}

export default App;


