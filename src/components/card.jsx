import React from "react";
import "../App.css";

function card(props) {
  const handlePayment = (event, title) => {
    event.preventDefault();
    props.handlePayment(title);
  };

  return (
    <div className="col-sm-12 col-md-4 col-lg-4">
      <div className="card card-design">
        <div className={`card-header bg-primary header`}>
          {props.data.id === 2 && <h6 className={`text rotate`}>Popular</h6>}
          <h5 className={`card-title text`}>{props.data.title}</h5>
          <h6 className={`card-subtitle text small-text`}>
            {props.data.description}
          </h6>
        </div>
        <div className="card-body">
          <ul>
            {props.data.features.map((element, index) => (
              <li className={`card-text`} key={index}>
                {element}
              </li>
            ))}
          </ul>
          <div className={`bottom-div`}>
            <p className={`card-text`}>
              $ <span>{props.data.price}</span> / month
            </p>
            <button
              onClick={(event) => handlePayment(event, props.data.title)}
              className="btn btn-primary card-link button"
            >
              Select
            </button>
            <p className="small-text">14-day money back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
