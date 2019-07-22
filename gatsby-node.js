/* eslint-disable no-undef */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `);

  pages.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}/`,
      component: path.resolve('./src/templates/ProductPage/index.jsx'),
      context: {
        id: node.id,
        handle: node.handle,
      },
    });
  });
};
