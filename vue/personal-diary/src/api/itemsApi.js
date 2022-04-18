export default {
  fetchAllItems() {
    return Promise.resolve([
      {
        text: 'hello ... i did so and so',

        background: '#16be5a',
      },
      {
        text: 'it was a great day',
        background: '#2c39a9',
      },
      {
        text: 'very bad dayyyyyyyyyyyyy',
        background: '#dc143c',
      },
      {
        text: 'this is new entry',
        background: '#ffffff',
      },
    ]);
  },
};
