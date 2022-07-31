import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyColors from './components/MyColors';

const myStyle = {
  background: 'red',
  color: 'white',
  fontSize: '3rem',
};
const myStyle2 = {
  background: 'blue',
  color: 'white',
  fontSize: '1rem',
};
function App() {
  const [showUser, setShowUser] = useState(false);
  const user = 'Nawras';
  const handleClick = () => {
    setShowUser(!showUser);
  };
  return (
    <>
      <div className="App">
        <h1 style={myStyle}>hello, {user}</h1>
      </div>
      <button onClick={handleClick}>Show User</button>
      {showUser && (
        <User name={user}>
          <h1 style={myStyle2}>this is children</h1>
          <MyColors />
        </User>
      )}
    </>
  );
}

export default App;

function User(props) {
  const { name, children } = props;
  return (
    <div className="user">
      <h3>User Name: {name}</h3>
      {children}
    </div>
  );
}
