import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import productItem from "./components/productItem";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // component: {
  //   productItem,
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart_page',
      name: 'cart_page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cart_page.vue'),
    },
    {
      path: '/catalog_page',
      name: 'catalog_page',
      component: () => import('./views/Catalog_page.vue'),
    },
    {
      path: '/checkout_page',
      name: 'checkout_page',
      component: () => import( './views/Checkout_page.vue'),
    },
    {
      path: '/single_page',
      name: 'single_page',
      component: () => import( './views/Single_page.vue'),
      props: true

    },
  ],
});
