import React from "react";

function Header() {

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="text-center display-4">Emplyee Directory</h1>
                    <p className="text-center lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Header;