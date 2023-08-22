import { cookies } from 'next/headers';
import { Cairo } from 'next/font/google';
import NavList from './components/NavList';
import './styles/reset.css';
import './styles/globals.css';

const cairo = Cairo({
  variable: '--cairo-font',
  subsets: ['arabic'],
  weight: ['200', '300', '500', '700', '800', '900'],
});

export default function Layout({ children }) {
  // Check if the user logged In
  const cookiesStore = cookies();
  const userCookie = cookiesStore.get('loggedIn_user')?.value;
  const isLoggedIn = !!userCookie;
  return (
    <html>
      <body className={cairo.className}>
        <NavList loggedIn={isLoggedIn} />
        {children}
      </body>
    </html>
  );
}
