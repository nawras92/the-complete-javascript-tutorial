import { loginUser } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Send Login request to the backend
      const loginResponse = await fetch(loginUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      // Analyse response
      const dataReturned = await loginResponse.json();
      const { jwt, error } = dataReturned;
      // Success
      res.setHeader('Set-Cookie', `LWNJwt=${jwt}; Path=/; HttpOnly`);
      res.status(200);
      res.json({ message: 'Successfully Logged In', ok: true });
      // Error
      if (error) {
        const message = `${error?.name}: ${error?.message}`;
        res.status(401);
        res.json({ ok: false, message });
        throw new Error(message);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(405);
    res.json({ message: 'Method not allowed' });
  }
}
