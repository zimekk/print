(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[45],{45:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var a=t(4344);const l="\n- [ ] znudzony - aburrido\n- [ ] zadowolony - contento\n- [ ] rozczarowany - decepcionado\n- [ ] zagniewany - enfadado\n- [ ] zdenerwowany - estar nervioso\n- [ ] dumny - orgulloso\n- [ ] zmartwiony - preocupado\n- [ ] poważny - serio\n- [ ] zaskoczony - sorprendido\n- [ ] być smutny - estar triste\n- [ ] wesoły - alegre\n- [ ] przestraszony - asustado\n\n- [ ] żołądek - estómago\n- [ ] ząb/zęby - diente/dientes\n- [ ] szyja - cuello\n- [ ] ręka - mano\n- [ ] oczy - ojos\n- [ ] stopa - pie\n- [ ] ramię - brazo\n- [ ] twarz - cara\n- [ ] włosy - pelo\n- [ ] głowa - cabeza\n- [ ] gardło - garganta\n- [ ] ucho - oreja\n- [ ] nos - nariz\n- [ ] plecy - espalda\n";var o=t(5388),r=t.n(o),c=t(1125),s=t.n(c),i=t(5687),u=t.n(i),m=t(8644),d=t.n(m),p=t(9552),A=t.n(p),E=t(3325),b=t.n(E),y=t(9895),w=t.n(y),C={};C.styleTagTransform=b(),C.setAttributes=d(),C.insert=u().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=A(),r()(w(),C);const g=w()&&w().locals?w().locals:void 0,h=(e,n)=>e.split("\n").filter(Boolean).map((e=>e.replace(/^- +\[.\] +/,""))).map((e=>(([,e,t])=>n?{notion:t.trim(),answer:e.trim()}:{notion:e.trim(),answer:t.trim()})(e.match(/([^-]+)-(.+)/))));function k({item:e,handleCorrect:n}){const[t,l]=(0,a.useState)((()=>!1)),o=(0,a.useCallback)((()=>l(!0)),[]);return a.createElement("article",null,a.createElement("div",{className:g.Notion},a.createElement("span",null,"Q"),a.createElement("b",null,e.notion)),t?a.createElement("div",{className:g.Answer},a.createElement("span",null,"A"),a.createElement("i",null,e.answer),a.createElement("button",{onClick:n},"correct")):a.createElement("button",{onClick:o},"answer"))}function z(){const[e,n]=(0,a.useState)((()=>!1)),[t,o]=(0,a.useState)((()=>!1)),[r,c]=(0,a.useState)((()=>l.trim())),[s,i]=(0,a.useState)((()=>h(r,t))),[u,m]=(0,a.useState)((()=>-1)),[d,p]=(0,a.useState)((()=>[])),[A,E]=(0,a.useState)((()=>[])),b=(0,a.useMemo)((()=>Object.keys(s).map(Number).filter((e=>!A.includes(e)))),[A]);console.log(s,u,b);const y=(0,a.useCallback)((()=>(e=>(m(e),p((n=>n.concat(e)))))(b[Math.floor(Math.random()*b.length)])),[b]),w=(0,a.useCallback)((()=>(E((e=>e.concat(u))),y())),[u]),C=(0,a.useCallback)((()=>(E([]),p([]),m(-1))),[]),z=(0,a.useCallback)((()=>(E([]),p([]),m(-1),i(h(r,t)))),[r,t]);return a.createElement("section",{className:g.Section},a.createElement("h2",null,"Quiz"),a.createElement("div",null,a.createElement("button",{onClick:y,disabled:0===b.length},"random (",b.length,")"),u>=0&&a.createElement(k,{key:u,item:s[u],handleCorrect:w})),a.createElement("hr",null),a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:e,onChange:e=>n(e.target.checked)}),a.createElement("span",null,"editable")),a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:t,onChange:e=>o(e.target.checked)}),a.createElement("span",null,"inverse")),a.createElement("button",{onClick:z},"update"),a.createElement("button",{onClick:C},"reset")),e&&a.createElement("textarea",{rows:8,value:r,onChange:e=>c(e.target.value)})),a.createElement("pre",null,JSON.stringify({counter:d,correct:A},null,2)))}},9895:(e,n,t)=>{var a=t(3316),l=t(3484)(a);l.push([e.id,".X_0JQcHf59HuX0xgINa2{display:flex;flex-direction:column}.jf6axwzzcvcFXmQKZsFA span{padding:0 1em;color:#9acd32}.Z3H64497w5iE4_hWFoT3 span{padding:0 1em;color:#e9967a}","",{version:3,sources:["webpack://./../quiz/src/containers/Quiz/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAGA,2BACE,aAAA,CACA,aAAA,CAIF,2BACE,aAAA,CACA,aAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n.Notion {\n  span {\n    padding: 0 1em;\n    color: yellowgreen;\n  }\n}\n.Answer {\n  span {\n    padding: 0 1em;\n    color: darksalmon;\n  }\n}\n"],sourceRoot:""}]),l.locals={Section:"X_0JQcHf59HuX0xgINa2",Notion:"jf6axwzzcvcFXmQKZsFA",Answer:"Z3H64497w5iE4_hWFoT3"},e.exports=l}}]);
//# sourceMappingURL=45.js.map