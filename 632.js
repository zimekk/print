(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[632],{4632:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>f});var o=n(2155);const t="\n- [x] aplikacja - program komputerowy wykonujący określone zadania (np. excel, word)\n- [x] arkusz kalkulacyjny - program komputerowy przedstawiający dane w postaci tabeli (kolumn i wierszy) (np. excel)\n- [x] bit - najmniejsza ilość informacji (0 lub 1)\n- [x] dokument - plik utworzony za pomocą aplikacji, np. rysunek, tekst, tabela arkusza itp.\n- [x] dysk twardy - (dysk komputerowy) pamięć masowa do przechowywania danych (wykorzystująca nośnik magnetyczny)\n- [x] edytor tekstu - program komputerowy służący do redagowania tekstów (np. word)\n- [x] folder - (inaczej katalog) katalog plików\n- [x] plik - (plik danych) uporządkowany zbiór danych\n- [x] ikona - (piktogram) symbol reprezentujący graficznie określony typ pliku, folder, aplikację, itp.\n- [x] informatyka - (nauka ścisła oraz techniczna) zajmuje się przetwarzaniem informacji,\n- [x] Internet - (globalna sieć komputerowa) wiele połączonych ze sobą komputerów, sieć sieci\n- [x] kursor - (wskaźnik na ekranie komputera) służy do wskazywania miejsca podjęcia akcji przy pomocy myszy lub klawiatury\n- [x] mysz - (urządzenie wskazujące) umożliwia poruszanie kursorem po ekranie i wywoływanie akcji\n- [x] Panel sterowania - (aplikacja systemowa) skupia narzędzia do ustawiania i zmiany parametrów\n- [x] piractwo komputerowe - kopiowanie, ściąganie i korzystanie z programów niezgodnie z licencją\n- [x] procesor - (centralna jednostka obliczeniowa komputera) pobiera, przetwarza i zwraca dane\n- [x] pulpit - (inaczej biurko) podstawowy obszar roboczy w systemach operacyjnych - zawiera ikony, pasek zadań, tło pulpitu\n- [x] pamięć ram - (pamięć główna, ulotna) pamięć o dostępie swobodnym\n- [x] usb - (tzw. port lub interfejs) komputerowe złącze komunikacyjne\n";var r=n(3957),i=n.n(r),l=n(1794),c=n.n(l),s=n(8866),u=n.n(s),p=n(621),m=n.n(p),k=n(3897),w=n.n(k),d=n(5462),y=n.n(d),z=n(5867),A=n.n(z),b={};b.styleTagTransform=y(),b.setAttributes=m(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=w(),i()(A(),b);const x=A()&&A().locals?A().locals:void 0,j=e=>e.split("\n").filter(Boolean).map((e=>e.replace(/^- +\[.\] +/,""))).map((e=>(([,e,a])=>({notion:e.trim(),answer:a.trim()}))(e.match(/([^-]+)-(.+)/))));function g({item:e,handleCorrect:a}){const[n,t]=(0,o.useState)((()=>!1)),r=(0,o.useCallback)((()=>t(!0)),[]);return o.createElement("article",null,o.createElement("div",{className:x.Notion},o.createElement("span",null,"Q"),o.createElement("b",null,e.notion)),n?o.createElement("div",{className:x.Answer},o.createElement("span",null,"A"),o.createElement("i",null,e.answer),o.createElement("button",{onClick:a},"correct")):o.createElement("button",{onClick:r},"answer"))}function f(){const[e]=(0,o.useState)((()=>j(t))),[a,n]=(0,o.useState)((()=>-1)),[r,i]=(0,o.useState)((()=>[])),[l,c]=(0,o.useState)((()=>[]));console.log(e,a);const s=(0,o.useCallback)((()=>(e=>(n(e),i((a=>a.concat(e)))))(Math.floor(Math.random()*e.length))),[]),u=(0,o.useCallback)((()=>(c((e=>e.concat(a))),s())),[a]),p=(0,o.useCallback)((()=>(c([]),i([]),n(-1))),[]);return o.createElement("section",{className:x.Section},o.createElement("h2",null,"Quiz"),o.createElement("div",null,o.createElement("button",{onClick:s},"random"),a>=0&&o.createElement(g,{key:a,item:e[a],handleCorrect:u})),o.createElement("pre",null,JSON.stringify({counter:r,correct:l},null,2)),o.createElement("div",null,o.createElement("button",{onClick:p},"reset")))}},5867:(e,a,n)=>{var o=n(5633),t=n(8967)(o);t.push([e.id,".X_0JQcHf59HuX0xgINa2{display:flex;flex-direction:column}.jf6axwzzcvcFXmQKZsFA span{padding:0 1em;color:#9acd32}.Z3H64497w5iE4_hWFoT3 span{padding:0 1em;color:#e9967a}","",{version:3,sources:["webpack://./../quiz/src/containers/Quiz/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAGA,2BACE,aAAA,CACA,aAAA,CAIF,2BACE,aAAA,CACA,aAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n}\n.Notion {\n  span {\n    padding: 0 1em;\n    color: yellowgreen;\n  }\n}\n.Answer {\n  span {\n    padding: 0 1em;\n    color: darksalmon;\n  }\n}\n"],sourceRoot:""}]),t.locals={Section:"X_0JQcHf59HuX0xgINa2",Notion:"jf6axwzzcvcFXmQKZsFA",Answer:"Z3H64497w5iE4_hWFoT3"},e.exports=t}}]);
//# sourceMappingURL=632.js.map