import React from "react"

class TasksCompleteTable extends React.Component {


    render() {
        return (
        
            <div className="container">
            <div className="row">
                <div class="col-6">
                    <div className="row">
                        <div className="col-8">
                            <p>{this.props.task}</p>
                        </div>
                        <div className="col-2">
                            <p><button>{this.props.deletebutton}</button></p>
                        </div>


                    </div>
                </div>
            </div>
            </div>
        
        
           
        )
    }
}

export default TasksCompleteTable;






