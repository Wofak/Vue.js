import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "./store/store";


createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");


window.Kakao.init('f8016eb341ade1fd8efdc9523f474482');
window.Kakao.isInitialized();