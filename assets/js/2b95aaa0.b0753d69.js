"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"BOT\u914d\u7f6e\u6587\u4ef6"},c=void 0,a={unversionedId:"bot-config/index",id:"bot-config/index",title:"BOT\u914d\u7f6e\u6587\u4ef6",description:"",source:"@site/docs/bot-config/index.md",sourceDirName:"bot-config",slug:"/bot-config/",permalink:"/simbot-component-qq-guild/docs/bot-config/",draft:!1,editUrl:"https://github.com/simple-robot/simbot-component-qq-guild/tree/main/website/docs/bot-config/index.md",tags:[],version:"current",lastUpdatedAt:1680438837,formattedLastUpdatedAt:"2023\u5e744\u67082\u65e5",frontMatter:{title:"BOT\u914d\u7f6e\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u9996\u9875",permalink:"/simbot-component-qq-guild/docs/"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "component": "simbot.qqguild",\n    "ticket": {\n        "appId": "APPID",\n        "secret": "SECRET",\n        "token": "TOKEN"\n    },\n    "config": {\n        "serverUrl": null,\n        "shard": {\n            "type": "full"\n        },\n        "intents": {\n            "type": "raw",\n            "intents": 1073741827\n        },\n        "clientProperties": null\n    }\n}\n')))}f.isMDXComponent=!0}}]);