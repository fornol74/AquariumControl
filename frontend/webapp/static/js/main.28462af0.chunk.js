(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),i=(n(43),n(33)),l=n(27),s=n(14),h=n(28),u=n(29),m=n(9),p=n(34),d=n(84),f=n(86),v=n(78),E=n(21),y=n(79),b=n(87),g=n(81),j=n(82),k=n(80),O=n(85),w=n(31),C=n.n(w),D=n(77),T=n(32),J=n(76),P=(n(44),Object(T.a)({palette:{primary:J.a}})),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={controls:{4:{name:"Tank Light",status:!0},6:{name:"Plant Light",status:!1}}},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("http://192.168.1.127:5000/api/controls").then((function(e){return e.json()})).then((function(t){e.setState({controls:t})})).catch((function(e){console.log(e)})),setTimeout(this.fetchData.bind(this),5e3)}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleChange",value:function(e,t,n){var a=this.state.controls;console.log(e),n in a&&(a[n].status=e),fetch("http://192.168.1.127:5000/api/controls/"+n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:e})})}},{key:"render",value:function(){var e=this,t=this.state.controls;return o.a.createElement(D.a,{theme:P},o.a.createElement("div",{className:"example"},o.a.createElement(f.a,{position:"static",color:"primary"},o.a.createElement(v.a,null,o.a.createElement(E.a,{variant:"h6"},"Aquarium Control Panel"))),Object.entries(t).map((function(t){var n=Object(i.a)(t,2),a=n[0],c=n[1];return o.a.createElement("div",null,o.a.createElement(y.a,null,o.a.createElement(b.a,null,o.a.createElement(k.a,null,o.a.createElement(O.a,null,o.a.createElement(C.a,{color:"primary"}))),o.a.createElement(g.a,{primary:c.name,secondary:c.name}),o.a.createElement(d.a,{id:a,onChange:e.handleChange,checked:c.status,color:"primary"})),o.a.createElement(j.a,null)))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.28462af0.chunk.js.map