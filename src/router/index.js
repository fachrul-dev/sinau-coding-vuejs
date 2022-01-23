import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../view/Home.vue';
import Contact from '../view/Contact.vue';
import About from '../view/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
