import React from "react";
import axios from "axios";

class EditOrder extends React.Component {

    constructor() {
        super();
        //console.log(props);
        this.state = {
            carTypes: [],
            isLoaded: false,
            //preOrder: this.props.order,
            isOrderLoaded: true,
            id: '',
            startDate: '',
            endDate: '',
            userName: '',
            userMobile: '',
            comment: '',
            carTypeId: '',
            status: '1'
        }


    }

    UNSAFE_componentWillReceiveProps(prop){
        this.setState({
            
            //preOrder: this.props.order,
            isOrderLoaded: true,
            id: prop.order.Id,
            startDate: this.dateinput(prop.order.StartDate),
            endDate: this.dateinput(prop.order.EndDate),
            userName: prop.order.UserName,
            userMobile: prop.order.UserMobile,
            comment: prop.order.Comments,
            carTypeId: prop.order.CarTypeId,
            status: '1'
        })
    }

    componentDidMount() {
        

        fetch('http://yazidtask-001-site1.ctempurl.com/api/CarType/GetAllTypes')
            .then(res => res.json())
            .then(js => {
                this.setState({
                    isLoaded: true,
                    carTypes: js
                })
            });

    }


    dateinput = (date) => {
        let now = new Date(date);
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);

        return now.getFullYear() + "-" + (month) + "-" + (day);

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    submitHandler2 = (e) => {
    
        const data = {

            "id": this.state.id,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "userName": this.state.userName,
            "carTypeId": this.state.carTypeId,
            "userMobile": this.state.userMobile,
            "comments": this.state.comment,
            "status": 1

        }

        //console.log(data);


        axios.post("http://yazidtask-001-site1.ctempurl.com/api/CarOrder/EditOrder", data)
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
        var { isLoaded, carTypes, startDate, endDate, userName, userMobile, comment, carTypeId, isOrderLoaded, id } = this.state;
        //console.log(carTypes);

        //console.log(this.state);
        if (!isLoaded || !isOrderLoaded) {
            return (
               null
            );
        } else {
            //console.log(this.state);
            return (
                <div className="modal fade" id="editorder" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Order</h5>
                                <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <input type="number" hidden name="id" className="form-control form-control-sm " value={id} onChange={this.changeHandler} />
                                    <div className="form-group">
                                        <label className="col-form-label">Start Date:</label>
                                        <input type="date" name="startDate" className="form-control form-control-sm " value={startDate} onChange={this.changeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">End Date:</label>
                                        <input type="date" name="endDate" className="form-control form-control-sm " value={endDate} onChange={this.changeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">User name:</label>
                                        <input type="text" name="userName" className="form-control form-control-sm " value={userName} onChange={this.changeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">User Mobile:</label>
                                        <input type="text" name="userMobile" className="form-control form-control-sm " value={userMobile} onChange={this.changeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">Comment:</label>
                                        <textarea name="comment" className="form-control form-control-sm " value={comment} onChange={this.changeHandler}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">Car Type:</label>
                                        <select className="form-control form-control-sm " name="carTypeId" value={carTypeId} onChange={this.changeHandler}>
                                            <option selected hidden> -- Select Type -- </option>
                                            {carTypes.results.map(item =>
                                                <option key={item.Id} value={item.Id}>{item.Name}</option>
                                            )}
                                        </select>
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

export default EditOrder;