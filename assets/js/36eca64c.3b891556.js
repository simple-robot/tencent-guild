"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[274],{5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>I});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function m(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const a=(0,l.k6)(),o=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,o=p(t),[i,l]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[s,u]=b({queryString:n,groupId:a}),[d,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&o.set(t)}),[n,o])]}({groupId:a}),h=(()=>{const t=s??d;return m({value:t,tabValues:o})?t:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);l(t),u(t),g(t)}),[u,g,o]),tabValues:o}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(t){let{className:e,block:n,selectedValue:l,selectValue:s,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=t=>{const e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==l&&(d(e),s(a))},m=t=>{let e=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>c.push(t),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===e})}),n??e)})))}function f(t){let{lazy:e,children:n,selectedValue:a}=t;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=o.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function y(t){const e=g(t);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},t,e)),r.createElement(f,(0,a.Z)({},t,e)))}function I(t){const e=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(e)},t))}},3469:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162),l=n(814),s=n(2965);const u={title:"\u4f7f\u7528\u6807\u51c6\u5e93",sidebar_position:2},c=void 0,d={unversionedId:"quick-start/stdlib",id:"quick-start/stdlib",title:"\u4f7f\u7528\u6807\u51c6\u5e93",description:"stdlib(\u6807\u51c6\u5e93)\u6a21\u5757 \u5728 API \u6a21\u5757\u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u7b80\u5355\u800c\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u8ba2\u9605\u80fd\u529b\u3002",source:"@site/docs/quick-start/stdlib.md",sourceDirName:"quick-start",slug:"/quick-start/stdlib",permalink:"/simbot-component-qq-guild/docs/quick-start/stdlib",draft:!1,editUrl:"https://github.com/simple-robot/simbot-component-qq-guild/tree/dev/main/website/docs/quick-start/stdlib.md",tags:[],version:"current",lastUpdatedAt:1694190125,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528\u6807\u51c6\u5e93",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API",permalink:"/simbot-component-qq-guild/docs/quick-start/api"},next:{title:"\u4f7f\u7528simbot\u6838\u5fc3\u5e93",permalink:"/simbot-component-qq-guild/docs/quick-start/simbot-core"}},p={},m=[{value:"\u524d\u63d0\u51c6\u5907",id:"\u524d\u63d0\u51c6\u5907",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"BOT\u914d\u7f6e&amp;\u6ce8\u518c",id:"bot\u914d\u7f6e\u6ce8\u518c",level:2},{value:"\u4e8b\u4ef6\u76d1\u542c(\u8ba2\u9605)",id:"\u4e8b\u4ef6\u76d1\u542c\u8ba2\u9605",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}],b={toc:m},g="wrapper";function h(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"stdlib(\u6807\u51c6\u5e93)\u6a21\u5757")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u6a21\u5757\u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u7b80\u5355\u800c\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u8ba2\u9605\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u51c6\u5907"},"\u524d\u63d0\u51c6\u5907"),(0,r.kt)("p",null,"\u9996\u5148\u4f60\u5e94\u5f53\u51c6\u5907\u81f3\u5c11\u4e00\u4e2a\u53ef\u7528\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://q.qq.com/bot"},"QQ\u9891\u9053\u673a\u5668\u4eba")," \u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{groupId:"use-dependency",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Gradle Kotlin DSL",attributes:{"data-value":"Kts"},mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"kotlin",mdxType:"CodeBlock"},`\n// \u4e0d\u8981\u5fd8\u8bb0\u4f7f\u7528 Gradle \u7684 kotlin \u63d2\u4ef6\u6765\u5141\u8bb8\u81ea\u52a8\u9009\u62e9\u5bf9\u5e94\u5e73\u53f0\uff0c\u6bd4\u5982JVM\u6216JS\u7b49\u3002\nimplementation("love.forte.simbot.component:simbot-component-qq-guild-stdlib:${s.i}") // \u6216\u53c2\u8003\u4e0b\u6587\u6240\u8ff0\u7684 Releases\n`.trim())),(0,r.kt)(i.Z,{value:"Gradle Groovy",attributes:{"data-value":"Gradle"},mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"gradle",mdxType:"CodeBlock"},`\n// \u4e0d\u8981\u5fd8\u8bb0\u4f7f\u7528 Gradle \u7684 kotlin \u63d2\u4ef6\u6765\u5141\u8bb8\u81ea\u52a8\u9009\u62e9\u5bf9\u5e94\u5e73\u53f0\uff0c\u6bd4\u5982JVM\u6216JS\u7b49\u3002\nimplementation 'love.forte.simbot.component:simbot-component-qq-guild-stdlib:${s.i}' // \u7248\u672c\u53c2\u8003\u4e0b\u6587\u6240\u8ff0\u7684 Releases\n`.trim())),(0,r.kt)(i.Z,{value:"Maven",attributes:{"data-value":"Maven"},mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"xml",mdxType:"CodeBlock"},`\n<dependency>\n    <groupId>love.forte.simbot.component</groupId>\n    \x3c!-- \u5728Maven\u4e2d\u4f7f\u7528 '-jvm' \u540e\u7f00\u6765\u9009\u62e9\u4f7f\u7528JVM\u5e73\u53f0\u5e93 --\x3e\n    <artifactId>simbot-component-qq-guild-stdlib-jvm</artifactId>\n    \x3c!-- \u53c2\u8003\u4e0b\u6587\u6240\u8ff0\u7684 Releases --\x3e\n    <version>${s.i}</version>\n</dependency>\n`.trim()))),(0,r.kt)("admonition",{title:"\u7248\u672c\u53c2\u8003",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7248\u672c\u53ef\u524d\u5f80 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simbot-component-qq-guild/releases"},(0,r.kt)("strong",{parentName:"a"},"Releases"))," \u67e5\u9605\u3002")),(0,r.kt)("h2",{id:"bot\u914d\u7f6e\u6ce8\u518c"},"BOT\u914d\u7f6e&\u6ce8\u518c"),(0,r.kt)("p",null,"\u73af\u5883\u51c6\u5907\u5b8c\u6bd5\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6ce8\u518c\u4e00\u4e2abot\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bot = BotFactory.create("APP ID", "secret", "token") {\n    // config\n    this.wsClientEngine = ...    // \u8fdb\u884c\u4e8b\u4ef6\u8ba2\u9605\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301ws\u8fde\u63a5\u7684\u5f15\u64ce\u3002\n    this.apiClientEngine = ...   // \u4f7f\u7528API\u65f6\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301 HTTP API \u7684\u5f15\u64ce\u3002\n    this.serverUrl = QQGuild.URL // \u4f7f\u7528\u6b63\u5f0f\u73af\u5883\uff0c\u9ed8\u8ba4\u5373\u4e3a\u6b63\u5f0f\u73af\u5883\n    this.useSandboxServerUrl()   // \u4f7f\u7528\u6c99\u7bb1\u73af\u5883\n    this.intents = ...           // \u8981\u8ba2\u9605\u7684\u4e8b\u4ef6\u6807\u8bb0\u3002\u9ed8\u8ba4\u8ba2\u9605 \u9891\u9053\u3001\u9891\u9053\u6210\u5458\u3001\u516c\u57df\u6d88\u606f \u4e09\u79cd\u4e8b\u4ef6\n    // \u5176\u4ed6\u914d\u7f6e...\n}\n\nbot.start() // \u542f\u52a8bot\nbot.join()  // \u6302\u8d77bot\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    configuration.setWsClientEngine(...);     // \u8fdb\u884c\u4e8b\u4ef6\u8ba2\u9605\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301ws\u8fde\u63a5\u7684\u5f15\u64ce\u3002\n    configuration.setApiClientEngine(...);    // \u4f7f\u7528API\u65f6\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301 HTTP API \u7684\u5f15\u64ce\u3002\n    configuration.setServerUrl(QQGuild.URL);  // \u4f7f\u7528\u6b63\u5f0f\u73af\u5883\uff0c\u9ed8\u8ba4\u5373\u4e3a\u6b63\u5f0f\u73af\u5883\n    configuration.useSandboxServerUrl();      // \u4f7f\u7528\u6c99\u7bb1\u73af\u5883\n    configuration.setIntentsValue(...);       // \u8981\u8ba2\u9605\u7684\u4e8b\u4ef6\u6807\u8bb0\u503c\u3002\u9ed8\u8ba4\u8ba2\u9605 \u9891\u9053\u3001\u9891\u9053\u6210\u5458\u3001\u516c\u57df\u6d88\u606f \u4e09\u79cd\u4e8b\u4ef6\n    // \u5176\u4ed6\u914d\u7f6e...\n        \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\nbot.startBlocking(); // \u542f\u52a8bot\nbot.joinBlocking();  // \u963b\u585et\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java Async",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    configuration.setWsClientEngine(...);     // \u8fdb\u884c\u4e8b\u4ef6\u8ba2\u9605\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301ws\u8fde\u63a5\u7684\u5f15\u64ce\u3002\n    configuration.setApiClientEngine(...);    // \u4f7f\u7528API\u65f6\u6240\u4f7f\u7528\u7684 Ktor client \u5f15\u64ce\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a**\u5c1d\u8bd5**\u81ea\u52a8\u52a0\u8f7d\uff0c\u6216\u76f4\u63a5\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u652f\u6301 HTTP API \u7684\u5f15\u64ce\u3002\n    configuration.setServerUrl(QQGuild.URL);  // \u4f7f\u7528\u6b63\u5f0f\u73af\u5883\uff0c\u9ed8\u8ba4\u5373\u4e3a\u6b63\u5f0f\u73af\u5883\n    configuration.useSandboxServerUrl();      // \u4f7f\u7528\u6c99\u7bb1\u73af\u5883\n    configuration.setIntentsValue(...);       // \u8981\u8ba2\u9605\u7684\u4e8b\u4ef6\u6807\u8bb0\u3002\u9ed8\u8ba4\u8ba2\u9605 \u9891\u9053\u3001\u9891\u9053\u6210\u5458\u3001\u516c\u57df\u6d88\u606f \u4e09\u79cd\u4e8b\u4ef6\n    // \u5176\u4ed6\u914d\u7f6e...\n        \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\n// \u963b\u585e\u76f4\u5230bot\u7ec8\u6b62\nbot.startAsync().thenCompose(__ -> bot.joinAsync()).join();\n')))),(0,r.kt)("admonition",{title:"\u5f15\u64ce\u9009\u62e9",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5f15\u64ce\u7684\u9009\u62e9\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://ktor.io/docs/http-client-engines.html#limitations"},(0,r.kt)("strong",{parentName:"a"},"Ktor\u6587\u6863")),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4f60\u9700\u8981\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u5177\u4f53\u7684\u5f15\u64ce\n(\u4f8b\u5982\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mingwX64")," \u76ee\u6807\u65f6\u53ef\u9009\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://ktor.io/docs/http-client-engines.html#winhttp"},(0,r.kt)("strong",{parentName:"a"},"WinHttp"))," \u5f15\u64ce )\uff0c\n\u6216\u8005\u81f3\u5c11\u4fdd\u8bc1\u7a0b\u5e8f\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4e2d\u5b58\u5728\u53ef\u7528\u5f15\u64ce(\u5728JVM\u5e73\u53f0\u4e0b\u7684\u81ea\u52a8\u52a0\u8f7d)\u3002")),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u76d1\u542c\u8ba2\u9605"},"\u4e8b\u4ef6\u76d1\u542c(\u8ba2\u9605)"),(0,r.kt)("p",null,"\u5728\u542f\u52a8\u521b\u5efabot\u3001\u542f\u52a8bot\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u95f4\uff0c\u4f60\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e9b",(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5904\u7406\u5668"),"\u6765\u5bf9\u8ba2\u9605\u7684\u4e8b\u4ef6\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bot = BotFactory.create("APP ID", "secret", "token") {\n    // ...\n}\n\n// \u8ba2\u9605\u6240\u6709\u7c7b\u578b\u7684\u4e8b\u4ef6\n// highlight-start\nbot.registerProcessor { raw -> // this: Signal.Dispatch\n    // ...\n}\n// highlight-end\n\n// \u8ba2\u9605\u5177\u4f53\u7684\u4e8b\u4ef6\u7c7b\u578b\n// highlight-start\nbot.registerProcessor<GuildMemberAdd> { raw -> // this: GuildMemberAdd\n    // ...\n}\n// highlight-end\n\nbot.start() // \u542f\u52a8bot\nbot.join()  // \u6302\u8d77bot\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    // ...    \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\n// \u8ba2\u9605\u6240\u6709\u4e8b\u4ef6\u7c7b\u578b\n// highlight-start\nbot.registerBlockingProcessor((Signal.Dispatch event, String raw) -> {\n    // ...\n});\n// highlight-end\n\n// \u8ba2\u9605\u5177\u4f53\u7684\u4e8b\u4ef6\u7c7b\u578b\n// highlight-start\nbot.registerBlockingProcessor(GuildMemberAdd.class, (GuildMemberAdd event, String raw) -> {\n    // ...\n});\n// highlight-end\n\nbot.startBlocking(); // \u542f\u52a8bot\nbot.joinBlocking();  // \u963b\u585e\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java Async",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    // ...    \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\n// \u8ba2\u9605\u6240\u6709\u4e8b\u4ef6\u7c7b\u578b\n// highlight-start\nbot.registerAsyncProcessor((Signal.Dispatch event, String raw) -> {\n    // ...\n    return CompletableFuture.completedFuture(null); // \u5f02\u6b65\u4e8b\u4ef6\u5904\u7406\u5668\u8981\u6c42\u8fd4\u56de CompletionStage<Void?> \u7c7b\u578b\u7684\u7ed3\u679c\n});\n// highlight-end\n\n// \u8ba2\u9605\u5177\u4f53\u7684\u4e8b\u4ef6\u7c7b\u578b\n// highlight-start\nbot.registerAsyncProcessor(GuildMemberAdd.class, (GuildMemberAdd event, String raw) -> {\n    // ...\n    return CompletableFuture.completedFuture(null); // \u5f02\u6b65\u4e8b\u4ef6\u5904\u7406\u5668\u8981\u6c42\u8fd4\u56de CompletionStage<Void?> \u7c7b\u578b\u7684\u7ed3\u679c\n});\n// highlight-end\n\n// \u963b\u585e\u76f4\u5230bot\u7ec8\u6b62\nbot.startAsync().thenCompose(__ -> bot.joinAsync()).join();\n')),(0,r.kt)("admonition",{title:"\u4f60\u6700\u597d\u662f ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u9009\u62e9\u4e86\u4f7f\u7528\u5f02\u6b65API\uff0c\u90a3\u5c31\u8981\u5c3d\u6700\u5927\u52aa\u529b\u6765\u907f\u514d\u518d\u4f7f\u7528\u963b\u585eAPI\u3002")))),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u8fdb\u884c\u4e8b\u4ef6\u5904\u7406\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u4e24\u4e2a\u53c2\u6570\uff1a\n\u4e00\u4e2a\u662f\u63a5\u6536\u5230\u7684\u4e8b\u4ef6\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uff0c\u5b83\u662f\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"Signal.Dispatch")," \u7684\u5b57\u7c7b\uff1b\n\u53e6\u5916\u4e00\u4e2a\u662f\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),"\uff0c\u5b83\u4ee3\u8868\u662f\u8fd9\u4e2a\u4e8b\u4ef6\u539f\u59cb\u7684JSON\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("admonition",{title:"\u53ef\u7528\u7684\u4e8b\u4ef6\u7c7b\u578b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u76d1\u542c\u7684\u4e8b\u4ef6\u7c7b\u578b\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.simbot.forte.love/components/qq-guild/simbot-component-qq-guild-api/love.forte.simbot.qguild.event/-signal/-dispatch/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Signal.Dispatch")),"\n\u4ee5\u53ca\u5b83\u7684\u6240\u6709\u5b50\u7c7b\u578b (",(0,r.kt)("inlineCode",{parentName:"p"},"Inheritors"),") \u3002")),(0,r.kt)("p",null,"\u5728\u4e8b\u4ef6\u76d1\u542c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u914d\u5408\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u6765\u5b9e\u73b0\u4f60\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5f53\u76d1\u542c\u5230 ",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u9891\u9053\u66f4\u65b0\u4e8b\u4ef6")," (",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelUpdate"),") \u65f6\uff0c\u67e5\u8be2\u4e00\u4e0b\u8fd9\u4e2a\u5b50\u9891\u9053\u6240\u5c5e\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u9891\u9053\u670d\u52a1\u5668")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Guild"),") \u662f\u4ec0\u4e48\u3002"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Kotlin",attributes:{"data-value":"Kotlin"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bot = BotFactory.create("APP ID", "secret", "token") {\n    // ...\n}\n\n// \u8ba2\u9605 ChannelUpdate\n// highlight-start\nbot.registerProcessor<ChannelUpdate> { raw -> // this: ChannelUpdate\n    // \u67e5\u8be2\u8fd9\u4e2a\u5b50\u9891\u9053\u6240\u5c5e\u7684\u9891\u9053\u670d\u52a1\u5668\n    val guild = GetGuildApi.create(this.data.guildId).requestBy(bot)\n    println("guild: $guild")\n}\n// highlight-end\n\nbot.start() // \u542f\u52a8bot\nbot.join()  // \u6302\u8d77bot\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    // ...    \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\n// \u8ba2\u9605 ChannelUpdate\n// highlight-start\nbot.registerBlockingProcessor(ChannelUpdate.class, (event, raw) -> {\n    // \u67e5\u8be2\u8fd9\u4e2a\u5b50\u9891\u9053\u6240\u5c5e\u7684\u9891\u9053\u670d\u52a1\u5668\n    GetGuildApi getGuildApi = GetGuildApi.create(event.getData().getGuildId());\n    SimpleGuild guild = BotRequestUtil.requestBlocking(bot, getGuildApi);\n    System.out.println("guild: " + guild);\n});\n// highlight-end\n\nbot.startBlocking(); // \u542f\u52a8bot\nbot.joinBlocking();  // \u963b\u585e\u76f4\u5230bot\u7ec8\u6b62\n'))),(0,r.kt)(i.Z,{value:"Java Async",attributes:{"data-value":"Java"},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bot bot = BotFactory.create("APP ID", "secret", "token", (configuration) -> {\n    // ...    \n    return Unit.INSTANCE; // \u7ed3\u675f\u914d\u7f6e\n});\n\n// \u8ba2\u9605 ChannelUpdate\n// highlight-start\nbot.registerAsyncProcessor(ChannelUpdate.class, (event, raw) -> {\n    // \u67e5\u8be2\u8fd9\u4e2a\u5b50\u9891\u9053\u6240\u5c5e\u7684\u9891\u9053\u670d\u52a1\u5668\n    GetGuildApi getGuildApi = GetGuildApi.create(event.getData().getGuildId());\n    return BotRequestUtil.requestAsync(bot, getGuildApi).thenAccept(guild -> {\n        System.out.println("guild: " + guild);\n    });\n});\n// highlight-end\n\n// \u963b\u585e\u76f4\u5230bot\u7ec8\u6b62\nbot.startAsync().thenCompose(__ -> bot.joinAsync()).join();\n')),(0,r.kt)("admonition",{title:"\u4f60\u6700\u597d\u662f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u9009\u62e9\u4e86\u4f7f\u7528\u5f02\u6b65API\uff0c\u90a3\u5c31\u8981\u5c3d\u6700\u5927\u52aa\u529b\u6765\u907f\u514d\u518d\u4f7f\u7528\u963b\u585eAPI\u3002")))),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u542f\u52a8\u7a0b\u5e8f\u5e76\u8bd5\u8bd5\u770b\u5427\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u9047\u5230\u4e86\u9884\u671f\u5916\u7684\u95ee\u9898\u4e5f\u4e0d\u8981\u614c\uff0c\u79ef\u6781\u53cd\u9988\u95ee\u9898\u624d\u80fd\u4f7f\u6211\u4eec\u53d8\u5f97\u66f4\u597d\uff0c\u53ef\u4ee5\u524d\u5f80 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/simple-robot/simpler-robot/issues"},"Issues")," \u53cd\u9988\u95ee\u9898\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/simple-robot/discussions"},"\u793e\u533a")," \u63d0\u51fa\u7591\u95ee\u3002"))}h.isMDXComponent=!0},2965:t=>{t.exports=JSON.parse('{"i":"3.2.0.0-beta.1"}')}}]);