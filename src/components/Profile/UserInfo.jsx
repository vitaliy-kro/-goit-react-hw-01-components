import { Avatar, UserName, UserDescr } from './Profile.styled';
import { Box } from '../Box';

export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <Box textAlign="center" p="4">
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserDescr>@{tag}</UserDescr>
      <UserDescr>{location}</UserDescr>
    </Box>
  );
};
