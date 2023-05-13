import { addOne } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get Token
      const token = req?.cookies?.LWNJwt;
      // Send Request to the backend
      const fetchResponse = await fetch(addOne, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req.body),
      });
      const dataReturned = await fetchResponse.json();
      if (!fetchResponse.ok) {
        const { error } = dataReturned;
        const message = ` ${error?.name}: ${error?.message}`;
        res.status(401);
        res.json({ ok: false, message });
        throw new Error(message);
      }
      // success
      res.status(200);
      res.json({
        ok: true,
        message: 'A recipe got added successfully.',
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(405);
    res.json({ message: 'Method not Allowed' });
  }
}
