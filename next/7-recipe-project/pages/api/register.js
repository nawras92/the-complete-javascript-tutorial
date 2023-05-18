import { registerUser } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Send Login request to the backend
      const registerResponse = await fetch(registerUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      // Analyse response
      const dataReturned = await registerResponse.json();
      const { error } = dataReturned;
      // error
      if (error) {
        const message = `${error?.name}: ${error?.message}`;
        res.status(401);
        res.json({ ok: false, message });
        throw new Error(message);
      }
      res.status(200);
      res.json({ message: 'Successfully Registered', ok: true });
      // Error
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(405);
    res.json({ message: 'Method not allowed' });
  }
}
