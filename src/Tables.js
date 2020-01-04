import React from "react"

class Tables extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
}

   

    render() {
        return (
            
            <div className="row">
                <div className="col-12 col-sm-3">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <p> {this.props.furtherinfo} </p>
                </div>

                <div className="col-12 col-sm-2">
                    <p>{this.props.dateCompleted}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <button className="btn btn-dark" onClick={this.handleDelete}>Delete
                    </button>
                </div>
                <div className="col-12 col-sm-2">
                    {this.props.available === true ?
                        <button className="btn btn-dark book-button" onClick={youclickedcomplete}>Complete</button> :
                        <button className="btn btn-dark">Restore
                        </button>
                    }
                    
                </div>
            </div>


        )
    }
}



export default Tables;

