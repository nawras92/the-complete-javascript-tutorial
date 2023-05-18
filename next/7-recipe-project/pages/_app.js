// import { useState } from 'react';
// import { useEffect } from 'react';
import Header from '../components/Header';
import '../styles/reset.css';
import '../styles/global.css';
// import useUser from '../hooks/useUser';

const MyApp = ({ Component, pageProps }) => {
  // const user = useUser();
  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   async function checkUser() {
  //     const response = await fetch('/api/isLoggedIn');
  //     const { loggedIn: isLoggedIn } = await response.json();
  //     setLoggedIn(isLoggedIn);
  //   }
  //   checkUser();
  // }, []);
  // console.log(user);
  return (
    <>
      <Header />
      {/* <p>Is LoggedIn: {user?.id ? 'yes' : 'no'}</p> */}
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
