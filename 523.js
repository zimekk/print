"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[523],{4523:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var a=t(2784),l=t(1944),s=t(6062),c=t.n(s),o=t(4036),r=t.n(o),i=t(6793),u=t.n(i),d=t(7892),f=t.n(d),m=t(1173),A=t.n(m),p=t(2464),E=t.n(p),h=t(3910),v={};v.styleTagTransform=E(),v.setAttributes=f(),v.insert=u().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=A(),c()(h.Z,v);const w=h.Z&&h.Z.locals?h.Z.locals:void 0;function b({onUpload:e}){const n=(0,a.useCallback)((async({target:n})=>{const t=n.files.item(0);var a;e(await(a=t,new Promise((e=>Object.assign(new FileReader,{onload:({target:n})=>e(n.result)}).readAsDataURL(a))))),n.value=""}),[]);return a.createElement("div",null,a.createElement("input",{type:"file",onChange:n}))}function g({file:e}){return a.createElement("div",null,e.split(";")[0])}function y({files:e}){const n=(0,a.useRef)(null),t=(0,a.useCallback)((async()=>{const t=await l.PDFDocument.create();for(let n=0;n<e.length;n++){const a=await l.PDFDocument.load(e[n]);(await t.copyPages(a,a.getPageIndices())).forEach((e=>t.addPage(e)))}const a=await t.saveAsBase64({dataUri:!0});n.current.src=a}),[e,n]);return a.createElement("div",null,a.createElement("button",{onClick:t},"join"),a.createElement("iframe",{ref:n,style:{width:"100%",height:"50vh"}}))}function C(){const[e,n]=(0,a.useState)([]);(0,a.useEffect)((()=>{}),[]);const t=(0,a.useCallback)((e=>{n((n=>n.concat(e)))}),[n]);return a.createElement("section",{className:w.Section},a.createElement("h2",null,"Join"),e.map(((e,n)=>a.createElement(g,{key:n,file:e}))),a.createElement(b,{onUpload:t}),a.createElement(y,{files:e}))}},3910:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(272),l=t.n(a),s=t(2609),c=t.n(s)()(l());c.push([e.id,".X7TSZlLrfGJo1SK0rlOU{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../join/src/containers/Join/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),c.locals={Section:"X7TSZlLrfGJo1SK0rlOU"};const o=c}}]);
//# sourceMappingURL=523.js.map