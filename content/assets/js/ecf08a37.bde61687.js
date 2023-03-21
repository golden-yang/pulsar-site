"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"getting-started-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"getting-started-docker"},o=void 0,l={unversionedId:"getting-started-docker",id:"version-2.8.x/getting-started-docker",title:"Set up a standalone Pulsar in Docker",description:"For local development and testing, you can run Pulsar in standalone",source:"@site/versioned_docs/version-2.8.x/getting-started-docker.md",sourceDirName:".",slug:"/getting-started-docker",permalink:"/docs/2.8.x/getting-started-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/getting-started-docker.md",tags:[],version:"2.8.x",frontMatter:{id:"getting-started-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"getting-started-docker"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/docs/2.8.x/getting-started-standalone"},next:{title:"Run Pulsar in Kubernetes",permalink:"/docs/2.8.x/getting-started-helm"}},i={},c=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For local development and testing, you can run Pulsar in standalone\nmode on your own machine within a Docker container."),(0,a.kt)("p",null,"If you have not installed Docker, download it following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,a.kt)("h2",{id:"start-pulsar-in-docker"},"Start Pulsar in Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For macOS, Linux, and Windows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:2.8.4 \\\nbin/pulsar standalone\n")))),(0,a.kt)("p",null,"A few things to note about this command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes to not start "fresh" every\ntime the container is restarted. For details on the volumes, you can use ',(0,a.kt)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>")),(0,a.kt)("li",{parentName:"ul"},"For Docker on Windows make sure to configure it to use Linux containers")),(0,a.kt)("p",null,"If you start Pulsar successfully, you will see ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2017-08-09 22:34:04,030 - INFO  - [main:WebService@213] - Web Service started at http://127.0.0.1:8080\n2017-08-09 22:34:04,038 - INFO  - [main:PulsarService@335] - messaging service is ready, bootstrap service on port=8080, broker url=pulsar://127.0.0.1:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@4db60246\n...\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When you start a local standalone cluster, a ",(0,a.kt)("inlineCode",{parentName:"p"},"public/default")," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/concepts-messaging#topics"},"Topics"),".")),(0,a.kt)("h2",{id:"use-pulsar-in-docker"},"Use Pulsar in Docker"),(0,a.kt)("p",null,"Pulsar offers client libraries for ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/client-libraries-java"},"Java"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/client-libraries-go"},"Go"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/client-libraries-python"},"Python"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,a.kt)("p",null,"The following example will guide you to get started with Pulsar quickly by using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/client-libraries-python"},"Python"),"\nclient API."),(0,a.kt)("p",null,"Install the Pulsar Python client library directly from ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client\n")),(0,a.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,a.kt)("p",null,"Create a consumer and subscribe to the topic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n")),(0,a.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,a.kt)("p",null,"Now start a producer to send some test messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n")),(0,a.kt)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,a.kt)("p",null,"In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.8.x/admin-api-overview"},"Admin API Overview"),"."),(0,a.kt)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n")),(0,a.kt)("p",null,"The output is something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "averageMsgSize": 0.0,\n  "msgRateIn": 0.0,\n  "msgRateOut": 0.0,\n  "msgThroughputIn": 0.0,\n  "msgThroughputOut": 0.0,\n  "publishers": [\n    {\n      "address": "/172.17.0.1:35048",\n      "averageMsgSize": 0.0,\n      "clientVersion": "1.19.0-incubating",\n      "connectedSince": "2017-08-09 20:59:34.621+0000",\n      "msgRateIn": 0.0,\n      "msgThroughputIn": 0.0,\n      "producerId": 0,\n      "producerName": "standalone-0-1"\n    }\n  ],\n  "replication": {},\n  "storageSize": 16,\n  "subscriptions": {\n    "my-sub": {\n      "blockedSubscriptionOnUnackedMsgs": false,\n      "consumers": [\n        {\n          "address": "/172.17.0.1:35064",\n          "availablePermits": 996,\n          "blockedConsumerOnUnackedMsgs": false,\n          "clientVersion": "1.19.0-incubating",\n          "connectedSince": "2017-08-09 21:05:39.222+0000",\n          "consumerName": "166111",\n          "msgRateOut": 0.0,\n          "msgRateRedeliver": 0.0,\n          "msgThroughputOut": 0.0,\n          "unackedMessages": 0\n        }\n      ],\n      "msgBacklog": 0,\n      "msgRateExpired": 0.0,\n      "msgRateOut": 0.0,\n      "msgRateRedeliver": 0.0,\n      "msgThroughputOut": 0.0,\n      "type": "Exclusive",\n      "unackedMessages": 0\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);