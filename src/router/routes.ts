const SWRV = () => import("../views/SWRV.vue");
const Home = () => import("../components/Home.vue");
const Examples = () => import("../components/Example.vue");
const Definition = () => import("../components/Definition.vue");
const Selection = () => import("../components/Selection.vue");
const Advantages = () => import("../components/Advantages.vue");
const Fetcher = () => import("../components/DataFetching.vue");

// TankStack
const TanstackQuery = () => import("../views/TanstackQuery.vue");
const TanStackFetch = () => import("../views/TodoList.vue");
const Comparison = () => import("../views/Comparison.vue");
const ConsAndPros = () => import("../components/TanStackConsAndPros.vue");
const TodoList = () => import("../components/TodoList/TodoList.vue");
const TanStackDefinition = () => import("../components/TanStackDefinition.vue");
const TanStackWhy = () => import("../components/TanStackWhy.vue");

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/swrv",
    component: SWRV,
    children: [
      {
        path: "examples",
        component: Examples,
        name: "examples",
      },
      {
        path: "definition",
        component: Definition,
        name: "definition",
      },
      {
        path: "why-swrv",
        component: Selection,
        name: "selection",
      },
      {
        path: "advantages",
        component: Advantages,
        name: "advantages",
      },
      {
        path: "fetcher",
        component: Fetcher,
        name: "fetcher",
      },
    ],
  },
  {
    path: "/tanstack-query",
    component: TanstackQuery,
    children: [
      {
        path: "what-is",
        component: TanStackDefinition,
        name: "tanstack-what-is",
      },
      {
        path: "why",
        component: TanStackWhy,
        name: "tanstack-why",
      },
      {
        path: "cons-and-pros",
        component: ConsAndPros,
        name: "tanstack-cons-and-pros",
      },
      {
        path: "fetching",
        component: TanStackFetch,
        children: [
          {
            path: "todo-list",
            component: TodoList,
            name: "AllTodos",
          },
          {
            path: "todo-list-active",
            component: TodoList,
            name: "ActiveTodos",
          },
          {
            path: "todo-list-completed",
            component: TodoList,
            name: "CompletedTodos",
          },
        ],
      },
    ],
  },
  {
    path: "/comparison",
    component: Comparison,
    name: "compare",
  },
];

export default routes;
