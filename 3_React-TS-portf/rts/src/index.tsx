import ReactDOM from 'react-dom';
// import GuestList from './props/state/GuestList';
// import UserSearch from './props/state/UserSearch';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
