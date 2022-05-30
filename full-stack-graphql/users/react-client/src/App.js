import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <a href="/" style={{ color: 'White' }}>
            Home |
          </a>
          <a href="/users" style={{ color: 'White' }}>
            Users |
          </a>
          <a href="/add-user" style={{ color: 'White' }}>
            Add User |
          </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
