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
      { name: "Task 1", available: true, dateJoined: "2019-12-02", id: 1 },
      { name: "Task 2", available: true, dateJoined: "2019-11-30", id: 2 },
      { name: "Task 3", available: false, dateJoined: "2019-12-01", id: 3 },
      { name: "Task 4", available: true, dateJoined: "2019-10-22", id: 4 },
      { name: "Task 5", available: false, dateJoined: "2019-12-09", id: 5 },
      { name: "Task 6", available: false, dateJoined: "2019-12-09", id: 5 },
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
          
          {Taskstocomplete.map(tasks => {

            return (
              <Tables
                key={tasks.id}
                available={tasks.available}
                name={tasks.name}
                dateJoined={tasks.dateJoined}
              />
            )
          })}
       
      

       
        {Taskscompleted.map(tasks => {
          return (
            <Tables
              key={tasks.id}
              available={tasks.available}
              name={tasks.name}
              dateJoined={tasks.dateJoined}
            />
          )
        })}

      </div>
    
    

    );
  }
}

export default App;


