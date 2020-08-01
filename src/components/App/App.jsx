import React, { Fragment } from 'react';
import './App.css';

import Searchbar from '../Searchbar/Searchbar';
import MainPublicity from '../MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../ListOfCategories/ListOfCategories';
import ListOfFoodSuggestions from '../ListOfFoodSuggestions/ListOfFoodSuggestions';
import Menu from '../Menu/Menu';
import MyOrderSection from '../MyOrderSection/MyOrderSection';

function App() {
  return (
    <Fragment>
      <main id='app'>Main view</main>
      <Menu />
      <Searchbar />
      <MainPublicity />
      <RestaurantsAndDelivery />
      <ListOfCategories />
      <ListOfFoodSuggestions />

      <MyOrderSection />

      <div>
        <div>User</div>
        <div>Count of items in my order</div>
      </div>

      <div>Title my order</div>
      <div>Info address and time</div>
      <div>List of foods in My Order</div>
      <div>Tips for delivery</div>
      <div>
        <div>Total title</div>
        <div>Total money amount</div>
      </div>
      <div>Persons?</div>
      <div>Checkout button</div>
    </Fragment>
  );
}

export default App;
