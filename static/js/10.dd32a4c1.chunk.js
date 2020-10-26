(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[10],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(0),a=n.n(r),o=(n(52),n(15)),i=n.n(o),c=n(13),l=n.n(c);n(53);function u(e){return a.a.createElement("button",{className:"BigButton "+e.className,onClick:e.onClick,style:e.style},e.children)}var s=n(11),d=n(42);function f(){var e=Object(d.a)().narrow,t={width:e?"100%":"50%"},n={display:e?null:"flex"};return a.a.createElement("div",{className:"Home"},a.a.createElement("div",{className:"landing",style:{backgroundImage:"url("+l.a+")"}},a.a.createElement("div",{className:"landingContent"},a.a.createElement("div",{className:"logoContainer"},a.a.createElement("img",{src:i.a})),a.a.createElement("div",{className:"title"},"TouchPoint UI"),a.a.createElement("div",{className:"subTitle"},"Build modular applications with React"),a.a.createElement("div",{className:"buttonContainer"},a.a.createElement(s.Link,{to:"/Docs"},a.a.createElement(u,{style:{padding:"10px 20px"}},"Docs")),a.a.createElement("a",{href:"https://github.com/youssof707/touchpoint-ui"},a.a.createElement(u,null,"GitHub"))))),a.a.createElement("div",{className:"news"},a.a.createElement("h1",null,"New in TouchPoint 1.5"),a.a.createElement("div",{className:"splitter",style:n},a.a.createElement("div",{style:t},a.a.createElement(s.Link,{to:"Docs/useShortcuts"},"useShortcuts hook"),a.a.createElement("p",null,"Quickly add keyboard shortcuts to your app. ",a.a.createElement("br",null),"Still experimental, and the API is subject to change in a future release."),a.a.createElement(s.Link,{to:"/Docs/Text#SearchBar"},"Nested components for SearchBar components"),a.a.createElement("p",null,"Create autocomplete or preview dialogs as your users search")),a.a.createElement("div",{style:t},a.a.createElement(s.Link,{to:"/Docs/MainTable#headers"},"Dropdown menus in MainTable cells. "),a.a.createElement("p",null,"Editable cells that choose from a predefined list of values. "),a.a.createElement(s.Link,{to:"/Docs/Buttons"},"onExpand event for ConfirmButtons "),a.a.createElement("p",null,"Perform an action on the initial click of the ConfirmButton, before it expands.")))))}},37:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},40:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37),a=n(40),o=n(0);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=Object(o.useState)({width:"undefined"!==typeof window?window.innerWidth:null,height:"undefined"!==typeof window?window.innerHeight:null}),n=Object(a.a)(t,2),i=n[0],c=n[1];function l(t){return t<e}var u=Object(o.useState)(l("undefined"!==typeof window?window.innerWidth:null)),s=Object(a.a)(u,2),d=s[0],f=s[1];return Object(o.useEffect)((function(){function e(){"undefined"!==typeof window&&(c({width:window.innerWidth,height:window.innerHeight}),f(l(window.innerWidth)))}return"undefined"!==typeof window&&window.addEventListener("resize",e),function(){"undefined"!==typeof window&&window.removeEventListener("resize",e)}}),[]),Object(r.a)(Object(r.a)({},i),{},{narrow:d})}},52:function(e,t,n){},53:function(e,t,n){}}]);
//# sourceMappingURL=10.dd32a4c1.chunk.js.map