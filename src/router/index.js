import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Detail from "@/views/Detail.vue";
import NoContent from "@/views/404.vue";
import Credit from "@/views/Credit.vue";

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
  },
  {
    name: "credit",
    path: "/credits",
    component: Credit,
  },
  {
    name: "static",
    path: "/public/:catchAll(.*)*",
    redirect: "@/public",
  },
  {
    //TODO: redirect user to home page after period of time (with progression bar)
    name: "nocontent",
    path: "/:catchAll(.*)*",
    component: NoContent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
