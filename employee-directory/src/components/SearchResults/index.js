import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.directory.map(result => (
        <li key={result.email} className="list-group-item">
          <img alt="Employee" src={result.picture.medium} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
