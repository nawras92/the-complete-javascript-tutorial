import endPoints from "./endpoints";

const { getAll } = endPoints;
const requests = {
  getAll: async (page) => {
    const { url } = getAll(page);
    const response = await fetch(url);
    const data = await response.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
};

export default requests;
