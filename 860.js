(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[860],{4146:e=>{e.exports=function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0}},4926:e=>{var t=function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),s=new x(o||[]);return n(i,"_invoke",{value:A(e,r,s)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",g="completed",y={};function m(){}function w(){}function v(){}var L={};l(L,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(N([])));E&&E!==r&&o.call(E,i)&&(L=E);var S=v.prototype=m.prototype=Object.create(L);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(n,a,i,s){var c=d(e[n],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var a;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return a=a?a.then(n,n):n()}})}function A(e,t,r){var o=h;return function(n,a){if(o===f)throw new Error("Generator is already running");if(o===g){if("throw"===n)throw a;return P()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var c=d(e,t,r);if("normal"===c.type){if(o=r.done?g:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function _(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var a=d(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function N(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return w.prototype=v,n(S,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:w,configurable:!0}),w.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},k(O.prototype),l(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new O(u(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(S),l(S,c,"Generator"),l(S,i,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;R(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:N(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},1258:(e,t,r)=>{const o=r(7136);e.exports={recognize:async(e,t,r)=>{const n=await o(t,1,r);return n.recognize(e).finally((async()=>{await n.terminate()}))},detect:async(e,t)=>{const r=await o("osd",0,t);return r.detect(e).finally((async()=>{await r.terminate()}))}}},1117:e=>{e.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},114:e=>{e.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},3053:e=>{e.exports={workerBlobURL:!0,logger:()=>{}}},5805:e=>{e.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},3295:(e,t,r)=>{const o=r(299);let n=0;e.exports=({id:e,action:t,payload:r={}})=>{let a=e;return void 0===a&&(a=o("Job",n),n+=1),{id:a,action:t,payload:r}}},1865:function(e,t,r){const o=r(3295),{log:n}=r(508),a=r(299);let i=0;e.exports=()=>{const e=a("Scheduler",i),t={},r={};let s=[];i+=1;const c=()=>Object.keys(t).length,l=()=>{if(0!==s.length){const e=Object.keys(t);for(let o=0;o<e.length;o+=1)if(void 0===r[e[o]]){s[0](t[e[o]]);break}}},u=(t,a)=>new Promise(((i,c)=>{const u=o({action:t,payload:a});s.push((async e=>{s.shift(),r[e.id]=u;try{i(await e[t].apply(this,[...a,u.id]))}catch(e){c(e)}finally{delete r[e.id],l()}})),n(`[${e}]: Add ${u.id} to JobQueue`),n(`[${e}]: JobQueue length=${s.length}`),l()}));return{addWorker:r=>(t[r.id]=r,n(`[${e}]: Add ${r.id}`),n(`[${e}]: Number of workers=${c()}`),l(),r.id),addJob:async(t,...r)=>{if(0===c())throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(t,r)},terminate:async()=>{Object.keys(t).forEach((async e=>{await t[e].terminate()})),s=[]},getQueueLen:()=>s.length,getNumWorkers:c}}},7136:(e,t,r)=>{const o=r(4216),n=r(4899),a=r(3295),{log:i}=r(508),s=r(299),c=r(1117),{defaultOptions:l,spawnWorker:u,terminateWorker:d,onMessage:h,loadImage:p,send:f}=r(540);let g=0;e.exports=async(e="eng",t=c.LSTM_ONLY,r={},y={})=>{const m=s("Worker",g),{logger:w,errorHandler:v,...L}=o({...l,...r}),b={},E={},S="string"==typeof e?e.split("+"):e;let k=t,O=y;const A=[c.DEFAULT,c.LSTM_ONLY].includes(t)&&!L.legacyCore;let _,T;const R=new Promise(((e,t)=>{T=e,_=t}));let x=u(L);x.onerror=e=>{_(e.message)},g+=1;const N=(e,t)=>{b[e]=t},P=(e,t)=>{E[e]=t},I=({id:e,action:t,payload:r})=>new Promise(((o,n)=>{i(`[${m}]: Start ${e}, action=${t}`),N(t,o),P(t,n),f(x,{workerId:m,jobId:e,action:t,payload:r})})),j=(e,t)=>I(a({id:t,action:"loadLanguage",payload:{langs:e,options:{langPath:L.langPath,dataPath:L.dataPath,cachePath:L.cachePath,cacheMethod:L.cacheMethod,gzip:L.gzip,lstmOnly:[c.LSTM_ONLY,c.TESSERACT_LSTM_COMBINED].includes(k)&&!L.legacyLang}}})),M=(e,t,r,o)=>I(a({id:o,action:"initialize",payload:{langs:e,oem:t,config:r}}));h(x,(({workerId:e,jobId:t,status:r,action:o,data:a})=>{if("resolve"===r){i(`[${e}]: Complete ${t}`);let r=a;"recognize"===o?r=n(a):"getPDF"===o&&(r=Array.from({...a,length:Object.keys(a).length})),b[o]({jobId:t,data:r})}else if("reject"===r){if(E[o](a),"load"===o&&_(a),!v)throw Error(a);v(a)}else"progress"===r&&w({...a,userJobId:t})}));const C={id:m,worker:x,setResolve:N,setReject:P,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(e,t,r)=>I(a({id:r,action:"FS",payload:{method:"writeFile",args:[e,t]}})),readText:(e,t)=>I(a({id:t,action:"FS",payload:{method:"readFile",args:[e,{encoding:"utf8"}]}})),removeFile:(e,t)=>I(a({id:t,action:"FS",payload:{method:"unlink",args:[e]}})),FS:(e,t,r)=>I(a({id:r,action:"FS",payload:{method:e,args:t}})),loadLanguage:()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),initialize:()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),reinitialize:(e="eng",t,r,o)=>{if(A&&[c.TESSERACT_ONLY,c.TESSERACT_LSTM_COMBINED].includes(t))throw Error("Legacy model requested but code missing.");const n=t||k;k=n;const a=r||O;O=a;const i=("string"==typeof e?e.split("+"):e).filter((e=>!S.includes(e)));return S.push(...i),i.length>0?j(i,o).then((()=>M(e,n,a,o))):M(e,n,a,o)},setParameters:(e={},t)=>I(a({id:t,action:"setParameters",payload:{params:e}})),recognize:async(e,t={},r={blocks:!0,text:!0,hocr:!0,tsv:!0},o)=>I(a({id:o,action:"recognize",payload:{image:await p(e),options:t,output:r}})),getPDF:(e="Tesseract OCR Result",t=!1,r)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),I(a({id:r,action:"getPDF",payload:{title:e,textonly:t}}))),detect:async(e,t)=>{if(A)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return I(a({id:t,action:"detect",payload:{image:await p(e)}}))},terminate:async()=>(null!==x&&(d(x),x=null),Promise.resolve())};return I(a({id:undefined,action:"load",payload:{options:{lstmOnly:A,corePath:L.corePath,logging:L.logging}}})).then((()=>j(e))).then((()=>M(e,t,y))).then((()=>T(C))).catch((()=>{})),R}},9860:(e,t,r)=>{r(4926);const o=r(1865),n=r(7136),a=r(1258),i=r(5805),s=r(1117),c=r(114),{setLogging:l}=r(508);e.exports={languages:i,OEM:s,PSM:c,createScheduler:o,createWorker:n,setLogging:l,...a}},4899:e=>{e.exports=e=>{const t=[],r=[],o=[],n=[],a=[];return e.blocks&&e.blocks.forEach((i=>{i.paragraphs.forEach((t=>{t.lines.forEach((r=>{r.words.forEach((o=>{o.symbols.forEach((n=>{a.push({...n,page:e,block:i,paragraph:t,line:r,word:o})})),n.push({...o,page:e,block:i,paragraph:t,line:r})})),o.push({...r,page:e,block:i,paragraph:t})})),r.push({...t,page:e,block:i})})),t.push({...i,page:e})})),{...e,blocks:t,paragraphs:r,lines:o,words:n,symbols:a}}},5945:(e,t,r)=>{const o=r(4146);e.exports=e=>{const t={};return"undefined"!=typeof WorkerGlobalScope?t.type="webworker":o()?t.type="electron":"object"==typeof document?t.type="browser":"object"==typeof process&&(t.type="node"),void 0===e?t:t[e]}},299:e=>{e.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`},508:function(e,t){let r=!1;t.logging=r,t.setLogging=e=>{r=e},t.log=(...e)=>r?console.log.apply(this,e):null},4216:(e,t,r)=>{const o="browser"===r(5945)("type")?e=>new URL(e,window.location.href).href:e=>e;e.exports=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach((r=>{e[r]&&(t[r]=o(t[r]))})),t}},6555:(e,t,r)=>{const o=r(4034).rE,n=r(3053);e.exports={...n,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${o}/dist/worker.min.js`}},540:(e,t,r)=>{const o=r(6555),n=r(8125),a=r(3289),i=r(5328),s=r(4552),c=r(645);e.exports={defaultOptions:o,spawnWorker:n,terminateWorker:a,onMessage:i,send:s,loadImage:c}},645:e=>{const t=e=>new Promise(((t,r)=>{const o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=({target:{error:{code:e}}})=>{r(Error(`File could not be read! Code=${e}`))},o.readAsArrayBuffer(e)})),r=async e=>{let o=e;if(void 0===e)return"undefined";if("string"==typeof e)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))o=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const t=await fetch(e);o=await t.arrayBuffer()}else if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)"IMG"===e.tagName&&(o=await r(e.src)),"VIDEO"===e.tagName&&(o=await r(e.poster)),"CANVAS"===e.tagName&&await new Promise((r=>{e.toBlob((async e=>{o=await t(e),r()}))}));else if("undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas){const r=await e.convertToBlob();o=await t(r)}else(e instanceof File||e instanceof Blob)&&(o=await t(e));return new Uint8Array(o)};e.exports=r},5328:e=>{e.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}},4552:e=>{e.exports=async(e,t)=>{e.postMessage(t)}},8125:e=>{e.exports=({workerPath:e,workerBlobURL:t})=>{let r;if(Blob&&URL&&t){const t=new Blob([`importScripts("${e}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(t))}else r=new Worker(e);return r}},3289:e=>{e.exports=e=>{e.terminate()}},4034:e=>{"use strict";e.exports={rE:"5.0.4"}}}]);
//# sourceMappingURL=860.js.map