(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(t,e,r){"use strict";e.a=function(t){var e=t.$axios;t.redirect;e.setBaseURL("https://dummyjson.com")}},165:function(t,e,r){"use strict";var n=r(238);e.a=function(t){var e=t.store;new n.a({storage:window.localStorage,modules:["cart","favorites"]}).plugin(e)}},167:function(t,e,r){"use strict";r.r(e);r(166),r(27),r(28),r(42),r(43),r(29),r(30);var n=r(16),o=(r(243),r(44),r(13),r(25));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={props:["product"],computed:l(l({},Object(o.c)({cartItems:"cart/getItems",favoriteItems:"favorites/getItems"})),{},{productId:function(){return this.$props.product.id},inFavorites:function(){var t=this;return this.favoriteItems.find((function(e){return e.id===t.productId}))},inCartQuantity:function(){return this.cartItem.quantity},cartItem:function(){var t=this;return this.cartItems.find((function(e){return e.id===t.productId}))}}),methods:l(l({},Object(o.d)({cartAddItem:"cart/addItem",cartRemoveItem:"cart/removeItem",cartQuantityChange:"cart/changeItemQuantity",favoritesAddItem:"favorites/addItem",favoritesRemoveItem:"favorites/removeItem"})),{},{addToCartHandler:function(t){this.cartAddItem({name:this.$props.product.name,id:this.$props.product.id,price:this.$props.product.price,thumbnail:this.$props.product.thumbnail})},quantityChangeHandler:function(t){t<1||!t?this.cartRemoveItem(this.productId):this.cartQuantityChange({id:this.productId,quantity:t})},favoriteHandler:function(){if(this.inFavorites)this.favoritesRemoveItem(this.productId);else{var t=this.$props.product,e=t.id,r=t.price,n=t.thumbnail;this.favoritesAddItem({id:e,price:r,thumbnail:n})}}})},f=(r(359),r(17)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",t._b({staticClass:"product"},"div",t.$attrs,!1),[e("div",{staticClass:"product__img"},[e("button",{staticClass:"product__img-favorite",class:{added:t.inFavorites},on:{click:t.favoriteHandler}},[e("svg",{staticClass:"size-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}})])]),t._v(" "),e("img",{attrs:{height:"200px",width:"250px",src:t.product.thumbnail,alt:t.product.title}})]),t._v(" "),e("p",{staticClass:"product__title"},[t._v(t._s(t.product.title))]),t._v(" "),e("div",{staticClass:"product__wrapper"},[e("p",{staticClass:"product__price"},[t._v(t._s(t.product.price)+"$")]),t._v(" "),t.cartItem?e("div",{staticClass:"product__cart"},[e("button",{on:{click:function(e){return t.quantityChangeHandler(t.inCartQuantity-1)}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"product__cart-input",attrs:{type:"number"},domProps:{value:t.inCartQuantity},on:{blur:function(e){return t.quantityChangeHandler(Number(e.target.value))}}}),t._v(" "),e("button",{on:{click:function(e){return t.quantityChangeHandler(t.inCartQuantity+1)}}},[t._v("+")])]):e("button",{on:{click:function(e){return t.addToCartHandler(t.product)}}},[t._v("Add to Cart")])])])}),[],!1,null,"9111f7e6",null);e.default=component.exports},220:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("17cac216",content,!0,{sourceMap:!1})},221:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("4c0c7014",content,!0,{sourceMap:!1})},222:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("1277ed06",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("60ce5590",content,!0,{sourceMap:!1})},224:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("122ed880",content,!0,{sourceMap:!1})},233:function(t,e,r){"use strict";r.r(e);r(27),r(28),r(42),r(43),r(29),r(13),r(30);var n=r(16),o=r(25);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l={name:"Header",computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.c)({cartTotalQuantity:"cart/getTotalQuantity"}))},d=l,f=(r(317),r(17)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("NuxtLink",{staticClass:"header__logo",attrs:{to:"/products"}},[t._v("Logo")]),t._v(" "),e("nav",{staticClass:"header__links"},[e("NuxtLink",{staticClass:"header__icon",attrs:{to:"/cart"}},[t.cartTotalQuantity>0?e("span",{staticClass:"header__cart-count"},[t._v(t._s(t.cartTotalQuantity))]):t._e(),t._v(" "),e("svg",{staticClass:"header__icon-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}})])]),t._v(" "),e("NuxtLink",{staticClass:"header__icon",attrs:{to:"/favorites"}},[e("svg",{staticClass:"header__icon-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#990000"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}})])])],1)],1)}),[],!1,null,"05517e6a",null);e.default=component.exports;installComponents(component,{Header:r(233).default})},241:function(t,e,r){"use strict";var n=r(2),o=Object(n.b)({name:"base.vue"}),c=(r(315),r(17)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"layout"},[e("client-only",[e("Header"),t._v(" "),e("main",{staticClass:"layout__content"},[e("Nuxt")],1),t._v(" "),e("Footer")],1)],1)}),[],!1,null,"0eb364fd",null);e.a=component.exports;installComponents(component,{Header:r(233).default,Footer:r(385).default})},244:function(t,e,r){r(245),t.exports=r(246)},311:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("e322fe0c",content,!0,{sourceMap:!1})},312:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),n.locals={},t.exports=n},313:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("67ff0ed4",content,!0,{sourceMap:!1})},314:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,"*,:after,:before{box-sizing:border-box;margin:0;padding:0}",""]),n.locals={},t.exports=n},315:function(t,e,r){"use strict";r(220)},316:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".layout[data-v-0eb364fd]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}.layout__content[data-v-0eb364fd]{flex-grow:1;margin:0 auto;max-width:1400px;width:90%}",""]),n.locals={},t.exports=n},317:function(t,e,r){"use strict";r(221)},318:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".header[data-v-05517e6a]{display:flex;justify-content:space-between;padding:24px}.header__links[data-v-05517e6a]{display:flex;gap:16px}.header__icon[data-v-05517e6a]{display:flex;gap:12px}.header__icon-logo[data-v-05517e6a]{height:24px;width:24px;stroke:#000}",""]),n.locals={},t.exports=n},319:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return d})),r.d(e,"mutations",(function(){return f}));var n=r(16);r(28),r(320),r(27),r(242),r(42),r(43),r(29),r(30),r(13);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=function(){return{items:[]}},d={getItems:function(t){return t.items},getTotalQuantity:function(t){return t.items.reduce((function(t,e){return t+=e.quantity}),0)},getTotalPrice:function(t){return t.items.reduce((function(t,e){return t+=e.quantity*e.price}),0).toFixed(3)}},f={addItem:function(t,e){t.items.push(c(c({},e),{},{quantity:1}))},removeItem:function(t,e){t.items=t.items.filter((function(t){return t.id!==e}))},changeItemQuantity:function(t,e){var r=e.id,n=e.quantity,o=t.items.findIndex((function(t){return t.id===r}));-1!==o&&(t.items[o].quantity=n)}}},321:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"mutations",(function(){return d}));r(27),r(42),r(43),r(29),r(30);var n=r(16);r(28),r(13);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var c=function(){return{items:[]}},l={getItems:function(t){return t.items}},d={addItem:function(t,e){t.items.push(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e))},removeItem:function(t,e){t.items=t.items.filter((function(t){return t.id!==e}))}}},322:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"actions",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"getters",(function(){return f}));var n=r(103),o=r(10),c=(r(28),r(64),r(65),r(323),r(29),r(13),r(327),r(84),r(47),r(330),r(331),r(332),r(336),r(337),r(338),r(339),r(341),r(343),r(345),r(347),r(348),r(349),r(350),r(351),r(353),r(48),r(80),r(384),r(167),function(){return{products:[],isLoading:!1,error:null,filters:{searchValue:"",selectedCategory:null,orderBy:null}}}),l={fetchProducts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,c.isLoading=!0,r.next=5,e.$axios.get("/products");case 5:return o=r.sent,data=o.data,n("setProducts",data.products),r.abrupt("return",data);case 11:r.prev=11,r.t0=r.catch(1),c.error=r.t0;case 14:return r.prev=14,c.isLoading=!1,r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[1,11,14,17]])})))()}},d={setProducts:function(t,e){t.products=e},setSearchValue:function(t,e){t.filters.searchValue=e},setSelectedCategory:function(t,e){t.filters.selectedCategory=e},setOrderBy:function(t,e){t.filters.orderBy=e}},f={getAvailableCategories:function(t){return Object(n.a)(new Set(t.products.map((function(t){return t.category}))))},getFilteredProducts:function(t){var e=JSON.parse(JSON.stringify(t.products)),r=t.filters,n=r.searchValue,o=r.orderBy,c=r.selectedCategory;return null!=n&&n.length&&(e=e.filter((function(t){var e;return null===(e=t.title)||void 0===e?void 0:e.toLowerCase().includes(n.toLowerCase())}))),c&&(e=e.filter((function(t){return t.category===c}))),"priceAsc"===o&&e.sort((function(a,b){return a.price-b.price})),"priceDesc"===o&&e.sort((function(a,b){return b.price-a.price})),e},getIsLoading:function(t){return t.isLoading}}},355:function(t,e,r){"use strict";r(222)},356:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".categories__item[data-v-897087d0]{display:block;margin-bottom:10px;text-transform:capitalize;width:100%}.products[data-v-897087d0]{display:grid;grid-template-columns:100px 1fr;grid-gap:40px;gap:40px}.products__filter[data-v-897087d0]{display:flex;gap:8px;margin-bottom:12px}.products__list[data-v-897087d0]{flex-grow:1;transition:all .3s;grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fill,250px)}",""]),n.locals={},t.exports=n},357:function(t,e,r){"use strict";r(223)},358:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".loader[data-v-ecbb290a]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;height:100vh;justify-content:center;left:0;position:fixed;right:0;top:0;width:100vw}.loader__content[data-v-ecbb290a]{animation:l1-ecbb290a 1s infinite;aspect-ratio:1;background:#000;border-radius:50%;box-shadow:0 0 0 0 rgba(0,0,0,.267);width:20px}@keyframes l1-ecbb290a{to{box-shadow:0 0 0 30px transparent}}",""]),n.locals={},t.exports=n},359:function(t,e,r){"use strict";r(224)},360:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".product__title[data-v-9111f7e6]{margin-bottom:12px}.product__img[data-v-9111f7e6]{position:relative}.product__img-favorite[data-v-9111f7e6]{background:transparent;border:none;cursor:pointer;left:4px;position:absolute;top:4px}.product__img-favorite.added svg[data-v-9111f7e6]{fill:#900}.product__img-favorite svg[data-v-9111f7e6]{height:24px;width:24px;stroke:#900;transition:fill .2s}.product__wrapper[data-v-9111f7e6]{align-items:center;display:flex;gap:12px;justify-content:space-between}.product__cart[data-v-9111f7e6]{align-items:center;display:flex;flex:0 0 60%;gap:4px;justify-content:flex-end}.product__cart-input[data-v-9111f7e6]{display:block;flex-shrink:1;max-width:50px;text-align:center}",""]),n.locals={},t.exports=n},384:function(t,e,r){"use strict";r.r(e);r(27),r(28),r(42),r(43),r(29),r(13),r(30);var n=r(16),o=r(2),c=r(25);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=o.a.extend({name:"ProductsPage",layout:"base",computed:d({products:function(){return this.$store.state.products.products}},Object(c.c)({categories:"products/getAvailableCategories",filteredProducts:"products/getFilteredProducts",productsIsLoading:"products/getIsLoading"})),methods:d(d({},Object(c.b)({fetchProducts:"products/fetchProducts"})),Object(c.d)({setSearchValue:"products/setSearchValue",setSelectedCategory:"products/setSelectedCategory",setOrderBy:"products/setOrderBy"})),mounted:function(){this.fetchProducts()}}),v=(r(355),r(17)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"products"},[e("client-only",[t.productsIsLoading?[e("Loader")]:[e("aside",{staticClass:"categories"},[t.categories.length?e("button",{staticClass:"categories__item",on:{click:function(e){return t.setSelectedCategory(null)}}},[t._v("All")]):t._e(),t._v(" "),t._l(t.categories,(function(r){return e("button",{key:r,staticClass:"categories__item",on:{click:function(e){return t.setSelectedCategory(r)}}},[t._v(t._s(r))])}))],2),t._v(" "),e("div",{staticClass:"products__wrapper"},[e("div",{staticClass:"products__filter"},[e("select",{on:{change:function(e){return t.setOrderBy(e.target.value)}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:null}},[t._v("Sort by")]),t._v(" "),e("option",{domProps:{value:null}},[t._v("Default")]),t._v(" "),e("option",{attrs:{value:"priceAsc"}},[t._v("Price: Low to high")]),t._v(" "),e("option",{attrs:{value:"priceDesc"}},[t._v("Price: High to low")])]),t._v(" "),e("input",{attrs:{placeholder:"Search by name"},on:{input:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"trim",void 0,e.key,void 0)?null:function(e){return t.setSearchValue(e.target.value)}.apply(null,arguments)}}})]),t._v(" "),e("div",{staticClass:"products__list"},t._l(t.filteredProducts,(function(t){return e("Product",{key:t.id,attrs:{product:t}})})),1)])]],2)],1)}),[],!1,null,"897087d0",null);e.default=component.exports;installComponents(component,{Loader:r(386).default,Product:r(167).default})},385:function(t,e,r){"use strict";r.r(e);var n={name:"Footer"},o=r(17),component=Object(o.a)(n,(function(){return(0,this._self._c)("div",[this._v("\n  this is footer\n")])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,r){"use strict";r.r(e);var n={name:"Loader"},o=(r(357),r(17)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loader"},[t("div",{staticClass:"loader__content"})])}],!1,null,"ecbb290a",null);e.default=component.exports}},[[244,6,1,7]]]);