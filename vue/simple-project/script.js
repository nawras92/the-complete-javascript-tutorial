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
      title: 'simple project',
      desc: 'this is my first vue projecttttttttttttttt',
      sections,
      link: {
        name: 'yes, take me there 2',
        url: 'https://yandex.com',
      },
      isDark: false,
      count: 0,
    };
  },
  methods: {
    switchMode() {
      this.isDark = !this.isDark;
    },
    incCount() {
      this.count += 1;
    },
    decCount() {
      this.count -= 1;
    },
  },
});

app.component('page-header', {
  template: `

    <header id="myid" class="header">
      <h1 class="header-heading">{{ title }}</h1>
      <p class="header-desc">{{ desc }}</p>
    </header>

  `,
  props: ['title', 'desc'],
});

app.component('page-section', {
  template: `
      <section class="section" >
        <h3 class="section-heading">{{title}}</h3>
        <p class="section-text">{{desc}}</p>
      </section>

  `,
  props: ['title', 'desc'],
});

app.mount('body');
