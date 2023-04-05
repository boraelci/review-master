"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"usage",title:"Usage"},o=void 0,c={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"After installing the review-master, you can start using its components in your React application:",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/review-master/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/review-master/docs/installation"}},s=[],l={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"review-master"),", you can start using its components in your React application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport {\n  HistoricalView,\n  HistoricalDataProvider,\n  CategoricalView,\n  CategoricalDataProvider,\n  ChartWrapper,\n} from 'review-master';\n\nconst App = () => {\n  return (\n    <div>\n      <h1\n        style={{\n          textAlign: 'center',\n          fontFamily: 'Roboto, sans-serif',\n          fontWeight: 700,\n          fontSize: '2rem',\n          color: '#333',\n        }}\n      >\n        Review Analysis Dashboard\n      </h1>\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          flexDirection: 'row',\n        }}\n      >\n        <div style={{ width: '45%' }}>\n          <HistoricalView\n            title=\"Historical View for Monthly # of Positive and Negative Reviews\"\n            provider={new HistoricalDataProvider()}\n            chartWrapper={new ChartWrapper()}\n          />\n        </div>\n        <div style={{ width: '40%' }}>\n          <CategoricalView\n            title=\"Categorical View for # of Positive and Negative Reviews\"\n            provider={new CategoricalDataProvider()}\n            chartWrapper={new ChartWrapper()}\n          />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default App;\n")))}u.isMDXComponent=!0}}]);