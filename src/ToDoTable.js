import React from "react"

class ToDoTable extends React.Component {


    render() {
        return (
            
            <div className="container">
            <div className = "row">
                <div className="col-6">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-2">
                <button>{this.props.addbutton}</button>
            </div>
            <div className="col-2">
            <button>{this.props.deletebutton}</button>
            </div>
            </div>
            </div>
            

        )
    }
}

export default ToDoTable;


