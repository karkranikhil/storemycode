(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),c=(n(34),n(63)),l=n(60),s=n(64),d=n(61),u=n(62),m=Object(l.a)({root:{flexGrow:1},appbar:{backgroundColor:"#1976d2 !important"},toolbar:{flexDirection:"column",fontFamily:"fantasy"}});function p(){var e=m();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static",className:e.appbar},r.a.createElement(d.a,{className:e.toolbar},r.a.createElement(u.a,{variant:"h4",color:"inherit"},"Store My Code"),r.a.createElement("div",null,"A place for web snippets "))))}var y=n(25),f=n(24),b=n.n(f),w=(n(41),n(42),function(e){var t=e.data,n=e.rel;return r.a.createElement("pre",{rel:n},r.a.createElement("span",{className:"copy-text",onClick:function(e){var t=e.target.nextSibling.textContent,n=document.createElement("textarea");n.textContent=t,document.body.append(n),n.select(),document.execCommand("copy")}},"Copy"),r.a.createElement("code",{id:"myInput"},t))}),E=function(e){var t=e.heading,n=e.body_text,i=e.body_code,o=e.rel,c=e.code_input,l=e.code_output,s=Object(a.useState)(!1),d=Object(y.a)(s,2),u=d[0],m=d[1];return r.a.createElement("div",{className:"collapse_container"},r.a.createElement("div",{className:"collapsible_header",onClick:function(){return m(!u)}},r.a.createElement("strong",null,t)),u&&r.a.createElement("div",{className:"collapsible_body show"},c&&r.a.createElement(w,{data:c,rel:"Input"}),n,r.a.createElement(w,{data:i,rel:o}),l&&r.a.createElement(w,{data:l,rel:"Output"})),r.a.createElement(b.a,{className:"collapsible_down_arrow"}))},g=[{id:new Date,heading:"Sort an array of objects by multiple fields",keywords:["array","sorting","multiple","Object"],code_input:'\n        var data = [\n            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},\n            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"},\n            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"},\n            {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"}\n            ];\n        ',code_output:'\n        [   {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"},\n            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"}\n            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},\n            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"}\n        ]\n        ',body_code:"\n        function multiSort(fields) {\n            return function (a, b) {\n                return fields\n                    .map(function (item) {\n                        var dir = 1;\n                        if (item[0] === '-') {\n                           dir = -1;\n                           item=item.substring(1);\n                        }\n                        if (a[item] > b[item]) return dir;\n                        if (a[item] < b[item]) return -(dir);\n                        return 0;\n                    })\n                    .reduce(function firstNonZeroValue (p,n) {\n                        return p ? p : n;\n                    }, 0);\n            };\n        }\n\n        //calling\n        data.sort(multiSort(['city', '-price']));\n        ",body_text:"\n        Below is the main logic to Sort an array of objects by multiple fields. You can pass the number of fields in array you want to sort.\n        By default it's in accending order, Prepend minus to specify descending order.\n        ",rel:"logic"}];var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(c.a,{fixed:!0,style:{marginTop:"2rem"}},g.map(function(e){return r.a.createElement(E,Object.assign({},e,{key:e.id}))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.d692248a.chunk.js.map