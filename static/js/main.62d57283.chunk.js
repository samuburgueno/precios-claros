(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),o=n.n(c),i=n(1),u=n(2),s=n(5),l=n(4),d=n(3),p=n(6),m=n(8),h=n.n(m),b=n(9),f=new(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"getProducto",value:function(){var e=Object(b.a)(h.a.mark(function e(t){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://d3e6htiiul5ek9.cloudfront.net","/prod/producto?limit=30&id_producto=").concat(t,"&").concat("array_sucursales=22-1-6,19-1-03296,12-1-97,10-1-268,22-1-16,19-1-00973,12-1-99,22-1-20,19-1-00812,22-1-3,22-1-24,24-1-292,22-1-18,22-1-17,10-1-32,22-1-1,22-1-31,12-1-95,19-1-00983,12-1-165,10-1-33,22-1-26,10-1-41,9-3-5218,19-1-00989,19-1-00959,22-1-5,22-1-11,12-1-96,16-1-1202"));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=n(7),O=n.n(v),j=(n(20),{inputStream:{type:"LiveStream",constraints:{width:{min:640},height:{min:480},facingMode:"environment",aspectRatio:{min:1,max:2}}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:4,frequency:100,decoder:{readers:["ean_reader"],multiple:!1},locate:!0}),E={init:function(){var e=this;O.a.init(j,function(t){if(t)return e.handleError(t);O.a.start()})},handleError:function(e){console.log(e)}};O.a.onProcessed(function(e){var t=O.a.canvas.ctx.overlay,n=O.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,parseInt(n.getAttribute("width")),parseInt(n.getAttribute("height"))),e.boxes.filter(function(t){return t!==e.box}).forEach(function(e){O.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})})),e.box&&O.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&O.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))}),O.a.onDetected(function(e){console.log(e);var t=e.codeResult.code;this.setState({codigo:t})});var g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={codigo:0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){E.init()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"interactive",className:"viewport"}),a.a.createElement("h1",null,this.state.codigo))}}]),t}(r.Component);n(21);var y=function(e){return a.a.createElement("div",{className:"scanner-layout-wrapper text-center"},e.children)},k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).setRef=function(e){n.webcam=e},n.state={codigo:!1},n.getScreenshot=n.getScreenshot.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"scanImage",value:function(e){g.decodeSingle({decoder:{readers:["ean_reader"]},locate:!0,src:e},function(e){e&&e.codeResult?this.props.onSuccess(e.codeResult.code):this.props.onFail({error:"NOT_DECODED"})}.bind(this))}},{key:"getScreenshot",value:function(){this.webcam.getScreenshot()?this.scanImage(this.webcam.getScreenshot()):this.props.onFail({error:"NOT_CAPTURED"})}},{key:"render",value:function(){return a.a.createElement(y,null,a.a.createElement(g,null))}}]),t}(a.a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).onSuccess=n.onSuccess.bind(Object(d.a)(n)),n.onFail=n.onFail.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onSuccess",value:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,f.getProducto(t);case 3:n=e.sent,this.props.producto(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onTest",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 7793433000629,e.next=3,f.getProducto(7793433000629);case 3:t=e.sent,this.props.producto(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){}},{key:"onFail",value:function(e){alert(e.code)}},{key:"render",value:function(){return a.a.createElement(k,{onFail:this.onFail,onSuccess:this.onSuccess})}}]),t}(r.Component);n(22);var x=function(e){return a.a.createElement("div",{className:"product-detail-wrapper"},a.a.createElement("div",{className:"card"},a.a.createElement("img",{alt:e.producto.nombre,className:"card-img-top",src:"https://imagenes.preciosclaros.gob.ar/productos/".concat(e.producto.id,".jpg")}),a.a.createElement("div",{className:"card-body"},a.a.createElement("h5",{className:"card-title"},e.producto.nombre),a.a.createElement("p",{className:"card-text"},e.producto.marca),a.a.createElement("p",null,a.a.createElement("small",null,"Precio Minimo")," ",a.a.createElement("br",null),e.producto.precioMin),a.a.createElement("p",null,a.a.createElement("small",null,"Precio M\xe1ximo")," ",a.a.createElement("br",null),e.producto.precioMax),a.a.createElement("button",{className:"btn btn-primary",onClick:e.nuevoEscaneo},"Escanear otro"))))},S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).nuevoEscaneo=n.nuevoEscaneo.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"nuevoEscaneo",value:function(){this.props.borrarProducto()}},{key:"render",value:function(){return a.a.createElement(x,Object.assign({nuevoEscaneo:this.nuevoEscaneo},this.props.producto))}}]),t}(r.Component),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={producto:!1},n.producto=n.producto.bind(Object(d.a)(n)),n.borrarProducto=n.borrarProducto.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"producto",value:function(e){this.setState({producto:e})}},{key:"borrarProducto",value:function(){this.setState({producto:!1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},!this.state.producto&&a.a.createElement(w,{producto:this.producto}),this.state.producto&&a.a.createElement(S,{borrarProducto:this.borrarProducto,producto:this.state.producto}))}}]),t}(r.Component);o.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.62d57283.chunk.js.map