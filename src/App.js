import logo from './logo.svg';
import './App.css';
import { List } from './List';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="app">
      <header className="header">Header
      {/* <FontAwesomeIcon icon="fa-solid fa-bell" /> */}
      </header>
      <div className="top-row">Top Row</div>
      <div className="main">
        <div className="sidebar">Sidebar</div>
        <div className="content">
        <List />
        </div>
      </div>
    </div>
  );
}

export default App;
