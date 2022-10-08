import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { StatisticsTitle } from './Statistic.styled';
import { Box } from '../Box';
export const Statistics = ({ title, stats }) => {
  return (
    <Box
      width="400px"
      mx="auto"
      mb="7"
      pt="5"
      textAlign="center"
      bg="app.basicBackground"
      borderRadius="normal"
    >
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticList stats={stats}></StatisticList>
    </Box>
  );
};

Box.propTypes = {
  title: PropTypes.string,
};
