(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[382],{1382:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>P});var l=t(2155),s=t(3946),a=t(1337),c=t.n(a),r=t(334),i=t.n(r),o=t(2166),u=t.n(o),d=t(2185),m=t.n(d),A=t(4517),E=t.n(A),p=t(6658),f=t.n(p),h=t(744),v=t.n(h),C={};C.styleTagTransform=f(),C.setAttributes=m(),C.insert=u().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=E(),c()(v(),C);const y=v()&&v().locals?v().locals:void 0,b={ssid:"",security:"WPA",password:"",hidden:!1},w=e=>{const n=[`S:${e.ssid}`];return"none"!==(e.security||"none")&&(n.push(`T:${e.security}`),n.push(`P:${e.password}`)),e.hidden&&n.push("H:true"),`WIFI:${n.join(";")}`};function P(){const[e,n]=(0,l.useState)((()=>b));(0,l.useEffect)((()=>{}),[]);const t=(0,l.useRef)(null),a=(0,l.useCallback)((({target:e})=>n((n=>({...n,[e.name]:"checkbox"===e.type?e.checked:e.value})))),[]);return(0,l.useEffect)((()=>{const n=w(e);console.log({data:e,content:n}),s.toCanvas(t.current,n,{margin:0,scale:5},(function(e){e&&console.error(e)}))}),[e]),l.createElement("section",{className:y.Section},l.createElement("h2",null,"WiFi"),l.createElement("div",{className:y.Row},l.createElement("form",{className:y.Form},l.createElement("label",null,l.createElement("div",null,"SSID"),l.createElement("input",{type:"text",name:"ssid",value:e.ssid,onChange:a})),l.createElement("label",null,l.createElement("div",null,"Security"),l.createElement("select",{name:"security",value:e.security,onChange:a},l.createElement("option",{value:"none"},"None"),l.createElement("option",{value:"WPA"},"WPA/WPA2"),l.createElement("option",{value:"WEP"},"WEP"))),l.createElement("label",null,l.createElement("div",null,"Password"),l.createElement("input",{type:"password",name:"password",value:e.password,onChange:a})),l.createElement("label",null,l.createElement("div",null,l.createElement("input",{type:"checkbox",name:"hidden",checked:e.hidden,onChange:a}),l.createElement("span",null,"Hidden")))),l.createElement("div",{className:y.Canvas},l.createElement("canvas",{ref:t,width:"125",height:"125"}))))}},744:(e,n,t)=>{var l=t(3413),s=t(3603)(l);s.push([e.id,".sgc1fV0yAXlDMMUsa5Ey{display:flex;flex-direction:column}.bb7eURQfffHr5iXVC1zB{display:flex;flex-direction:row}.i4E9kc1P7T0PRCP7Ot0J{margin:1em}","",{version:3,sources:["webpack://./../wifi/src/containers/Wifi/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAEF,sBACE,YAAA,CACA,kBAAA,CAEF,sBACE,UAAA",sourceRoot:""}]),s.locals={Section:"sgc1fV0yAXlDMMUsa5Ey",Row:"bb7eURQfffHr5iXVC1zB",Canvas:"i4E9kc1P7T0PRCP7Ot0J"},e.exports=s}}]);
//# sourceMappingURL=382.js.map