import logo from './logo.svg';
import './App.css';

import { NavBar } from './Components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar>
          <Routes>
            <Route path='/' exact />
          </Routes>
        </NavBar>
      </Router>

    </>
  );
}

export default App;
