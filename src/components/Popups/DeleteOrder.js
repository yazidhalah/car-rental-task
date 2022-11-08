import React from "react";
import axios from "axios";

class DeleteOrder extends React.Component {

    constructor() {
        super();
      
        this.state = {
            id: ''
        }
    }

    UNSAFE_componentWillReceiveProps(prop){
        this.setState({
          
            id: prop.order.Id,
           
        })
    }
    submitHandler3 = (e) => {
    
        const id = this.state.id;

        
        axios.post("http://yazidtask-001-site1.ctempurl.com/api/CarOrder/DeleteOrder?id=" + id)
            .then(res => {
                //console.log(res);
                window.location.reload();
                //debugger;
            }).catch(error => {
                console.log(error);
                //debugger;
            })
    }
    render() {
        var { id } = this.state;
      
            return (
                <div className="modal fade" id="deleteorder" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Order</h5>
                                <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <input type="number" hidden name="id" className="form-control form-control-sm " value={id} onChange={this.changeHandler} />
                                   <h4 className="text-danger text-center">Are You Sure ?? You Want to Delete This Record??</h4>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">No</button>
                                    <button type="button" onClick={this.submitHandler3} className="btn btn-primary btn-sm">Yes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        



    }
}

export default DeleteOrder;