import Profile from './Profile/Profile';
import userProfileData from './data/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './data/data.json';
import FriendsList from './FriendsList/FriendsList';
import friends from './data/friends.json';
import Transactions from './Transactions/Transactions';
import transactions from './data/transactions.json';

export const App = () => {
  
  return (
    <>
      <Profile username={userProfileData.username}
              tag={userProfileData.tag}
              location={userProfileData.location}
              avatar={userProfileData.avatar} stats={userProfileData.stats}/>
      <Statistics title="Upload stats" stats={statisticsData}/>
      <Statistics stats={statisticsData}/>
      <FriendsList friends={friends}/>
      <Transactions transactions={transactions}/>
    </>
  );
};


export default App;