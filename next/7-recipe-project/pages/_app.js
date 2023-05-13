import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import { isLoggedIn } from '../utils/helpers';
import '../styles/reset.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);
  return (
    <>
      <Header />
      <p>Is LoggedIn: {loggedIn ? 'yes' : 'no'}</p>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
