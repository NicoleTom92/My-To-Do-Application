import React from "react"

class TasksCompleteTable extends React.Component {


    render() {
        return (
            
                 <div className = "row">
                <div className="col-6 col-sm-6">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-3 col-sm-3">
                <button>{this.props.deletebutton}</button>
            </div>
            </div>
           
          
            

        )
    }
}

export default TasksCompleteTable;


