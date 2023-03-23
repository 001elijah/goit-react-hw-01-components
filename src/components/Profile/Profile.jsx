import PropTypes from "prop-types";
import s from './Profile.module.scss';

const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.label}>@{tag}</p>
          <p className={s.label}>{location}</p>
        </div>
      
        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span className={s.statLabel}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.statLabel}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.statLabel}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}


export default Profile;