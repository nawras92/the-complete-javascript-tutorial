import { isLoggedIn } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Get the token
      const token = req.cookies['LWNJwt'];
      // Send request to the backend
      const response = await fetch(isLoggedIn, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const user = await response.json();
        res.status(200);
        res.json({
          loggedIn: true,
          user,
        });
      }
      if (!response.ok) {
        res.status(200);
        res.json({
          loggedIn: false,
          user: null,
        });
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(405);
    res.json({ message: 'Method Not Allowed' });
  }
}
