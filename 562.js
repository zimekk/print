(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[562],{7562:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>A});var o=a(4344);const n=function(){function t(t,e){if(t&&t.strokeStyle&&e&&e.width&&e.height){var a=document.createElement("canvas");a.width=Math.round(e.width),a.height=Math.round(e.height);var o=a.getContext("2d");o.drawImage(e,0,0,a.width,a.height);var n=document.createElement("canvas");n.width=t.canvas.width,n.height=t.canvas.height;var s=n.getContext("2d");this.ctxd=t,this.cvso=a,this.ctxo=o,this.ctxt=s}}return t.prototype.draw=function(t){for(var e=t.topLeftX,a=t.topLeftY,o=t.topRightX,n=t.topRightY,s=t.bottomRightX,r=t.bottomRightY,i=t.bottomLeftX,c=t.bottomLeftY,h=[Math.sqrt(Math.pow(e-o,2)+Math.pow(a-n,2)),Math.sqrt(Math.pow(o-s,2)+Math.pow(n-r,2)),Math.sqrt(Math.pow(s-i,2)+Math.pow(r-c,2)),Math.sqrt(Math.pow(i-e,2)+Math.pow(c-a,2))],l=this.cvso.width,d=this.cvso.height,p=0,m=0,f=0,u=0;u<4;u++){var v;(v=u%2?h[u]/l:h[u]/d)>m&&(p=u,m=v),0==h[u]&&f++}if(!(f>1)){var g=this.ctxo,w=this.ctxt;if(w.clearRect(0,0,w.canvas.width,w.canvas.height),p%2==0){(_=this.create_canvas_context(l,10)).globalCompositeOperation="copy";for(var b=_.canvas,M=0;M<d;M+=2){var x=e+(i-e)*(E=M/d),A=a+(c-a)*E,C=o+(s-o)*E,Y=n+(r-n)*E,L=Math.atan((Y-A)/(C-x)),R=Math.sqrt(Math.pow(C-x,2)+Math.pow(Y-A,2))/l;_.setTransform(1,0,0,1,0,-M),_.drawImage(g.canvas,0,0),w.translate(x,A),w.rotate(L),w.scale(R,R),w.drawImage(b,0,0),w.setTransform(1,0,0,1,0,0)}}else if(p%2==1){var _;(_=this.create_canvas_context(10,d)).globalCompositeOperation="copy",b=_.canvas;for(var y=0;y<l;y+=2){var E;x=e+(o-e)*(E=y/l),A=a+(n-a)*E,C=i+(s-i)*E,Y=c+(r-c)*E,L=Math.atan((x-C)/(Y-A)),R=Math.sqrt(Math.pow(C-x,2)+Math.pow(Y-A,2))/d,_.setTransform(1,0,0,1,-y,0),_.drawImage(g.canvas,0,0),w.translate(x,A),w.rotate(L),w.scale(R,R),w.drawImage(b,0,0),w.setTransform(1,0,0,1,0,0)}}this.ctxd.save(),this.ctxd.drawImage(w.canvas,0,0),this._applyMask(this.ctxd,t),this.ctxd.restore()}},t.prototype.create_canvas_context=function(t,e){var a=document.createElement("canvas");return a.width=t,a.height=e,a.getContext("2d")},t.prototype._applyMask=function(t,e){t.beginPath(),t.moveTo(e.topLeftX,e.topLeftY),t.lineTo(e.topRightX,e.topRightY),t.lineTo(e.bottomRightX,e.bottomRightY),t.lineTo(e.bottomLeftX,e.bottomLeftY),t.closePath(),t.globalCompositeOperation="destination-in",t.fill(),t.globalCompositeOperation="source-over"},t}();var s=a(5388),r=a.n(s),i=a(1125),c=a.n(i),h=a(5687),l=a.n(h),d=a(8644),p=a.n(d),m=a(9552),f=a.n(m),u=a(3325),v=a.n(u),g=a(4029),w=a.n(g),b={};b.styleTagTransform=v(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),r()(w(),b);const M=w()&&w().locals?w().locals:void 0;function x(){const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{let e=new Image;e.onload=()=>{let a=t.current;if(null===a)return void alert("Canvas not loaded");let o=a.getContext("2d");null!==o?new n(o,e).draw({topLeftX:30,topLeftY:30,topRightX:e.width-50,topRightY:50,bottomRightX:e.width-70,bottomRightY:e.height-30,bottomLeftX:10,bottomLeftY:e.height}):alert("Context not loaded")},e.src=a(7154).A}),[]),o.createElement("canvas",{ref:t,width:512,height:512})}function A(){return o.createElement("section",{className:M.Section},o.createElement("h2",null,"Crop"),o.createElement(x,null))}},4029:(t,e,a)=>{var o=a(3316),n=a(3484)(o);n.push([t.id,".sIPZuWzH_YWFcNouLZ84{display:flex;flex-direction:column}.sIPZuWzH_YWFcNouLZ84 nav a{margin:1em}","",{version:3,sources:["webpack://./src/containers/Crop/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAEE,4BACE,UAAA",sourcesContent:[".Section {\n  display: flex;\n  flex-direction: column;\n  nav {\n    a {\n      margin: 1em;\n    }\n  }\n}\n"],sourceRoot:""}]),n.locals={Section:"sIPZuWzH_YWFcNouLZ84"},t.exports=n},7154:(t,e,a)=>{"use strict";a.d(e,{A:()=>o});const o=a.p+"f568d2fd9850ba5acda145872f42b371.jpg"}}]);
//# sourceMappingURL=562.js.map