import endPoints from "./endpoints";

const { getAll, getOne, deleteOne } = endPoints;
const requests = {
  getAll: async (page) => {
    const { url } = getAll(page);
    const response = await fetch(url);
    const data = await response.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
  getOne: async (id) => {
    const { url } = getOne(id);
    const response = await fetch(url);
    const data = await response.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
  deleteOne: async (id) => {
    const { url, options } = deleteOne(id);
    const response = await fetch(url, options);
    const data = await response.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
};

export default requests;
