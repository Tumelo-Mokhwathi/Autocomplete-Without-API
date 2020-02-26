import Vue from "vue";
import VueRouter from "vue-router";
import Autocomplete from "@/views/Autocomplete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "autocomplete",
    component: Autocomplete
  }
];

const router = new VueRouter({
  routes
});

export default router;
