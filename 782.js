(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[782],{3782:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var a=t(2155);const l="\n- [ ] żołądek - estómago\n- [ ] ząb/zęby - diente/dientes\n- [ ] szyja - cuello\n- [ ] ręka - mano\n- [ ] oczy - ojos\n- [ ] stopa - pie\n- [ ] ramię - brazo\n- [ ] twarz - cara\n- [ ] włosy - pelo\n- [ ] głowa - cabeza\n- [ ] gardło - garganta\n- [ ] ucho - oreja\n- [ ] nos - nariz\n- [ ] plecy - espalda\n";var c=t(151),o=t.n(c),s=t(2388),r=t.n(s),i=t(9e3),u=t.n(i),m=t(2431),A=t.n(m),d=t(8227),p=t.n(d),b=t(1856),C=t.n(b),E=t(9191),k=t.n(E),w={};w.styleTagTransform=C(),w.setAttributes=A(),w.insert=u().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=p(),o()(k(),w);const f=k()&&k().locals?k().locals:void 0,h=e=>e.split("\n").filter(Boolean).map((e=>e.replace(/^- +\[.\] +/,""))).map((e=>(([,e,n])=>({notion:e.trim(),answer:n.trim()}))(e.match(/([^-]+)-(.+)/))));function g({item:e,handleCorrect:n}){const[t,l]=(0,a.useState)((()=>!1)),c=(0,a.useCallback)((()=>l(!0)),[]);return a.createElement("article",null,a.createElement("div",{className:f.Notion},a.createElement("span",null,"Q"),a.createElement("b",null,e.notion)),t?a.createElement("div",{className:f.Answer},a.createElement("span",null,"A"),a.createElement("i",null,e.answer),a.createElement("button",{onClick:n},"correct")):a.createElement("button",{onClick:c},"answer"))}function z(){const[e]=(0,a.useState)((()=>h(l))),[n,t]=(0,a.useState)((()=>-1)),[c,o]=(0,a.useState)((()=>[])),[s,r]=(0,a.useState)((()=>[])),i=(0,a.useMemo)((()=>Object.keys(e).map(Number).filter((e=>!s.includes(e)))),[s]);console.log(e,n,i);const u=(0,a.useCallback)((()=>(e=>(t(e),o((n=>n.concat(e)))))(i[Math.floor(Math.random()*i.length)])),[i]),m=(0,a.useCallback)((()=>(r((e=>e.concat(n))),u())),[n]),A=(0,a.useCallback)((()=>(r([]),o([]),t(-1))),[]);return a.createElement("section",{className:f.Section},a.createElement("h2",null,"Quiz"),a.createElement("div",null,a.createElement("button",{onClick:u,disabled:0===i.length},"random"),n>=0&&a.createElement(g,{key:n,item:e[n],handleCorrect:m})),a.createElement("pre",null,JSON.stringify({counter:c,correct:s},null,2)),a.createElement("div",null,a.createElement("button",{onClick:A},"reset")))}},9191:(e,n,t)=>{var a=t(2039),l=t(9661)(a);l.push([e.id,".X_0JQcHf59HuX0xgINa2{display:flex;flex-direction:column}.jf6axwzzcvcFXmQKZsFA span{padding:0 1em;color:#9acd32}.Z3H64497w5iE4_hWFoT3 span{padding:0 1em;color:#e9967a}","",{version:3,sources:["webpack://./../quiz/src/containers/Quiz/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAGA,2BACE,aAAA,CACA,aAAA,CAIF,2BACE,aAAA,CACA,aAAA",sourceRoot:""}]),l.locals={Section:"X_0JQcHf59HuX0xgINa2",Notion:"jf6axwzzcvcFXmQKZsFA",Answer:"Z3H64497w5iE4_hWFoT3"},e.exports=l}}]);
//# sourceMappingURL=782.js.map