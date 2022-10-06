import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TranscationHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TransactionItem item={item}></TransactionItem>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TranscationHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
