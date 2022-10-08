import PropTypes from 'prop-types';
import { TransactionLine, TransactionParam } from './TransactionHistory.styled';
export const TransactionBody = ({ items }) => {
  return (
    <tbody>
      {items.map(item => {
        return (
          <TransactionLine key={item.id}>
            <TransactionItem item={item}></TransactionItem>
          </TransactionLine>
        );
      })}
    </tbody>
  );
};
const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TransactionParam>{type}</TransactionParam>
      <TransactionParam>{amount}</TransactionParam>
      <TransactionParam>{currency}</TransactionParam>
    </>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
