import React from "react";
import axios from "axios";

class CreateOrder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            carTypes: [],
            isLoaded: false,
            startDate: '',
            endDate: '',
            userName: '',
            userMobile: '',
            comment: '',
            carTypeId: '',
            status:'1',
        }
    }

    
    componentDidMount() {
        fetch('http://yazidtask-001-site1.ctempurl.com/api/CarType/GetAllTypes')
            .then(res => res.json())
            .then(js => {
                this.setState({
                    isLoaded: true,
                    carTypes: js
                })
            })

    }


    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    submitHandler = (e) =>{


        console.log(this.state);
        const data = {
            
            "id": 0,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "userName": this.state.userName,
            "carTypeId": this.state.carTypeId,
            "userMobile": this.state.userMobile,
            "comments": this.state.comment,
            "status": 1
          
    }
        axios.post("http://yazidtask-001-site1.ctempurl.com/api/CarOrder/AddOrder",data)
        .then(res => {
            console.log(res);
            //debugger;
        }).catch(error => {
            console.log(error);
            //debugger;
        })
    }




    render() {

        var { isLoaded, carTypes , startDate,endDate,userName,userMobile,comment,carTypeId} = this.state;
        //console.log(carTypes);

        if (!isLoaded) {
            return (
                <div>
                    loading
                </div>
            );
        }else{
            return (
                <div className="modal fade" id="createorder" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Order</h5>
                                <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form >
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label  className="col-form-label">Start Date:</label>
                                        <input type="date" name="startDate" className="form-control form-control-sm " value={startDate} onChange={this.changeHandler}/>
                                    </div>
    
                                    <div className="form-group">
                                        <label  className="col-form-label">End Date:</label>
                                        <input type="date" name="endDate" className="form-control form-control-sm " value={endDate} onChange={this.changeHandler}/>
                                    </div>
    
                                    <div className="form-group">
                                        <label  className="col-form-label">User name:</label>
                                        <input type="text" name="userName" className="form-control form-control-sm " value={userName} onChange={this.changeHandler}/>
                                    </div>
    
                                    <div className="form-group">
                                        <label  className="col-form-label">User Mobile:</label>
                                        <input type="text" name="userMobile" className="form-control form-control-sm " value={userMobile} onChange={this.changeHandler}/>
                                    </div>
    
                                    <div className="form-group">
                                        <label  className="col-form-label">Comment:</label>
                                        <textarea name="comment" className="form-control form-control-sm " value={comment} onChange={this.changeHandler}></textarea>
                                    </div>
    
                                    <div className="form-group">
                                        <label  className="col-form-label">Car Type:</label>
                                        <select className="form-control form-control-sm " name="carTypeId" value={carTypeId} onChange={this.changeHandler}>
                                            <option selected hidden> -- Select Type -- </option>
                                            {carTypes.results.map(item => 
                                                <option key={item.Id} value={item.Id}>{item.Name}</option>
                                                )}
                                        </select>
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
}

export default CreateOrder;