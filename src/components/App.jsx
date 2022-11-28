import Profile from './Profile/Profile';
import user from '../json/user.json'
import Statistics from './Statistics/Statistics';
import statisticData from '../json/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionsHistory/TransactionHistory';
import transactions from '../json/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticData} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;