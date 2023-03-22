import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsList = (props) => {
    const { friends } = props;
    return (
        <ul className="friend-list">
            {/* <!-- Довільна кіл-сть FriendListItem --> */}
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendsListItem 
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired
};


export default FriendsList;