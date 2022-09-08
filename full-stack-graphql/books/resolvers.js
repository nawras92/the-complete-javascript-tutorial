module.exports = {
  Query: {
    hello: () => {
      return 'Hello from graphql again';
    },

    getBooks: (parent, args, context) => {
      const { books } = context;
      return books;
    },

    getBook: (parent, args, context) => {
      const { books } = context;
      const { id } = args;
      const book = books.find((b) => b.id === id);
      return book;
    },
  },
};
