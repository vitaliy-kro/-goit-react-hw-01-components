import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TranscationHistory } from './TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>
      <Statistics title={'Upoad stats'} stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TranscationHistory items={transactions}></TranscationHistory>
    </>
  );
};
