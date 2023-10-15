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
      <p>User Email: {user?.email}</p>
      <p>User Firstname: {user?.firstName}</p>
      <p>User lastName: {user?.lastName}</p>
      <p>User password: {user?.password}</p>
    </div>
  );
}
