import{a,b as i,c as t,d as e,i as n,s,e as o,S as d,f as h,h as r,j as g,l as c,q as f,v as u,y as l,z as p,A as m,N as v}from"./index.cb477d3d.js";import{a as $}from"./app.bab952e3.js";import"./_commonjsHelpers.24e35f0d.js";import{H as C,g as _}from"./HighlightedCode.9032ed20.js";function j(a){var i,t,e=new C({props:{highlightedCode:a.highlightedCode}});return{c:function(){i=h("div"),e.$$.fragment.c()},l:function(a){i=r(a,"DIV",{},!1);var t=g(i);e.$$.fragment.l(t),t.forEach(c)},m:function(a,n){f(a,i,n),u(e,i,null),t=!0},p:function(a,i){var t={};a.highlightedCode&&(t.highlightedCode=i.highlightedCode),e.$set(t)},i:function(a){t||(l(e.$$.fragment,a),t=!0)},o:function(a){p(e.$$.fragment,a),t=!1},d:function(a){a&&c(i),m(e)}}}function b(a,i,t){var e,n=$(),s=(n.preloading,n.page);n.session;v(a,s,function(a){t("$page",e=a)});var o,d=i.paste_id,h=void 0===d?e.params.paste_id:d;return function(a){_(a).then(function(a){var i,e=a.data.code;i=e,t("highlightedCode",o=hljs.highlightAuto(i).value)}).catch(function(a){console.log(a)})}(h),a.$set=function(a){"paste_id"in a&&t("paste_id",h=a.paste_id)},{page:s,paste_id:h,highlightedCode:o}}export default(function(h){function r(a){var d;return i(this,r),d=t(this,e(r).call(this)),n(o(d),a,b,j,s,["paste_id"]),d}return a(r,d),r}());
