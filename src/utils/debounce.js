export default function (fn, duration){
    let timer = null;
    clearTimeout(timer);
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, duration);
    };
}