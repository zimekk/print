(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[971],{9971:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var l=n(2155),a=n(4623),c=n(1715),r=n(9488),o=n(1465),s=n(3771),i=n(1177),d=n(5733),m=n(7022),u=n(9889),b=n(3957),h=n.n(b),p=n(1794),f=n.n(p),E=n(8866),y=n.n(E),g=n(621),v=n.n(g),C=n(3897),w=n.n(C),k=n(5462),A=n.n(k),S=n(8519),x=n.n(S),T={};T.styleTagTransform=A(),T.setAttributes=v(),T.insert=y().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=w(),h()(x(),T);const O=x()&&x().locals?x().locals:void 0;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},R.apply(this,arguments)}function j(){const[e,t]=(0,l.useState)(null),[n,b]=(0,l.useState)(!0),[h]=(0,l.useState)(!0),[p]=(0,l.useState)({cellSize:10,cellThickness:1,cellColor:"#6f6f6f",sectionSize:100,sectionThickness:1.5,sectionColor:"#9d4b4b",fadeDistance:250,fadeStrength:1,followCamera:!1,infiniteGrid:!0}),f=(0,l.useRef)(),E=(0,l.useCallback)((()=>{var e,t;e=(new u.h).parse(f.current,{binary:!0}),t="shape.stl",function(e,t){const n=document.createElement("a");n.style.display="none",document.body.appendChild(n),n.href=URL.createObjectURL(e),n.download=t,n.click(),document.body.removeChild(n)}(new Blob([e],{type:"application/octet-stream"}),t)}),[]),y=(0,l.useCallback)((({target:e})=>b(e.checked)),[]),g=(0,l.useCallback)((({target:e})=>{const n=URL.createObjectURL(e.files[0]);return t(n),()=>URL.revokeObjectURL(n)}),[]),v=(0,l.useMemo)((()=>(new m.Shape).moveTo(-20,0).lineTo(0,30).lineTo(40,0)),[]);return l.createElement("section",{className:O.Section},l.createElement("h2",null,"Stl"),l.createElement("div",null,l.createElement("button",{onClick:E},"export"),l.createElement("input",{type:"file",onChange:g}),l.createElement("label",null,l.createElement("input",{type:"checkbox",onChange:y,checked:n}),l.createElement("span",null,"wireframe"))),l.createElement("div",{style:{height:400,position:"relative"}},e&&l.createElement("div",{style:{position:"absolute",width:"100%",height:"100%"}},l.createElement("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:e})),h&&l.createElement(d.Hl,{shadows:!0,camera:{position:[100,100,100],fov:20}},l.createElement(a.o8,{ref:f,args:[v,{steps:2,depth:10,bevelEnabled:!1}],castShadow:!0},n?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})),l.createElement(c.x,R({position:[0,-.01,0],args:[10.5,10.5]},p)),l.createElement(r.N,{makeDefault:!0}),!n&&l.createElement(o.OH,{preset:"city"}),l.createElement(s.z,{alignment:"bottom-right",margin:[80,80]},l.createElement(i.t,{axisColors:["#9d4b4b","#2f7f4f","#3b5b9d"],labelColor:"white"})))))}},8519:(e,t,n)=>{var l=n(6430),a=n(8614)(l);a.push([e.id,".KEyQ6xTtdx1PShrAb3nc{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../stl/src/containers/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),a.locals={Section:"KEyQ6xTtdx1PShrAb3nc"},e.exports=a}}]);
//# sourceMappingURL=971.js.map