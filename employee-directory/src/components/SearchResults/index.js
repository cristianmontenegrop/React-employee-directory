import React from "react";
import "./style.css";

function SearchResults(props) {
  const newDirectory = props.directory.filter(data => {
    if (props.search === null) {
      return data;
    } else if (data.name.first.toLowerCase().includes(props.search.toLowerCase())) {
      return data;
    } else if (data.name.last.toLowerCase().includes(props.search.toLowerCase())) {
      return data;
    } else if (data.email.toLowerCase().includes(props.search.toLowerCase())) {
      return data;
    } else if (data.phone.toLowerCase().includes(props.search.toLowerCase())) {
      return data;
    } else if (data.dob.date.toLowerCase().slice(0, 10).includes(props.search.toLowerCase())) {
      return data;
    }

  })

  return (
    <ul className="list-group search-results">
      {newDirectory.map(result => (
        <li key={result.email} className="list-group-item">
          <div className="container mw-100">
            <div className="row">

              <img alt="Employee" src={result.picture.large} className="img-fluid" />
              <div className="text-center col-2">
                {result.name.first} {result.name.last}
              </div>
              <div className="text-center col-2">
                {result.phone}
              </div>
              <div className="text-center col-4">
                {result.email}
              </div>
              <div className="text-center col-2">
                {result.dob.date.slice(0, 10)}
              </div>
            </div>
          </div>

        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
