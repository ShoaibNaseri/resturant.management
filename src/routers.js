import SingUp from './components/SingUp.vue'
import HomeIndex from './components/Home.vue'
import DashboardIndex from './components/Dashboard.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: HomeIndex,
        path: '/'
    },
    {
        name: 'SingUp',
        component: SingUp,
        path: '/singup'
    },
    {
        name: 'Dashboard',
        component:DashboardIndex,
        path:'/dashboard'

    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;


