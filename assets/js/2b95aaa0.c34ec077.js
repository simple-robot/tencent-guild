"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[775],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),s=c(t),u=i,k=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return t?a.createElement(k,p(p({ref:n},m),{},{components:t})):a.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,p=new Array(l);p[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[s]="string"==typeof e?e:i,p[1]=r;for(var c=2;c<l;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const l={title:"BOT\u914d\u7f6e\u6587\u4ef6",toc_max_heading_level:4},p=void 0,r={unversionedId:"bot-config/index",id:"bot-config/index",title:"BOT\u914d\u7f6e\u6587\u4ef6",description:"\u5f85\u65bd\u5de5",source:"@site/docs/bot-config/index.md",sourceDirName:"bot-config",slug:"/bot-config/",permalink:"/simbot-component-qq-guild/docs/bot-config/",draft:!1,editUrl:"https://github.com/simple-robot/simbot-component-qq-guild/tree/dev/main/website/docs/bot-config/index.md",tags:[],version:"current",lastUpdatedAt:1694190125,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",frontMatter:{title:"BOT\u914d\u7f6e\u6587\u4ef6",toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SpringBoot",permalink:"/simbot-component-qq-guild/docs/quick-start/spring-boot"},next:{title:"\u8bba\u575b",permalink:"/simbot-component-qq-guild/docs/api/forum/"}},o={},c=[{value:"component",id:"component",level:2},{value:"ticket",id:"ticket",level:2},{value:"plain",id:"plain",level:3},{value:"env",id:"env",level:3},{value:"config",id:"config",level:2},{value:"config.serverUrl",id:"configserverurl",level:3},{value:"config.shard",id:"configshard",level:3},{value:"config.intents",id:"configintents",level:3}],m={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u5f85\u65bd\u5de5",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5f85\u65bd\u5de5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='xxx.bot.json'",title:"'xxx.bot.json'"},'{\n    "component": "simbot.qqguild",\n    "ticket": {\n        "type": "plain",\n        "appId": "APPID",\n        "token": "TOKEN",\n        "secret": "SECRET"\n    },\n    "config": {\n        "serverUrl": null,\n        "shard": {\n            "type": "full"\n        },\n        "intents": {\n            "type": "raw",\n            "intents": 1073741827\n        },\n        "timeout": {\n          "apiHttpRequestTimeoutMillis": null,\n          "apiHttpConnectTimeoutMillis": null,\n          "apiHttpSocketTimeoutMillis": null\n        },\n        "cache": {\n          "enable": true,\n          "transmit": {\n            "enable": true\n          }\n        },\n        "clientProperties": null\n    }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6587\u4ef6\u914d\u7f6e\u7c7b\u7684\u5404\u5c5e\u6027\u5b9a\u4e49\u53ef\u53c2\u8003API\u6587\u6863: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.simbot.forte.love/components/qq-guild/simbot-component-qq-guild-core-common/love.forte.simbot.component.qguild.config/-q-g-bot-file-configuration/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"QGBotFileConfiguration")))),(0,i.kt)("h1",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h2",{id:"component"},"component"),(0,i.kt)("p",null,"\u56fa\u5b9a\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"simbot.qqguild"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5fc5\u586b"),"\uff0c\u4ee3\u8868\u6b64\u914d\u7f6e\u6587\u4ef6\u4e3aQQ\u9891\u9053\u7ec4\u4ef6\u7684\u3002"),(0,i.kt)("h2",{id:"ticket"},"ticket"),(0,i.kt)("p",null,"bot\u7684\u7968\u636e\u4fe1\u606f\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5fc5\u586b"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": \u914d\u7f6e\u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u8be6\u89c1\u540e\u6587"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appId"),": BotAppID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token"),": \u673a\u5668\u4eba\u4ee4\u724c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secret"),": \u673a\u5668\u4eba\u5bc6\u94a5 (\u76ee\u524d\u53ef\u80fd\u4e0d\u4f1a\u7528\u5230\uff0c\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},'""')," \u4ee3\u66ff)"),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h3",{id:"plain"},"plain"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"type=plain")," \u65f6\uff0c\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," \u5c5e\u6027\u57fa\u672c\u4e00\u81f4\u7684\u914d\u7f6e\u7c7b\u578b\uff0c \u4e5f\u662f\u9ed8\u8ba4\u7684\u65b9\u6848\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ticket": {\n    "type": "plain",\n    "appId": "appId-value",\n    "secret": "secret-value",\n    "token": "token-value"\n  }\n}\n')),(0,i.kt)("admonition",{title:"\u7701\u7565type",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53 simbot-core \u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"3.2.0+")," \u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u4f5c\u4e3a\u9ed8\u8ba4\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," \u65f6\u53ef\u4ee5\u7701\u7565\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ticket": {\n    "appId": "appId-value",\n    "secret": "secret-value",\n    "token": "token-value"\n  }\n}\n'))),(0,i.kt)("h3",{id:"env"},"env"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"type=env")," \u65f6\uff0c\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ticket": {\n    "type": "env",\n    "appId": "APP_ID",\n    "secret": "SECRET",\n    "token": "TOKEN",\n    "plain": false\n  }\n}\n')),(0,i.kt)("p",null,"\u89e3\u6790\u65f6\u4f1a\u9996\u5148\u5c1d\u8bd5\u83b7\u53d6 JVM \u53c2\u6570\uff0c\u5373\u8fd0\u884c\u65f6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dxxx=xxx")," \uff08\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"System.getProperty"),"\uff09\uff0c\n\u5f53\u4e0d\u5b58\u5728\u65f6\u4f1a\u5c1d\u8bd5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u83b7\u53d6\uff08\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"System.getenv"),"\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u539f\u59cb\u8f93\u5165")),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff08\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff09\uff0c\u5982\u679c\u67d0\u5c5e\u6027\u901a\u8fc7\u4e0a\u8ff0\u6d41\u7a0b\u65e0\u6cd5\u83b7\u53d6\u5230\u503c\uff0c\u5219\u4f1a\u5c1d\u8bd5\u76f4\u63a5\u4f7f\u7528\u539f\u59cb\u8f93\u5165\u503c\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ticket": {\n    "type": "env",\n    "appId": "aaa",\n    "secret": "MY_SECRET",\n    "token": "MY_TOKEN",\n    "plain": true\n   }\n}\n')),(0,i.kt)("p",null,"\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," \u5e76\u6ca1\u6709\u627e\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"aaa")," \u7684 JVM \u53c2\u6570\u6216\u73af\u5883\u53d8\u91cf\uff0c\u56e0\u6b64\u5b83\u4f1a\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"aaa")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"appId"),"\u3002\n\u800c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219\u4f1a\u76f4\u63a5\u629b\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"IllegalStateException")," \u5f02\u5e38\u3002"),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2a\u5c5e\u6027\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAIN:")," \uff08\u533a\u5206\u5927\u5c0f\u5199\uff09 \u4e3a\u524d\u7f00\uff0c\u5219\u4f1a\u76f4\u63a5\u4f7f\u7528\u539f\u59cb\u8f93\u5165\u503c\uff0c\u4e0d\u4f1a\u5c1d\u8bd5\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ticket": {\n    "type": "env",\n    "appId": "PLAIN:aaa",\n    "secret": "MY_SECRET",\n    "token": "MY_TOKEN",\n    "plain": false\n  }\n}\n')),(0,i.kt)("p",null,"\u793a\u4f8b\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," \u4f1a\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"aaa")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"appId"),"\uff0c\u800c\u4e0d\u4f1a\u5c1d\u8bd5\u4ece JVM \u53c2\u6570\u6216\u73af\u5883\u53d8\u91cf\u4e2d\u83b7\u53d6\u3002"),(0,i.kt)("h2",{id:"config"},"config"),(0,i.kt)("p",null,"\u5176\u4ed6\u914d\u7f6e\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,i.kt)("h3",{id:"configserverurl"},"config.serverUrl"),(0,i.kt)("p",null,"\u5185\u90e8\u8fdb\u884cAPI\u8bf7\u6c42\u65f6\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://bot.q.qq.com/wiki/develop/api/"},"\u5b98\u65b9\u6587\u6863")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u65f6\u4e3a\u6b63\u5f0f\u73af\u5883\uff0c\u53ef\u4f7f\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"SANDBOX")," \u4ee3\u8868\u4f7f\u7528\u6c99\u7bb1\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "serverUrl": "SANDBOX"\n  }  \n}\n')),(0,i.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4e00\u4e2a\u5177\u4f53\u7684\u5176\u4ed6\u670d\u52a1\u5668\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "serverUrl": "https://example.com"\n  }  \n}\n')),(0,i.kt)("h3",{id:"configshard"},"config.shard"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bot.q.qq.com/wiki/develop/api/gateway/shard.html"},"\u5206\u7247\u4fe1\u606f"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"type=full"),"\uff0c\u5373\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 1]")," \u7684\u5206\u7247\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"type=simple")," \u81ea\u5b9a\u4e49\u5206\u7247\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "shard": {\n      "type": "simple",\n      "value": 0,\n      "total": 2\n    }\n  }  \n}\n')),(0,i.kt)("h3",{id:"configintents"},"config.intents"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bot.q.qq.com/wiki/develop/api/gateway/intents.html"},"\u8ba2\u9605\u7684\u4e8b\u4ef6"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8ba2\u9605\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Guilds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GuildMembers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PublicGuildMessages"))),(0,i.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"type=raw")," \u6765\u76f4\u63a5\u6307\u5b9a\u4e00\u4e2a\u539f\u59cb\u7684\u8ba2\u9605\u6807\u8bb0\u7ed3\u679c\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "intents": {\n      "type": "raw",\n      "intents": 1073741827\n    }\n  }  \n}\n')),(0,i.kt)("p",null,"\u6216\u8005\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"type=nameBased")," \u901a\u8fc7\u6307\u5b9a\u540d\u79f0\uff08\u540d\u79f0\u9009\u62e9\u53c2\u8003 ",(0,i.kt)("inlineCode",{parentName:"p"},"EventIntents")," \u7c7b\u7684\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u7684\u5b57\u7c7b\u7c7b\u540d\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "intents": {\n      "type": "nameBased",\n      "names": ["Guilds", "GuildMembers", "PublicGuildMessages"]\n    }\n  }  \n}\n')))}d.isMDXComponent=!0}}]);