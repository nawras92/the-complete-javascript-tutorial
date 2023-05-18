import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useUser() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      try {
        const response = await fetch('/api/isLoggedIn');
        const { loggedIn, user } = await response.json();
        // if logged In, save the user
        if (loggedIn) {
          setUser(user);
        }
        if (!loggedIn) {
          // Redirect to login Page
          router.push('/login');
        }
      } catch (e) {
        console.log(e);
      }
    }
    checkUser();
  }, []);

  return user;
}
