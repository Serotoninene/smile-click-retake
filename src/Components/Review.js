import React from "react";

export default function Review(props) {
  const { msg, name, pp, job, location, reviewsRef, id } = props;
  return (
    <div className="Review flex-column justify-between relative">
      <div className="customerReview relative">{msg}</div>

      <div className="customerId flex">
        <div className="customerPic">
          <img src={pp} className="img-fluid" alt="customer pic"></img>
        </div>
        <div className="flex-column justify-center">
          <h4>{name}</h4>
          <p>
            {job} - {location}
          </p>
        </div>
      </div>
    </div>
  );
}
