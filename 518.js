(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[518],{6277:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{clsx:()=>o,default:()=>a});const a=o},8262:(e,t,r)=>{"use strict";var n=r(3586);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},3980:(e,t,r)=>{e.exports=r(8262)()},3586:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1997:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(2784)),a=h(r(3980)),i=h(r(8316)),u=h(r(6277)),l=r(4688),c=r(3585),s=r(136),f=h(r(3816)),d=h(r(1177)),p=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function h(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function O(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(g,e);var t,r,n,a,s,h=(a=g,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(a);if(s){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function g(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),x(D(t=h.call(this,e)),"onDragStart",(function(e,r){if((0,d.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,c.createDraggableData)(D(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),x(D(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",r);var n,o,a=(0,c.createDraggableData)(D(t),r),i={x:a.x,y:a.y};if(t.props.bounds){var u=i.x,l=i.y;i.x+=t.state.slackX,i.y+=t.state.slackY;var s=(n=(0,c.getBoundPosition)(D(t),i.x,i.y),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(n,o)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],p=s[1];i.x=f,i.y=p,i.slackX=t.state.slackX+(u-i.x),i.slackY=t.state.slackY+(l-i.y),a.x=i.x,a.y=i.y,a.deltaX=i.x-t.state.x,a.deltaY=i.y-t.state.y}if(!1===t.props.onDrag(e,a))return!1;t.setState(i)})),x(D(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,c.createDraggableData)(D(t),r)))return!1;(0,d.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:v({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=g,n=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:v({},r)})}}],(r=[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,s=t.defaultClassNameDragged,d=t.position,h=t.positionOffset,g=(t.scale,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,p)),m={},b=null,w=!Boolean(d)||this.state.dragging,S=d||n,O={x:(0,c.canDragX)(this)&&w?this.state.x:S.x,y:(0,c.canDragY)(this)&&w?this.state.y:S.y};this.state.isElementSVG?b=(0,l.createSVGTransform)(O,h):m=(0,l.createCSSTransform)(O,h);var D=(0,u.default)(r.props.className||"",a,(x(e={},i,this.state.dragging),x(e,s,this.state.dragged),e));return o.createElement(f.default,y({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:D,style:v(v({},r.props.style),m),transform:b}))}}])&&w(t.prototype,r),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),g}(o.Component);t.default=C,x(C,"displayName","Draggable"),x(C,"propTypes",v(v({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),x(C,"defaultProps",v(v({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},3816:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(2784)),a=f(r(3980)),i=f(r(8316)),u=r(4688),l=r(3585),c=r(136),s=f(r(1177));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={start:"touchstart",move:"touchmove",stop:"touchend"},D={start:"mousedown",move:"mousemove",stop:"mouseup"},P=D,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(f,e);var t,r,n,a,c=(n=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(a){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function f(){var e;g(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return S(b(e=c.call.apply(c,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),S(b(e),"mounted",!1),S(b(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,u.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,u.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,u.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,l.getControlPosition)(t,o,b(e));if(null!=a){var i=a.x,c=a.y,f=(0,l.createCoreData)(b(e),i,c);(0,s.default)("DraggableCore: handleDragStart: %j",f),(0,s.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,u.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:i,lastY:c}),(0,u.addEvent)(n,P.move,e.handleDrag),(0,u.addEvent)(n,P.stop,e.handleDragStop))}}})),S(b(e),"handleDrag",(function(t){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,b(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,u=p((0,l.snapToGrid)(e.props.grid,a,i),2);if(a=u[0],i=u[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var c=(0,l.createCoreData)(b(e),n,o);if((0,s.default)("DraggableCore: handleDrag: %j",c),!1!==e.props.onDrag(t,c)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),S(b(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,b(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX||0,i=o-e.state.lastY||0,c=p((0,l.snapToGrid)(e.props.grid,a,i),2);a=c[0],i=c[1],n=e.state.lastX+a,o=e.state.lastY+i}var f=(0,l.createCoreData)(b(e),n,o);if(!1===e.props.onStop(t,f)||!1===e.mounted)return!1;var d=e.findDOMNode();d&&e.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(d.ownerDocument),(0,s.default)("DraggableCore: handleDragStop: %j",f),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),d&&((0,s.default)("DraggableCore: Removing handlers"),(0,u.removeEvent)(d.ownerDocument,P.move,e.handleDrag),(0,u.removeEvent)(d.ownerDocument,P.stop,e.handleDragStop))}}})),S(b(e),"onMouseDown",(function(t){return P=D,e.handleDragStart(t)})),S(b(e),"onMouseUp",(function(t){return P=D,e.handleDragStop(t)})),S(b(e),"onTouchStart",(function(t){return P=O,e.handleDragStart(t)})),S(b(e),"onTouchEnd",(function(t){return P=O,e.handleDragStop(t)})),e}return t=f,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,u.addEvent)(e,O.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,u.removeEvent)(t,D.move,this.handleDrag),(0,u.removeEvent)(t,O.move,this.handleDrag),(0,u.removeEvent)(t,D.stop,this.handleDragStop),(0,u.removeEvent)(t,O.stop,this.handleDragStop),(0,u.removeEvent)(e,O.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.Component);t.default=x,S(x,"displayName","DraggableCore"),S(x,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),S(x,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},1327:(e,t,r)=>{"use strict";var n=r(1997),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},4688:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=p,t.addEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r}},t.addUserSelectStyles=function(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&p(e.body,"react-draggable-transparent-selection")}},t.createCSSTransform=function(e,t){var r=d(e,t,"px");return c({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return d(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.getTranslation=d,t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingTop))-(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingLeft))-(0,o.int)(r.paddingRight)},t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/r,y:(e.clientY+t.scrollTop-n.top)/r}},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderTopWidth))+(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderLeftWidth))+(0,o.int)(r.borderRightWidth)},t.removeClassName=h,t.removeEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null}},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&h(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var o=r(136),a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r(2185));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="";function f(e,t){return s||(s=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[s])&&e[s](t)}function d(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),u="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(u,")")+a}return a}function p(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function h(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},2185:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=n;var r=["Moz","Webkit","O","ms"];function n(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(n in a)return"";for(var i=0;i<r.length;i++)if(o(n,r[i])in a)return r[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},1177:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},3585:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),u=a(e);return i?{node:u,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:u,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var u=a(e);if("string"==typeof i){var l,c=u.ownerDocument,s=c.defaultView;if(!((l="parent"===i?u.parentNode:c.querySelector(i))instanceof s.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=l,d=s.getComputedStyle(u),p=s.getComputedStyle(f);i={left:-u.offsetLeft+(0,n.int)(p.paddingLeft)+(0,n.int)(d.marginLeft),top:-u.offsetTop+(0,n.int)(p.paddingTop)+(0,n.int)(d.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(u)-u.offsetLeft+(0,n.int)(p.paddingRight)-(0,n.int)(d.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(u)-u.offsetTop+(0,n.int)(p.paddingBottom)-(0,n.int)(d.marginBottom)}}return(0,n.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom)),(0,n.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,n.isNum)(i.top)&&(r=Math.max(r,i.top)),[t,r]},t.getControlPosition=function(e,t,r){var n="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var i=a(r),u=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,u,r.props.scale)},t.snapToGrid=function(e,t,r){return[Math.round(t/e[0])*e[0],Math.round(r/e[1])*e[1]]};var n=r(136),o=r(4688);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},136:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}},3518:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var n=r(2784),o=(0,n.createContext)(),a=(o.Consumer,o.Provider),i="opencv-react",u={wasmBinaryFile:"opencv_js.wasm",usingWasm:!0},l=function(e){var t=e.openCvPath,r=e.children,o=e.onLoad,l=(0,n.useState)(!1),c=l[0],s=l[1],f=(0,n.useCallback)((function(){o&&o(window.cv),s(!0)}),[]);(0,n.useEffect)((function(){var e;document.getElementById(i)||window.cv?s(!0):(u.onRuntimeInitialized=f,window.Module=u,document.body.appendChild(((e=document.createElement("script")).id=i,e.src=t||"https://docs.opencv.org/3.4.13/opencv.js",e.nonce=!0,e.defer=!0,e.async=!0,e)))}),[t,f]);var d=(0,n.useMemo)((function(){return{loaded:c,cv:window.cv}}),[c]);return(0,n.createElement)(a,{value:d},r)},c=r(3980),s=r.n(c),f=r(1327),d=r.n(f);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}var h=function(e,t,r){return{width:e,height:e,backgroundColor:t,border:r,borderRadius:"100%",position:"absolute",zIndex:1001}},g=function(e){var t=e.cropPoints,r=e.pointArea,o=e.defaultPosition,a=e.pointSize,i=e.pointBgColor,u=void 0===i?"transparent":i,l=e.pointBorder,c=void 0===l?"4px solid #3cabe2":l,s=e.onStop,f=e.onDrag,g=e.bounds,y=(0,n.useCallback)((function(e,t){f(p({},t,{x:t.x+a/2,y:t.y+a/2}),r)}),[f]),m=(0,n.useCallback)((function(e,n){s(p({},n,{x:n.x+a/2,y:n.y+a/2}),r,t)}),[f,t]);return n.createElement(d(),{bounds:g,defaultPosition:o,position:{x:t[r].x-a/2,y:t[r].y-a/2},onDrag:y,onStop:m},n.createElement("div",{style:h(a,u,c)}))};g.propTypes={cropPoints:s().shape({"left-top":s().shape({x:s().number,y:s().number}).isRequired,"right-top":s().shape({x:s().number,y:s().number}).isRequired,"right-bottom":s().shape({x:s().number,y:s().number}).isRequired,"left-bottom":s().shape({x:s().number,y:s().number}).isRequired}),pointArea:s().oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:s().shape({x:s().number,y:s().number}),pointSize:s().number,pointBgColor:s().string,pointBorder:s().string,onStop:s().func,onDrag:s().func};var y=function(e){var t=e.previewDims,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["previewDims"]);return n.createElement(n.Fragment,null,n.createElement(g,p({pointArea:"left-top",defaultPosition:{x:0,y:0}},r)),n.createElement(g,p({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},r)),n.createElement(g,p({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},r)),n.createElement(g,p({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},r)))};y.propTypes={previewDims:s().shape({ratio:s().number,width:s().number,height:s().number})};var m=function(e){var t=e.cropPoints,r=e.previewDims,o=e.lineWidth,a=void 0===o?3:o,i=e.lineColor,u=void 0===i?"#3cabe2":i,l=e.pointSize,c=(0,n.useRef)(),s=(0,n.useCallback)((function(){c.current.getContext("2d").clearRect(0,0,r.width,r.height)}),[c.current,r]),f=(0,n.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,r){return[].concat(e,[t[r]])}),[])}),[t]),d=(0,n.useCallback)((function(e){var t=e[0],r=e[1],n=e[2],o=e[3],i=c.current.getContext("2d");i.lineWidth=a,i.strokeStyle=u,i.beginPath(),i.moveTo(t.x+l/2,t.y),i.lineTo(r.x-l/2,r.y),i.moveTo(r.x,r.y+l/2),i.lineTo(n.x,n.y-l/2),i.moveTo(n.x-l/2,n.y),i.lineTo(o.x+l/2,o.y),i.moveTo(o.x,o.y-l/2),i.lineTo(t.x,t.y+l/2),i.closePath(),i.stroke()}),[c.current]);return(0,n.useEffect)((function(){if(t&&c.current){s();var e=f();d(e)}}),[t,c.current]),n.createElement("canvas",{ref:c,style:{position:"absolute",zIndex:5},width:r.width,height:r.height})};m.propTypes={previewDims:s().shape({ratio:s().number,width:s().number,height:s().number}),cropPoints:s().shape({"left-top":s().shape({x:s().number,y:s().number}).isRequired,"right-top":s().shape({x:s().number,y:s().number}).isRequired,"right-bottom":s().shape({x:s().number,y:s().number}).isRequired,"left-bottom":s().shape({x:s().number,y:s().number}).isRequired}),lineColor:s().string,lineWidth:s().number,pointSize:s().number};var v,b=function(e){return{width:e.width,height:e.height}},w={width:0,height:0},S=function(e){var t,r,a,i,u,l,c=e.image,s=e.onDragStop,f=e.onChange,d=e.cropperRef,h=e.pointSize,g=void 0===h?30:h,S=e.lineWidth,O=e.pointBgColor,D=e.pointBorder,P=e.lineColor,x=e.maxWidth,C=e.maxHeight,E=(0,n.useContext)(o),j=E.loaded,T=E.cv,M=(0,n.useRef)(),R=(0,n.useRef)(),_=(0,n.useRef)(),k=(0,n.useState)(),N=k[0],A=k[1],B=(0,n.useState)(),I=B[0],W=B[1],Y=(0,n.useState)(!1),L=Y[0],X=Y[1],H=(0,n.useState)("crop"),U=H[0],z=H[1];(0,n.useImperativeHandle)(d,(function(){return{backToCrop:function(){z("crop")},done:function(e){void 0===e&&(e={});try{return Promise.resolve(new Promise((function(t){X(!0),function(e,t,r,n,o){var a,i,u=e.imread(t),l=r["right-bottom"],c=r["left-bottom"],s=r["right-top"],f=r["left-top"],d=[f,s,l,c].map((function(e){return[e.x/n,e.y/n]})),p=Math.max(l.x-c.x,s.x-f.x)/n,h=Math.max(c.y-f.y,l.y-s.y)/n,g=[[0,0],[p-1,0],[p-1,h-1],[0,h-1]],y=e.matFromArray(4,1,e.CV_32FC2,(a=[]).concat.apply(a,d)),m=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,g)),v=e.getPerspectiveTransform(y,m),b=new e.Size(p,h);e.warpPerspective(u,u,v,b,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,u),u.delete(),y.delete(),m.delete(),v.delete(),o()}(T,M.current,I,v,F),function(e,t,r){try{var n=p({blur:!1,th:!0,thMode:e.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},r),o=e.imread(t);if(n.grayScale&&e.cvtColor(o,o,e.COLOR_RGBA2GRAY,0),n.blur){var a=new e.Size(5,5);e.GaussianBlur(o,o,a,0,0,e.BORDER_DEFAULT)}n.th&&(n.grayScale?e.adaptiveThreshold(o,o,n.thMax,n.thMode,e.THRESH_BINARY,n.thBlockSize,n.thMeanCorrection):(o.convertTo(o,-1,1,60),e.threshold(o,o,170,255,e.THRESH_BINARY))),e.imshow(t,o),Promise.resolve()}catch(e){return Promise.reject(e)}}(T,M.current,e.filterCvParams),e.preview&&z("preview"),M.current.toBlob((function(e){e.name=c.name,t(e),X(!1)}),c.type)})))}catch(e){return Promise.reject(e)}}}})),(0,n.useEffect)((function(){"preview"===U&&V()}),[U]);var F=function(){var e=function(e,t,r,n){var o=e/t,a=r||window.innerWidth,i=n||window.innerHeight,u={width:a,height:Math.round(a/o),ratio:o};return u.height>i&&(u.height=i,u.width=Math.round(i*o)),u}(M.current.width,M.current.height,x,C);A(e),R.current.width=e.width,R.current.height=e.height,v=e.width/M.current.width},V=function(e){var t=e||T.imread(M.current),r=new T.Mat,n=new T.Size(0,0);T.resize(t,r,n,v,v,T.INTER_AREA),T.imshow(R.current,r),t.delete(),r.delete()},G=function(){_.current.getContext("2d").clearRect(0,0,_.current.width,_.current.height)};(0,n.useEffect)((function(){f&&f(p({},I,{loading:L}))}),[I,L]),(0,n.useEffect)((function(){c&&R.current&&j&&"crop"===U?function(){try{return Promise.resolve((e=c,e instanceof File?new Promise((function(t,r){var n=new FileReader;n.onload=function(e){t(n.result)},n.onerror=function(e){r(e)},n.readAsDataURL(e)})):"string"==typeof e?Promise.resolve(e):void 0)).then((function(e){return Promise.resolve(function(e){return new Promise((function(t,r){var n,o,a,i=document.createElement("img");i.onload=function(){try{return M.current=document.createElement("canvas"),M.current.width=i.width,M.current.height=i.height,M.current.getContext("2d").drawImage(i,0,0),w.width=M.current.width,w.height=M.current.height,F(),t(),Promise.resolve()}catch(e){return Promise.reject(e)}},n=e,o=window.location,null===(a=n.match(/^(\w+:)\/\/([^:/?#]*):?(\d*)/i))||a[1]===o.protocol&&a[2]===o.hostname&&a[3]===o.port||(i.crossOrigin="anonymous"),i.src=e}))}(e)).then((function(){V(),function(){var e=T.imread(M.current),t=new T.Size(5,5);T.cvtColor(e,e,T.COLOR_RGBA2GRAY,0),T.GaussianBlur(e,e,t,0,0,T.BORDER_DEFAULT),T.Canny(e,e,75,200),T.threshold(e,e,120,200,T.THRESH_BINARY);var r=new T.MatVector,n=new T.Mat;T.findContours(e,r,n,T.RETR_CCOMP,T.CHAIN_APPROX_SIMPLE);var o=T.boundingRect(e);e.delete(),n.delete(),r.delete(),Object.keys(o).forEach((function(e){o[e]=o[e]*v}));var a={"left-top":{x:o.x,y:o.y},"right-top":{x:o.x+o.width,y:o.y},"right-bottom":{x:o.x+o.width,y:o.y+o.height},"left-bottom":{x:o.x,y:o.y+o.height}};W(a)}(),X(!1)}))}))}catch(e){return Promise.reject(e)}var e}():X(!0)}),[c,R.current,j,U]);var q=(0,n.useCallback)((function(e,t){var r=e.x,n=e.y,o=_.current.getContext("2d");G(),o.drawImage(R.current,r-(g-10),n-(g-10),g+5,g+5,r+10,n-90,g+20,g+20),W((function(e){var o;return p({},e,((o={})[t]={x:r,y:n},o))}))}),[]),K=(0,n.useCallback)((function(e,t,r){var n,o=e.x,a=e.y;G(),W((function(e){var r;return p({},e,((r={})[t]={x:o,y:a},r))})),s&&s(p({},r,((n={})[t]={x:o,y:a},n)))}),[]);return n.createElement("div",{style:p({position:"relative"},N&&b(N))},N&&"crop"===U&&I&&n.createElement(n.Fragment,null,n.createElement(y,{pointSize:g,pointBgColor:O,pointBorder:D,cropPoints:I,previewDims:N,onDrag:q,onStop:K,bounds:{left:(null==R||null===(t=R.current)||void 0===t?void 0:t.offsetLeft)-g/2,top:(null==R||null===(r=R.current)||void 0===r?void 0:r.offsetTop)-g/2,right:(null==R||null===(a=R.current)||void 0===a?void 0:a.offsetLeft)-g/2+(null==R||null===(i=R.current)||void 0===i?void 0:i.offsetWidth),bottom:(null==R||null===(u=R.current)||void 0===u?void 0:u.offsetTop)-g/2+(null==R||null===(l=R.current)||void 0===l?void 0:l.offsetHeight)}}),n.createElement(m,{previewDims:N,cropPoints:I,lineWidth:S,lineColor:P,pointSize:g}),n.createElement("canvas",{style:{position:"absolute",zIndex:5,pointerEvents:"none"},width:N.width,height:N.height,ref:_})),n.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:R}))};S.propTypes={image:s().object.isRequired,onDragStop:s().func,onChange:s().func,cropperRef:s().shape({current:s().shape({done:s().func.isRequired,backToCrop:s().func.isRequired})}),pointSize:s().number,lineWidth:s().number,pointBgColor:s().string,pointBorder:s().string,lineColor:s().string};var O=n.forwardRef((function(e,t){return e.image?n.createElement(l,{openCvPath:e.openCvPath},n.createElement(S,p({},e,{cropperRef:t}))):null}));O.propTypes={openCvPath:s().string};const D=O}}]);
//# sourceMappingURL=518.js.map