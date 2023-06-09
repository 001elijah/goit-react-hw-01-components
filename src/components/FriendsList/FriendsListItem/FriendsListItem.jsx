import PropTypes from "prop-types";
import s from '../FriendsList.module.scss'

const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <span className={`${isOnline ? s.online : s.offline}`}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendsListItem;