import React from "react";
 import EditType from "./EditType";
import CreateType from "./CreateType";
//import TypeEdit from "./Popups/TypeEdit";
 import DeleteType from "./DeleteType";

class TypesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            editType: []
        }
    }

    componentDidMount() {
        fetch('http://yazidtask-001-site1.ctempurl.com/api/CarType/GetAllTypes')
            .then(res => res.json())
            .then(js => {
                this.setState({
                    isLoaded: true,
                    items: js
                    
                })
            });
    }


    handleEditType(TypeId) {
        this.setState({
            editType: this.state.items.results.find(x => x.Id === TypeId)
        })
    }

    handleDeleteType(id) {
        this.setState({
            editType: this.state.items.results.find(x => x.Id === id)
        })
    }

    render() {

        var { isLoaded, items } = this.state;
        //console.log(items.results);

        if (!isLoaded) {
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
                            <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#createType">Create New Type</button>

                        </p>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>

                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {items.results.map(item => (
                                    <tr key={item.Id}>

                                        <th scope="row">{item.Id}</th>
                                        <td>{item.Name}</td>

                                        {item.Status === 1 &&
                                            <td>Active</td>
                                        }

                                        {item.Status === 2 &&
                                            <td>Deleted</td>
                                        }

                                        <td>
                                            <button type="button" onClick={this.handleEditType.bind(this, item.Id)} data-toggle="modal" data-target="#editType" className="btn btn-primary btn-sm pull-right me-1">Edit</button>
                                            <button type="button" onClick={this.handleDeleteType.bind(this, item.Id)} data-toggle="modal" data-target="#deleteType" className="btn btn-danger btn-sm pull-right">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <CreateType />
                    <EditType type={this.state.editType} />
                    <DeleteType type={this.state.editType} />

                </>
            )
        }


    }



}


export default TypesTable;