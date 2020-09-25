(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[1],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(0),r=a.n(n),o=a(32),s=(a(34),a(31)),l=a(35),i=a(39);function c(){return r.a.createElement(s.m,{headers:[{headerID:"id",displayName:"ID"},{headerID:"firstName",displayName:"First Name",width:300,required:!0},{headerID:"lastName",displayName:"Last Name",width:300}],data:[{id:1,firstName:"Youssof",lastName:"Fahmy"},{id:2,firstName:"Javaagar",lastName:"Srithar"},{id:3,firstName:"Sid",lastName:"Das"},{id:4,firstName:"Jeff",lastName:"Heighet"},{id:5,firstName:"Olivia",lastName:"Krucko Gorski"}]})}function d(e){return"Away"===e?{backgroundColor:"red",color:"white"}:"Online"===e?{backgroundColor:"#00cc00",color:"white"}:{backgroundColor:"grey",color:"white"}}function m(){var e=[{headerID:"firstName",displayName:"Name",width:300},{headerID:"status",displayName:"Status",styling:d,width:150}];return r.a.createElement(s.m,{headers:e,data:[{status:"Away",firstName:"Youssof",lastName:"Fahmy"},{status:"Online",firstName:"Javaagar",lastName:"Srithar"},{status:"Away",firstName:"Sid",lastName:"Das"},{status:"Online",firstName:"Jeff",lastName:"Heighet"},{status:"Offline",firstName:"Olivia",lastName:"Krucko Gorski"}]})}function u(){var e=[{headerID:"firstName",displayName:"Name",width:300},{headerID:"status",displayName:"Status",styling:d,width:150},{headerID:"score",displayName:"Score",width:100,styling:function(){return{textAlign:"center",fontWeight:"300"}}}],t=Object(s.w)((function(){return[{status:"Away",firstName:"Youssof",score:Math.round(10*Math.random()),team:"Blue Team"},{status:"Online",firstName:"Javaagar",score:Math.round(10*Math.random()),team:"Red Team"},{status:"Away",firstName:"Sid",score:Math.round(10*Math.random()),team:"Blue Team"},{status:"Online",firstName:"Jeff",score:Math.round(10*Math.random()),team:"Green Team"},{status:"Offline",firstName:"Olivia",score:Math.round(10*Math.random()),team:"Green Team"}]}),{primaryKey:"firstName"});return r.a.createElement("div",null,r.a.createElement(s.i,{style:{marginLeft:"20px"},onClick:t.refresh},"Refresh"),r.a.createElement(s.i,{style:{marginLeft:"20px"},onClick:function(){t.selectRecord("Olivia")}},"Select Olivia"),r.a.createElement(s.j,{stripe:!0,title:"ScoreBoard"},r.a.createElement("label",null,"Name: ")," ",t.getActiveRecord().firstName," ",r.a.createElement("br",null),r.a.createElement("label",null,"Score: ")," ",t.getActiveRecord().score," ",r.a.createElement("br",null),r.a.createElement("label",null,"Team: ")," ",t.getActiveRecord().team),r.a.createElement(s.m,{headers:e,data:t}))}function h(){var e=[{headerID:"firstName",displayName:"Name",width:300},{headerID:"status",displayName:"Status",styling:d,width:150},{headerID:"score",displayName:"Score",width:150,type:"number",onEdit:function(e){if(1==e.cellValue)throw new Error;return e.cellValue>=3}}],t=Object(s.w)((function(){return[{status:"Away",firstName:"Youssof",score:Math.round(10*Math.random())},{status:"Online",firstName:"Javaagar",score:Math.round(10*Math.random())},{status:"Away",firstName:"Sid",score:Math.round(10*Math.random())},{status:"Online",firstName:"Jeff",score:Math.round(10*Math.random())},{status:"Offline",firstName:"Olivia",score:Math.round(10*Math.random())}]}),{primaryKey:"firstName"});return r.a.createElement("div",null,r.a.createElement(s.m,{headers:e,data:t}))}function f(e){return r.a.createElement("div",null,r.a.createElement(s.i,null,e.dataRow.firstName))}function p(){var e=Object(s.w)((function(){return[{id:1,firstName:"Youssof",lastName:"Fahmy"},{id:2,firstName:"Javaagar",lastName:"Srithar"},{id:3,firstName:"Sid",lastName:"Das"}]}),{primaryKey:"id"});return r.a.createElement(s.m,{headers:[{headerID:"id",displayName:"ID"},{headerID:"firstName",displayName:"First Name",width:300,required:!0},{headerID:"lastName",displayName:"Last Name",width:300}],data:e,nestedComponent:f})}function y(){return r.a.createElement("div",null,r.a.createElement("h1",null,"MainTable"),"Interactive table component for displaying data. Supports search, sort and filter.",r.a.createElement("br",null),"To create a table, you need to define table headers, and provide the table data (array of row objects).",r.a.createElement("h3",null,"Table Headers"),"An array of of header options like the example below. You can pass these to the MainTable components as a 'headers' prop.",r.a.createElement("p",null),r.a.createElement(o.a,{gist:"bbf3255427ad8ad7fcfe6eb6b7600989"},r.a.createElement(c,null)),r.a.createElement("p",null),r.a.createElement(l.a,{title:"Available options for headers",items:[{name:"headerID (required)",type:"string",desc:"The name of the field to display in that column"},{name:"displayName (required)",type:"string",desc:"The title to show at the top of the column"},{name:"width",type:"integer",desc:"Width of the column in pixels. 100 by default"},{name:"type",type:"string",desc:"The type of data in the colum. String, Number, Date, or Boolean. String by default"},{name:"required",type:"boolean",desc:"If true, the column cannot be hidden. False by default"},{name:"styling",type:"function( cellValue, rowValue ) returning object",desc:"Conditional formatting. See example below"},{name:"onEdit",type:"function( metaData ) returning boolean",desc:"Callback when cell value is edited. See example below"},{name:"onClick",type:"function( metaData )",desc:"Callback when cell is clicked"},{name:"component",type:"React component",desc:"Lets you creact customised component cells"},{name:"props",type:"object",desc:"Lets you pass props to your custom cell components"}]}),r.a.createElement(i.a,null,"Note: onEdit functions are only available when using datasets. See dataset section below for more."),r.a.createElement("h3",null,"Styling (Conditional Formatting)"),"Apply styles to a column based on the contents of a cell (or the entire row). ",r.a.createElement("br",null),"A styling function can be set as a header property. This function will take in 2 values, the cell content, and the row value. It returns an inline style object to apply to the cell. ",r.a.createElement("br",null),"In the example below, we are styling the status based on the cell content.",r.a.createElement(o.a,{gist:"841dc175f4860022b63a51348bb79ac0"},r.a.createElement(m,null)),r.a.createElement("h3",null,"Custom Cell Components"),"You can create your own components to inser in the table cells using the 'component' property of the headers. If you pass a React component to the header, it will create an instance of that compoennt for every cell in the column. The compoennt will receive the following props:",r.a.createElement(l.a,{title:" ",items:[{name:"row",desc:"The row object",type:"object"},{name:"setRow",desc:"function that lets you modify the parent row. Works like the set function from useState",type:"function( newRow )"},{name:"rowIndex",desc:"The index of that row in your data array",type:"integer"},{name:"...props",desc:"If you pass an object called props to the header, theese props will be passed on to your cell component."}]}),r.a.createElement("h3",null,"Using dynamic data - useDataset hook"),"If you are using data from a dynamic source, you can use this hook to make fetching and refreshing the data easier. This will also let you create editable table cells that validate and update the data.",r.a.createElement("p",null),r.a.createElement(l.a,{title:"useDataset parameters",items:[{name:"fetchFunction (required)",type:"async function() returning an array of row objects",desc:"The function that fetches your data from its source. Runs when the dataset is created, and when refershed"},{name:"options",type:"object",desc:"A list of options for the dataset"},{type:"primaryKey (string)",desc:"Field name that will be unique for every row. Used when editing data and selcting rows"},{type:"defaultValue (Array)",desc:"By default, the dataset contains an empty array until it fetches. You can change this default value"}]}),r.a.createElement("p",{id:"useDataset"}),"useDataset returns a dataset object with the following properties. You can pass this object to a MainTable in plave of a data array.",r.a.createElement(l.a,{title:" ",items:[{name:"read( )",type:"function",desc:"Returns a state variable with the data in the dataset. Updates when you refresh."},{name:"refresh( )",type:"function",desc:"Runs the fetchfunction again, and uopdates the data if successful. Any components reading from the dataset will update also."},{name:"getActiveRecord( )",type:"function",desc:"Returns a state variable containing the dataset active record. Updates on refresh, or when a record is selected."},{name:"selectRecord( key )",type:"function",desc:"Sets the active record by matching the key provided to the primaryKey field"},{name:"status",type:"string",desc:"State variable containing the status of the dataset (Pending, Resolved, or Rejected)"}]}),"Normally you would make some kind of API call to fetch the data, but in the example below, the fetch function just generates some random scores that change every time you refresh.",r.a.createElement("br",null),"You can use getActiveRecord to display data about the selected row that isn't part of the table, like 'team' below.",r.a.createElement("p",null),r.a.createElement(o.a,{gist:"e107f9c27a8c916261029a789670c826"},r.a.createElement(u,null)),r.a.createElement("h3",null,"Editable Data"),"Using the header's onEdit event, you let users type values directly into the table. The onEdit callback function is a metadata object with the properties below. This function will return true if the new value entered is acceptable, and false if not. If it's not acceptable, the cell value will be reverted to what it was before. The function can be asynchronous, the table will await it before applying any changes. If the function returns nothing, the value is accepted. If the function throws an error, the value is rejected and the changes reversed.",r.a.createElement(l.a,{title:"Metadata object properties",items:[{name:"cellValue",desc:"the cellvalue that the user entered",type:"object"},{name:"row",desc:"the old cell value before the user edited it",type:"object"},{name:"oldCellValue",desc:"",type:"object"},{name:"oldRow",desc:"The old value of the row, before it was edited",type:"object"},{name:"setRow( newRow )",desc:"A function you can use to edit the entire row. Worke like a set function from useState hooks",type:"function( object )"}]}),r.a.createElement("p",null),"In the example below, the score field will not accept any value less than 3, and will throw an error if you enter 1. Note that this check is only applied when the user enters a value, not when the data is fetched for the first time or refreshed. Also, since the field has a type of 'number', any value that isn't a number is automatically rejected.",r.a.createElement("p",null),r.a.createElement(o.a,{gist:"c53c57e220a0581655514023cc712a0c"},r.a.createElement(h,null)),r.a.createElement("h3",null,"Nested Components"),"You can embed components inside each row of the table by passing a component to the nestedComponent prop. This component will receive the props below.",r.a.createElement("br",null),"The prop nestedProps is a shortcut to pass some data down to your nested component. You can also force the component to be the width of the screen by passing fitToWidth = true in nestedProps.",r.a.createElement(l.a,{title:" ",items:[{name:"row",desc:"The row object",type:"object"},{name:"setRow",desc:"function that lets you modify the parent row. Works like the set function from useState",type:"function( newRow )"},{name:"...nestedProps",desc:"You can pass an object to the MainTable prop called nestedProps, these will all be passed to the nested component"}]}),r.a.createElement(o.a,{gist:"6fdb92a3952349a34a6fdcaeafdceee3"},r.a.createElement(p,null)),r.a.createElement("h3",null,"MainTable props"),r.a.createElement(l.a,{title:" ",items:[{name:"headers",type:"array[ objects ]",desc:"Header objects - see table above for available options"},{name:"data",type:"array[ objects ] or dataset object",desc:"Array of row object"},{name:"locked",type:"boolean",desc:"Disable edits for all columns"},{name:"pageSize",type:"integer",desc:"Number of rows per page. 100 by default"},{name:"searchable",type:"boolean",desc:"If true, the table will respond to searchbars in the module"},{name:"noSort",type:"boolean",desc:"If true, sort will be disabled"},{name:"noFilter",type:"boolean",desc:"If true, filtering will be disabled"},{name:"noActive",type:"boolean",desc:"If true, disables clicking to select a record"},{name:"settingsID",type:"string",desc:"Unique identifier for the table to save settings (see settings API for more)"},{name:"nestedComponent",type:"component object",desc:"A component to be nested inside each row"},{name:"nestedProps",type:"object",desc:"Props to pass to the nested components"}]}))}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(37),r=a(0),o=a.n(r),s=(a(33),a(31)),l=a(34);function i(e){var t=Object(s.x)().io;return o.a.createElement(s.o,{moduleName:"ExampleModule"},t.children)}function c(e){var t={ExampleModule:{name:"ExampleModule",component:i}};return o.a.createElement("div",{className:"Example",style:e.style},o.a.createElement("div",{className:"exampleContainer",style:Object(n.a)(Object(n.a)({},e.style),{},{margin:e.gist?"0px 7px":null})},o.a.createElement(s.v,{homeModule:"ExampleModule",modules:t,saveSettings:function(e,t){void 0!==typeof localStorage&&localStorage.setItem(e,t)},getSettings:function(e){if(void 0!==typeof localStorage)return localStorage.getItem(e)},io:{children:e.children}})),e.gist?o.a.createElement("div",{className:"sourceCode"},o.a.createElement(l.a,{id:e.gist})):null)}},33:function(e,t,a){},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);a(36);function o(e){return r.a.createElement("div",{className:"PropList"},r.a.createElement("h5",null,e.title?e.title:"Props"),r.a.createElement("table",null,r.a.createElement("tbody",null,e.items.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"name"},e.name),r.a.createElement("td",{className:"type"},e.type),r.a.createElement("td",{className:"desc"},e.desc))})))))}},36:function(e,t,a){},39:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function o(e){return r.a.createElement("div",{className:"Note",style:e.style},r.a.createElement("i",null,e.children))}}}]);
//# sourceMappingURL=1.3c479494.chunk.js.map