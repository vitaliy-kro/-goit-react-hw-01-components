import { Box } from '../Box';
import { StatsItemLabel } from './Profile.styled';
export const UserStats = ({ followers, views, likes }) => {
  return (
    <Box display="flex" bg="app.statsBackground" p="3" as="ul">
      <UserStatsItem quantity={followers} label="Followers"></UserStatsItem>
      <UserStatsItem quantity={views} label="Views"></UserStatsItem>
      <UserStatsItem quantity={likes} label="Likes"></UserStatsItem>
    </Box>
  );
};

const UserStatsItem = ({ label, quantity }) => {
  return (
    <Box width="calc(100%/3)" textAlign="center" as="li">
      <StatsItemLabel eventType="label">{label}</StatsItemLabel>
      <StatsItemLabel eventType="quantity">{quantity}</StatsItemLabel>
    </Box>
  );
};
