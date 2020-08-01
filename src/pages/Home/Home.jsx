import React, { Fragment } from 'react';
import './Home.css';

import Searchbar from '../../components/Searchbar/Searchbar';
import MainPublicity from '../../components/MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../../components/RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../../components/ListOfCategories/ListOfCategories';
import ListOfFoodSuggestions from '../../components/ListOfFoodSuggestions/ListOfFoodSuggestions';
import Menu from '../../components/Menu/Menu';
import MyOrderSection from '../../components/MyOrderSection/MyOrderSection';
import TotalPurchase from '../../components/TotalPurchase/TotalPurchase';
import Checkout from '../../components/Checkout/Checkout';

function Home() {
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
      <TotalPurchase />
      <Checkout />
    </Fragment>
  );
}

export default Home;
