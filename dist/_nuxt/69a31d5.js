(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{392:function(t,e,r){"use strict";r.r(e);r(27),r(28),r(42),r(43),r(29),r(13),r(30);var n=r(16),o=r(2),c=r(25);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var f=o.a.extend({name:"CartPage",layout:"base",computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(c.c)({favoriteItems:"favorites/getItems"}))}),O=f,v=r(17),component=Object(v.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("client-only",[t.favoriteItems.length>0?e("section",{staticClass:"cart"},[e("h2",[t._v("Favorites")]),t._v(" "),e("div",{staticClass:"cart__list"},t._l(t.favoriteItems,(function(t){return e("Product",{key:t.key,attrs:{product:t}})})),1)]):e("section",[e("p",[t._v("Favorites are empty")]),t._v(" "),e("NuxtLink",{attrs:{to:"/products"}},[t._v("View products")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Product:r(167).default})}}]);