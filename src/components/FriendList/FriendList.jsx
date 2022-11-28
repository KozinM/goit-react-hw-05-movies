import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <FriendListItem 
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
         ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList;
