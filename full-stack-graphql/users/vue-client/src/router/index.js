import { createRouter, createWebHistory } from 'vue-router';
import Users from '../components/Users.vue';
import Home from '../components/Home.vue';
import AddUser from '../components/AddUser.vue';
import SingleUser from '../components/SingleUser.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/add-user',
    component: AddUser,
  },
  {
    path: '/user/:id',
    component: SingleUser,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
