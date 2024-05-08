/** @format */

// import React from 'react';

function Cards(props) {
  console.log(props);
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.imgView} className="card-img-top" alt="..." />
        <h1>{props.foodName}</h1>
        <div className="card-body">
          <p className="card-text">{props.pizContent}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
