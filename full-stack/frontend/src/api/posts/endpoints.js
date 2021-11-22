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
      url: `posts/${id}`,
      options: {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  },
};

export default endPoints;
