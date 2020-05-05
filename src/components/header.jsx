import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function header(props) {
  return (
    <div className={`head`}>
      <p>Appruve</p>
      <div>
        <FontAwesomeIcon icon={faCartPlus} className={`cart fa-2x`} />
        <span className="badge badge-primary badge-style">{props.count}</span>
      </div>
    </div>
  );
}

export default header;
