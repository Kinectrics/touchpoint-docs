(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[8],{31:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(37),l=n(0),o=n.n(l),c=(n(32),n(33)),i=n(34);function r(e){var t=Object(c.w)().io;return o.a.createElement(c.o,{moduleName:"ExampleModule"},t.children)}function s(e){var t={ExampleModule:{name:"ExampleModule",component:r}};return o.a.createElement("div",{className:"Example",style:e.style},o.a.createElement("div",{className:"exampleContainer",style:Object(a.a)(Object(a.a)({},e.style),{},{margin:e.gist?"0px 7px":null})},o.a.createElement(c.u,{homeModule:"ExampleModule",modules:t,saveSettings:function(e,t){void 0!==typeof localStorage&&localStorage.setItem(e,t)},getSettings:function(e){if(void 0!==typeof localStorage)return localStorage.getItem(e)},io:{children:e.children}})),e.gist?o.a.createElement("div",{className:"sourceCode"},o.a.createElement(i.a,{id:e.gist})):null)}},32:function(e,t,n){},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n.n(a);n(36);function o(e){return l.a.createElement("div",{className:"PropList"},l.a.createElement("h5",null,e.title?e.title:"Props"),l.a.createElement("table",null,l.a.createElement("tbody",null,e.items.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{className:"name"},e.name),l.a.createElement("td",{className:"type"},e.type),l.a.createElement("td",{className:"desc"},e.desc))})))))}},36:function(e,t,n){},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n.n(a);function o(e){return l.a.createElement("div",{className:"Note",style:e.style},l.a.createElement("i",null,e.children))}},76:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(39),l=n(0),o=n.n(l),c=n(31),i=n(40),r=n(33),s=(n(76),n(43)),m=n(35);function u(e){var t=Object(l.useState)("Calc"),n=Object(a.a)(t,2),c=n[0],i=n[1];return o.a.createElement("div",{className:"InnerDock"},o.a.createElement("div",null,o.a.createElement(r.g,null,o.a.createElement(r.h,{faIcon:s.d,title:"Calc",style:{marginBottom:"30px"},onClick:function(){return i("Calc")}}),o.a.createElement(r.h,{faIcon:s.e,title:"Calendar",style:{marginBottom:"30px"},notifications:34,onClick:function(){return i("Calendar")}}),o.a.createElement(r.h,{faIcon:s.b,title:"Packing",style:{marginBottom:"30px"},onClick:function(){return i("Packing")}}),o.a.createElement(r.h,{faIcon:s.c,title:"Cleaning",style:{marginBottom:"30px"},onClick:function(){return i("Cleaning")}}))),o.a.createElement(r.e,{activeTab:c},o.a.createElement(r.k,{tabID:"Calc"},o.a.createElement("h1",null,"Calculator Time")),o.a.createElement(r.k,{tabID:"Calendar"},o.a.createElement("h1",null,"My Calendar")),o.a.createElement(r.k,{tabID:"Packing"},o.a.createElement("h1",null,"Packing Jobs")),o.a.createElement(r.k,{tabID:"Cleaning"},o.a.createElement("h1",null,"Cleaning Jobs"))))}function d(){return o.a.createElement("div",{className:"DockFix"},o.a.createElement("h1",null,"Dock"),"Dock for the side of your modules. Supports dock icons with notification badges.",o.a.createElement("br",null),"This works very nicely with ControlledTabContainer to split your module into sections. See example below.",o.a.createElement("p",null),o.a.createElement(c.a,{gist:"c8a59a1fab147d688b5bdf4f3abf6e5f"},o.a.createElement(u,null)),o.a.createElement(i.a,null,"Note: In your module, any items that are above the dock will shrink the dock height. This is useful if you want your ControlBar to overlap the dock for example. If you want the dock to be on top, place it above the other component in your code."),o.a.createElement(m.a,{title:"DockIcon props",items:[{name:"title",type:"String",desc:"The title to display"},{name:"faIcon (with a capital i not an L)",type:"FontAwesome icon object",desc:"npm install @fortawesome/free-solid-svg-icons"},{name:"notifications",type:"integer",desc:"Number of notifications to display in the badge"},{name:"onClick",type:"function",desc:"Click even handler"},{name:"style",type:"object (style)",desc:"Optional custom style"},{name:"locked",type:"boolean",desc:"Locks the icon so it can't be clicked"},{name:"hidden",type:"boolean",desc:"Hides the icon completely"}]}))}}}]);
//# sourceMappingURL=8.2204dded.chunk.js.map