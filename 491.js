"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[491],{5491:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(1855);var l=n(9563),r=n.n(l),c=n(6905),o=n.n(c),s=n(8750),i=n.n(s),u=n(2358),m=n.n(u),d=n(7321),g=n.n(d),A=n(6069),h=n.n(A),f=n(1826),p=n.n(f),v=n(9817),E={};E.styleTagTransform=p(),E.setAttributes=g(),E.insert=m().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=h(),o()(v.A,E);const x=v.A&&v.A.locals?v.A.locals:void 0;function C(){const[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(""),c=(0,a.useRef)(null),o=(0,a.useRef)(null);return a.createElement("div",{className:"App"},a.createElement("main",{className:"App-main"},e&&a.createElement(a.Fragment,null,a.createElement("h3",null,"Actual image uploaded"),a.createElement("img",{src:e,className:"App-logo",alt:"logo",ref:o}),a.createElement("h3",null,"Canvas"),a.createElement("canvas",{ref:c,width:700,height:300}),a.createElement("h3",null,"Extracted text"),a.createElement("div",{className:"pin-box"},a.createElement("p",null," ",n," "))),a.createElement("input",{type:"file",onChange:e=>{t(URL.createObjectURL(e.target.files[0]))}}),a.createElement("button",{onClick:()=>{const e=c.current;e.width=o.current.width,e.height=o.current.height;const t=e.getContext("2d");t.drawImage(o.current,0,0),t.putImageData(function(e){const t=e.getContext("2d").getImageData(0,0,e.width,e.height);return function(e){for(var t=0;t<e.length;t+=4)e[t]=255^e[t],e[t+1]=255^e[t+1],e[t+2]=255^e[t+2]}(t.data),function(e,t){void 0===t&&(t=.5);const n=Math.floor(255*t);for(let t=0;t<e.length;t+=4){let a;a=.2126*e[t]+.7152*e[t+1]+.0722*e[t+2]>=n?255:0,e[t]=e[t+1]=e[t+2]=a}}(t.data,.5),t}(e),0,0);const n=e.toDataURL("image/jpeg");r().recognize(n,"eng",{logger:e=>console.log(e)}).catch((e=>{console.error(e)})).then((e=>{if(console.log(e),e){const{data:t}=e;t.confidence;let n=t.text;l(n)}}))},style:{height:50}},"Convert to text")))}function R(){return a.createElement("section",{className:x.Section},a.createElement("h2",null,"Reader"),a.createElement(C,null))}},9817:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(8262),l=n.n(a),r=n(7934),c=n.n(r)()(l());c.push([e.id,".IRvtrGxFn8zr6dQAIvJM{display:flex;flex-direction:column}.IRvtrGxFn8zr6dQAIvJM nav a{margin:1em}","",{version:3,sources:["webpack://./src/containers/Reader/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAEE,4BACE,UAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n  nav {\n    a {\n      margin: 1em;\n    }\n  }\n}\n"],sourceRoot:""}]),c.locals={Section:"IRvtrGxFn8zr6dQAIvJM"};const o=c}}]);
//# sourceMappingURL=491.js.map