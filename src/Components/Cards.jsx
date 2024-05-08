import React from 'react'

function Cards(props) {
    console.log(props);
  return (
    <div className="col-md-3">
          <div className="card" >
            <img src={props.imgSrc} className="card-img-top" alt="..."/>
            <h1>{props.pizzName}</h1>
            <div className="card-body">
              <p className="card-text">{props.pizzaText}</p>
            </div>
     </div>
     </div>
  )
}

export default Cards
