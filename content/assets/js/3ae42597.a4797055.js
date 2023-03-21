"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(o,".").concat(m)]||u[m]||s[m]||p;return a?n.createElement(y,l(l({ref:t},h),{},{components:a})):n.createElement(y,l({ref:t},h))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<p;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const p={},l=void 0,i={unversionedId:"versioned/client-python-3.1.0",id:"versioned/client-python-3.1.0",title:"client-python-3.1.0",description:"What's Changed",source:"@site/release-notes/versioned/client-python-3.1.0.md",sourceDirName:"versioned",slug:"/versioned/client-python-3.1.0",permalink:"/release-notes/versioned/client-python-3.1.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-python-3.1.0.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],h={toc:c},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wrap the interruption to a custom exception when a blocking API is interrupted by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/99"},"https://github.com/apache/pulsar-client-python/pull/99")),(0,r.kt)("li",{parentName:"ul"},"Upgrade to pulsar-client-cpp 3.1.2 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/96"},"https://github.com/apache/pulsar-client-python/pull/96")),(0,r.kt)("li",{parentName:"ul"},"Allow passing pulsar.MessageId instance to create_reader() by @erichare in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/95"},"https://github.com/apache/pulsar-client-python/pull/95")),(0,r.kt)("li",{parentName:"ul"},"Add Human-readable description of MessageId object by @erichare in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/93"},"https://github.com/apache/pulsar-client-python/pull/93")),(0,r.kt)("li",{parentName:"ul"},"Access name attribute of any type object by @erichare in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/92"},"https://github.com/apache/pulsar-client-python/pull/92")),(0,r.kt)("li",{parentName:"ul"},"Update the release process for versioning by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/91"},"https://github.com/apache/pulsar-client-python/pull/91")),(0,r.kt)("li",{parentName:"ul"},"Fix deadlock in producer.send_async by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/87"},"https://github.com/apache/pulsar-client-python/pull/87")),(0,r.kt)("li",{parentName:"ul"},"Upgrade to pulsar-client-cpp 3.1.1 by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/86"},"https://github.com/apache/pulsar-client-python/pull/86")),(0,r.kt)("li",{parentName:"ul"},"Add support for Python 3.11 by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/83"},"https://github.com/apache/pulsar-client-python/pull/83")),(0,r.kt)("li",{parentName:"ul"},"Add the release process for Python client by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/68"},"https://github.com/apache/pulsar-client-python/pull/68")),(0,r.kt)("li",{parentName:"ul"},"Add a script to download and stage artifacts by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/65"},"https://github.com/apache/pulsar-client-python/pull/65")),(0,r.kt)("li",{parentName:"ul"},"Bump version to 3.1.0a1 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/63"},"https://github.com/apache/pulsar-client-python/pull/63"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python/compare/v3.0.0...v3.1.0"},"https://github.com/apache/pulsar-client-python/compare/v3.0.0...v3.1.0")))}s.isMDXComponent=!0}}]);