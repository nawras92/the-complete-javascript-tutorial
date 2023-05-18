export default function handler(req, res) {
  if (req.method === 'POST') {
    // Clear cookies "LWNJwt"
    res.setHeader('Set-Cookie', [
      'LWNJwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly',
      'LWNUser=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly',
    ]);
    res.status(200);
    res.json({ message: 'Logout Successfully' });
  } else {
    res.status(405);
    res.json({
      message: 'Method Not Allowed',
    });
  }
}
