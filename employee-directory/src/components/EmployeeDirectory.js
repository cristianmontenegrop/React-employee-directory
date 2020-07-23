import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Title from "./Title";


class EmployeeDirectory extends Component {

    state = {
        directory: [],
        search: null,
        sort: null
    };

    componentDidMount() {
        this.fetchDirectory();
    };

    handleInputChange = e => {
        this.setState({ search: e.target.value });
    };

    handleSortChange = e => {
        switch (e) {
            case "sortNameAsc":
                this.state.directory.sort(function (a, b) {
                    var x = a.name.first.toLowerCase() + a.name.last.toLowerCase();
                    var y = b.name.first.toLowerCase() + b.name.last.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                    return 0
                })
                break;
            case "sortNameDesc":
                this.state.directory.sort(function (a, b) {
                    var x = a.name.first.toLowerCase() + a.name.last.toLowerCase();
                    var y = b.name.first.toLowerCase() + b.name.last.toLowerCase();
                    if (x < y) { return 1; }
                    if (x > y) { return -1; }
                    return 0
                })
                break;
            case "sortEmailAsc":
                this.state.directory.sort(function (a, b) {
                    var x = a.name.first.toLowerCase();
                    var y = b.name.first.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                    return 0
                })
                break;
            case "sortEmailDesc":
                this.state.directory.sort(function (a, b) {
                    var x = a.email.toLowerCase()
                    var y = b.email.toLowerCase()
                    if (x < y) { return 1; }
                    if (x > y) { return -1; }
                    return 0
                })
                break;
            case "sortDOBAsc":
                this.state.directory.sort(function (a, b) {
                    var x = a.dob.date.slice(0, 10).replace("-", "")
                    var y = b.dob.date.slice(0, 10).replace("-", "")
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                    return 0;
                })
                break;
            case "sortDOBDesc":
                this.state.directory.sort(function (a, b) {
                    var x = a.dob.date.slice(0, 10).replace("-", "")
                    var y = b.dob.date.slice(0, 10).replace("-", "")
                    if (x < y) { return 1; }
                    if (x > y) { return -1; }
                    return 0
                })
                break;

            default:
                break;
        }

        this.setState({ sort: e });
    }

    fetchDirectory = () => {
        API.search()
            .then((res) => {
                this.setState({ directory: res.data.results })
                console.log(this.state.directory)
            })
            .catch(err => console.log(err));
    };

    render() {
        // console.log(this.state.directory)
        return (
            <div>
                <Header />
                <SearchBar
                    handleInputChange={this.handleInputChange}
                />
                <Title
                    onClick={this.handleSortChange} />
                < SearchResults
                    search={this.state.search}
                    directory={this.state.directory}
                />
            </div>
        );
    }
};

export default EmployeeDirectory;