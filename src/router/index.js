import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/GetStarted/Overview.vue'
import Accessibility_Overview from '../views/Foundations/Accessibility/Overview/Overview.vue'
import Accessibility_Checklist from '../views/Foundations/Accessibility/Checklist/Checklist.vue'
import Accessibility_Designing from '../views/Foundations/Accessibility/Designing/Designing.vue'
// component: () => import('../views/GetStarted/Overview.vue'),

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                { path: '',name: 'Overview', component: HomeView },
            ],
        },
        {
            path: '/Foundations/Accessibility/Overview',
            name: 'Accessibility_Overview',
            component: Accessibility_Overview,
            children: [
                { path: '',name: 'Overview', component: Accessibility_Overview},
            ],
        },
    ],
})

export default router
