(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[707],{6707:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(2155);var l=n(852),r=n.n(l),c=n(6672),o=n.n(c),s=n(3985),i=n.n(s),u=n(9323),m=n.n(u),d=n(7776),g=n.n(d),h=n(7100),A=n.n(h),f=n(8953),p=n.n(f),v=n(3386),E=n.n(v),x={};x.styleTagTransform=p(),x.setAttributes=g(),x.insert=m().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=A(),o()(E(),x);const C=E()&&E().locals?E().locals:void 0;function R(){const[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(""),c=(0,a.useRef)(null),o=(0,a.useRef)(null);return a.createElement("div",{className:"App"},a.createElement("main",{className:"App-main"},e&&a.createElement(a.Fragment,null,a.createElement("h3",null,"Actual image uploaded"),a.createElement("img",{src:e,className:"App-logo",alt:"logo",ref:o}),a.createElement("h3",null,"Canvas"),a.createElement("canvas",{ref:c,width:700,height:300}),a.createElement("h3",null,"Extracted text"),a.createElement("div",{className:"pin-box"},a.createElement("p",null," ",n," "))),a.createElement("input",{type:"file",onChange:e=>{t(URL.createObjectURL(e.target.files[0]))}}),a.createElement("button",{onClick:()=>{const e=c.current;e.width=o.current.width,e.height=o.current.height;const t=e.getContext("2d");t.drawImage(o.current,0,0),t.putImageData(function(e){const t=e.getContext("2d").getImageData(0,0,e.width,e.height);return function(e){for(var t=0;t<e.length;t+=4)e[t]=255^e[t],e[t+1]=255^e[t+1],e[t+2]=255^e[t+2]}(t.data),function(e,t){void 0===t&&(t=.5);const n=Math.floor(255*t);for(let t=0;t<e.length;t+=4){let a;a=.2126*e[t]+.7152*e[t+1]+.0722*e[t+2]>=n?255:0,e[t]=e[t+1]=e[t+2]=a}}(t.data,.5),t}(e),0,0);const n=e.toDataURL("image/jpeg");r().recognize(n,"eng",{logger:e=>console.log(e)}).catch((e=>{console.error(e)})).then((e=>{if(console.log(e),e){const{data:t}=e;t.confidence;let n=t.text;l(n)}}))},style:{height:50}},"Convert to text")))}function b(){return a.createElement("section",{className:C.Section},a.createElement("h2",null,"Reader"),a.createElement(R,null))}},3386:(e,t,n)=>{var a=n(3648),l=n(3888)(a);l.push([e.id,".IRvtrGxFn8zr6dQAIvJM{display:flex;flex-direction:column}.IRvtrGxFn8zr6dQAIvJM nav a{margin:1em}","",{version:3,sources:["webpack://./src/containers/Reader/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAEE,4BACE,UAAA",sourceRoot:""}]),l.locals={Section:"IRvtrGxFn8zr6dQAIvJM"},e.exports=l}}]);
//# sourceMappingURL=707.js.map