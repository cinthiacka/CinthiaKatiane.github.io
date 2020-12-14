import Obras from "./views/Obras.vue";
import AboutMe from "./views/AboutMe.vue";
import Contato from "./views/Contato.vue";

export const routes = [
  { path: "/sobremim", component: AboutMe, name: "AboutMe" },
  { path: "/contato", component: Contato, name: "Contato"},
  { path: "*", component: Obras, name: "Portfólio" },
];
