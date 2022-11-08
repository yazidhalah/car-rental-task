import React from "react";
import axios from "axios";

class CreateType extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {

        const data = {

            "id": 0,
            "name": this.state.name,
            "status": 1

        }
        axios.post("http://yazidtask-001-site1.ctempurl.com/api/CarType/AddType", data)
            .then(res => {
                window.location.reload();
                //console.log(res);
                //debugger;
            }).catch(error => {
                console.log(error);
                //debugger;
            })
    }


    render() {
        var { name } = this.state;

        return (
            <div className="modal fade" id="createType" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Type</h5>
                            <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form >
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="col-form-label">Name:</label>
                                    <input type="text" name="name" className="form-control form-control-sm " value={name} onChange={this.changeHandler} />
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" id="closeAddModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                                <button type="button" onClick={this.submitHandler} className="btn btn-primary btn-sm">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateType;