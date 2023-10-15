'use client';

import { useState } from 'react';
import { useEffect } from 'react';

export default function UserCard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const url = '/profile/api';
      const response = await fetch(url);
      const result = await response.json();
      if (result?.ok) {
        setUser(result?.data);
      } else {
        setUser(null);
      }
    }
    getUser();
  }, []);
  if (!user) {
    return <p>Error in fetching user</p>;
  }
  return (
    <div>
      <p>User Email: email@mail.com</p>
      <p>User Firstname: Ali</p>
      <p>User lastName: Ola</p>
      <p>User password: 111</p>
    </div>
  );
}
