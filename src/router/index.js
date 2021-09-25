import Vue from 'vue'
import VueRouter from "vue-router"
import router from "@/router/router";
Vue.use(VueRouter);

const myRouter = new VueRouter({
    routes:router,
});
myRouter.afterEach(to => {
    if (to.meta.title){
        document.title = to.meta.title;
    }
})
export default myRouter;
