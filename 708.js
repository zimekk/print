(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[708],{2708:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var a=n(2155),l=n(636),s=n(4500),c=n.n(s),o=n(4845),r=n.n(o),i=n(8751),u=n.n(i),d=n(1788),f=n.n(d),m=n(9464),A=n.n(m),p=n(4133),E=n.n(p),h=n(6247),w=n.n(h),b={};b.styleTagTransform=E(),b.setAttributes=f(),b.insert=u().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=A(),c()(w(),b);const g=w()&&w().locals?w().locals:void 0,v=e=>new Promise((t=>Object.assign(new FileReader,{onload:({target:e})=>t(e.result)}).readAsDataURL(e)));function k({onUpload:e}){const t=(0,a.useCallback)((async({target:t})=>{const n=t.files.item(0);e(await v(n)),t.value=""}),[]);return a.createElement("div",null,a.createElement("input",{type:"file",onChange:t}))}function y({file:e}){return a.createElement("div",null,e.split(";")[0])}function C({files:e}){const t=(0,a.useRef)(null),n=(0,a.useCallback)((async()=>{const n=await l.PDFDocument.create();for(let t=0;t<e.length;t++){const a=await l.PDFDocument.load(e[t]);(await n.copyPages(a,a.getPageIndices())).forEach((e=>n.addPage(e)))}const a=await n.saveAsBase64({dataUri:!0});t.current.src=a}),[e,t]);return a.createElement("div",null,a.createElement("button",{onClick:n},"join"),a.createElement("iframe",{ref:t,style:{width:"100%",height:"50vh"}}))}function S(){const[e,t]=(0,a.useState)([]);(0,a.useEffect)((()=>{}),[]);const n=(0,a.useCallback)((e=>{t((t=>t.concat(e)))}),[t]);return a.createElement("section",{className:g.Section},a.createElement("h2",null,"Join"),e.map(((e,t)=>a.createElement(y,{key:t,file:e}))),a.createElement(k,{onUpload:n}),a.createElement(C,{files:e}))}},6247:(e,t,n)=>{var a=n(2888),l=n(5416)(a);l.push([e.id,".X7TSZlLrfGJo1SK0rlOU{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../join/src/containers/Join/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourceRoot:""}]),l.locals={Section:"X7TSZlLrfGJo1SK0rlOU"},e.exports=l}}]);
//# sourceMappingURL=708.js.map