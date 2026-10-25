import Login from "@/views/Login.vue";
import Practice from "@/views/Practice.vue";
import Task from "@/views/Task.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Task,
    },
    {
      path: "/auth",
      children: [
        {
          path: "login",
          component: Login,
        },
      ],
    },
    {
      path: "/practice",
      component: Practice,
    },
  ],
});

export default router;
