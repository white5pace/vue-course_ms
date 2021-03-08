import {createRouter, createWebHistory} from 'vue-router';

import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachesList from '@/pages/coaches/CoachesList';
import CoachRegistration from '@/pages/coaches/CoachRegistration';
import ContactCoach from '@/pages/11-requests/ContactCoach';
import RequestsReceived from '@/pages/11-requests/RequestsReceived';
import NotFound from '@/pages/NotFound';
import UserAuth from '@/pages/auth/UserAuth';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: CoachesList},
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {path: 'contact', component: ContactCoach},
      ],
    },
    {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}},
    {path: '/11-requests', component: RequestsReceived, meta: {requiresAuth: true}},
    {path: '/auth', component: UserAuth, meta: {requiresUnAuth: true}},
    {path: '/:notFound(.*)', component: NotFound},
  ],
});

router.beforeEach(function (to, from, next) {
  if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next('/coaches')
  } else {
    next();
  }
});

export default router;