(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[543],{2:e=>{e.exports=e=>{const t={};return"undefined"!=typeof WorkerGlobalScope?t.type="webworker":"object"==typeof document?t.type="browser":"object"==typeof process&&(t.type="node"),void 0===e?t:t[e]}},487:(e,t,r)=>{const n=r(4603);e.exports={recognize:async(e,t,r)=>{const o=await n(t,1,r);return o.recognize(e).finally((async()=>{await o.terminate()}))},detect:async(e,t)=>{const r=await n("osd",0,t);return r.detect(e).finally((async()=>{await r.terminate()}))}}},734:e=>{e.exports=({workerPath:e,workerBlobURL:t})=>{let r;if(Blob&&URL&&t){const t=new Blob([`importScripts("${e}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(t))}else r=new Worker(e);return r}},1764:(e,t,r)=>{var n=r(3738),o=r(330)(n);o.push([e.id,".IRvtrGxFn8zr6dQAIvJM{display:flex;flex-direction:column}.IRvtrGxFn8zr6dQAIvJM nav a{margin:1em}","",{version:3,sources:["webpack://./src/containers/Reader/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAEE,4BACE,UAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n  nav {\n    a {\n      margin: 1em;\n    }\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"IRvtrGxFn8zr6dQAIvJM"},e.exports=o},2543:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(4349);var o=r(9461),a=r.n(o),i=r(6230),c=r.n(i),s=r(9519),l=r.n(s),u=r(7397),d=r.n(u),h=r(9494),f=r.n(h),p=r(7250),g=r.n(p),y=r(1159),m=r.n(y),v=r(1764),w=r.n(v),E={};E.styleTagTransform=m(),E.setAttributes=f(),E.insert=d().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=g(),c()(w(),E);const L=w()&&w().locals?w().locals:void 0;function A(){const[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),i=(0,n.useRef)(null),c=(0,n.useRef)(null);return n.createElement("div",{className:"App"},n.createElement("main",{className:"App-main"},e&&n.createElement(n.Fragment,null,n.createElement("h3",null,"Actual image uploaded"),n.createElement("img",{src:e,className:"App-logo",alt:"logo",ref:c}),n.createElement("h3",null,"Canvas"),n.createElement("canvas",{ref:i,width:700,height:300}),n.createElement("h3",null,"Extracted text"),n.createElement("div",{className:"pin-box"},n.createElement("p",null," ",r," "))),n.createElement("input",{type:"file",onChange:e=>{t(URL.createObjectURL(e.target.files[0]))}}),n.createElement("button",{onClick:()=>{const e=i.current;e.width=c.current.width,e.height=c.current.height;const t=e.getContext("2d");t.drawImage(c.current,0,0),t.putImageData(function(e){const t=e.getContext("2d").getImageData(0,0,e.width,e.height);return function(e){for(var t=0;t<e.length;t+=4)e[t]=255^e[t],e[t+1]=255^e[t+1],e[t+2]=255^e[t+2]}(t.data),function(e,t){void 0===t&&(t=.5);const r=Math.floor(255*t);for(let t=0;t<e.length;t+=4){let n;n=.2126*e[t]+.7152*e[t+1]+.0722*e[t+2]>=r?255:0,e[t]=e[t+1]=e[t+2]=n}}(t.data,.5),t}(e),0,0);const r=e.toDataURL("image/jpeg");a().recognize(r,"eng",{logger:e=>console.log(e)}).catch((e=>{console.error(e)})).then((e=>{if(console.log(e),e){const{data:t}=e;t.confidence;let r=t.text;o(r)}}))},style:{height:50}},"Convert to text")))}function b(){return n.createElement("section",{className:L.Section},n.createElement("h2",null,"Reader"),n.createElement(A,null))}},3326:e=>{e.exports={workerBlobURL:!0,logger:()=>{}}},3703:e=>{"use strict";e.exports={rE:"6.0.0"}},3795:(e,t,r)=>{const n=r(7486),o=r(734),a=r(5902),i=r(8055),c=r(7681),s=r(5018);e.exports={defaultOptions:n,spawnWorker:o,terminateWorker:a,onMessage:i,send:c,loadImage:s}},4603:(e,t,r)=>{const n=r(5691),o=r(6902),{log:a}=r(4937),i=r(4862),c=r(5148),{defaultOptions:s,spawnWorker:l,terminateWorker:u,onMessage:d,loadImage:h,send:f}=r(3795);let p=0;e.exports=async(e="eng",t=c.LSTM_ONLY,r={},g={})=>{const y=i("Worker",p),{logger:m,errorHandler:v,...w}=n({...s,...r}),E={},L="string"==typeof e?e.split("+"):e;let A=t,b=g;const S=[c.DEFAULT,c.LSTM_ONLY].includes(t)&&!w.legacyCore;let x,O;const _=new Promise(((e,t)=>{O=e,x=t}));let R=l(w);R.onerror=e=>{x(e.message)},p+=1;const T=({id:e,action:t,payload:r})=>new Promise(((n,o)=>{a(`[${y}]: Start ${e}, action=${t}`),E[`${t}-${e}`]={resolve:n,reject:o},f(R,{workerId:y,jobId:e,action:t,payload:r})})),k=(e,t)=>T(o({id:t,action:"loadLanguage",payload:{langs:e,options:{langPath:w.langPath,dataPath:w.dataPath,cachePath:w.cachePath,cacheMethod:w.cacheMethod,gzip:w.gzip,lstmOnly:[c.DEFAULT,c.LSTM_ONLY].includes(A)&&!w.legacyLang}}})),N=(e,t,r,n)=>T(o({id:n,action:"initialize",payload:{langs:e,oem:t,config:r}}));d(R,(({workerId:e,jobId:t,status:r,action:n,data:o})=>{const i=`${n}-${t}`;if("resolve"===r)a(`[${e}]: Complete ${t}`),E[i].resolve({jobId:t,data:o}),delete E[i];else if("reject"===r){if(E[i].reject(o),delete E[i],"load"===n&&x(o),!v)throw Error(o);v(o)}else"progress"===r&&m({...o,userJobId:t})}));const I={id:y,worker:R,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(e,t,r)=>T(o({id:r,action:"FS",payload:{method:"writeFile",args:[e,t]}})),readText:(e,t)=>T(o({id:t,action:"FS",payload:{method:"readFile",args:[e,{encoding:"utf8"}]}})),removeFile:(e,t)=>T(o({id:t,action:"FS",payload:{method:"unlink",args:[e]}})),FS:(e,t,r)=>T(o({id:r,action:"FS",payload:{method:e,args:t}})),reinitialize:(e="eng",t,r,n)=>{if(S&&[c.TESSERACT_ONLY,c.TESSERACT_LSTM_COMBINED].includes(t))throw Error("Legacy model requested but code missing.");const o=t||A;A=o;const a=r||b;b=a;const i=("string"==typeof e?e.split("+"):e).filter((e=>!L.includes(e)));return L.push(...i),i.length>0?k(i,n).then((()=>N(e,o,a,n))):N(e,o,a,n)},setParameters:(e={},t)=>T(o({id:t,action:"setParameters",payload:{params:e}})),recognize:async(e,t={},r={text:!0},n)=>T(o({id:n,action:"recognize",payload:{image:await h(e),options:t,output:r}})),detect:async(e,t)=>{if(S)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return T(o({id:t,action:"detect",payload:{image:await h(e)}}))},terminate:async()=>(null!==R&&(u(R),R=null),Promise.resolve())};return T(o({id:undefined,action:"load",payload:{options:{lstmOnly:S,corePath:w.corePath,logging:w.logging}}})).then((()=>k(e))).then((()=>N(e,t,g))).then((()=>O(I))).catch((()=>{})),_}},4862:e=>{e.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`},4926:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new k(n||[]);return o(i,"_invoke",{value:O(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",g="completed",y={};function m(){}function v(){}function w(){}var E={};l(E,i,(function(){return this}));var L=Object.getPrototypeOf,A=L&&L(L(N([])));A&&A!==r&&n.call(A,i)&&(E=A);var b=w.prototype=m.prototype=Object.create(E);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,i,c){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(e,t,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=d(e,t,r);if("normal"===s.type){if(n=r.done?g:f,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=g,r.method="throw",r.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function N(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:t,done:!0}}return v.prototype=w,o(b,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},S(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(b),l(b,s,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},4937:function(e,t){let r=!1;t.logging=r,t.setLogging=e=>{r=e},t.log=(...e)=>r?console.log.apply(this,e):null},5018:e=>{const t=e=>new Promise(((t,r)=>{const n=new FileReader;n.onload=()=>{t(n.result)},n.onerror=({target:{error:{code:e}}})=>{r(Error(`File could not be read! Code=${e}`))},n.readAsArrayBuffer(e)})),r=async e=>{let n=e;if(void 0===e)return"undefined";if("string"==typeof e)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))n=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const t=await fetch(e);n=await t.arrayBuffer()}else if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)"IMG"===e.tagName&&(n=await r(e.src)),"VIDEO"===e.tagName&&(n=await r(e.poster)),"CANVAS"===e.tagName&&await new Promise((r=>{e.toBlob((async e=>{n=await t(e),r()}))}));else if("undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas){const r=await e.convertToBlob();n=await t(r)}else(e instanceof File||e instanceof Blob)&&(n=await t(e));return new Uint8Array(n)};e.exports=r},5148:e=>{e.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},5192:e=>{e.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},5691:(e,t,r)=>{const n="browser"===r(2)("type")?e=>new URL(e,window.location.href).href:e=>e;e.exports=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach((r=>{e[r]&&(t[r]=n(t[r]))})),t}},5902:e=>{e.exports=e=>{e.terminate()}},6902:(e,t,r)=>{const n=r(4862);let o=0;e.exports=({id:e,action:t,payload:r={}})=>{let a=e;return void 0===a&&(a=n("Job",o),o+=1),{id:a,action:t,payload:r}}},7027:e=>{e.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},7486:(e,t,r)=>{const n=r(3703).rE,o=r(3326);e.exports={...o,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}},7681:e=>{e.exports=async(e,t)=>{e.postMessage(t)}},7836:function(e,t,r){const n=r(6902),{log:o}=r(4937),a=r(4862);let i=0;e.exports=()=>{const e=a("Scheduler",i),t={},r={};let c=[];i+=1;const s=()=>Object.keys(t).length,l=()=>{if(0!==c.length){const e=Object.keys(t);for(let n=0;n<e.length;n+=1)if(void 0===r[e[n]]){c[0](t[e[n]]);break}}},u=(t,a)=>new Promise(((i,s)=>{const u=n({action:t,payload:a});c.push((async e=>{c.shift(),r[e.id]=u;try{i(await e[t].apply(this,[...a,u.id]))}catch(e){s(e)}finally{delete r[e.id],l()}})),o(`[${e}]: Add ${u.id} to JobQueue`),o(`[${e}]: JobQueue length=${c.length}`),l()}));return{addWorker:r=>(t[r.id]=r,o(`[${e}]: Add ${r.id}`),o(`[${e}]: Number of workers=${s()}`),l(),r.id),addJob:async(t,...r)=>{if(0===s())throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(t,r)},terminate:async()=>{Object.keys(t).forEach((async e=>{await t[e].terminate()})),c=[]},getQueueLen:()=>c.length,getNumWorkers:s}}},8055:e=>{e.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}},9461:(e,t,r)=>{r(4926);const n=r(7836),o=r(4603),a=r(487),i=r(5192),c=r(5148),s=r(7027),{setLogging:l}=r(4937);e.exports={languages:i,OEM:c,PSM:s,createScheduler:n,createWorker:o,setLogging:l,...a}}}]);
//# sourceMappingURL=543.js.map