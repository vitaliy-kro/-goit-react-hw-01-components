import PropTypes from 'prop-types';
import { ListItem, UserStatus, UserImg, UserName } from './FriendsList.styled';
export const FriendsListItem = ({ friend }) => {
  return (
    <ListItem>
      <UserInfo friend={friend}></UserInfo>
    </ListItem>
  );
};
export const UserInfo = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <UserStatus isOnline={isOnline}></UserStatus>
      <UserImg src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </>
  );
};

UserInfo.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
