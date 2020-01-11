import React from "react"
import moment from "moment";


class Tables extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    handleComplete = () => {
        this.props.completeTaskFunc(this.props.id)
        alert("clicked complete, alerted from App.js");
    }

    render() {
        return (
            <div class="taskstable">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <p>{this.props.name}</p>
                    </div>

                    <div className="col-12 col-sm-4">
                    <p>{this.props.dateCompleted}</p>
                    </div>
                    <div className="col-12 col-sm-2">
                        <button className="btn btn-dark" onClick={this.handleDelete}><i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                    <div className="col-12 col-sm-2">
                        {!this.props.completed && (
                            <button className="btn btn-dark book-button" disabled={this.props.completed} onClick={this.handleComplete}> <i class="far fa-check-square"></i></button>
                        )}
                    </div>
                </div>
            </div>

        )
    }
}



export default Tables;

