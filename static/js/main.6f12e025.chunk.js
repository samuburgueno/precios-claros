(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),o=n.n(a),s=n(1),u=n(2),i=n(5),l=n(4),p=n(3),d=n(6),m=n(7),h=n.n(m),b=n(8),f=new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"getProducto",value:function(){var e=Object(b.a)(h.a.mark(function e(t){var n,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://d3e6htiiul5ek9.cloudfront.net","/prod/producto?limit=30&id_producto=").concat(t,"&").concat("array_sucursales=22-1-6,19-1-03296,12-1-97,10-1-268,22-1-16,19-1-00973,12-1-99,22-1-20,19-1-00812,22-1-3,22-1-24,24-1-292,22-1-18,22-1-17,10-1-32,22-1-1,22-1-31,12-1-95,19-1-00983,12-1-165,10-1-33,22-1-26,10-1-41,9-3-5218,19-1-00989,19-1-00959,22-1-5,22-1-11,12-1-96,16-1-1202"));case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=n(11),j=n.n(v),O=n(12),E=n.n(O);n(24);var g=function(e){return r.a.createElement("div",{className:"scanner-layout-wrapper text-center"},e.children)},y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).setRef=function(e){n.webcam=e},n.state={codigo:!1},n.getScreenshot=n.getScreenshot.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"scanImage",value:function(e){j.a.decodeSingle({decoder:{readers:["ean_reader"]},locate:!0,src:e},function(e){e&&e.codeResult?this.props.onSuccess(e.codeResult.code):this.props.onFail({error:"NOT_DECODED"})}.bind(this))}},{key:"getScreenshot",value:function(){this.webcam.getScreenshot()?this.scanImage(this.webcam.getScreenshot()):this.props.onFail({error:"NOT_CAPTURED"})}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(E.a,{audio:!1,ref:this.setRef,screenshotFormat:"image/jpeg",videoConstraints:{width:{min:640},height:{min:480},facingMode:"environment",aspectRatio:{min:1,max:2}}}),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.getScreenshot},"Escanear"))}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).onSuccess=n.onSuccess.bind(Object(p.a)(n)),n.onFail=n.onFail.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onSuccess",value:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,f.getProducto(t);case 3:n=e.sent,this.props.producto(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getProducto(7790040931206);case 2:t=e.sent,this.props.producto(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onFail",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement(y,{onFail:this.onFail,onSuccess:this.onSuccess})}}]),t}(c.Component);n(25);var w=function(e){return r.a.createElement("div",{className:"product-detail-wrapper"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.producto.nombre,className:"card-img-top",src:"https://imagenes.preciosclaros.gob.ar/productos/".concat(e.producto.id,".jpg")}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.producto.nombre),r.a.createElement("p",{className:"card-text"},e.producto.marca),r.a.createElement("p",null,r.a.createElement("small",null,"Precio Minimo")," ",r.a.createElement("br",null),e.producto.precioMin),r.a.createElement("p",null,r.a.createElement("small",null,"Precio M\xe1ximo")," ",r.a.createElement("br",null),e.producto.precioMax))))},S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.producto)}},{key:"render",value:function(){return r.a.createElement(w,this.props.producto)}}]),t}(c.Component),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={producto:!1},n.producto=n.producto.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"producto",value:function(e){this.setState({producto:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},!this.state.producto&&r.a.createElement(k,{producto:this.producto}),this.state.producto&&r.a.createElement(S,{producto:this.state.producto}))}}]),t}(c.Component);o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6f12e025.chunk.js.map