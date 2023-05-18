import { getMyRecipes } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // get User Id
      const userId = 2;
      // Send Request to Backend
      const response = await fetch(getMyRecipes(userId));
      const returnedData = await response.json();
      // Response not ok
      if (!response.ok) {
        res.status(200);
        res.json({
          ok: false,
          message: 'Error in fetching recipes',
        });
        throw new Error('Error in fetching recipes');
      }

      // response is ok
      const { data } = returnedData;
      res.status(200);
      res.json({
        ok: true,
        recipes: data,
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(405);
    res.json({
      message: 'Method not allowed',
    });
  }
}
