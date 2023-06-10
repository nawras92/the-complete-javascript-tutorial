const baseUrl = 'http://localhost:1337';
export const accessToken =
  '313656b837878beb8e20f7107f5a0c9a40f7bc76bcd781f4b520068fbbc6571c3a28967c2d97213caa2b6f374427c208bc5c4578fe68f3599bd434efd8f6d7115a82fc501d2ec84427de1d0227b6d4cd5e241aa7de66fe8608da00c7b85fb93bcf0431b693d8944e41736dd374975d0db9c22ccc03ab382d8116bfe678510cbb';

export const getAll = `${baseUrl}/api/recipes?populate=thumbnail`;
export const getAllWithPagination = (requestedPage, pageSize) =>
  `${baseUrl}/api/recipes?populate=thumbnail&pagination[page]=${requestedPage}&pagination[pageSize]=${pageSize}&sort=updatedAt:desc`;
export const getOne = (id) => `${baseUrl}/api/recipes/${id}?populate=thumbnail`;
export const addOne = `${baseUrl}/api/recipes/`;
export const deleteOne = (id) => `${baseUrl}/api/recipes/${id}`;
export const updateOne = (id) => `${baseUrl}/api/recipes/${id}`;

/*Login*/
export const loginUser = `${baseUrl}/api/auth/local`;
export const isLoggedIn = `${baseUrl}/api/users/me`;
export const registerUser = `${baseUrl}/api/auth/local/register`;

// User Recipe API
export const getMyRecipes = (userId) =>
  `${baseUrl}/api/recipes?populate=author&filters[author][id]=${userId}&sort=updatedAt:desc`;

/*Thumbnail*/
export const uploadThumbnail = `${baseUrl}/api/upload`;
