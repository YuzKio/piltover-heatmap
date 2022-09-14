import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home/index.vue") },
    {
      path: "/testPage/:pageId",
      name: "testPage",
      component: () => import("../views/TestPage/index.vue"),
    },
  ],
})

export default router
