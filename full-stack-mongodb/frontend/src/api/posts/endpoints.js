const endPoints = {
  getAll: (page) => {
    return {
      url: `/posts/?page=${page}`,
    };
  },
  getOne: (id) => {
    return {
      url: `/posts/${id}`,
    };
  },
  deleteOne: (id) => {
    return {
      url: `/posts/${id}`,
      options: {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  },
  addOne: (dataToSend) => {
    return {
      url: `/posts/`,
      options: {
        method: `POST`,
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  },
  updateOne: (id, updateDataToSend) => {
    return {
      url: `/posts/${id}`,
      options: {
        method: "PATCH",
        body: JSON.stringify(updateDataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  },
};

export default endPoints;
