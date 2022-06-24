"use strict";(self.webpackChunkopen=self.webpackChunkopen||[]).push([[6991],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5823:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},u="web\u7aefSDK",p={unversionedId:"AI\u89c6\u9891\u9762\u8bd5/web",id:"AI\u89c6\u9891\u9762\u8bd5/web",title:"web\u7aefSDK",description:"\u5b89\u88c5",source:"@site/docs/AI\u89c6\u9891\u9762\u8bd5/web.md",sourceDirName:"AI\u89c6\u9891\u9762\u8bd5",slug:"/AI\u89c6\u9891\u9762\u8bd5/web",permalink:"/developers/docs/AI\u89c6\u9891\u9762\u8bd5/web",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AI\u89c6\u9891\u9762\u8bd5/web.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",permalink:"/developers/docs/AI\u89c6\u9891\u9762\u8bd5/mp-plugin"}},l={},s=[{value:"\u5b89\u88c5  \ud83d\udd25",id:"\u5b89\u88c5--",level:3},{value:"\u9274\u6743  \ud83c\udf89",id:"\u9274\u6743--",level:3},{value:"\u7ec4\u4ef6\u793a\u4f8b  \u2728",id:"\u7ec4\u4ef6\u793a\u4f8b--",level:3}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web\u7aefsdk"},"web\u7aefSDK"),(0,a.kt)("h3",{id:"\u5b89\u88c5--"},"\u5b89\u88c5  \ud83d\udd25"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// npm\nnpm i ai-video-interview --save\n\n// yarn\nyarn add ai-video-interview\n")),(0,a.kt)("h3",{id:"\u9274\u6743--"},"\u9274\u6743  \ud83c\udf89"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5165\u53e3\u6587\u4ef6\u5f15\u5165fbmAuthorize\u8fdb\u884c\u6743\u9650\u6821\u9a8c\n// \u6ce8\uff1a\u65b9\u4fbf\u9762\u652f\u6301\u4f01\u4e1a\u76f4\u63a5\u901a\u8fc7\u65b9\u4fbf\u9762\u4e3a\u4f01\u4e1a\u5206\u914d\u7684API Key\u6765\u9a8c\u8bc1\u8bbf\u95ee\u65b9\u4fbf\u9762\u7684API\u3002\u5982\u6709\u9700\u8981\uff0c\u8bf7\u5411\u4f60\u7684CSM\uff08\u5ba2\u6237\u6210\u529f\u7ecf\u7406\uff09\u7d22\u53d6accessKey\u548csecretKey\u3002\nimport { fbmAuthorize } from 'ai-video-interview';\n\nconst App: React.FC = () => {\n  useEffect(() => {\n    fbmAuthorize({\n      accessKey: 'eli-test', // \u8eab\u4efd\u8bc6\u522bkey\uff0c\u6807\u8bc6\u4e1a\u52a1\u65b9\u6765\u6e90\n      secretKey: 'asdasdadada', // \u52a0\u5bc6key\uff0c\u7528\u4e8e\u8fdb\u884c\u6570\u636e\u52a0\u5bc6\n    });\n  }, []);\n}\n")),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u793a\u4f8b--"},"\u7ec4\u4ef6\u793a\u4f8b  \u2728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u5165AI\u9898\u76ee\u7ec4\u4ef6\nimport { AiQuestion } from 'ai-video-interview';\n\nconst Question: FC = () => {\n  return <AiQuestion token={token} />;\n};\n\nexport default Question;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u5165AI\u62a5\u544a\u7ec4\u4ef6\nimport { AiReport } from 'ai-video-interview';\n\nconst Report: FC = () => {\n  return <AiReport token={token} />;\n};\n\nexport default Report;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u5165\u89c6\u9891\u9884\u89c8\u7ec4\u4ef6\nimport { VideoPreview } from 'ai-video-interview';\n\nconst Preview: FC = () => {\n  return <VideoPreview url={url} />;\n};\n\nexport default Preview;\n")))}f.isMDXComponent=!0}}]);