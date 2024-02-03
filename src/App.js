import { useState } from 'react';
import './App.css';
import { List } from './List';
import data from './data/cards.json';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrello } from 'react-icons/fa';
import { FiGrid, FiSearch, FiChevronDown, FiBell, FiInfo, FiSettings, FiTable, FiCalendar, FiSquare, FiPlus } from 'react-icons/fi'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBolt, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialCardsData = [data.todoCards, data.inProgressCards, data.doneCards];

function App() {
  const [cards, setCards] = useState(initialCardsData)

  return (
    < div>
      <ToastContainer />
      <header className="header">
        <div className="trello-container">
          <FiGrid className="grid-icon" />
          <div className='together'>
            <FaTrello className="trello-logo" />
            <div className="trello-text">Trello</div>
          </div>
          <div className="workspaces">Workspaces <FiChevronDown className="arrow-down" /></div>
          <div className="recent">Recent <FiChevronDown className="arrow-down" /></div>
          <div className="starred" >Starred <FiChevronDown className="arrow-down" /></div>
          <div className="templated">Templates <FiChevronDown className="arrow-down" /></div>
          <button className='create-button'>Create</button>
          <button className="search-button"><FiSearch className="search-icon" />Search</button>
          <FiBell className="bell-icon" />
          <FiInfo className="info-icon" />
          <div className="cp">CP</div>
        </div>
      </header>

      <div className="top-row">
        <div className='left-column'>
          <div className="custom-t">T</div>
          <div className="text-container">
            <div className="text-line">Trello WorkSpace</div>
            <div className="text-line1">Free</div>
          </div>
          <div className="less-than-sign">&lt;</div>

        </div>
        <div className='right-column'>
          <div className="my-board-text">My Trello Board</div>
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div className="board-text">Board</div>
          <FiChevronDown className="arrow-down2" />
          <FontAwesomeIcon icon={faRocket} className="icon2" />
          <FontAwesomeIcon icon={faBolt} className="icon2" />
          <div className='filters'>Filters</div>
          <div className="divider"></div>
          <div className="cp2">CP</div>
          <div className="share-text">Share</div>
          <span className="three-dots">&#8230;</span>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className='sidebar-content'>
          <div className='sidebar-box'><FaTrello className="sidebar-icon"/>Boards</div>
          <div className='sidebar-box'><FontAwesomeIcon icon={faUser} className="sidebar-icon"/>Members <FiPlus className="plus-icon" /></div>
          <div className='sidebar-box'><FiSettings className="sidebar-icon" />WorkSpace Settings <FiChevronDown className="arrow-down3" /></div>
          <div className='sidebar-box1' style={{ fontSize: '15px', fontWeight: '700' }}>WorkSpace Views</div>
            <div className='sidebar-box'><FiTable className="sidebar-icon" />Table</div>
            <div className='sidebar-box'><FiCalendar className="sidebar-icon" />Calendar</div>
          <div className='sidebar-box1' style={{ fontSize: '15px', fontWeight: '700' }}>Your Boards <FiPlus className="plus-icon1" /></div>
            <div className='sidebar-box'><FiSquare className="sidebar-icon" />My Trello Board</div>
        </div>
        <div className='premium-box'>
          <span>Try Premium free</span>
        </div>
        </div>

        <div className="content">
          <List title="To Do" cards={cards[0]} listIndex={0} setCards={setCards} />
          <List title="In Progress" cards={cards[1]} listIndex={1} setCards={setCards} />
          <List title="Done" cards={cards[2]} listIndex={2} setCards={setCards} />
          <button>
            <h5>+ Add Another List</h5>
          </button>
        </div>

      </div>
    </ div>
  );
}

export default App;
