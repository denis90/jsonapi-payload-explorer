(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(272)},147:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),s=a(15),o=a(16),l=a(18),u=a(17),h=a(26),d=a(19),p=a(81),m=a.n(p),b='{\n  "data": {\n    "type": "articles",\n    "attributes": {\n      "title": "Sideposting with json:api"\n    },\n    "relationships": {\n      "tags": {\n        "data": [{ "type": "tags", "id": "9" },\n                 { "type": "tags", "temp-id": "1" },\n                 { "type": "tags", "temp-id": "2" }]\n      }\n    }\n  },\n  "included": [\n    {\n      "type": "tags",\n      "temp-id": "1",\n      "attributes": {\n        "label": "JSON",\n        "total": 42\n      }\n    },\n    {\n      "type": "tags",\n      "temp-id": "2",\n      "attributes": {\n        "label": "REST"\n      }\n    }\n  ]\n}';var f=a(121),v=a.n(f),y=(a(144),a(145),a(146),a(147),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement(v.a,{value:this.props.payload,onChange:this.props.onPayloadChanged,options:{lineNumbers:!0,mode:{name:"javascript",json:!0},theme:"solarized"}}))}}]),t}(r.a.Component)),g=a(129),O=(a(267),a(268),a(269),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSearchOnChange,a=e.searchString,n=e.selectPrevMatch,c=e.selectNextMatch,i=e.currentSearchIndex,s=e.totalFound,o="".concat(i," / ").concat(s);return r.a.createElement("div",{className:"searchBar"},r.a.createElement("label",null,"Search: "),r.a.createElement("input",{onChange:t,value:a}),a&&s>1&&r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"previous",onClick:n}," \u2039 "),r.a.createElement("button",{className:"next",onClick:c}," \u203a "),r.a.createElement("label",{class:"stats"},r.a.createElement("span",null,o))))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchString:"",currentSearchIndex:0,totalFound:0,treeData:[a.props.root]},a.onSearchStringChange=a.onSearchStringChange.bind(Object(h.a)(a)),a.selectPrevMatch=a.selectPrevMatch.bind(Object(h.a)(a)),a.selectNextMatch=a.selectNextMatch.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onSearchStringChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"selectPrevMatch",value:function(){var e=this.state,t=e.currentSearchIndex,a=e.totalFound;this.setState({currentSearchIndex:null!==t?(a+t-1)%a:a-1})}},{key:"selectNextMatch",value:function(){var e=this.state,t=e.currentSearchIndex,a=e.totalFound;this.setState({currentSearchIndex:null!==t?(t+1)%a:0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.treeData,n=t.searchString,c=t.currentSearchIndex,i=t.totalFound;return r.a.createElement("div",{className:"Tree-view"},r.a.createElement(O,{searchString:n,currentSearchIndex:c+1,totalFound:i,handleSearchOnChange:this.onSearchStringChange,selectPrevMatch:this.selectPrevMatch,selectNextMatch:this.selectNextMatch}),r.a.createElement(g.a,{canDrag:!1,rowHeight:function(e){return 62+(e.node.subtitleHeight||0)},treeData:a,onChange:function(t){return e.setState({treeData:t})},searchQuery:n,searchFocusOffset:c,searchFinishCallback:function(t){return e.setState({totalFound:t.length,currentSearchIndex:t.length>0?c%t.length:0})}}))}}]),t}(n.Component),j=a(130),E="temp-id";function C(e,t){var a={id:e.id,tempId:e[E],uuid:"".concat(e.type,"-").concat(e.id||e[E]),type:e.type,attributes:e.attributes||{},method:e.method,children:[]},n=e.relationships;for(var r in n){var c=n[r].data;if(Array.isArray(c)){var i,s=c.map(function(e){return N(e,t)});(i=a.children).push.apply(i,Object(j.a)(s))}else{var o=N(c,t);a.children.push(o)}}return a}function N(e,t){var a=C(function(e,t){var a=e.id,n=e.type,r=e[E];if(a)return t.find(function(e){return e.type===n&&e.id===a});if(r)return t.find(function(e){return e.type===n&&e[E]===r});return null}(e,t)||e,t);return a.method||(a.method=e.method),a}function k(e){return 0===Object.keys(e).length?{}:(e.expanded=!0,e.title=function(e){if(!e.id&&!e.tempId)return e.type;var t=e.id?"id":"temp-id";return"".concat(e.type," (").concat(t," = '").concat(e.id||e.tempId,"')")}(e),e.subtitle=function(e){var t=[];for(var a in e.attributes){var n=e.attributes[a];"object"===typeof n&&(n=JSON.stringify(n)),t.push(r.a.createElement("li",{key:a},a,": ",n))}return r.a.createElement("ul",null,t)}(e),e.subtitleHeight=11*Object.keys(e.attributes).length,e.children.forEach(function(e){return k(e)}),e)}var x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={};try{e=JSON.parse(this.props.payload)}catch(n){}var t,a=k((t=e).data?C(t.data,t.included||[]):{});return r.a.createElement("div",{className:this.props.className},r.a.createElement(S,{root:a,key:this.props.payload}))}}]),t}(n.Component),I=(a(270),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={payload:b,invalid:!1},a.onPayloadChanged=a.onPayloadChanged.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onPayloadChanged",value:function(e){e||(e="{}");var t=!function(e){if("string"!==typeof e)return!1;try{JSON.parse(e)}catch(t){return!1}return!0}(e);this.setState({payload:e,invalid:t})}},{key:"render",value:function(){var e=this.state.invalid;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{className:m()("sidepane",{invalid:e}),payload:this.state.payload,onPayloadChanged:this.onPayloadChanged}),r.a.createElement(x,{className:"sidepane",payload:this.state.payload}))}}]),t}(r.a.Component));a(271);i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.2c61bfbd.chunk.js.map