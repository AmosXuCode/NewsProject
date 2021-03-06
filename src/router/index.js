import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsList from '../views/NewsList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/NewsDetail',
    name: 'NewsDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsDetail.vue'),
  },
  {
    path: '*',
    redirect: { name: 'NewsList' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
