(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bd005f8"],{"0f3d":function(e,t,i){"use strict";i("cedc")},"16c0":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"container",staticClass:"home-container",on:{wheel:e.handWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:e.setMarginTop},on:{transitionend:e.handleTransitionEnd}},e._l(e.data,(function(t){return i("li",{key:t.id},[i("CarouselItem",{key:t.id,ref:"carouse",refInFor:!0,attrs:{carousel:t,index:e.index}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(t){return e.clickBtn(e.index-1)}}},[i("Icon",{attrs:{type:"arrowUp",size:30}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index<e.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon icon-down",on:{click:function(t){return e.clickBtn(e.index+1)}}},[i("Icon",{attrs:{type:"arrowDown",size:30}})],1),i("ul",{staticClass:"indicator"},e._l(e.data,(function(t,s){return i("li",{key:t.id,class:{active:s===e.index},on:{click:function(t){return e.switchTo(s)}}})})),0)])},n=[],o=i("2f62"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"containerDom",staticClass:"carouse-item-container",on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}},[i("div",{ref:"imgContainer",staticClass:"carousel-img",style:e.imagePosition},[i("ImageLoader",{attrs:{src:e.carousel.bigImg,placeholder:e.carousel.midImg,duration:1e3},on:{load:e.showWords}})],1),i("div",{ref:"title",staticClass:"title-text"},[e._v(e._s(e.carousel.title))]),i("div",{ref:"desc",staticClass:"desc-text"},[e._v(e._s(e.carousel.description))])])},a=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ImageLoaderContainer"},[e.everyThingDone?e._e():i("img",{staticClass:"img1",attrs:{src:e.placeholder,alt:""}}),i("img",{staticClass:"img2",style:{opacity:e.originOpacity,transitionDuration:e.duration+"ms"},attrs:{src:e.src,alt:""},on:{load:e.handleLoaded}})])},h=[],d={props:{src:{type:String,request:!0},placeholder:{type:String,request:!0},duration:{type:Number,default:3e3}},data(){return{originLoaded:!1,everyThingDone:!1}},computed:{originOpacity(){return this.originLoaded?1:0}},methods:{handleLoaded(){this.originLoaded=1,setTimeout(()=>{this.everyThingDone=!0,this.$emit("load")},this.duration)}}},l=d,u=(i("0f3d"),i("2877")),m=Object(u["a"])(l,c,h,!1,null,"2bba04e8",null),f=m.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"words-container"},[i("div",{ref:"title",staticClass:"title"},[e._v(e._s(e.carousel.title))]),i("div",{ref:"desc",staticClass:"desc"},[e._v(e._s(e.carousel.description))])])},p=[],w={props:{carousel:{type:Object},domWidth:{type:Object},getIndex:{type:Object}},mounted(){this.showWords()},methods:{showWords(){this.$refs.title.style.width=0,this.$refs.desc.style.width=0,this.$refs.title.clientWidth,this.$refs.desc.clientWidth,setTimeout(()=>{this.$refs.title.style.width=this.domWidth.title+"px",this.$refs.desc.style.width=this.domWidth.desc+"px"},100)}}},v=w,x=(i("633f"),Object(u["a"])(v,g,p,!1,null,"6602e3ed",null)),y=x.exports,$=i("dc93"),z={props:{carousel:{type:Object,request:!0},index:{type:Number,request:!0}},components:{ImageLoader:f},data(){return{titleWidth:0,descWidth:0,carouselDom:null,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},computed:{imagePosition(){if(!this.innerSize||!this.containerSize)return;const e=this.innerSize.width-this.containerSize.width,t=this.innerSize.height-this.containerSize.height,i=-e/this.containerSize.width*this.mouseX,s=-t/this.containerSize.height*this.mouseY;return{transform:`translate(${i}px, ${s}px)`}},center(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted(){this.getWidth(),this.ruinDom(),this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed(){window.removeEventListener("resize",this.setSize)},methods:{setSize(){this.containerSize={width:this.$refs.containerDom.clientWidth,height:this.$refs.containerDom.clientHeight},this.innerSize={width:this.$refs.imgContainer.clientWidth,height:this.$refs.imgContainer.clientHeight}},handleMouseLeave(){this.mouseX=this.center.x,this.mouseY=this.center.y},removeDom(){this.$refs.containerDom.removeChild(this.carouselDom)},showWords(){if(this.index===this.carousel.index){const e=Object($["a"])(y,{carousel:this.carousel,domWidth:{title:this.titleWidth,desc:this.descWidth},getIndex:{index:this.index}});this.carouselDom=e,this.$refs.containerDom.appendChild(e)}},getWidth(){this.descWidth=this.$refs.desc.clientWidth,this.titleWidth=this.$refs.title.clientWidth},ruinDom(){this.$refs.containerDom.removeChild(this.$refs.title),this.$refs.containerDom.removeChild(this.$refs.desc)},handleMouseMove(e){const t=this.$refs.containerDom.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top}}},C=z,S=(i("7de0"),Object(u["a"])(C,r,a,!1,null,"b7b5ccd6",null)),W=S.exports,b=i("d010"),D={components:{CarouselItem:W,Icon:b["a"]},created(){this.fetchBanner()},data(){return{index:0,containerHeight:0,isSwitching:!1,lastIndex:0}},mounted(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},destroyed(){window.addEventListener("resize",this.handleResize)},computed:{setMarginTop(){return-this.index*this.containerHeight+"px"},...Object(o["c"])("banner",["loading","data"])},methods:{...Object(o["b"])("banner",["fetchBanner"]),clickBtn(e){this.isSwitching||this.switchTo(e)},switchTo(e){this.lastIndex=this.index,this.index=e,setTimeout(()=>{this.$refs.carouse[this.index].showWords(),setTimeout(()=>{this.$refs.carouse[this.lastIndex].removeDom()},1e3)},0)},handWheel(e){this.isSwitching||(125===e.deltaY&&this.index+1<=this.data.length-1&&(this.isSwitching=!0,this.switchTo(this.index+1)),-125===e.deltaY&&this.index-1>=0&&(this.isSwitching=!0,this.switchTo(this.index-1)))},handleTransitionEnd(){this.isSwitching=!1},handleResize(){this.containerHeight=this.$refs.container.clientHeight}}},_=D,T=(i("1e7a"),Object(u["a"])(_,s,n,!1,null,"7147c50d",null));t["default"]=T.exports},"1e7a":function(e,t,i){"use strict";i("f612")},"5f5a":function(e,t,i){},"633f":function(e,t,i){"use strict";i("5f5a")},7117:function(e,t,i){},"7de0":function(e,t,i){"use strict";i("7117")},cedc:function(e,t,i){},f612:function(e,t,i){}}]);
//# sourceMappingURL=chunk-1bd005f8.e68ff7b3.js.map