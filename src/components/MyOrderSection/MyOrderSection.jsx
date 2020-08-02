import React, { Fragment } from 'react';

import './MyOrderSection.css';

import emoji from '../../assets/icons/emojiglasses.jpg';
import RecountOrder from '../RecountOrder/RecountOrder';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';
import SelectedProducts from '../SelectedProducts/SelectedProducts';

const MyOrderSection = () => {
  return (
    <Fragment>
      <RecountOrder />
      <div className='title-container'>
        <h4>
          My <img src={emoji} alt='emoji' />
          {/* No hallé un emoji con el fondo transparente */}
          <br />
          order
        </h4>
      </div>
      <DeliveryDetail />
      <SelectedProducts />
    </Fragment>
  );
};

export default MyOrderSection;
