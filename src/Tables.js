import React from "react"

class Tables extends React.Component {
    render() {
        return (
         
            <div className="row">
                <div className="col-8 col-sm-4">
                    <p>{this.props.name}</p>
                </div>
               
               <div className="col-8 col-sm-4">
                        <button className="btn btn-dark">Completed</button> :
                        <button className="btn btn-dark">To Delete
                        </button>
                
                </div>
                </div>
                
               
                

        )
    }
}



export default Tables;

