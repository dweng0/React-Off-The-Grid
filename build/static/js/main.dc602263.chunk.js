(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=n(3),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"===typeof Symbol&&Symbol.iterator;function S(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,r,o,u,c,i],f=0;(e=Error(t.replace(/%s/g,function(){return a[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function _(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&S("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var j=w.prototype=new _;j.constructor=w,r(j,O.prototype),j.isPureReactComponent=!0;var k={current:null},P={current:null},E=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:P.current}}function $(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,N=[];function A(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function L(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return r(o,t,""===n?"."+M(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=n+M(i=t[f],f);a+=e(i,l,r,o)}else if(l=null===t||"object"!==typeof t?null:"function"===typeof(l=v&&t[v]||t["@@iterator"])?l:null,"function"===typeof l)for(t=l.call(t),f=0;!(i=t.next()).done;)a+=e(i=i.value,l=n+M(i,f++),r,o);else"object"===i&&S("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return a}(e,"",t,n)}function M(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),L(e,T,t=A(t,u,r,o)),F(t)}function D(){var e=k.current;return null===e&&S("321"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,I,t=A(null,null,t,n)),F(t)},count:function(e){return L(e,function(){return null},null)},toArray:function(e){var t=[];return U(e,t,null,function(e){return e}),t},only:function(e){return $(e)||S("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:i,StrictMode:a,Suspense:d,createElement:C,cloneElement:function(e,t,n){(null===e||void 0===e)&&S("267",e);var o=void 0,c=r({},e.props),i=e.key,a=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,f=P.current),void 0!==t.key&&(i=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)E.call(t,o)&&!x.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];c.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:c,_owner:f}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:P,assign:r}},V={default:q},J=V&&q||V;e.exports=J.default||J},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in n=Object(arguments[a]))o.call(n,f)&&(i[f]=n[f]);if(r){c=r(n);for(var l=0;l<c.length;l++)u.call(n,c[l])&&(i[c[l]]=n[c[l]])}}return i}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"===typeof Symbol&&"symbol"===u(Symbol.iterator)?function(e){return u(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":u(e)})(e)}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var l=n(0),s=n.n(l),p=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return(n=i(this,(e=a(t)).call.apply(e,[this].concat(u))))._unSub=function(){},n.grabAllFromLocalStorage=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):{}},n.addToLocalStorage=function(e,t){var o=n.grabAllFromLocalStorage(e);o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},o,{store:t,_lastModified:new Date}),localStorage.setItem(e,JSON.stringify(o))},n.deferred=function(e){setTimeout(e,0)},n.maybeSetUnSubscribe=function(e){n._unSub||(n._unSub=e)},n.state={saveName:"MOOSE_FILE"},n.store={},n.comparisonFunction=function(e){var t=n.grabAllFromLocalStorage(n.state.saveName);return void 0===t._lastModified||!(t._lastModified===n.store.getState()._lastModified)},n.componentDidMount=function(){if(!n.props.store)throw new Error("Need to pass in a redux store");n.store=n.props.store,n.props.saveName&&n.setState({saveName:n.props.saveName}),n.props.comparisonFunction?n.comparisonFunction=n.props.comparisonFunction:console.log("no comparison function provided, using default"),n.maybeSetUnSubscribe(n.props.store.subscribe(n.shouldSave)),n.loadIfEmpty()},n.shouldSave=function(){n.comparisonFunction()&&n.addToLocalStorage(n.state.saveName,n.store.getState())},n.loadIfEmpty=function(){var e=n.store.getState();Object.keys(e).every(function(t){return!!e[t]})&&(n.grabAllFromLocalStorage(n.state.saveName)&&n.deferred(function(){console.log("Loading ".concat(n.state.saveName," from local storage"));var e={type:"LOAD_FROM_LOCAL_STORAGE",payload:localStorage[n.state.saveName]};n.store.dispatch(e)}))},n.componentWillUnmount=function(){n._unSub()},n}var n,u,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,s.a.PureComponent),n=t,(u=[{key:"render",value:function(){return null}}])&&o(n.prototype,u),c&&o(n,c),t}();t.default=p}],[[1,1]]]);
//# sourceMappingURL=main.dc602263.chunk.js.map