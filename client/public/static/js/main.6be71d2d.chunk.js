(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(53)},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),l=n(11),i=n(12),u=n(15),s=n(13),m=n(14),p=n(55),h=(n(40),n(54)),f=n(56),O=n(57),b=n(58),d=n(59),g=n(60),E=n(61),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.toggleNavbar=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Shopping List"),r.a.createElement(O.a,{onClick:this.toggleNavbar}),r.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(d.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(E.a,{href:"#"},"GitHub")),r.a.createElement(g.a,null,r.a.createElement(E.a,{href:"#"},"Other")),r.a.createElement(g.a,null,r.a.createElement(E.a,{href:"#"},"Another")))))))}}]),t}(a.Component),j=n(62),y=n(63),w=n(64),k=n(19),I="DELETE_ITEM",C="ITEMS_LOADING",T="FETCH_ITEMS",S="CREATE_ITEM";var A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){n.props.deleteItem(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"render",value:function(){var e=this,t=this.props.itemList.items;return r.a.createElement(p.a,null,r.a.createElement(j.a,null,t.map((function(t){var n=t._id,a=t.name;return r.a.createElement(y.a,{key:n},r.a.createElement(w.a,{size:"sm",onClick:e.onDeleteClick.bind(e,n)},"x")," ",a," ")}))))}}]),t}(a.Component),D={fetchItems:function(){return function(e){fetch("/items").then((function(e){return e.json()})).then((function(t){return e({type:T,value:t})}))}},deleteItem:function(e){return function(t){fetch("/items/".concat(e)).then((function(e){return e.json()})).then((function(n){return t({type:I,value:e})}))}}},P=Object(k.b)((function(e){return{itemList:e.currentItems}}),D)(A),N=n(18),_=n(71),x=n(65),L=n(66),M=n(67),B=n(68),H=n(69),J=n(70),G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1,name:""},n.handelToggle=function(){n.setState({modalOpen:!n.state.modalOpen})},n.onChange=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={name:n.state.name};n.props.createItem(t),n.handelToggle()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.handelToggle},"Add Item"),r.a.createElement(_.a,{toggle:this.handelToggle,isOpen:this.state.modalOpen},r.a.createElement(x.a,{toggle:this.handelToggle},"Here is a modal - Add something"),r.a.createElement(L.a,null,r.a.createElement(M.a,{onSubmit:this.onSubmit},r.a.createElement(B.a,null,r.a.createElement(H.a,{for:"item"},"Item Name:"),r.a.createElement(J.a,{type:"text",name:"name",id:"item",onChange:this.onChange}),r.a.createElement(w.a,{style:{marginTop:"10px"},block:!0},"Add Item"))))))}}]),t}(a.Component);var W=Object(k.b)((function(e){return{item:e.currentItems}}),{createItem:function(e){return function(t){fetch("/items",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:S,value:e})}))}}})(G),z=n(16),F={items:[],loading:!1},R=n(34);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=Object(z.c)({currentItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return q({},e,{loading:!0});case T:return q({},e,{items:t.value,loading:!1});case S:return q({},e,{items:[].concat(Object(R.a)(e.items),[t.value])});case I:return q({},e,{items:e.items.filter((function(e){return e._id!==t.value}))});default:return e}}}),Q=[n(33).a],U=Object(z.e)(K,F,Object(z.d)(z.a.apply(void 0,Q))),V=(n(52),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{store:U},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(p.a,null,r.a.createElement(W,null),r.a.createElement(P,null))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6be71d2d.chunk.js.map