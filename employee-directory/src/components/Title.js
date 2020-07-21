import React from "react";

function Title() {

    return (

        <div className="container mw-100">
            <hr className="mt-2 mb-3" />
            <div className="row">

                <div className="text-center col-2">
                    Image
                </div>
                <div className="text-center col-2">
                    Name
                </div>
                <div className="text-center col-2">
                    Phone
                </div>
                <div className="text-center col-4">
                    Email
                </div>
                <div className="text-center col-2">
                    DOB
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