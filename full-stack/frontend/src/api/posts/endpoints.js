const endPoints = {
  getAll: (page) => {
    return {
      url: `/posts/?page=${page}`,
    };
  },
};

export default endPoints;
