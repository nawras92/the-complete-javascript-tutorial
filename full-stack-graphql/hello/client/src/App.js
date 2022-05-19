import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloUser from './components/HelloUser';

function App() {
  return (
    <div>
      <Hello />
      <hr />
      <HelloUser name="Jad" />
    </div>
  );
}

export default App;
