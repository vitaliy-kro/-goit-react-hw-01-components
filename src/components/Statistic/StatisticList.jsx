import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Item, Label } from './Statistic.styled';
export const StatisticList = ({ stats }) => {
  return (
    <Box display="flex" justifyContent="center" as="ul">
      {stats.map(stat => {
        return <StatsListItem stat={stat} key={stat.id}></StatsListItem>;
      })}
    </Box>
  );
};

const StatsListItem = ({ stat: { label, percentage } }) => {
  return (
    <Item label={label}>
      <StatisticLabel label={label} percentage={percentage}></StatisticLabel>
    </Item>
  );
};

const StatisticLabel = ({ label, percentage }) => {
  return (
    <>
      <Label elementType={label}>{label}</Label>
      <Label elementType={percentage}>{percentage}%</Label>
    </>
  );
};

StatisticLabel.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
