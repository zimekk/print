(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[166],{6166:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>V});var l=t(4344),a=t(4260),s=t(7582),r=t(5388),c=t.n(r),o=t(1125),i=t.n(o),u=t(5687),d=t.n(u),m=t(8644),p=t.n(m),A=t(9552),f=t.n(A),E=t(3325),y=t.n(E),b=t(8467),v=t.n(b),k={};k.styleTagTransform=y(),k.setAttributes=p(),k.insert=d().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=f(),c()(v(),k);const C=v()&&v().locals?v().locals:void 0,g=[.5,1,2,5],w={worker:t(2054)},x=e=>new Promise((n=>Object.assign(new FileReader,{onload:({target:e})=>n(e.result)}).readAsDataURL(e)));function h({onUpload:e}){const n=(0,l.useCallback)((async({target:n})=>{const t=n.files.item(0);e(await x(t)),n.value=""}),[]);return l.createElement("div",null,l.createElement("input",{type:"file",onChange:n}))}function S({file:e,scale:n}){const[t,r]=(0,l.useState)(),c=(0,l.useCallback)((({numPages:e})=>{r(e)}),[]);return l.createElement("div",null,l.createElement("div",null,e.split(";")[0]),l.createElement("div",null,l.createElement(a.A,{file:e,onLoadSuccess:c,options:w},Array.from(new Array(t),((e,t)=>l.createElement(s.A,{key:`page_${t+1}`,pageNumber:t+1,renderAnnotationLayer:!1,renderTextLayer:!1,scale:n}))))))}function V(){const[e,n]=(0,l.useState)([]),[t,a]=(0,l.useState)(g[1]),s=(0,l.useCallback)((e=>{n((n=>n.concat(e)))}),[n]);return l.createElement("section",{className:C.Section},l.createElement("h2",null,"Render"),l.createElement("div",null,l.createElement("label",null,"scale",l.createElement("select",{onChange:(0,l.useCallback)((({target:e})=>a(Number(e.value))),[])},g.map((e=>l.createElement("option",{key:e,value:e},e)))))),e.map(((e,n)=>l.createElement(S,{key:n,file:e,scale:t}))),l.createElement(h,{onUpload:s}))}},8467:(e,n,t)=>{var l=t(3316),a=t(3484)(l);a.push([e.id,".xV3_QVQR0sdepVIfVyxZ{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../render/src/containers/Render/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),a.locals={Section:"xV3_QVQR0sdepVIfVyxZ"},e.exports=a}}]);
//# sourceMappingURL=166.js.map