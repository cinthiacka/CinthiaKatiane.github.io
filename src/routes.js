import Home from "./views/Home.vue";
import Obras from "./views/Obras.vue";
import AboutMe from "./views/AboutMe.vue";
import ErrorPage from "./views/404.vue";

export const routes = [
  { path: "", component: Home, name: "Home" },
  { path: "/obras", component: Obras, name: "Obras" },
  { path: "/sobremim", component: AboutMe, name: "AboutMe" },
  { path: "*", component: ErrorPage, name: "ErrorPage" },
];
