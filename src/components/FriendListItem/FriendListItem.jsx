import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({isOnline, avatar, name}) => {
    return (
    <li className={styles.item}>
            <span className={isOnline ? styles.onLine : styles.offLine}>
              {' '}
              ●
            </span>
            <img
              className={styles.avatar}
              src={avatar}
              alt={name}
              width="48"
            />
            <p className={styles.name}>{name}</p>
          </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

export default FriendListItem;