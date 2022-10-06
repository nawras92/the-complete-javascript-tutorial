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
  Mutation: {
    addBook: (parent, args, context) => {
      const { books } = context;
      const { id, title, description, authorId } = args;
      books.push({ id, title, description, authorId });

      return true;
    },
    deleteBook: (parent, args, context) => {
      const { books } = context;
      const { id } = args;
      const theBookIndex = books.findIndex((book) => book.id === id);
      books.splice(theBookIndex, 1);
      return true;
    },
    editBook: (parent, args, context) => {
      const { books } = context;
      const { id, title, description, authorId } = args;
      const theBook = books.find((book) => book.id === id);
      if (theBook) {
        theBook.title = title;
        theBook.description = description || theBook.description;
        theBook.authorId = authorId || theBook.authorId;
        return true;
      }
      return false;
    },
  },
};
