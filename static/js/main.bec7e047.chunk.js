(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(45)},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),c=(n(35),n(64)),l=n(61),s=n(65),d=n(62),u=n(63),m=Object(l.a)({root:{flexGrow:1},appbar:{backgroundColor:"#1976d2 !important"},toolbar:{flexDirection:"column",fontFamily:"cursive"}});function p(){var e=m();return i.a.createElement("div",{className:e.root},i.a.createElement(s.a,{position:"static",className:e.appbar},i.a.createElement(d.a,{className:e.toolbar},i.a.createElement(u.a,{variant:"h4",color:"inherit"},"Store My Code"),i.a.createElement("div",null,"A place for web snippets "))))}var f=n(26),y=n(25),b=n.n(y),g=(n(42),n(24)),_=n.n(g),E=(n(43),function(e){var t=e.data,n=e.rel,r=e.family;Object(a.useEffect)(function(){_.a.highlightAll()},[]);return i.a.createElement("pre",{rel:n},i.a.createElement("span",{className:"copy-text",onClick:function(e){var t=e.target.nextSibling.textContent,n=document.createElement("textarea");n.textContent=t,document.body.append(n),n.select(),document.execCommand("copy")}},"Copy"),i.a.createElement("code",{className:r},t))}),v=function(e){var t=e.heading,n=e.body_text,r=e.body_code,o=e.rel,c=e.code_input,l=e.code_output,s=e.body_code_family,d=e.input_code_family,u=e.output_code_family,m=Object(a.useState)(!1),p=Object(f.a)(m,2),y=p[0],g=p[1];return i.a.createElement("div",{className:"collapse_container"},i.a.createElement("div",{className:"collapsible_header",onClick:function(){return g(!y)}},i.a.createElement("strong",null,t)),y&&i.a.createElement("div",{className:"collapsible_body show"},c&&i.a.createElement(E,{data:c,rel:"Input",family:d}),n,i.a.createElement(E,{data:r,rel:o,family:s}),l&&i.a.createElement(E,{data:l,rel:"Output",family:u})),i.a.createElement(b.a,{className:"collapsible_down_arrow"}))},w=[{id:new Date,heading:"Sort an array of objects by multiple fields",keywords:["array","sorting","multiple","Object"],code_input:'\n        var data = [\n            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},\n            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"},\n            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"},\n            {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"}\n            ];\n        ',code_output:'\n        [   {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"},\n            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"}\n            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},\n            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"}\n        ]\n        ',body_code:"\n        function multiSort(fields) {\n            return function (a, b) {\n                return fields\n                    .map(function (item) {\n                        var dir = 1;\n                        if (item[0] === '-') {\n                           dir = -1;\n                           item=item.substring(1);\n                        }\n                        if (a[item] > b[item]) return dir;\n                        if (a[item] < b[item]) return -(dir);\n                        return 0;\n                    })\n                    .reduce(function firstNonZeroValue (p,n) {\n                        return p ? p : n;\n                    }, 0);\n            };\n        }\n\n        //calling\n        data.sort(multiSort(['city', '-price']));\n        ",body_text:"\n        Below is the main logic to Sort an array of objects by multiple fields. You can pass the number of fields in array you want to sort.\n        By default it's in accending order, Prepend minus to specify descending order.\n        ",rel:"logic",body_code_family:"language-javascript",input_code_family:"language-javascript",output_code_family:"language-javascript"}];var h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(c.a,{fixed:!0,style:{marginTop:"2rem"}},w.map(function(e){return i.a.createElement(v,Object.assign({},e,{key:e.id}))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.bec7e047.chunk.js.map