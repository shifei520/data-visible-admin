
/**
 * 项目路由
 * @type {[null]}
 */
const projectRoutes = [
  { path: '/', component: ()=>import('@/views/layout/Layout.vue'), redirect: '/index', children: [
    { path: 'index', component: () => import('@/views/index/Index') }
  ] }
];
export { projectRoutes };
