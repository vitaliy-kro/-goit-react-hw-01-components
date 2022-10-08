import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendsListItem } from './FriendItem';
export const FriendList = ({ friends }) => {
  return (
    <Box mx="auto" mb="7" width="300px" as="ul">
      {friends.map(friend => {
        return (
          <FriendsListItem friend={friend} key={friend.id}></FriendsListItem>
        );
      })}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
