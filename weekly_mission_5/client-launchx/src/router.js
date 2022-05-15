import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  //Nuevo
  {
    path: "/",
    alias: "/missionCommander",
    name: "missionCommander",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/missionCommander/:id",
    name: "missionCommander-details",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/addMissionCommader",
    name: "add-missionCommander",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
