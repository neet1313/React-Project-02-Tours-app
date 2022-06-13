import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
const [readMore, setReadMore] = useState(false);

const readMoreHandler = () => {
  setReadMore(!readMore);
}

const removeTourHandler = () => {
  removeTour(id);  //Lifting the State Up to Tours.js
}

  return (
    <article className="single-tour">
      <img src={image} alt = "--"/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> ₹{price} </h4>
        </div>
        <p>
        {readMore ? info : info.substring(0, 200)}
        <button onClick = {readMoreHandler}>{!readMore? 'read more' : 'read less'}</button>
        </p>
        <button type = 'button' className= 'delete-btn' onClick = {removeTourHandler}> Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
