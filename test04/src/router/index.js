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
  {
    path: "/exampleQ2",
    name: "ExampleQ2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "ExampleQ2" */ "../views/ExampleQ2.vue"),
  },
  {
    path: "/computed",
    name: "Computed",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Computed" */ "../views/Computed.vue"),
  },
  {
    path: "/watch",
    name: "Watch",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Watch" */ "../views/Watch.vue"),
  },
  {
    path: "/nestedcomponent",
    name: "NestedComponent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "NestedComponent" */ "../views/NestedComponent.vue"),
  },
  {
    path: "/nestedcomponent2",
    name: "NestedComponent2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "NestedComponent2" */ "../views/NestedComponent2.vue"),
  },
  {
    path: "/nestedcomponent3",
    name: "NestedComponent3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "NestedComponent3" */ "../views/NestedComponent3.vue"),
  },
  {
    path: "/nestedcomponent4",
    name: "NestedComponent4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "NestedComponent4" */ "../views/NestedComponent4.vue"),
  },
  {
    path: "/nestedcomponent5",
    name: "NestedComponent5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "NestedComponent5" */ "../views/NestedComponent5.vue"),
  },
  {
    path: "/parent",
    name: "Parent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Parent" */ "../views/Parent.vue"),
  },
  {
    path: "/parent2",
    name: "Parent2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Parent2" */ "../views/Parent2.vue"),
  },
  {
    path: "/slotusemodallayout",
    name: "SlotUseModalLayout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "SlotUseModalLayout" */ "../views/SlotUseModalLayout.vue"),
  },
  {
    path: "/provideinject",
    name: "ProvideInject",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "ProvideInject" */ "../views/ProvideInject.vue"),
  },
  {
    path: "/databindinglist3",
    name: "DataBindingList3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBindingList3" */ "../views/DataBindingList3.vue"),
  },
  {
    path: "/storeaccess",
    name: "StoreAccess",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "StoreAccess" */ "../views/StoreAccess.vue"),
  },
  {
    path: "/loginaccess",
    name: "LoginAccess",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "LoginAccess" */ "../views/LoginAccess.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "KakaoLogin" */ "../views/KakaoLogin.vue"),
  },
  {
    path: "/kakaologin2",
    name: "KakaoLogin2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*  webpackChunkName: "KakaoLogin2" */ "../views/KakaoLogin2.vue"),
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*  webpackChunkName: "NaverLogin" */ "../views/NaverLogin.vue"),
  },
  {
    path: "/naverlogin2",
    name: "NaverLogin2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*  webpackChunkName: "NaverLogin2" */ "../views/NaverLogin2.vue"),
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "GoogleLogin" */ '../views/GoogleLogin.vue')
  },





];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;