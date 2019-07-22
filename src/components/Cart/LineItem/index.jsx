import React, { useContext } from 'react';
import { Flex, Box } from '@rebass/grid/emotion';

import StoreContext from '../../../context/StoreContext';

const LineItem = ({ line_item, ...props }) => {
  const context = useContext(StoreContext);

  const variantImage = line_item.variant.image ? (
    <img src={line_item.variant.image.src} alt={`${line_item.title} product shot`} height="60px" />
  ) : null;

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>{line_item.variant.selectedOptions.map(option => `${option.name}: ${option.value} `)}</>
  ) : null;

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id);
  };

  return (
    <Flex py={2} flexWrap="wrap" justifyContent="space-between" alignItems="center" {...props}>
      <Box>{variantImage}</Box>
      <Box>
        <p>
          {line_item.title}
          {'  '}
          {line_item.variant.title === !'Default Title' ? line_item.variant.title : ''}
        </p>
      </Box>
      <Box>{selectedOptions}</Box>
      <Box>
        {line_item.quantity}
        {console.log(line_item)}
      </Box>
      <Box>
        <button onClick={handleRemove}>Remove</button>
      </Box>
    </Flex>
  );
};

export default LineItem;
