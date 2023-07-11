import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Greeteing from './components/Greeting/Greeteing';
import FormPage from './pages/FormPage/FormPage';
import TablePage from './pages/TablePage/TablePage';
import Summary from './components/Summary/Summary';

import './App.scss';

function App() {
  const [data, setData] = useState(localStorage.getItem('records')? JSON.parse(localStorage.getItem('records')) : []);

  return (
    <div className="app">
      <h1 className='app_header'>This is an app for budget controll</h1>

      <div className="app_container">
        <aside className="app_summary">
          <Summary data={data}/>
        </aside>

        <div className="app_main">
          <nav className="nav_bar">
            <Breadcrumbs>
              <Link to='/'>
                Greeting
              </Link>

              <Link to='/form'>
                Form
              </Link>

              <Link to='/table'>
                Table
              </Link>
            </Breadcrumbs>
          </nav>

          <hr style={{width: '100%', border:'none', borderTop: '1px solid lightgrey'}}/>

          <main className="app_content">
              <Routes>
                <Route path='/' element={<Greeteing/>}/>
                <Route path='/form' element={<FormPage setData={setData} data={data}/>}/>
                <Route path='/table' element={<TablePage data={data}/>}/>
              </Routes>
          </main>
        </div>

      </div>
    </div>
  );
}

export default App;
