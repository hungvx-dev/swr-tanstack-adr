import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes: routes as any,
  history: createWebHistory(),
});

router.beforeEach((_to, _from, next) => {
  return next();
});

export default router;
