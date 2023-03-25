import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Shop from '@/views/Shop/index.vue';
import Gallery from '@/views/Gallery/index.vue';
import Books from '@/views/Books/index.vue';
import Blog from '@/views/Blog/index.vue';
import ShowBlog from '@/views/Blog/ShowBlog.vue';
import Events from '@/views/Events/index.vue';
import Contact from '@/views/Contact/index.vue';
import Cart from '@/views/Cart/index.vue';
import Checkout from '@/views/Checkout/index.vue';
import MyAccount from '@/views/MyAccount/index.vue';
import Auth from '@/views/Auth/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/books',
      name: 'books',
      component: Books,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/blog/:id',
      name: 'blog:show',
      component: ShowBlog,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: MyAccount,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    /*   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
});

export default router;
