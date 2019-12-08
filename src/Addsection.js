import React from "react";

class Addsection extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for a task" aria-label="Search for a task" aria-describedby="button-addon3" />
                <div className="inputgroup-append">
                    <button className="btn btn-dark" type="button">Add</button>
                </div>
            </div>
        )
    }
}

export default Addsection;