(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{387:function(t,r,e){var content=e(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("d3d90168",content,!0,{sourceMap:!1})},388:function(t,r,e){"use strict";e(387)},389:function(t,r,e){var n=e(49)((function(i){return i[1]}));n.push([t.i,".product.horizontal[data-v-c136e280]{align-items:center;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:24px;gap:24px}.product__title[data-v-c136e280]{margin-bottom:12px}.product__wrapper[data-v-c136e280]{align-items:center;display:flex;gap:12px;justify-content:space-between}.product__cart[data-v-c136e280]{align-items:center;display:flex;flex:0 0 60%;gap:4px}.product__cart-input[data-v-c136e280]{flex-shrink:1}",""]),n.locals={},t.exports=n},390:function(t,r,e){"use strict";e.r(r);e(166),e(27),e(28),e(42),e(43),e(29),e(30);var n=e(16),c=(e(243),e(44),e(242),e(13),e(25));function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){Object(n.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var l={props:["product"],computed:d(d({},Object(c.c)({cartItems:"cart.js/getItems"})),{},{productId:function(){return this.$props.product.id},inCartQuantity:function(){return this.cartItem.quantity},productTotalPrice:function(){return(this.product.quantity*this.product.price).toFixed(3)},cartItem:function(){var t=this;return this.cartItems.find((function(r){return r.id===t.productId}))}}),methods:d(d({},Object(c.d)({cartAddItem:"cart.js/addItem",cartRemoveItem:"cart.js/removeItem",cartQuantityChange:"cart.js/changeItemQuantity"})),{},{addToCartHandler:function(t){this.cartAddItem({name:this.$props.product.name,id:this.$props.product.id,price:this.$props.product.price,thumbnail:this.$props.product.thumbnail})},quantityChangeHandler:function(t){t<1||!t?this.cartRemoveItem(this.productId):this.cartQuantityChange({id:this.productId,quantity:t})}})},f=(e(388),e(17)),component=Object(f.a)(l,(function(){var t=this,r=t._self._c;return r("div",t._b({staticClass:"product horizontal"},"div",t.$attrs,!1),[r("div",{staticClass:"product__img"},[r("img",{attrs:{height:"200px",width:"250px",src:t.product.thumbnail}})]),t._v(" "),r("p",{staticClass:"product__title"},[t._v(t._s(t.product.title))]),t._v(" "),r("p",{staticClass:"product__price"},[t._v(t._s(t.product.price))]),t._v(" "),t.inCartQuantity>0?r("div",{staticClass:"product__cart"},[r("button",{on:{click:function(r){return t.quantityChangeHandler(t.inCartQuantity-1)}}},[t._v("-")]),t._v(" "),r("input",{staticClass:"product__cart-input",attrs:{type:"number"},domProps:{value:t.inCartQuantity},on:{blur:function(r){return t.quantityChangeHandler(Number(r.target.value))}}}),t._v(" "),r("button",{on:{click:function(r){return t.quantityChangeHandler(t.inCartQuantity+1)}}},[t._v("+")])]):r("button",[t._v("Add to Cart")]),t._v(" "),t.inCartQuantity>0?r("p",{staticClass:"product__price"},[t._v(t._s(t.productTotalPrice)+"$")]):t._e(),t._v(" "),t.inCartQuantity>0?r("button",{on:{click:function(r){return t.cartRemoveItem(t.product.id)}}},[t._v("remove")]):t._e()])}),[],!1,null,"c136e280",null);r.default=component.exports}}]);