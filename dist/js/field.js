(()=>{var e={744:(e,r)=>{"use strict";r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,o]of r)t[e]=o;return t}},596:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});const o=Vue;var n={class:"flex items-center"},i=[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"22",width:"22",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",class:"fill-white"},[(0,o.createElementVNode)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.createElementVNode)("polyline",{points:"8 12 12 16 16 12"}),(0,o.createElementVNode)("line",{x1:"12",x2:"12",y1:"8",y2:"16"})],-1)],s=[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"22",width:"22",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",class:"fill-white"},[(0,o.createElementVNode)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.createElementVNode)("polyline",{points:"16 12 12 8 8 12"}),(0,o.createElementVNode)("line",{x1:"12",x2:"12",y1:"16",y2:"8"})],-1)];const c={props:["resourceName","field"],computed:{resourceId:function(){return this.$parent.resource.id.value},parentList:function(){return this.$parent.$parent.$parent.$parent.$parent.$parent}},methods:{reorderResource:function(e){var r=this;Nova.request().post("/nova-vendor/michielkempen/nova-order-field/".concat(this.resourceName),{direction:e,resource:this.resourceName,resourceId:this.resourceId,viaResource:this.field.viaResource||null,viaResourceId:this.field.viaResourceId||null,viaRelationship:this.field.viaRelationship||null}).then((function(){r.$toasted.show(r.__("The new order has been set!"),{type:"success"}),r.parentList.getResources()}))}}};const l=(0,t(744).Z)(c,[["render",function(e,r,t,c,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[t.field.last?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,onClick:r[0]||(r[0]=function(e){return a.reorderResource("down")}),class:"cursor-pointer text-70 hover:text-primary mr-3"},i)),t.field.first?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,onClick:r[1]||(r[1]=function(e){return a.reorderResource("up")}),class:"cursor-pointer text-70 hover:text-primary"},s))])}]])}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),Nova.booting((function(e){e.inertia("IndexOrderField",t(596).Z)}))})();