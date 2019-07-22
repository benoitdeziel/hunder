import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  // eslint-disable-next-line no-undef
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  // eslint-disable-next-line no-undef
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
});

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
};

const StoreContext = React.createContext(defaultStoreContext);

export default StoreContext;
