(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[811],{5811:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var a=n(2155),l=n(6429),s=n(6490),r=n(1337),c=n.n(r),o=n(334),u=n.n(o),i=n(2166),m=n.n(i),d=n(2185),p=n.n(d),A=n(4517),f=n.n(A),E=n(6658),b=n.n(E),y=n(5585),v=n.n(y),k={};k.styleTagTransform=b(),k.setAttributes=p(),k.insert=m().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=f(),c()(v(),k);const g=v()&&v().locals?v().locals:void 0,C=[.5,1,2,5],w={worker:n(2054)},h=e=>new Promise((t=>Object.assign(new FileReader,{onload:({target:e})=>t(e.result)}).readAsDataURL(e)));function x({onUpload:e}){const t=(0,a.useCallback)((async({target:t})=>{const n=t.files.item(0);e(await h(n)),t.value=""}),[]);return a.createElement("div",null,a.createElement("input",{type:"file",onChange:t}))}function V({file:e,scale:t}){const[n,r]=(0,a.useState)(),c=(0,a.useCallback)((({numPages:e})=>{r(e)}),[]);return a.createElement("div",null,a.createElement("div",null,e.split(";")[0]),a.createElement("div",null,a.createElement(l.A,{file:e,onLoadSuccess:c,options:w},Array.from(new Array(n),((e,n)=>a.createElement(s.A,{key:`page_${n+1}`,pageNumber:n+1,renderAnnotationLayer:!1,renderTextLayer:!1,scale:t}))))))}function R(){const[e,t]=(0,a.useState)([]),[n,l]=(0,a.useState)(C[1]),s=(0,a.useCallback)((e=>{t((t=>t.concat(e)))}),[t]);return a.createElement("section",{className:g.Section},a.createElement("h2",null,"Render"),a.createElement("div",null,a.createElement("label",null,"scale",a.createElement("select",{onChange:(0,a.useCallback)((({target:e})=>l(Number(e.value))),[])},C.map((e=>a.createElement("option",{key:e,value:e},e)))))),e.map(((e,t)=>a.createElement(V,{key:t,file:e,scale:n}))),a.createElement(x,{onUpload:s}))}},5585:(e,t,n)=>{var a=n(3413),l=n(3603)(a);l.push([e.id,".xV3_QVQR0sdepVIfVyxZ{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../render/src/containers/Render/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourceRoot:""}]),l.locals={Section:"xV3_QVQR0sdepVIfVyxZ"},e.exports=l}}]);
//# sourceMappingURL=811.js.map