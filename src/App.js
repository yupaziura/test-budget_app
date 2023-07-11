import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Greeteing from './components/Greeting/Greeting';
import FormPage from './pages/FormPage/FormPage';
import TablePage from './pages/TablePage/TablePage';
import Summary from './components/Summary/Summary';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import TableViewRoundedIcon from '@mui/icons-material/TableViewRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';

import './App.scss';

function App() {
  const [data, setData] = useState(localStorage.getItem('records')? JSON.parse(localStorage.getItem('records')) : []);

  return (
    <div className="app">
      <h1 className='app_header'>💰 Budget Tracker</h1>

      <div className="app_container">
        <aside className="app_summary">
          <Summary data={data}/>
        </aside>

        <div className="app_main">
          <nav className="nav_bar">
            <Breadcrumbs>
              <Link to='/' className='nav_link'>
              <EmojiPeopleRoundedIcon sx={{ mr: 0.5 }} />
                <div>Greeting</div>
              </Link>

              <Link to='/form' className='nav_link'>
                <FeedRoundedIcon sx={{ mr: 0.5 }} />
                <div>Form</div>
              </Link>

              <Link to='/table' className='nav_link'>
                <TableViewRoundedIcon sx={{ mr: 0.5 }} />
                <div>Table</div>
              </Link>
            </Breadcrumbs>
          </nav>

          <hr/>

          <main className="app_content">
              <Routes>
                <Route path='/' element={<Greeteing/>}/>
                <Route path='/form' element={<FormPage setData={setData} data={data}/>}/>
                <Route path='/table' element={<TablePage setData={setData} data={data}/>}/>
              </Routes>
          </main>
        </div>

      </div>
    </div>
  );
}

export default App;
