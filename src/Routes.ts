import HelloWorld from '@/components/HelloWorld.vue';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
    },
    {
        path: '/heavy_page',
        name: 'HeavyPage',
        component: async () => await import('@/components/HeavyPage.vue'),
    },
];
