import { Link, Route, Routes } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is an app for budget controll</h1>
      <div className="main_container">
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
                <Route path='/'/>
                <Route path='/form'/>
                <Route path='/table'/>
              </Routes>
          </main>
        </div>

        <aside className="summary">
          
        </aside>

      </div>
    </div>
  );
}

export default App;
