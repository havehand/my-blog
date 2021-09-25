import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "@/router";
import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;
import "./mock/index";
import loading from "@/directive/loading";
import lazy from "@/directive/lazy";
import "./eventBus";
import store from "@/store";

Vue.directive("loading", loading);
Vue.directive("lazy", lazy);

store.dispatch("setting/fetchSetting");
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
