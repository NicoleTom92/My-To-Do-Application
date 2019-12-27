import React from "react";

class Addsection extends React.Component {
    state = {
        tasks: "",
        furtherinfo: "",
        dateCompleted: "2020-01-01",
    };

    updateTasks = (event) => {
        console.log (event.target.value)
        this.setState({
            tasks: event.target.value
        });
    };

    updatefurtherinfo = (event) => {
        this.setState ({
            furtherinfo: event.target.value
        });
    };

    updateDate = event => {
        this.setState({
            dateCompleted: event.target.value
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
            
                <div className="row">
                    <div className="col-4">
                        <input type="text"
                            onChange={this.updateTasks}
                            value={this.state.tasks}
                            className="form-control"
                            placeholder="Enter Task" />
                    </div>

                    <div className="col-3">
                    <input type="text"
                        onChange={this.updatefurtherinfo}
                        value={this.state.furtherinfo}
                        className="form-control"
                        placeholder=" Enter Comments" />
                </div>


                    <div className="col-3">
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
            

        )
    }

}
export default Addsection;

