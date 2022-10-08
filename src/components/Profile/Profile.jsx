import PropTypes from 'prop-types';

import { UserInfo } from './UserInfo';
import { UserStats } from './UserStats';
import { Box } from '../Box';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Box
      width="300px"
      mx="auto"
      mb="7"
      bg="app.basicBackground"
      borderRadius="normal"
    >
      <UserInfo
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats followers={followers} views={views} likes={likes} />
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
