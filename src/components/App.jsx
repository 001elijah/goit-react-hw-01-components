import Profile from './Profile/Profile';
import userProfileData from './data/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './data/data.json';

export const App = () => {
  
  return (
    <>
      <Profile username={userProfileData.username}
              tag={userProfileData.tag}
              location={userProfileData.location}
              avatar={userProfileData.avatar} stats={userProfileData.stats}/>
      <Statistics title={true} stats={statisticsData}/>
    </>
  );
};


export default App;