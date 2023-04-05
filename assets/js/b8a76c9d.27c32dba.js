"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8832:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"ChartWrapper",title:"Class: ChartWrapper",sidebar_label:"ChartWrapper",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/ChartWrapper",id:"api/classes/ChartWrapper",isDocsHomePage:!1,title:"Class: ChartWrapper",description:"This class provides a wrapper around Chart.js and React-Chartjs-2 components,",source:"@site/docs/api/classes/ChartWrapper.md",sourceDirName:"api/classes",slug:"/api/classes/ChartWrapper",permalink:"/review-master/docs/api/classes/ChartWrapper",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChartWrapper",title:"Class: ChartWrapper",sidebar_label:"ChartWrapper",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CategoricalDataProvider",permalink:"/review-master/docs/api/classes/CategoricalDataProvider"},next:{title:"HistoricalDataProvider",permalink:"/review-master/docs/api/classes/HistoricalDataProvider"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"line",id:"line",children:[]},{value:"radar",id:"radar",children:[]}]}],s={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This class provides a wrapper around Chart.js and React-Chartjs-2 components,\nallowing for easy rendering of radar and line charts with given options and data."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new ChartWrapper"),"()"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"line"},"line"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"line"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("p",null,"Renders a Line chart with the given options and data."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configuration options for the line chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to be displayed in the line chart.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("p",null,"A Line chart component with the specified options and data."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/boraelci/review-master/blob/62f17c8/src/components/ChartWrapper.tsx#L50"},"components/ChartWrapper.tsx:50")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"radar"},"radar"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"radar"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("p",null,"Renders a Radar chart with the given options and data."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configuration options for the radar chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to be displayed in the radar chart.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("p",null,"A Radar chart component with the specified options and data."),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/boraelci/review-master/blob/62f17c8/src/components/ChartWrapper.tsx#L29"},"components/ChartWrapper.tsx:29")))}c.isMDXComponent=!0}}]);