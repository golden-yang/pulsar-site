"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"release-note-guide",title:"Release Note Guide",sidebar_label:"Release Note Guide"},s=void 0,o={unversionedId:"releasing/release-note-guide",id:"releasing/release-note-guide",title:"Release Note Guide",description:"This guide explains everything about Pulsar release notes.",source:"@site/contribute/releasing/release-note-guide.md",sourceDirName:"releasing",slug:"/releasing/release-note-guide",permalink:"/contribute/releasing/release-note-guide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/releasing/release-note-guide.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1668016909,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"release-note-guide",title:"Release Note Guide",sidebar_label:"Release Note Guide"},sidebar:"sidebar",previous:{title:"Create GPG keys",permalink:"/contribute/releasing/create-gpg-keys"},next:{title:"Release Process",permalink:"/contribute/releasing/release-process"}},i={},p=[{value:"Intro to release notes",id:"intro-to-release-notes",level:2},{value:"Basic info",id:"basic-info",level:3},{value:"Maintenance info",id:"maintenance-info",level:3},{value:"Submit release notes",id:"submit-release-notes",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide explains everything about Pulsar release notes."),(0,n.kt)("h2",{id:"intro-to-release-notes"},"Intro to release notes"),(0,n.kt)("p",null,"This chapter gives an overview of Pulsar release notes."),(0,n.kt)("h3",{id:"basic-info"},"Basic info"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/"},"Pulsar release notes")," consist of the following parts."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Release note"),(0,n.kt)("th",{parentName:"tr",align:null},"Component"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/release-notes/#pulsar-release-notes"},"Pulsar Core")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},"Pulsar"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../../site2/docs/client-libraries.md"},"Pulsar Clients")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Java"),(0,n.kt)("li",null,"WebSocket"),(0,n.kt)("li",null,"C++"),(0,n.kt)("li",null,"Python"),(0,n.kt)("li",null,"Go"),(0,n.kt)("li",null,"NodeJs"),(0,n.kt)("li",null,"C#")))))),(0,n.kt)("h3",{id:"maintenance-info"},"Maintenance info"),(0,n.kt)("p",null,"For the ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/"},"Pulsar Release Note page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is generated automatically using ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/blob/main/site2/tools/release-json-gen.sh"},"release-json-gen.sh"),". For implementation details, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/wiki/PIP-112:-Generate-Release-Notes-Automatically"},"PIP 112: Generate Release Notes Automatically"),"."),(0,n.kt)("li",{parentName:"ul"},"The info is fetched from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/releases"},"Pulsar Releases Page - GitHub"),"."),(0,n.kt)("li",{parentName:"ul"},"It is updated when one of the following conditions is met:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"*A commit is pushed to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site"},"pulsar-site repo"),"."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/actions/workflows/ci-pulsar-website-docs-sync.yaml"},"Pulsar site sync job")," is performed (every 6 hours).")))),(0,n.kt)("h2",{id:"submit-release-notes"},"Submit release notes"),(0,n.kt)("p",null,"Follow the steps below to submit release notes for Pulsar and clients (",(0,n.kt)("strong",{parentName:"p"},"Java and WebSocket"),")."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For ",(0,n.kt)("strong",{parentName:"p"},"C++, Python, Go, Node.js, and C#"),", you do not need to take care of them since their release notes are synced from their repos to the ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes"},"Pulsar Release Note page"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit a PR to add ",(0,n.kt)("strong",{parentName:"p"},"separate")," release notes for Pulsar and clients (",(0,n.kt)("strong",{parentName:"p"},"Java and WebSocket"),") to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/release-notes/versioned"},"pulsar-site/site2/website-next/release-notes/versioned/"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get this PR reviewed and merged.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the release note to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases"},"Pulsar Releases Page - GitHub"),"."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Step"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar Core"),(0,n.kt)("td",{parentName:"tr",align:null},"Copy the release note content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar Clients (Java, WebSocket, ...)"),(0,n.kt)("td",{parentName:"tr",align:null},"Create independent sections for each client and copy release note content.")))),(0,n.kt)("p",{parentName:"li"},"Examples for Java clent's release note:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Java client release note example",src:a(59241).Z,width:"1992",height:"832"})),(0,n.kt)("p",{parentName:"li"},"After the new release is published, all the information about the release is automatically added to the ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/"},"Pulsar Release Note page"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether the release information is shown on the ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/"},"Pulsar Release Note page")," after the website is updated and built successfully."))))}c.isMDXComponent=!0},59241:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/release-note-guide-example-1-ede0cc2d5706f7a29a00f5fec635bbe2.png"}}]);