import PropTypes from 'prop-types';
export const StatisticEl = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

StatisticEl.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
