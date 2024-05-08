/** @format */

// import React from 'react';
import Cards from './Cards';

function Pizza() {
  return (
    <div className="container-fluid">
      <h1 className="text-center"> Pizza Types</h1>
      <div className="row">
        <Cards
          foodName="Pepperoni"
          pizContent="A timeless favorite featuring zesty pepperoni slices atop a
          layer of gooey cheese."
          imgView="./images/peperoni.jpeg"
        />
        <Cards
          foodName="BBQ Chicken"
          pizContent="Tangy barbecue sauce, grilled chicken, red onions, and a blend
          of cheeses for a smoky flavor."
          imgView="./images/meat.jpeg"
        />
        <Cards
          foodName="Margherita"
          pizContent="Classic simplicity with tomato, fresh mozzarella, basil, and a
          drizzle of olive oil. Enjoy the great taste of this special flavor."
          imgView="./images/piz2.jpeg"
        />
        <Cards
          foodName="Vegetarian"
          pizContent="Packed with fresh vegetables like bell peppers, onions,
          mushrooms, and olives Enjoy the great taste of this special flavor."
          imgView="./images/./veg.jpeg"
        />
      </div>
    </div>
  );
}

export default Pizza;
