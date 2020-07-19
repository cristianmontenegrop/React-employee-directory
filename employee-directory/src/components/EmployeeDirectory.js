import React, { Component } from "react";
import API from "../utils/API";



class EmployeeDirectory extends Component {

    state = {
        directory: {}
    };

    componentDidMount() {
        this.fetchDirectory();
    };

    fetchDirectory = () => {
        API.search()
            .then((res) => {
                this.setState({ directory: res.data })
                console.log(this.state.directory)
            })
            .catch(err => {
                console.log(err)
                return err
            });
    };

    render() {
        return (
            <div>
                <a>Heloo!</a>
                <a></a>
            </div>
        );
    }

};


export default EmployeeDirectory;