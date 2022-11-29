"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),c=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:d,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.U)(),[w,C]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==w&&(T(t),C(n),null!=d&&y(d,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:P},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},61976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},i=void 0,c={unversionedId:"client-libraries-cpp",id:"version-2.7.5/client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create producers, consumers, and readers.",source:"@site/versioned_docs/version-2.7.5/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.7.5/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/client-libraries-cpp.md",tags:[],version:"2.7.5",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Python",permalink:"/docs/2.7.5/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/2.7.5/client-libraries-node"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"Source",id:"source",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Create a producer",id:"create-a-producer",level:2},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",level:2},{value:"Schema",id:"schema",level:2},{value:"Create producer with Avro schema",id:"create-producer-with-avro-schema",level:3},{value:"Create consumer with Avro schema",id:"create-consumer-with-avro-schema",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use a Pulsar C++ client to create producers, consumers, and readers."),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of a C++ client are thread-safe. You can read the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.7.5"},"API docs")," for the C++ client."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use one of the following methods to install a Pulsar C++ client."),(0,r.kt)("h3",{id:"brew"},"Brew"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install the latest tagged version with the library and headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install libpulsar\n")),(0,r.kt)("h3",{id:"deb"},"Deb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download any one of the Deb packages:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.5/DEB/apache-pulsar-client.deb\n")),(0,r.kt)("p",null,"This package contains shared libraries ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(o.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.5/DEB/apache-pulsar-client-dev.deb\n")),(0,r.kt)("p",null,"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install ./apache-pulsar-client*.deb\n")),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("h3",{id:"rpm"},"RPM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download any one of the RPM packages:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.5/RPMS/apache-pulsar-client-2.7.5-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains shared libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(o.Z,{value:"client-debuginfo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.5/RPMS/apache-pulsar-client-debuginfo-2.7.5-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains debug symbols for ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so"),".")),(0,r.kt)(o.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.5/RPMS/apache-pulsar-client-devel-2.7.5-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh apache-pulsar-client*.rpm\n")),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,r.kt)("inlineCode",{parentName:"p"},"ldconfig")," first.")),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"For how to build Pulsar C++ client on different platforms from source code, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp#compilation"},"compliation"),"."),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,r.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, you can use the Pulsar URI scheme. The default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),". The following is an example for localhost."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.kt)("p",null,"In a Pulsar cluster in production, the URL looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.kt)("p",null,"If you use TLS authentication, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"To connect to Pulsar as a consumer, you need to create a consumer on the C++ client. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscription-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"To connect to Pulsar as a producer, you need to create a producer on the C++ client. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,r.kt)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,r.kt)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')),(0,r.kt)("p",null,"For complete examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"C++ client examples"),"."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"This section describes some examples about schema. For more information about schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/schema-get-started"},"Pulsar schema"),"."),(0,r.kt)("h3",{id:"create-producer-with-avro-schema"},"Create producer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a producer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n\n')),(0,r.kt)("h3",{id:"create-consumer-with-avro-schema"},"Create consumer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a consumer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n\n')))}d.isMDXComponent=!0}}]);