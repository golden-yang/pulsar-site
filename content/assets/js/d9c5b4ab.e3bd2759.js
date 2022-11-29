"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4227],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:d,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[y,P]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=N[d];null!=e&&e!==y&&k.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==y&&(T(t),P(n),null!=d&&v(d,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:I,onClick:C},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},87089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={id:"admin-api-overview",title:"Pulsar admin interface",sidebar_label:"Overview"},s=void 0,u={unversionedId:"admin-api-overview",id:"version-2.2.0/admin-api-overview",title:"Pulsar admin interface",description:"The Pulsar admin interface enables you to manage all important entities in a Pulsar instance, such as tenants, topics, and namespaces.",source:"@site/versioned_docs/version-2.2.0/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/2.2.0/admin-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-overview.md",tags:[],version:"2.2.0",frontMatter:{id:"admin-api-overview",title:"Pulsar admin interface",sidebar_label:"Overview"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"WebSocket",permalink:"/docs/2.2.0/client-libraries-websocket"},next:{title:"Clusters",permalink:"/docs/2.2.0/admin-api-clusters"}},p={},m=[{value:"Admin setup",id:"admin-setup",level:2},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Pulsar admin interface enables you to manage all important entities in a Pulsar instance, such as tenants, topics, and namespaces."),(0,r.kt)("p",null,"You can interact with the admin interface via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, which is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," folder of your Pulsar installation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin\n\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HTTP calls, which are made against the admin ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API provided by Pulsar brokers. For some RESTful APIs, they might be redirected to the owner brokers for serving with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"},(0,r.kt)("inlineCode",{parentName:"a"},"307 Temporary Redirect")),", hence the HTTP callers should handle ",(0,r.kt)("inlineCode",{parentName:"p"},"307 Temporary Redirect"),". If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," commands, you should specify ",(0,r.kt)("inlineCode",{parentName:"p"},"-L")," to handle redirections."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Java client interface."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"The REST API is the admin interface"),". Both the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool and the Java client use the REST API. If you implement your own admin interface client, you should use the REST API. ")),(0,r.kt)("h2",{id:"admin-setup"},"Admin setup"),(0,r.kt)("p",null,"Each of the three admin interfaces (the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, and the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.2.0"},"Java admin API"),") requires some special setup if you have enabled authentication in your Pulsar instance."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"If you have enabled authentication, you need to provide an auth configuration to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool. By default, the configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is in the ",(0,r.kt)("a",{parentName:"p",href:"reference-configuration.md#client"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. The following are the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authParams"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useTls"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,"You can find details for the REST API exposed by Pulsar brokers in this ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),".")),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"To use the Java admin API, instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, and specify a URL for a Pulsar broker and a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder"),". The following is a minimal example using ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')),(0,r.kt)("p",null,"If you use multiple brokers, you can use multi-host like Pulsar service. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')))),(0,r.kt)("h2",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,r.kt)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,r.kt)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Truncate to 63 characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Underscores (_)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dots (.) ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,r.kt)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#configure-kubernetes-runtime"},"here"),"."))))}d.isMDXComponent=!0}}]);