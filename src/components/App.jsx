import Profile from './Profile/Profile';
import userProfileData from './data/user.json';

export const App = () => {
  
  return (
    <>
      <Profile username={userProfileData.username}
              tag={userProfileData.tag}
              location={userProfileData.location}
              avatar={userProfileData.avatar} stats={userProfileData.stats}/>
    </>
  );
};


export default App;