import React from "react"; 

class Addsection extends React.Component {
    state = {
        tasks: "", 
        dateCompleted:"2019-12-09" 
    };

    updatetask = (event)  => {
        console.log(event.target.value)
this.setState( {
    task: event.target.value 
});
    };

    render()
 {
     return (
         <div className="taskbox">
         <div className="row">
             <div className ="col-6">
                 <input type="text" onChange={this.updatetask} value= {this.state.task} className="form-control" placeholder="Enter Task" />
             </div>
             <div className="col-4">
             <input type="date" className="form-control" />
             </div>
             <div className="addbutton">
             <div className="col-2">
                 <button className="btn btn-dark">Add</button>
             </div>
         </div>
         </div>
         </div>
        
     )
 }
     
}
export default Addsection;

