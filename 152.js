(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[152],{5284:(e,t,n)=>{"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{clsx:()=>o,default:()=>i});const i=o},7265:(e,t,n)=>{"use strict";var r=n(3034);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5821:(e,t,n)=>{e.exports=n(7265)()},3034:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},10:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(2155)),o=f(n(5821)),i=f(n(316)),a=f(n(5284)),s=n(5338),u=n(4119),l=n(7065),c=f(n(3005)),d=f(n(2581));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m extends r.Component{static getDerivedStateFromProps(e,t){let{position:n}=e,{prevPropsPosition:r}=t;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(e){super(e),g(this,"onDragStart",((e,t)=>{if((0,d.default)("Draggable: onDragStart: %j",t),!1===this.props.onStart(e,(0,u.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),g(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",t);const n=(0,u.createDraggableData)(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,i]=(0,u.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=i,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(e,n))return!1;this.setState(r)})),g(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,u.createDraggableData)(this,t)))return!1;(0,d.default)("Draggable: onDragStop: %j",t);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:i.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:n,defaultPosition:o,defaultClassName:i,defaultClassNameDragging:l,defaultClassNameDragged:d,position:f,positionOffset:p,scale:g,...m}=this.props;let y={},v=null;const b=!Boolean(f)||this.state.dragging,w=f||o,S={x:(0,u.canDragX)(this)&&b?this.state.x:w.x,y:(0,u.canDragY)(this)&&b?this.state.y:w.y};this.state.isElementSVG?v=(0,s.createSVGTransform)(S,p):y=(0,s.createCSSTransform)(S,p);const D=(0,a.default)(n.props.className||"",i,{[l]:this.state.dragging,[d]:this.state.dragged});return r.createElement(c.default,h({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:D,style:{...n.props.style,...y},transform:v}))}}t.default=m,g(m,"displayName","Draggable"),g(m,"propTypes",{...c.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),g(m,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},3005:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(2155)),o=c(n(5821)),i=c(n(316)),a=n(5338),s=n(4119),u=n(7065),l=c(n(2581));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},h={start:"mousedown",move:"mousemove",stop:"mouseup"};let g=h;class m extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const r=(0,a.getTouchIdentifier)(e);this.touchIdentifier=r;const o=(0,s.getControlPosition)(e,r,this);if(null==o)return;const{x:i,y:u}=o,c=(0,s.createCoreData)(this,i,u);(0,l.default)("DraggableCore: handleDragStart: %j",c),(0,l.default)("calling",this.props.onStart),!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(n),this.dragging=!0,this.lastX=i,this.lastY=u,(0,a.addEvent)(n,g.move,this.handleDrag),(0,a.addEvent)(n,g.stop,this.handleDragStop))})),f(this,"handleDrag",(e=>{const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=(0,s.snapToGrid)(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);if((0,l.default)("DraggableCore: handleDrag: %j",o),!1!==this.props.onDrag(e,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(e){const t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}})),f(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=(0,s.snapToGrid)(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);if(!1===this.props.onStop(e,o)||!1===this.mounted)return!1;const i=this.findDOMNode();i&&this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(i.ownerDocument),(0,l.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,i&&((0,l.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(i.ownerDocument,g.move,this.handleDrag),(0,a.removeEvent)(i.ownerDocument,g.stop,this.handleDragStop))})),f(this,"onMouseDown",(e=>(g=h,this.handleDragStart(e)))),f(this,"onMouseUp",(e=>(g=h,this.handleDragStop(e)))),f(this,"onTouchStart",(e=>(g=p,this.handleDragStart(e)))),f(this,"onTouchEnd",(e=>(g=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,a.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,a.removeEvent)(t,h.move,this.handleDrag),(0,a.removeEvent)(t,p.move,this.handleDrag),(0,a.removeEvent)(t,h.stop,this.handleDragStop),(0,a.removeEvent)(t,p.stop,this.handleDragStop),(0,a.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:i.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=m,f(m,"displayName","DraggableCore"),f(m,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),f(m,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},6879:(e,t,n)=>{"use strict";const{default:r,DraggableCore:o}=n(10);e.exports=r,e.exports.default=r,e.exports.DraggableCore=o},5338:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=l,t.addEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&l(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const n=u(e,t,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:n}},t.createSVGTransform=function(e,t){return u(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.getTranslation=u,t.innerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingTop),t-=(0,r.int)(n.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingLeft),t-=(0,r.int)(n.paddingRight),t},t.matchesSelector=s,t.matchesSelectorAndParentsTo=function(e,t,n){let r=e;do{if(s(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){const r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-r.left)/n,y:(e.clientY+t.scrollTop-r.top)/n}},t.outerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderTopWidth),t+=(0,r.int)(n.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderLeftWidth),t+=(0,r.int)(n.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var r=n(7065),o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(4727));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}let a="";function s(e,t){return a||(a=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[a])&&e[a](t)}function u(e,t,n){let{x:r,y:o}=e,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const e="".concat("string"==typeof t.x?t.x:t.x+n),r="".concat("string"==typeof t.y?t.y:t.y+n);i="translate(".concat(e,", ").concat(r,")")+i}return i}function l(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},4727:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let e=0;e<n.length;e++)if(o(t,n[e])in r)return n[e];return""}function o(e,t){return t?"".concat(t).concat(function(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}t.default=r()},2581:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},4119:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){const o=!(0,r.isNum)(e.lastX),a=i(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}},t.createDraggableData=function(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:a}=e.props;a="string"==typeof a?a:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(a);const s=i(e);if("string"==typeof a){const{ownerDocument:e}=s,t=e.defaultView;let n;if(n="parent"===a?s.parentNode:e.querySelector(a),!(n instanceof t.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');const i=n,u=t.getComputedStyle(s),l=t.getComputedStyle(i);a={left:-s.offsetLeft+(0,r.int)(l.paddingLeft)+(0,r.int)(u.marginLeft),top:-s.offsetTop+(0,r.int)(l.paddingTop)+(0,r.int)(u.marginTop),right:(0,o.innerWidth)(i)-(0,o.outerWidth)(s)-s.offsetLeft+(0,r.int)(l.paddingRight)-(0,r.int)(u.marginRight),bottom:(0,o.innerHeight)(i)-(0,o.outerHeight)(s)-s.offsetTop+(0,r.int)(l.paddingBottom)-(0,r.int)(u.marginBottom)}}return(0,r.isNum)(a.right)&&(t=Math.min(t,a.right)),(0,r.isNum)(a.bottom)&&(n=Math.min(n,a.bottom)),(0,r.isNum)(a.left)&&(t=Math.max(t,a.left)),(0,r.isNum)(a.top)&&(n=Math.max(n,a.top)),[t,n]},t.getControlPosition=function(e,t,n){const r="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!r)return null;const a=i(n),s=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,o.offsetXYFromParent)(r||e,s,n.props.scale)},t.snapToGrid=function(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]};var r=n(7065),o=n(5338);function i(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},7065:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}},6152:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(2155),o=(0,r.createContext)(),i=(o.Consumer,o.Provider),a="opencv-react",s={wasmBinaryFile:"opencv_js.wasm",usingWasm:!0},u=function(e){var t=e.openCvPath,n=e.children,o=e.onLoad,u=(0,r.useState)(!1),l=u[0],c=u[1],d=(0,r.useCallback)((function(){o&&o(window.cv),c(!0)}),[]);(0,r.useEffect)((function(){var e;document.getElementById(a)||window.cv?c(!0):(s.onRuntimeInitialized=d,window.Module=s,document.body.appendChild(((e=document.createElement("script")).id=a,e.src=t||"https://docs.opencv.org/3.4.13/opencv.js",e.nonce=!0,e.defer=!0,e.async=!0,e)))}),[t,d]);var f=(0,r.useMemo)((function(){return{loaded:l,cv:window.cv}}),[l]);return(0,r.createElement)(i,{value:f},n)},l=n(5821),c=n.n(l),d=n(6879),f=n.n(d);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var h=function(e,t,n){return{width:e,height:e,backgroundColor:t,border:n,borderRadius:"100%",position:"absolute",zIndex:1001}},g=function(e){var t=e.cropPoints,n=e.pointArea,o=e.defaultPosition,i=e.pointSize,a=e.pointBgColor,s=void 0===a?"transparent":a,u=e.pointBorder,l=void 0===u?"4px solid #3cabe2":u,c=e.onStop,d=e.onDrag,g=e.bounds,m=(0,r.useCallback)((function(e,t){d(p({},t,{x:t.x+i/2,y:t.y+i/2}),n)}),[d]),y=(0,r.useCallback)((function(e,r){c(p({},r,{x:r.x+i/2,y:r.y+i/2}),n,t)}),[d,t]);return r.createElement(f(),{bounds:g,defaultPosition:o,position:{x:t[n].x-i/2,y:t[n].y-i/2},onDrag:m,onStop:y},r.createElement("div",{style:h(i,s,l)}))};g.propTypes={cropPoints:c().shape({"left-top":c().shape({x:c().number,y:c().number}).isRequired,"right-top":c().shape({x:c().number,y:c().number}).isRequired,"right-bottom":c().shape({x:c().number,y:c().number}).isRequired,"left-bottom":c().shape({x:c().number,y:c().number}).isRequired}),pointArea:c().oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:c().shape({x:c().number,y:c().number}),pointSize:c().number,pointBgColor:c().string,pointBorder:c().string,onStop:c().func,onDrag:c().func};var m=function(e){var t=e.previewDims,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["previewDims"]);return r.createElement(r.Fragment,null,r.createElement(g,p({pointArea:"left-top",defaultPosition:{x:0,y:0}},n)),r.createElement(g,p({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},n)),r.createElement(g,p({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},n)),r.createElement(g,p({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},n)))};m.propTypes={previewDims:c().shape({ratio:c().number,width:c().number,height:c().number})};var y=function(e){var t=e.cropPoints,n=e.previewDims,o=e.lineWidth,i=void 0===o?3:o,a=e.lineColor,s=void 0===a?"#3cabe2":a,u=e.pointSize,l=(0,r.useRef)(),c=(0,r.useCallback)((function(){l.current.getContext("2d").clearRect(0,0,n.width,n.height)}),[l.current,n]),d=(0,r.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,n){return[].concat(e,[t[n]])}),[])}),[t]),f=(0,r.useCallback)((function(e){var t=e[0],n=e[1],r=e[2],o=e[3],a=l.current.getContext("2d");a.lineWidth=i,a.strokeStyle=s,a.beginPath(),a.moveTo(t.x+u/2,t.y),a.lineTo(n.x-u/2,n.y),a.moveTo(n.x,n.y+u/2),a.lineTo(r.x,r.y-u/2),a.moveTo(r.x-u/2,r.y),a.lineTo(o.x+u/2,o.y),a.moveTo(o.x,o.y-u/2),a.lineTo(t.x,t.y+u/2),a.closePath(),a.stroke()}),[l.current]);return(0,r.useEffect)((function(){if(t&&l.current){c();var e=d();f(e)}}),[t,l.current]),r.createElement("canvas",{ref:l,style:{position:"absolute",zIndex:5},width:n.width,height:n.height})};y.propTypes={previewDims:c().shape({ratio:c().number,width:c().number,height:c().number}),cropPoints:c().shape({"left-top":c().shape({x:c().number,y:c().number}).isRequired,"right-top":c().shape({x:c().number,y:c().number}).isRequired,"right-bottom":c().shape({x:c().number,y:c().number}).isRequired,"left-bottom":c().shape({x:c().number,y:c().number}).isRequired}),lineColor:c().string,lineWidth:c().number,pointSize:c().number};var v,b=function(e){return{width:e.width,height:e.height}},w={width:0,height:0},S=function(e){var t,n,i,a,s,u,l=e.image,c=e.onDragStop,d=e.onChange,f=e.cropperRef,h=e.pointSize,g=void 0===h?30:h,S=e.lineWidth,D=e.pointBgColor,x=e.pointBorder,P=e.lineColor,C=e.maxWidth,E=e.maxHeight,T=(0,r.useContext)(o),O=T.loaded,M=T.cv,R=(0,r.useRef)(),N=(0,r.useRef)(),j=(0,r.useRef)(),k=(0,r.useState)(),_=k[0],A=k[1],B=(0,r.useState)(),Y=B[0],I=B[1],W=(0,r.useState)(!1),X=W[0],L=W[1],H=(0,r.useState)("crop"),z=H[0],U=H[1];(0,r.useImperativeHandle)(f,(function(){return{backToCrop:function(){U("crop")},done:function(e){void 0===e&&(e={});try{return Promise.resolve(new Promise((function(t){L(!0),function(e,t,n,r,o){var i,a,s=e.imread(t),u=n["right-bottom"],l=n["left-bottom"],c=n["right-top"],d=n["left-top"],f=[d,c,u,l].map((function(e){return[e.x/r,e.y/r]})),p=Math.max(u.x-l.x,c.x-d.x)/r,h=Math.max(l.y-d.y,u.y-c.y)/r,g=[[0,0],[p-1,0],[p-1,h-1],[0,h-1]],m=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,f)),y=e.matFromArray(4,1,e.CV_32FC2,(a=[]).concat.apply(a,g)),v=e.getPerspectiveTransform(m,y),b=new e.Size(p,h);e.warpPerspective(s,s,v,b,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,s),s.delete(),m.delete(),y.delete(),v.delete(),o()}(M,R.current,Y,v,F),function(e,t,n){try{var r=p({blur:!1,th:!0,thMode:e.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},n),o=e.imread(t);if(r.grayScale&&e.cvtColor(o,o,e.COLOR_RGBA2GRAY,0),r.blur){var i=new e.Size(5,5);e.GaussianBlur(o,o,i,0,0,e.BORDER_DEFAULT)}return r.th&&(r.grayScale?e.adaptiveThreshold(o,o,r.thMax,r.thMode,e.THRESH_BINARY,r.thBlockSize,r.thMeanCorrection):(o.convertTo(o,-1,1,60),e.threshold(o,o,170,255,e.THRESH_BINARY))),e.imshow(t,o),Promise.resolve()}catch(e){return Promise.reject(e)}}(M,R.current,e.filterCvParams),e.preview&&U("preview"),R.current.toBlob((function(e){e.name=l.name,t(e),L(!1)}),l.type)})))}catch(e){return Promise.reject(e)}}}})),(0,r.useEffect)((function(){"preview"===z&&V()}),[z]);var F=function(){var e=function(e,t,n,r){var o=e/t,i=n||window.innerWidth,a=r||window.innerHeight,s={width:i,height:Math.round(i/o),ratio:o};return s.height>a&&(s.height=a,s.width=Math.round(a*o)),s}(R.current.width,R.current.height,C,E);A(e),N.current.width=e.width,N.current.height=e.height,v=e.width/R.current.width},V=function(e){var t=e||M.imread(R.current),n=new M.Mat,r=new M.Size(0,0);M.resize(t,n,r,v,v,M.INTER_AREA),M.imshow(N.current,n),t.delete(),n.delete()},G=function(){j.current.getContext("2d").clearRect(0,0,j.current.width,j.current.height)};(0,r.useEffect)((function(){d&&d(p({},Y,{loading:X}))}),[Y,X]),(0,r.useEffect)((function(){l&&N.current&&O&&"crop"===z?function(){try{return Promise.resolve((e=l,e instanceof File?new Promise((function(t,n){var r=new FileReader;r.onload=function(e){t(r.result)},r.onerror=function(e){n(e)},r.readAsDataURL(e)})):"string"==typeof e?Promise.resolve(e):void 0)).then((function(e){return Promise.resolve(function(e){return new Promise((function(t,n){var r,o,i,a=document.createElement("img");a.onload=function(){try{return R.current=document.createElement("canvas"),R.current.width=a.width,R.current.height=a.height,R.current.getContext("2d").drawImage(a,0,0),w.width=R.current.width,w.height=R.current.height,F(),t(),Promise.resolve()}catch(e){return Promise.reject(e)}},r=e,o=window.location,null===(i=r.match(/^(\w+:)\/\/([^:/?#]*):?(\d*)/i))||i[1]===o.protocol&&i[2]===o.hostname&&i[3]===o.port||(a.crossOrigin="anonymous"),a.src=e}))}(e)).then((function(){V(),function(){var e=M.imread(R.current),t=new M.Size(5,5);M.cvtColor(e,e,M.COLOR_RGBA2GRAY,0),M.GaussianBlur(e,e,t,0,0,M.BORDER_DEFAULT),M.Canny(e,e,75,200),M.threshold(e,e,120,200,M.THRESH_BINARY);var n=new M.MatVector,r=new M.Mat;M.findContours(e,n,r,M.RETR_CCOMP,M.CHAIN_APPROX_SIMPLE);var o=M.boundingRect(e);e.delete(),r.delete(),n.delete(),Object.keys(o).forEach((function(e){o[e]=o[e]*v}));var i={"left-top":{x:o.x,y:o.y},"right-top":{x:o.x+o.width,y:o.y},"right-bottom":{x:o.x+o.width,y:o.y+o.height},"left-bottom":{x:o.x,y:o.y+o.height}};I(i)}(),L(!1)}))}))}catch(e){return Promise.reject(e)}var e}():L(!0)}),[l,N.current,O,z]);var q=(0,r.useCallback)((function(e,t){var n=e.x,r=e.y,o=j.current.getContext("2d");G(),o.drawImage(N.current,n-(g-10),r-(g-10),g+5,g+5,n+10,r-90,g+20,g+20),I((function(e){var o;return p({},e,((o={})[t]={x:n,y:r},o))}))}),[]),K=(0,r.useCallback)((function(e,t,n){var r,o=e.x,i=e.y;G(),I((function(e){var n;return p({},e,((n={})[t]={x:o,y:i},n))})),c&&c(p({},n,((r={})[t]={x:o,y:i},r)))}),[]);return r.createElement("div",{style:p({position:"relative"},_&&b(_))},_&&"crop"===z&&Y&&r.createElement(r.Fragment,null,r.createElement(m,{pointSize:g,pointBgColor:D,pointBorder:x,cropPoints:Y,previewDims:_,onDrag:q,onStop:K,bounds:{left:(null==N||null===(t=N.current)||void 0===t?void 0:t.offsetLeft)-g/2,top:(null==N||null===(n=N.current)||void 0===n?void 0:n.offsetTop)-g/2,right:(null==N||null===(i=N.current)||void 0===i?void 0:i.offsetLeft)-g/2+(null==N||null===(a=N.current)||void 0===a?void 0:a.offsetWidth),bottom:(null==N||null===(s=N.current)||void 0===s?void 0:s.offsetTop)-g/2+(null==N||null===(u=N.current)||void 0===u?void 0:u.offsetHeight)}}),r.createElement(y,{previewDims:_,cropPoints:Y,lineWidth:S,lineColor:P,pointSize:g}),r.createElement("canvas",{style:{position:"absolute",zIndex:5,pointerEvents:"none"},width:_.width,height:_.height,ref:j})),r.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:N}))};S.propTypes={image:c().object.isRequired,onDragStop:c().func,onChange:c().func,cropperRef:c().shape({current:c().shape({done:c().func.isRequired,backToCrop:c().func.isRequired})}),pointSize:c().number,lineWidth:c().number,pointBgColor:c().string,pointBorder:c().string,lineColor:c().string};var D=r.forwardRef((function(e,t){return e.image?r.createElement(u,{openCvPath:e.openCvPath},r.createElement(S,p({},e,{cropperRef:t}))):null}));D.propTypes={openCvPath:c().string};const x=D}}]);
//# sourceMappingURL=152.js.map