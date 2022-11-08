import React from "react";
import axios from "axios";

class EditType extends React.Component {

    constructor() {
        super();
        //console.log(props);
        this.state = {
            isLoaded: false,
            id: '',
            name:'',
            status: '1'
        }


    }

    UNSAFE_componentWillReceiveProps(prop){
        this.setState({
            
            isLoaded: true,
            id: prop.type.Id,
            name:prop.type.Name,
            status: '1'
        })
    }
   
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    submitHandler2 = (e) => {
    
        const data = {

            "id": this.state.id,
            "name":this.state.name,
            "status": 1

        }

        //console.log(data);


        axios.post("http://yazidtask-001-site1.ctempurl.com/api/CarType/EditType", data)
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
       

        //console.log(this.state);
        var { isLoaded,name, id } = this.state;
        //console.log(carTypes);

        //console.log(this.state);
        if (!isLoaded) {
            return (
               null
            );
        } else {
            //console.log(this.state);
            return (
                <div className="modal fade" id="editType" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Type</h5>
                                <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <input type="number" hidden name="id" className="form-control form-control-sm " value={id} onChange={this.changeHandler} />
                                    <div className="form-group">
                                        <label className="col-form-label">Name:</label>
                                        <input type="text" name="name" className="form-control form-control-sm " value={name} onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={this.submitHandler2} className="btn btn-primary btn-sm">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }



    }
}

export default EditType;