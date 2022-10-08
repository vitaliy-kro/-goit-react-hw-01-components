import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box';
export const App = () => {
  return (
    <Box bg="basicBackground" as="main">
      <Profile user={user}></Profile>
      <Statistics title={'Upoad stats'} stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Box>
  );
};
