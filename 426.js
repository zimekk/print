(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[426],{2856:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var l=t(1855),a=t(7123),s=t(4306),r=t(6905),c=t.n(r),o=t(8750),i=t.n(o),u=t(2358),d=t.n(u),m=t(7321),A=t.n(m),p=t(6069),f=t.n(p),E=t(1826),y=t.n(E),b=t(7584),v={};v.styleTagTransform=y(),v.setAttributes=A(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),c()(b.A,v);const k=b.A&&b.A.locals?b.A.locals:void 0,C=[.5,1,2,5],g={worker:t(2054)},w=e=>new Promise((n=>Object.assign(new FileReader,{onload:({target:e})=>n(e.result)}).readAsDataURL(e)));function x({onUpload:e}){const n=(0,l.useCallback)((async({target:n})=>{const t=n.files.item(0);e(await w(t)),n.value=""}),[]);return l.createElement("div",null,l.createElement("input",{type:"file",onChange:n}))}function h({file:e,scale:n}){const[t,r]=(0,l.useState)(),c=(0,l.useCallback)((({numPages:e})=>{r(e)}),[]);return l.createElement("div",null,l.createElement("div",null,e.split(";")[0]),l.createElement("div",null,l.createElement(a.A,{file:e,onLoadSuccess:c,options:g},Array.from(new Array(t),((e,t)=>l.createElement(s.A,{key:`page_${t+1}`,pageNumber:t+1,renderAnnotationLayer:!1,renderTextLayer:!1,scale:n}))))))}function S(){const[e,n]=(0,l.useState)([]),[t,a]=(0,l.useState)(C[1]),s=(0,l.useCallback)((e=>{n((n=>n.concat(e)))}),[n]);return l.createElement("section",{className:k.Section},l.createElement("h2",null,"Render"),l.createElement("div",null,l.createElement("label",null,"scale",l.createElement("select",{onChange:(0,l.useCallback)((({target:e})=>a(Number(e.value))),[])},C.map((e=>l.createElement("option",{key:e,value:e},e)))))),e.map(((e,n)=>l.createElement(h,{key:n,file:e,scale:t}))),l.createElement(x,{onUpload:s}))}},7584:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var l=t(8262),a=t.n(l),s=t(7934),r=t.n(s)()(a());r.push([e.id,".xV3_QVQR0sdepVIfVyxZ{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../render/src/containers/Render/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),r.locals={Section:"xV3_QVQR0sdepVIfVyxZ"};const c=r},5062:()=>{},8211:()=>{},2130:()=>{},829:()=>{},493:()=>{},7089:()=>{}}]);
//# sourceMappingURL=426.js.map