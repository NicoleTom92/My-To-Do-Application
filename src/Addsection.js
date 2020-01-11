import React from "react";
import moment from "moment"; 

class Addsection extends React.Component {
    state = {
        task: "",
        dateCompleted: moment().format("YYYY-MM-DD")
    };

    updateTasks = (event) => {
        this.setState({
            task: event.target.value
        });
    };

    updateDate = event => {
        this.setState({
            dateCompleted: event.target.value
        })
    }

    AddTask = () => {

        this.props.addNewTaskFunc(
            this.state.task,
            false,
            this.state.dateCompleted
        );

    };

    render() {
        return (
               
            <div className="container">
                <div className="row">
                <div className="col-12 col-sm-6">
                        <input type="text"
                            onChange={this.updateTasks}
                            value={this.state.tasks}
                            className="form-control"
                            placeholder="Enter Task" />
                    </div>
                    

                    <div className="col-12 col-sm-4">
                        <input type="date"
                            className="form-control"
                            value={this.state.dateCompleted}
                            onChange={this.updateDate} />
                            
                    </div>

                   <div className="addbutton">
                    <div className="col-12 col-sm-2">
                            <button className="btn btn-dark" onClick={this.AddTask}><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                </div>
                
            

        )
    }

}
export default Addsection;

