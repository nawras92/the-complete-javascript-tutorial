import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/" style={{ color: 'White' }}>
            Home |
          </Link>
          <Link to="/users" style={{ color: 'White' }}>
            Users |
          </Link>
          <Link to="/add-user" style={{ color: 'White' }}>
            Add User |
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
