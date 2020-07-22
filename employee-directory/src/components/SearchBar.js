import React from "react";
import '../App.css';

function SearchBar(props) {

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                {/* <span className="input-group-text" id="inputGroup-sizing-default">Default</span> */}
            </div>
            <input
                type="text"
                value={props.search}
                onChange={props.handleInputChange}
                className="container form-control col-3"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                alt="Search" placeholder="Search by Name, Phone, Email or DOB" />
        </div>
    );
}

export default SearchBar;