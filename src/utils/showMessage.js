import getComponentRootDom from "@/utils/getComponentRootDom";
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
import $ from "jquery"
export default function (options = {}){
    const content = options.content || "";
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    const div = $("<div>");
    const IconDom = getComponentRootDom(Icon, {
        type:type,
        size:20
    });
    console.log("")
    div.html(`<div><span>${IconDom.outerHTML}</span><div>${content}</div></div>`);
    div.addClass(`${styles.message} ${styles[`message-${type}`]}`);
    if (options.container){
        if (getComputedStyle(container).position === 'static'){
            container.style.position = "relative";
        }
    }
    container.appendChild(div[0]);
    div[0].clientHeight;
    div.css({
        "opacity": '1',
        "transform": "translate(-50%, -50%)"
    });
    setTimeout(()=>{
        div.css({
            "opacity": '0',
            "transform": "translate(-50%, -50%) translateY(-30px)"
        });
        div.bind("transitionend",function (){
            div.remove();
            options.callback && options.callback();
        })
    },duration);
}