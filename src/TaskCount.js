import React from "react";

class TaskCount extends React.Component {
    render() {
        return (
            <div className="Tasksremaining">
            <p>There are currently <span>{this.props.count}</span> tasks left to complete.</p>
            </div>
        );
    }
}

export default TaskCount;

