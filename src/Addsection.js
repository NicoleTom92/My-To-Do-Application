import React from "react";

class Addsection extends React.Component {
    state = {
        tasks: "",
        dateCompleted: ""
    };

    updatetask = (event) => {
        this.setState({
            tasks: event.target.value
        });
    };


    updateDate = event => {
        this.setState({
            date: event.target.value
        })
    }

    AddTask = () => {
        const TasksArray = this.state.tasks.split(",");
        const filteredTasks = TasksArray.filter(tasks => {
            return tasks.length > 0;
        });

        this.props.addNewTaskFunc(
            this.state.tasks,
            filteredTasks,
            this.state.dateCompleted
        );

    };

    render() {
        return (
            <div className="taskbox">
                <div className="row">
                    <div className="col-6">
                        <input type="text"
                            onChange={this.updateTasks}
                            value={this.state.tasks}
                            className="form-control"
                            placeholder="Enter Task" />
                    </div>

                    <div className="col-4">
                        <input type="date"
                            className="form-control"
                            value={this.state.dateCompleted}
                            onChange={this.updateDate} />
                    </div>

                    <div className="addbutton">
                        <div className="col-2">
                            <button className="btn btn-dark" onClick={this.AddTask}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Addsection;

