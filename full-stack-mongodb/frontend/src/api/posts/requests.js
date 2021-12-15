import endPoints from "./endpoints";

const { getAll, getOne, deleteOne, addOne, updateOne } = endPoints;
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
  addOne: async (dataToSend) => {
    const { url, options } = addOne(dataToSend);
    const response = await fetch(url, options);
    const returnedData = await response.json();
    return new Promise((resolve, reject) => {
      returnedData
        ? resolve({ response: response, data: returnedData })
        : reject(undefined);
    });
  },
  updateOne: async (id, dataToSend) => {
    const { url, options } = updateOne(id, dataToSend);
    const response = await fetch(url, options);
    const returnedData = await response.json();
    return new Promise((resolve, reject) => {
      returnedData
        ? resolve({ response: response, data: returnedData })
        : reject(undefined);
    });
  },
};

export default requests;
