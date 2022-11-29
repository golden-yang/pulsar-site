"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1839],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>c});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),p=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},o=function(e){var a=p(e.components);return t.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,v=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?t.createElement(v,s(s({ref:a},o),{},{components:n})):t.createElement(v,s({ref:a},o))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(87462),r=n(67294),l=n(86010),s=n(72389),i=n(67392),u=n(7094),p=n(12466);const o="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:a,block:n,defaultValue:s,values:d,groupId:c,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),k=(0,i.l)(b,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==T&&!b.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,u.U)(),[y,N]=(0,r.useState)(T),A=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=c){const e=h[c];null!=e&&e!==y&&b.some((a=>a.value===e))&&N(e)}const I=e=>{const a=e.currentTarget,n=A.indexOf(a),t=b[n].value;t!==y&&(E(a),N(t),null!=c&&g(c,String(t)))},x=e=>{let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=A.indexOf(e.currentTarget)+1;a=A[n]??A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;a=A[n]??A[A.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},v)},b.map((e=>{let{value:a,label:n,attributes:s}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>A.push(e),onKeyDown:x,onClick:I},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":y===a})}),n??a)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function c(e){const a=(0,s.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},99153:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var t=n(87462),r=(n(67294),n(3905)),l=n(65488),s=n(85162);const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},u=void 0,p={unversionedId:"admin-api-tenants",id:"version-2.7.1/admin-api-tenants",title:"Managing Tenants",description:"Tenants, like namespaces, can be managed using the admin API. There are currently two configurable aspects of tenants:",source:"@site/versioned_docs/version-2.7.1/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/2.7.1/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-tenants.md",tags:[],version:"2.7.1",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},sidebar:"version-2.7.1/docsSidebar",previous:{title:"Clusters",permalink:"/docs/2.7.1/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/2.7.1/admin-api-brokers"}},o={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],d={toc:m};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin roles"),(0,r.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,r.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"You can list all of the tenants associated with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-list"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants list\nmy-tenant-1\nmy-tenant-2\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.1&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenants();\n\n")))),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"You can create a new tenant."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant\n\n")),(0,r.kt)("p",null,"When creating a tenant, you can assign admin roles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--admin-roles")," flag. You can specify multiple roles as a comma-separated list. Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.1&apiversion=v2#operation/createTenant"},"POST /admin/v2/tenants/:tenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().createTenant(tenantName, tenantInfo);\n\n")))),(0,r.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,r.kt)("p",null,"You can fetch the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-get"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n'))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.1&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenantInfo(tenantName);\n\n")))),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants delete my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.1&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.Tenants().deleteTenant(tenantName);\n\n")))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"You can update a tenant's configuration."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-update"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants update my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.1&apiversion=v2#operation/updateTenant"},"DELETE /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().updateTenant(tenantName, tenantInfo);\n\n")))))}c.isMDXComponent=!0}}]);