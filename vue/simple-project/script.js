const sections = [
  {
    id: 1,
    title: 'this is section 1',
    desc: 'this is section 1 description',
  },
  {
    id: 2,
    title: 'this is section 2',
    desc: 'this is section 2 description',
  },
  {
    id: 3,
    title: 'this is section 3',
    desc: 'this is section 3 description',
  },
  {
    id: 4,
    title: 'this is section 4',
    desc: 'this is section 4 description',
  },
];
const app = Vue.createApp({
  data() {
    return {
      title: 'my beautiful project 2 ',
      desc: 'this is my first vue projecttttttttttttttt',
      sections,
      link: {
        name: 'yes, take me there 2',
        url: 'https://yandex.com',
      },
    };
  },
});

app.mount('body');
