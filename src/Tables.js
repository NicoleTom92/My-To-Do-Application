import React from "react"

class Tables extends React.Component {

    render() {
        return (
            
            <div className="row">
                <div className="col-12 col-sm-2">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <p>{this.props.dateJoined}</p>
                </div>
                
                <div className="col-12 col-sm-2">
                    {this.props.available === true ?
                        <button className="btn btn-dark">To Add</button> :
                        <button disabled className="btn btn-dark">Delete
                        </button>
                    }
                </div>

 </div>
            


        )
    }
}



export default Tables;



