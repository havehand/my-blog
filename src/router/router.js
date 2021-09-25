import "nprogress/nprogress.css"
import {start, done} from "nprogress"
import NotFound from "@/views/NotFound"
export  default [
    {name: "Home", path: "/", component:async ()=>{
        start();
        const resp = import("@/views/Home");
        done();
        return resp;}, meta:{title: "首页"}},
    {name: "About", path: "/about", component:async ()=>{
        start();
        const resp = import("@/views/About");
        done();
        return resp;}, meta:{title: "关于我"}},
    {name: "Message", path: "/message", component:async ()=>{
        start();
        const resp = import("@/views/Message");
        done();
        return resp;}, meta:{title: "留言板"}},
    {name: "CategoryBlog", path: "/article/cate/:categoryId", component:async ()=>{
        start();
        const resp = import("@/views/Blog");
        done();
        return resp;}, meta:{title: "文章"}},
    {name: "BlogDetail", path: "/article/:id", component:async ()=>{
        start();
        const resp = import("@/views/Blog/Detail");
        done();
        return resp;}, meta:{title: "文章详情"}},
    {name: "Blog", path: "/article", component:async ()=>{
        start();
        const resp = import("@/views/Blog");
        done();
        return resp;}, meta:{title: "文章"}},
    {name: "Project", path: "/project", component:async ()=>{
        start();
        const resp = import("@/views/Project");
        done();
        return resp;}, meta:{title: "项目"}},
    {name: "NotFound", path: "*", component: NotFound},
]