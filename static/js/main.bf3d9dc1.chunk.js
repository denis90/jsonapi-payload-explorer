(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,a){t.exports=a(269)},147:function(t,e,a){},268:function(t,e,a){},269:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(12),s=a.n(i),o=a(21),c=a(22),d=a(25),p=a(23),l=a(56),u=a(24),h=a(81),y=a.n(h),m='{\n  "data": {\n    "type": "articles",\n    "attributes": {\n      "title": "Sideposting with json:api"\n    },\n    "relationships": {\n      "tags": {\n        "data": [{ "type": "tags", "id": "9" },\n                 { "type": "tags", "temp-id": "1" },\n                 { "type": "tags", "temp-id": "2" }]\n      }\n    }\n  },\n  "included": [\n    {\n      "type": "tags",\n      "temp-id": "1",\n      "attributes": {\n        "label": "JSON"\n      }\n    },\n    {\n      "type": "tags",\n      "temp-id": "2",\n      "attributes": {\n        "label": "REST"\n      }\n    }\n  ]\n}';var b=a(121),f=a.n(b),v=(a(144),a(145),a(146),a(147),function(t){function e(){return Object(o.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement(f.a,{value:this.props.payload,onChange:this.props.onPayloadChanged,options:{lineNumbers:!0,mode:{name:"javascript",json:!0},theme:"solarized"}}))}}]),e}(r.a.Component)),j=a(129),O=(a(267),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(d.a)(this,Object(p.a)(e).call(this,t))).state={treeData:[a.props.root]},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(j.a,{canDrag:!1,treeData:this.state.treeData,onChange:function(e){return t.setState({treeData:e})}})}}]),e}(n.Component)),g=a(130);function C(t,e){var a={title:t.type,id:t.id,"temp-id":t["temp-id"],type:t.type,attributes:t.attributes,method:t.method,children:[]},n=t.relationships;for(var r in n){var i=n[r].data;if(Array.isArray(i)){var s,o=i.map(function(t){return E(t,e)});(s=a.children).push.apply(s,Object(g.a)(o))}else{var c=E(i,e);a.children.push(c)}}return a}function E(t,e){var a=C(function(t,e){var a=t.id,n=t.type,r=t["temp-id"];if(a)return e.find(function(t){return t.type===n&&t.id===a});if(r)return e.find(function(t){return t.type===n&&t["temp-id"]===r});return null}(t,e)||t,e);return a.method||(a.method=t.method),a}var N=function(t){function e(){return Object(o.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t={};try{t=JSON.parse(this.props.payload)}catch(n){}var e,a=(e=t).data?C(e.data,e.included||[]):{};return r.a.createElement("div",{className:this.props.className},r.a.createElement(O,{root:a,key:this.props.payload}))}}]),e}(n.Component),k=(a(268),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(d.a)(this,Object(p.a)(e).call(this,t))).state={payload:m,invalid:!1},a.onPayloadChanged=a.onPayloadChanged.bind(Object(l.a)(a)),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"onPayloadChanged",value:function(t){t||(t="{}");var e=!function(t){if("string"!==typeof t)return!1;try{JSON.parse(t)}catch(e){return!1}return!0}(t);this.setState({payload:t,invalid:e})}},{key:"render",value:function(){var t=this.state.invalid;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{className:y()("sidepane",{invalid:t}),payload:this.state.payload,onPayloadChanged:this.onPayloadChanged}),r.a.createElement(N,{className:"sidepane",payload:this.state.payload}))}}]),e}(r.a.Component));s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.bf3d9dc1.chunk.js.map