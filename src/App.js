import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Greeteing from './components/Greeting/Greeteing';
import FormPage from './pages/FormPage/FormPage';
import TablePage from './pages/TablePage/TablePage';
import Summary from './components/Summary/Summary';

import './App.css';

function App() {
  const [data, setData] = useState(localStorage.getItem('records')? JSON.parse(localStorage.getItem('records')) : []);

  return (
    <div className="App">
      <h1>This is an app for budget controll</h1>

      <div className="main_container">
        <aside className="summary">
          <Summary data={data}/>
        </aside>

        <div className="main">
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

          <main className="main">
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
