import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  const removeTourHandler = (removedId) => {
    props.removeTour(removedId); //Lifting the state up to App.js
  }

  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'> </div>
    </div>
    <div>
      {props.tours.map((tour)=>{
        return <Tour key={tour.id} {...tour} removeTour = {removeTourHandler}/>
      })}
    </div>
  </section>;
};

export default Tours;
