"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview"},o=void 0,s={unversionedId:"security-overview",id:"security-overview",title:"Pulsar security overview",description:"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial. This chapter describes the main security controls that Pulsar uses to help protect your data.",source:"@site/docs/security-overview.md",sourceDirName:".",slug:"/security-overview",permalink:"/docs/next/security-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/security-overview.md",tags:[],version:"current",frontMatter:{id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Isolate bookies",permalink:"/docs/next/administration-isolation-bookie"},next:{title:"End-to-End Encryption",permalink:"/docs/next/security-encryption"}},c={},l=[{value:"Encryption",id:"encryption",level:2},{value:"Authentication",id:"authentication",level:2},{value:"How it works in Pulsar",id:"how-it-works-in-pulsar",level:3},{value:"Authentication data limitations on the proxies",id:"authentication-data-limitations-on-the-proxies",level:3},{value:"Authorization",id:"authorization",level:2}],u={toc:l},h="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial. This chapter describes the main security controls that Pulsar uses to help protect your data."),(0,i.kt)("p",null,"Pulsar security is based on the following core pillars."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#encryption"},"Encryption")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authentication"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authorization"},"Authorization"))),(0,i.kt)("p",null,"By default, Pulsar configures no encryption, authentication, or authorization. Any clients can communicate to Pulsar via plain text service URLs. So you must ensure that Pulsar accessing via these plain text service URLs is restricted to trusted clients only. In such cases, you can use network segmentation and/or authorization ACLs to restrict access to trusted IPs. If you use neither, the state of the cluster is wide open and anyone can access the cluster."),(0,i.kt)("p",null,"Apache Pulsar uses an ",(0,i.kt)("a",{parentName:"p",href:"#authentication"},"Authentication Provider")," or an ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-extending#proxybroker-authentication-plugin"},"Authentication Provider Chain")," to establish the identity of a client and then assign a ",(0,i.kt)("em",{parentName:"p"},"role token")," (a string like ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"app1"),") to that client. This role token can represent a single client or multiple clients and is then used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-authorization"},"Authorization")," to determine what the client is authorized to do. You can use roles to control permission for clients to produce or consume from certain topics, administer the configuration for tenants, and so on."),(0,i.kt)("h2",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"Encryption ensures that if an attacker gets access to your data, the attacker cannot read the data without also having access to the encryption keys. Encryption provides an important mechanism for protecting your data in-transit to meet your security requirements for cryptographic algorithms and key management. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What's next?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To configure end-to-end encryption, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-encryption"},"End-to-end encryption")," for more details."),(0,i.kt)("li",{parentName:"ul"},"To configure transport layer encryption, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-tls-transport"},"TLS encryption")," for more details.")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Authentication is the process of verifying the identity of clients. In Pulsar, the authentication provider is responsible for properly identifying clients and associating them with role tokens. Note that if you only enable authentication, an authenticated role token can access all resources in the cluster. "),(0,i.kt)("h3",{id:"how-it-works-in-pulsar"},"How it works in Pulsar"),(0,i.kt)("p",null,"Pulsar provides a pluggable authentication framework, and Pulsar brokers/proxies use this mechanism to authenticate clients."),(0,i.kt)("p",null,"The way how each client passes its authentication data to brokers varies depending on the protocols it uses. Brokers validate the authentication credentials when a connection is established and check whether the authentication data is expired."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When using HTTP/HTTPS protocol for cluster management, each client passes the authentication data based on the HTTP/HTTPS request header, and brokers check the data upon request."),(0,i.kt)("li",{parentName:"ul"},"When using ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," for productions/consumptions, each client passes the authentication data by sending the ",(0,i.kt)("inlineCode",{parentName:"li"},"CommandConnect")," command when connecting to brokers. Brokers cache the data and periodically check whether the data has expired and learn whether the client supports authentication refreshing. By default, the ",(0,i.kt)("inlineCode",{parentName:"li"},"authenticationRefreshCheckSeconds")," is set to 60s.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a client supports authentication refreshing and the credential is expired, brokers send the ",(0,i.kt)("inlineCode",{parentName:"li"},"CommandAuthChallenge")," command to exchange the authentication data with the client. If the next check finds that the previous authentication exchange has not been returned, brokers disconnect the client."),(0,i.kt)("li",{parentName:"ul"},"If a client does not support authentication refreshing and the credential is expired, brokers disconnect the client.")))),(0,i.kt)("h3",{id:"authentication-data-limitations-on-the-proxies"},"Authentication data limitations on the proxies"),(0,i.kt)("p",null,"When you use proxies between clients and brokers, there are two authentication data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"authentication data from proxies that brokers default to authenticate - known as ",(0,i.kt)("strong",{parentName:"li"},"self-authentication"),"."),(0,i.kt)("li",{parentName:"ul"},"authentication data from clients that proxies forward to brokers for authenticating - known as ",(0,i.kt)("strong",{parentName:"li"},"original authentication"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:")," If your authentication data contains an expiration time, or your authorization provider depends on the authentication data, you must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure your authentication data of proxies has no expiration time since brokers don't support refreshing this authentication data."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"forwardAuthorizationCredentials")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/proxy.conf")," file."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"authenticateOriginalAuthData")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/broker.conf")," file, which ensures that brokers recheck the client authentication.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What's next?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To configure built-in authentication plugins, read:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-tls-authentication"},"TLS authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-athenz"},"Athenz authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-kerberos"},"Kerberos authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-jwt"},"JSON Web Token (JWT) authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-oauth2"},"OAuth 2.0 authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-basic-auth"},"HTTP basic authentication")))),(0,i.kt)("li",{parentName:"ul"},"To customize an authentication plugin, read ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-extending"},"extended authentication"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Starting from 2.11.0, you can configure ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-tls-transport"},"Mutual TLS")," with any one of the above authentication providers.")),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-authorization"},"Authorization")," is the process of giving permissions to clients and determining what clients can do."),(0,i.kt)("p",null,"The role tokens with the most permissions are the superusers who can create and delete tenants, along with full access to all tenant resources. When a superuser creates a tenant, that tenant is assigned an admin role token. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to other role tokens on those namespaces."))}p.isMDXComponent=!0}}]);