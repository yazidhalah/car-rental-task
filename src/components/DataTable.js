import React from "react";
import EditOrder  from "./Popups/EditOrder";
import CreateOrder from "./Popups/CreateOrder";
//import OrderEdit from "./Popups/OrderEdit";
import DeleteOrder from "./Popups/DeleteOrder";

//import TypesTable from "./CarTypes/TypesTable";

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            editOrder: {},

            types: [],
            isTypesLoaded:false,
            typeName: ""
            
        }
    }

    componentDidMount() {

        fetch('http://yazidtask-001-site1.ctempurl.com/api/CarOrder/GetAllOrders')
            .then(res => res.json())
            .then(js => {
                this.setState({
                    isLoaded: true,
                    items: js
                })
            })

            fetch('http://yazidtask-001-site1.ctempurl.com/api/CarType/GetAllTypesWithDeleted')
            .then(res => res.json())
            .then(js => {
                this.setState({
                    isTypesLoaded: true,
                    types: js
                })
            });
    }

   
	handleEditOrder(OrderId) {
		this.setState({
			editOrder : this.state.items.results.find(x => x.Id === OrderId)
		})
	}
	
	handleDeleteOrder(id) {
		this.setState({
			editOrder : this.state.items.results.find(x => x.Id === id)
		})
	}
   
    getTypeName(id){
        if(this.state.isTypesLoaded){
        return this.state.types.results.find(x=>x.Id === id).Name
        }
    }


    render() {

        var { isLoaded, items ,isTypesLoaded} = this.state;
        //console.log(items.results);

        if (!isLoaded || !isTypesLoaded) {
            return (
                <div>
                    loading
                </div>
            );
        } else {
            return (
                <>
                    <div>
                        <p>
                            <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#createorder">Create New Order</button>
                           
                        </p>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Mobile</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">CarType</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {items.results.map(item => (
                                    <tr key={item.Id}>

                                        <th scope="row">{item.Id}</th>
                                        <td>{item.StartDate}</td>
                                        <td>{item.EndDate}</td>
                                        <td>{item.UserName}</td>
                                        <td>{item.UserMobile}</td>
                                        <td>{item.Comments}</td>
                                        <td>{this.getTypeName(item.CarTypeId)}</td>
                                        {item.Status === 1 &&
                                            <td>Active</td>
                                        }
                                        
                                        {item.Status === 2 &&
                                            <td>Deleted</td>
                                        }
                                        
                                        <td>
                                            <button type="button" onClick={this.handleEditOrder.bind(this, item.Id)} data-toggle="modal" data-target="#editorder" className="btn btn-primary btn-sm pull-right me-1">Edit</button>
                                            <button type="button" onClick={this.handleDeleteOrder.bind(this, item.Id)} data-toggle="modal" data-target="#deleteorder" className="btn btn-danger btn-sm pull-right">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <CreateOrder />
                    <EditOrder order={this.state.editOrder}/>
                    <DeleteOrder order={this.state.editOrder}/>

                </>
            )
        }


    }
}


export default DataTable;