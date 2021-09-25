import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
import defaultGif from "@/assets/default.gif"

function setImage(img){
    img.dom.src = defaultGif;
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 100;
    if (rect.top >= -height && rect.top <= clientHeight){
        const tempImg = new Image();
        tempImg.onload = function (){
            img.dom.src = img.src;
        };
        tempImg.src = img.src;
        images = images.filter((i)=>i !== img);
    }
}

function setImages(){
    for (const img of images){
        setImage(img);
    }
}

let images = [];
const handleScroll = debounce(setImages, 50);
eventBus.$on("blogScroll", handleScroll);
eventBus.$on("projectScroll", handleScroll);
export default {
    inserted(el, bindings){
        const img = {
            dom: el,
            src: bindings.value,
        };
        images.push(img);
        setImage(img);
    },
    unbind(el) {
        images = images.filter(img => img.dom !== el)
    }
}