/** @format */

import React from 'react';
import Cards from './Cards';

function Pizza() {
  return (
    <div className="container-fluid">
      <h1 className="text-center"> Pizza Types</h1>
      <div className="row">
        <Cards
          pizzName="Pepperoni"
          pizzaText="A timeless favorite featuring zesty pepperoni slices atop a
          layer of gooey cheese."
          imgSrc="./images/peperoni.jpeg"
        />
        <Cards
          pizzName="BBQ Chicken"
          pizzaText="Tangy barbecue sauce, grilled chicken, red onions, and a blend
          of cheeses for a smoky flavor."
          imgSrc="./images/meat.jpeg"
        />
        <Cards
          pizzName="Margherita"
          pizzaText="Classic simplicity with tomato, fresh mozzarella, basil, and a
          drizzle of olive oil. Enjoy the great taste of this special flavor."
          imgSrc="./images/piz2.jpeg"
        />
        <Cards
          pizzName="Vegetarian"
          pizzaText="Packed with fresh vegetables like bell peppers, onions,
          mushrooms, and olives Enjoy the great taste of this special flavor."
          imgSrc="./images/./veg.jpeg"
        />
      </div>
    </div>
  );
}

export default Pizza;
