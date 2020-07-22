import React from "react";
import FontAwesome from 'react-fontawesome';

function Title(props) {

    return (

        <div className="container mw-100">
            <hr className="mt-2 mb-3" />
            <div className="row">

                <a className="text-center col-2">
                    Image
                </a>
                {/* <div className="text-center col-2">
                    Name
                </div> */}
                <div className="text-center col-2">
                    <div className="btn-group" role="group">
                        <a className="btn btn-xs btn-link py-0 pl-0 pr-1">
                            Name
                        </a>
                        <div className="btn-group-vertical">
                            <button onClick={() => props.onClick("sortNameAsc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-up"></FontAwesome>
                            </button>
                            <button onClick={() => props.onClick("sortNameDesc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-down"></FontAwesome>
                            </button>
                        </div>
                    </div>
                </div>
                <a className="text-center col-2">
                    Phone
                </a>
                {/* <a className="text-center col-4">
                    Email
                </a> */}
                <div className="text-center col-4">
                    <div className="btn-group" role="group">
                        <a className="btn btn-xs btn-link py-0 pl-0 pr-1">
                            Email
                        </a>
                        <div className="btn-group-vertical">
                            <button onClick={() => props.onClick("sortEmailAsc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-up"></FontAwesome>
                            </button>
                            <button onClick={() => props.onClick("sortEmailDesc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-down"></FontAwesome>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <a className="text-center col-2">
                    DOB
                </a> */}
                <div className="text-center col-2">
                    <div className="btn-group" role="group">
                        <a className="btn btn-xs btn-link py-0 pl-0 pr-1">
                            DOB
                        </a>
                        <div className="btn-group-vertical">
                            <button onClick={() => props.onClick("sortDOBAsc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-asc" ara-hidden="true"></FontAwesome>
                            </button>
                            <button onClick={() => props.onClick("sortDOBDesc")} className="btn btn-xs btn-link p-0">
                                <FontAwesome className="fas fa-sort-desc"></FontAwesome>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-2 mb-3" />
        </div>

        // <div className="input-group mb-3">
        //     <div className="input-group-prepend">
        //         <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
        //     </div>
        //     <input type="text" className="form-control col-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        // </div>
    );
}

export default Title;