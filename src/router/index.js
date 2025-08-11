import DentistryAbout from '@/components/pages/DentistryAbout.vue';
import DentistryContact from '@/components/pages/DentistryContact.vue';
import DentistryHome from '@/components/pages/DentistryHome.vue';
import DentistryServices from '@/components/pages/DentistryServices.vue';
import DentistryTeam from '@/components/pages/DentistryTeam.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DentistryHome,
    },
    {
      path: '/sobre',
      name: 'About',
      component: DentistryAbout,
    },
    {
      path: '/servicos',
      name: 'Services',
      component: DentistryServices,
    },
    {
      path: '/equipe',
      name: 'Team',
      component: DentistryTeam,
    },
    {
      path: '/contato',
      name: 'Contato',
      component: DentistryContact,
    },
  ],
});

export default router;
