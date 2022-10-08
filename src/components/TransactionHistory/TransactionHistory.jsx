import PropTypes from 'prop-types';
import { Box } from '../Box';
import { TranSactionHistoryHead } from './TransactionHistoryHead';
import { TransactionBody } from './TransactionBody';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      mx="auto"
      border="normal"
      borderColor="black"
      borderRadius="normal"
      as="table"
    >
      <TranSactionHistoryHead></TranSactionHistoryHead>
      <TransactionBody items={items}></TransactionBody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
