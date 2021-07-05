import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import DataBinding from "../views/DataBinding.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // }, 
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // }, 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBinding" */ "../views/DataBinding.vue"),
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBindingHtml" */ "../views/DataBindingHtml.vue"),
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBindingInputText" */ "../views/DataBindingInputText.vue"),
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextarea",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBindingTextarea" */ "../views/DataBindingTextarea.vue"),
  },
  {
    path: "/select",
    name: "Select",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Select" */ "../views/Select.vue"),
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Checkbox" */ "../views/Checkbox.vue"),
  },
  {
    path: "/radio",
    name: "Radio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Radio" */ "../views/Radio.vue"),
  },
  {
    path: "/attribute",
    name: "Attribute",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Attribute" */ "../views/Attribute.vue"),
  },
  {
    path: "/button",
    name: "Button",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Button" */ "../views/Button.vue"),
  },
  {
    path: "/Class",
    name: "Class",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Class" */ "../views/Class.vue"),
  },
  {
    path: "/Class2",
    name: "Class2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Class2" */ "../views/Class2.vue"),
  },
  {
    path: "/Class3",
    name: "Class3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Class3" */ "../views/Class3.vue"),
  },
  {
    path: "/Style",
    name: "Style",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Style" */ "../views/Style.vue"),
  },
  {
    path: "/List",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "List" */ "../views/List.vue"),
  },
  {
    path: "/List2",
    name: "List2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "List2" */ "../views/List2.vue"),
  },
  {
    path: "/renderingif",
    name: "RenderingIf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "RenderingIf" */ "../views/RenderingIf.vue"),
  },
  {
    path: "/eventbinding",
    name: "EventBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "EventBinding" */ "../views/EventBinding.vue"),
  },
  {
    path: "/exampleQ1",
    name: "ExampleQ",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "ExampleQ" */ "../views/ExampleQ.vue"),
  },



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;