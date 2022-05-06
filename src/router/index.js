import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Detail from "@/views/Detail.vue";
import NoContent from "@/views/404.vue";
import Credit from "@/views/Credit.vue";
import CV from "@/views/CV.vue";
import Linktree from "@/views/Linktree.vue";

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
    name: "linktree",
    path: "/linktree",
    component: Linktree,
    meta: {
      noHero: true,
    },
  },
  {
    name: "credit",
    path: "/credits",
    component: Credit,
  },
  {
    name: "web cv",
    path: "/web-cv",
    component: CV,
    props: {
      link: "https://docs.google.com/document/d/e/2PACX-1vQ327WXI340oLOa4wKUSUd6Azj_3S1vUL-Xk5w_ytYcAZSiZkCUMsdXradjIsSlnQ/pub?embedded=true",
    },
    meta: {
      noHero: true,
    },
  },
  {
    name: "game cv",
    path: "/game-cv",
    component: CV,
    props: {
      link: "https://docs.google.com/document/d/e/2PACX-1vR6Kl1l-x-7qBQmrEPntAl_ymW90cjCLMfUuF5qEB73ur4LY0AbeCmnZ1fbq8xgaQ/pub?embedded=true",
    },
    meta: {
      noHero: true,
    },
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
