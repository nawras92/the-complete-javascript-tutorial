'use client';

import { useRouter } from 'next/navigation';
import messages from '../messages/auth';

export default function LogoutBtn() {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    await fetch('/auth/logout/api');
    router.push('/auth/login');
    window.location.reload();
  };
  return <button onClick={handleLogout}>{messages['confirm']} </button>;
}
