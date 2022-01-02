import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Detail from "@/views/Detail.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "work",
    path: "/work",
    component: Work,
  },
  {
    name: "detail",
    path: "/work/:id",
    component: Detail,
    meta: {
      noHero: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
