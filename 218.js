(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[218],{8218:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var l=t(4344),o=t(5142),r=t(5428),a=t(5371),i=t(468),c=t(8242),s=t(6410),m=t(4619),T=t(1782),u=t(2238),f=t(5388),h=t.n(f),d=t(1125),b=t.n(d),w=t(5687),E=t.n(w),p=t(8644),y=t.n(p),g=t(9552),v=t.n(g),k=t(3325),S=t.n(k),A=t(8997),M=t.n(A),C={};C.styleTagTransform=S(),C.setAttributes=y(),C.insert=E().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=v(),h()(M(),C);const R=M()&&M().locals?M().locals:void 0;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},x.apply(null,arguments)}const I=new Float32Array([10,0,0,2,5,0,-1,2,0,1,-1,0]),Y=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),P=new Float32Array([0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1]),B=new Uint16Array([0,1,3,2,3,1]),j=()=>l.createElement("mesh",null,l.createElement("bufferGeometry",null,l.createElement("bufferAttribute",{attach:"attributes-position",array:I,count:I.length/3,itemSize:3}),l.createElement("bufferAttribute",{attach:"attributes-color",array:P,count:P.length/3,itemSize:3}),l.createElement("bufferAttribute",{attach:"attributes-normal",array:Y,count:Y.length/3,itemSize:3}),l.createElement("bufferAttribute",{attach:"index",array:B,count:B.length,itemSize:1})),l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}));function q({start:e=[0,0],paths:n,...t}){const o=(0,l.useMemo)((()=>{const t=new T.ypk;return t.moveTo(...e),n.forEach((e=>t.lineTo(...e))),t}),[e,n]);return l.createElement("mesh",null,l.createElement("extrudeGeometry",{args:[o,t]}),l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}))}function O(){const e=(0,l.useMemo)((()=>{const e=new T.ypk;return e.absarc(0,-4,5,T.cj9.degToRad(60),T.cj9.degToRad(120)),e.absarc(0,4,5,T.cj9.degToRad(240),T.cj9.degToRad(300)),e}),[]);return l.createElement("mesh",null,l.createElement("extrudeGeometry",{args:[e,{depth:10,steps:10}]}),l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}))}const F={clip3:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>(new T.ypk).moveTo(0,0).lineTo(32,0).lineTo(32,3).lineTo(-58,3).lineTo(-58,-8).lineTo(-3,-8).lineTo(-3,3).lineTo(-3,-72).lineTo(34,-72).lineTo(34,-62).lineTo(32,-62).lineTo(32,-70).lineTo(0,-70).lineTo(0,0)),[]);return l.createElement(l.Fragment,null,l.createElement(o.o8,{ref:n,args:[t,{steps:4,depth:32,bevelEnabled:!0,bevelThickness:.1}],castShadow:!0},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})))},clip2:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>{const e=41,n=1.5;return(new T.ypk).moveTo(0,0).lineTo(25.5,0).lineTo(25.5,-e).lineTo(17.5,-39.5).lineTo(17.5,-41).lineTo(27,-e-n).lineTo(27,n).lineTo(14,n).lineTo(12,2.3).lineTo(11,n).lineTo(10,2.3).lineTo(9,n).lineTo(8,2.3).lineTo(7,n).lineTo(6,2.3).lineTo(5,n).lineTo(4,2.3).lineTo(3,n).lineTo(2,2.3).lineTo(1,n).lineTo(0,2.3).lineTo(-1,n).lineTo(-2,n).lineTo(-3,2.3).lineTo(-3,2.7).lineTo(-2,3.5).lineTo(-1,2.7).lineTo(0,3.5).lineTo(1,2.7).lineTo(2,3.5).lineTo(3,2.7).lineTo(4,3.5).lineTo(5,2.7).lineTo(6,3.5).lineTo(7,2.7).lineTo(8,3.5).lineTo(9,2.7).lineTo(10,3.5).lineTo(11,2.7).lineTo(12,3.5).lineTo(14,3.5).lineTo(14,4.5).lineTo(-4,5).lineTo(-7,n).lineTo(-27,n).lineTo(-27,-e-n).lineTo(-17.5,-41).lineTo(-17.5,-39.5).lineTo(-25.5,-e).lineTo(-25.5,0)}),[]);return l.createElement(l.Fragment,null,l.createElement(o.o8,{ref:n,args:[t,{steps:4,depth:8,bevelEnabled:!1}],castShadow:!0},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})))},clip:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>(new T.ypk).moveTo(0,0).lineTo(26.5,0).lineTo(26.5,-41).lineTo(22.5,-41).lineTo(22.5,-42).lineTo(27.5,-42).lineTo(27.5,1).lineTo(2,1).lineTo(2,15).lineTo(.5,13).lineTo(.5,11).lineTo(1.5,10).lineTo(.5,9).lineTo(1.5,8).lineTo(.5,7).lineTo(1.5,6).lineTo(.5,5).lineTo(1.5,4).lineTo(.5,3).lineTo(1.5,2).lineTo(0,1).lineTo(-1.5,2).lineTo(-.5,3).lineTo(-1.5,4).lineTo(-.5,5).lineTo(-1.5,6).lineTo(-.5,7).lineTo(-1.5,8).lineTo(-.5,9).lineTo(-1.5,10).lineTo(-.5,11).lineTo(-.5,13).lineTo(-2,15).lineTo(-2,1).lineTo(-27.5,1).lineTo(-27.5,-42).lineTo(-22.5,-42).lineTo(-22.5,-41).lineTo(-26.5,-41).lineTo(-26.5,0)),[]);return l.createElement(l.Fragment,null,l.createElement(o.o8,{ref:n,args:[t,{steps:2,depth:10,bevelEnabled:!1}],castShadow:!0},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})))},caps:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>{const e=6.75;let n=0;return[new T.I9Y(0,n),new T.I9Y(7.3,n),new T.I9Y(7.5,++n-.8),new T.I9Y(7.5,++n),new T.I9Y(6.65,n),new T.I9Y(e,++n),new T.I9Y(5.75,++n),new T.I9Y(e,++n),new T.I9Y(5.75,++n),new T.I9Y(e,++n),new T.I9Y(5.75,++n),new T.I9Y(e,++n),new T.I9Y(5.75,++n),new T.I9Y(0,n)]}),[]);return l.createElement(o.bv,{ref:n,args:[t,72]},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"}))},lathe:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>{const e=[];for(let n=0;n<10;n++)e.push(new T.I9Y(10*Math.sin(.2*n)+5,2*(n-5)));return e}),[]);return l.createElement(o.bv,{ref:n,args:[t,5]},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"}))},shape:function({wireframe:e,meshRef:n}){const t=(0,l.useMemo)((()=>(new T.ypk).moveTo(-20,0).lineTo(0,30).lineTo(40,0)),[]),r=new T.B6O([new T.Pq0(-60,-100,60),new T.Pq0(-60,20,60),new T.Pq0(-60,120,60),new T.Pq0(60,20,-60),new T.Pq0(60,-100,-60)]);return r.curveType="catmullrom",l.createElement(l.Fragment,null,l.createElement(q,{bevelSegments:5,depth:10,extrudePath:r,paths:[[2,2.5,2,0,0,-1],[4,0,3,3.5,5,3.5],[3,5.5,1,1.7,1.5,6.5]],steps:10}),l.createElement(O,null),l.createElement(j,null),l.createElement(o.o8,{ref:n,args:[t,{steps:2,depth:10,bevelEnabled:!1}],castShadow:!0},e?l.createElement("meshBasicMaterial",{color:"#2f7f4f",wireframe:!0}):l.createElement("meshStandardMaterial",{color:"#9d4b4b"})))}};function z(){const[e,n]=(0,l.useState)((()=>Object.keys(F)[0])),[t,o]=(0,l.useState)(null),[f,h]=(0,l.useState)(!0),[d]=(0,l.useState)(!0),[b]=(0,l.useState)({cellSize:10,cellThickness:1,cellColor:"#6f6f6f",sectionSize:100,sectionThickness:1.5,sectionColor:"#9d4b4b",fadeDistance:250,fadeStrength:1,followCamera:!1,infiniteGrid:!0}),w=F[e],E=(0,l.useRef)(),p=(0,l.useCallback)((()=>{var e,n;e=(new u.h).parse(E.current,{binary:!0}),n="shape.stl",function(e,n){const t=document.createElement("a");t.style.display="none",document.body.appendChild(t),t.href=URL.createObjectURL(e),t.download=n,t.click(),document.body.removeChild(t)}(new Blob([e],{type:"application/octet-stream"}),n)}),[]),y=(0,l.useCallback)((({target:e})=>h(e.checked)),[]),g=(0,l.useCallback)((({target:e})=>{const n=URL.createObjectURL(e.files[0]);return o(n),()=>URL.revokeObjectURL(n)}),[]);return new T.B6O([new T.Pq0(-60,-100,60),new T.Pq0(-60,20,60),new T.Pq0(-60,120,60),new T.Pq0(60,20,-60),new T.Pq0(60,-100,-60)]).curveType="catmullrom",l.createElement("section",{className:R.Section},l.createElement("h2",null,"Stl"),l.createElement("nav",null,Object.keys(F).map(((e,t)=>l.createElement("span",{key:t},t>0&&" | ",l.createElement("a",{key:e,href:`#${e}`,onClick:t=>(t.preventDefault(),n(e))},e))))),l.createElement("div",null,l.createElement("button",{onClick:p},"export"),l.createElement("input",{type:"file",onChange:g}),t&&l.createElement("button",{onClick:()=>o(null)},"x"),l.createElement("label",null,l.createElement("input",{type:"checkbox",onChange:y,checked:f}),l.createElement("span",null,"wireframe"))),l.createElement("div",{style:{height:400,position:"relative"}},t&&l.createElement("div",{style:{position:"absolute",width:"100%",height:"100%"}},l.createElement("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:t})),d&&l.createElement(m.Hl,{shadows:!0,camera:{position:[100,100,100],fov:20}},l.createElement(w,{wireframe:f,meshRef:E}),l.createElement(r.x,x({position:[0,-.01,0],args:[10.5,10.5]},b)),l.createElement(a.N,{makeDefault:!0}),!f&&l.createElement(i.OH,{preset:"city"}),l.createElement(c.z,{alignment:"bottom-right",margin:[80,80]},l.createElement(s.t,{axisColors:["#9d4b4b","#2f7f4f","#3b5b9d"],labelColor:"white"})))))}},8997:(e,n,t)=>{var l=t(3316),o=t(3484)(l);o.push([e.id,".KEyQ6xTtdx1PShrAb3nc{display:flex;flex-direction:column}","",{version:3,sources:["webpack://./../stl/src/containers/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),o.locals={Section:"KEyQ6xTtdx1PShrAb3nc"},e.exports=o}}]);
//# sourceMappingURL=218.js.map