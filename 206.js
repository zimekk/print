(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[206],{4206:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var l=n(2155),a=n(2308),c=n(5330),r=n(9476),s=n(238),o=n(9316),i=n(6448),d=n(864),m=n(7858),u=n(3093),b=n(8823),h=n.n(b),f=n(1412),p=n.n(f),E=n(3288),y=n.n(E),g=n(8799),v=n.n(g),C=n(4835),w=n.n(C),k=n(7392),A=n.n(k),S=n(8261),x=n.n(S),T={};T.styleTagTransform=A(),T.setAttributes=v(),T.insert=y().bind(null,"head"),T.domAPI=p(),T.insertStyleElement=w(),h()(x(),T);const R=x()&&x().locals?x().locals:void 0;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},O.apply(null,arguments)}function j(){const[e,t]=(0,l.useState)(null),[n,b]=(0,l.useState)(!0),[h]=(0,l.useState)(!0),[f]=(0,l.useState)({cellSize:10,cellThickness:1,cellColor:"#6f6f6f",sectionSize:100,sectionThickness:1.5,sectionColor:"#9d4b4b",fadeDistance:250,fadeStrength:1,followCamera:!1,infiniteGrid:!0}),p=(0,l.useRef)(),E=(0,l.useCallback)((()=>{var e,t;e=(new u.h).parse(p.current,{binary:!0}),t="shape.stl",function(e,t){const n=document.createElement("a");n.style.display="none",document.body.appendChild(n),n.href=URL.createObjectURL(e),n.download=t,n.click(),document.body.removeChild(n)}(new Blob([e],{type:"application/octet-stream"}),t)}),[]),y=(0,l.useCallback)((({target:e})=>b(e.checked)),[]),g=(0,l.useCallback)((({target:e})=>{const n=URL.createObjectURL(e.files[0]);return t(n),()=>URL.revokeObjectURL(n)}),[]),v=(0,l.useMemo)((()=>(new m.Shape).moveTo(-20,0).lineTo(0,30).lineTo(40,0)),[]);return l.createElement("section",{className:R.Section},l.createElement("h2",null,"Stl"),l.createElement("div",null,l.createElement("button",{onClick:E},"export"),l.createElement("input",{type:"file",onChange:g}),l.createElement("label",null,l.createElement("input",{type:"checkbox",onChange:y,checked:n}),l.createElement("span",null,"wireframe"))),l.createElement("div",{style:{height:400,position:"relative"}},e&&l.createElement("div",{style:{position:"absolute",width:"100%",height:"100%"}},l.createElement("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:e})),h&&l.createElement(d.Hl,{shadows:!0,camera:{position:[100,100,100],fov:20}},l.createElement(a.o8,{ref:p,args:[v,{steps:2,depth:10,bevelEnabled:!1}],castShadow:!0},n?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})),l.createElement(c.x,O({position:[0,-.01,0],args:[10.5,10.5]},f)),l.createElement(r.N,{makeDefault:!0}),!n&&l.createElement(s.OH,{preset:"city"}),l.createElement(o.z,{alignment:"bottom-right",margin:[80,80]},l.createElement(i.t,{axisColors:["#9d4b4b","#2f7f4f","#3b5b9d"],labelColor:"white"})))))}},8261:(e,t,n)=>{var l=n(7279),a=n(4197)(l);a.push([e.id,".KEyQ6xTtdx1PShrAb3nc{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../stl/src/containers/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),a.locals={Section:"KEyQ6xTtdx1PShrAb3nc"},e.exports=a}}]);
//# sourceMappingURL=206.js.map