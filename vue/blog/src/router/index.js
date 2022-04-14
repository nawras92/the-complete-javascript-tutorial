import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import About from '../views/About.vue';
import SinglePost from '../views/SinglePost.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/blog/:id',
    name: 'singlePost',
    component: SinglePost,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
