import { getMyRecipes } from '../../api/recipe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // get User Id
      const { userId } = JSON.parse(req.body);
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
      const recipes = data.map((r) => ({
        id: r.id,
        ...r.attributes,
      }));
      res.status(200);
      res.json({
        ok: true,
        recipes,
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
