import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Statistics from '@/views/Statistics.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';
import TestDate from '@/components/TestDate.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/statistics'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/date',
    component:TestDate
  },
  {
    path:'*',
    component:NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
