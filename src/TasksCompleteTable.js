import React from "react"

class TasksCompleteTable extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="col-4">
                    <div className="row">
                        <div className="col-8 col-sm-8">
                            <p>{this.props.task}</p>
                        </div>
                        <div className="col-4 col-sm-4">
                            <p><button>{this.props.deletebutton}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TasksCompleteTable;






