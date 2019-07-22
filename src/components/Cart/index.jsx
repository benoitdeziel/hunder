import React, { useContext } from 'react';

import StoreContext from '../../context/StoreContext';
import LineItem from './LineItem';

const Cart = () => {
  const context = useContext(StoreContext);
  const { checkout } = context;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  const lineItems = checkout.lineItems.map(lineItem => <LineItem key={lineItem.id.toString()} lineItem={lineItem} />);

  return (
    <div>
      {lineItems}
      <h2>Subtotal</h2>
      <p>
        $ &nbsp;
        {checkout.subtotalPrice}
      </p>
      <br />
      <h2>Taxes</h2>
      <p>
        $&nbsp;
        {checkout.totalTax}
      </p>
      <br />
      <h2>Total</h2>
      <p>
        $&nbsp;
        {checkout.totalPrice}
      </p>
      <br />
      <button type="button" onClick={handleCheckout}>
        Check out
      </button>
    </div>
  );
};

export default Cart;
