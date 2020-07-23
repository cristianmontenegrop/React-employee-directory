import React from "react";
import "./style.css";
function Header() {

    return (
        <div className="row jumbotron-fluid jumbotron  bg-info">
            <div className="col-12 ">
                <div className="container">
                    <h1 className="text-center text-light display-4">Emplyee Directory</h1>
                    <p className="text-center text-light lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
                </div>
            </div>
            <hr class="col-12 bs-linebreak" />
        </div>

    );
}

export default Header;