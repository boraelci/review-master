"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(v,o(o({ref:t},p),{},{components:r})):a.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4383:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"CategoricalDataProvider",title:"Class: CategoricalDataProvider",sidebar_label:"CategoricalDataProvider",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/CategoricalDataProvider",id:"api/classes/CategoricalDataProvider",isDocsHomePage:!1,title:"Class: CategoricalDataProvider",description:"This class implements the DataProvider interface and provides methods",source:"@site/docs/api/classes/CategoricalDataProvider.md",sourceDirName:"api/classes",slug:"/api/classes/CategoricalDataProvider",permalink:"/review-master/docs/api/classes/CategoricalDataProvider",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CategoricalDataProvider",title:"Class: CategoricalDataProvider",sidebar_label:"CategoricalDataProvider",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/review-master/docs/api/index"},next:{title:"ChartWrapper",permalink:"/review-master/docs/api/classes/ChartWrapper"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getData",id:"getdata",children:[]},{value:"getLabels",id:"getlabels",children:[]}]}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This class implements the DataProvider interface and provides methods\nfor getting categorical data and labels."),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/review-master/docs/api/interfaces/DataProvider"},(0,n.kt)("inlineCode",{parentName:"a"},"DataProvider")))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new CategoricalDataProvider"),"()"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"getdata"},"getData"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getData"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"CategoricalDataModel")),(0,n.kt)("p",null,"This method returns a new CategoricalDataModel instance with the\ngiven positive and negative category counts."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CategoricalDataModel")),(0,n.kt)("p",null,"A new CategoricalDataModel instance."),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/review-master/docs/api/interfaces/DataProvider"},"DataProvider"),".",(0,n.kt)("a",{parentName:"p",href:"/review-master/docs/api/interfaces/DataProvider#getdata"},"getData")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/boraelci/review-master/blob/62f17c8/src/providers/CategoricalDataProvider.tsx#L15"},"providers/CategoricalDataProvider.tsx:15")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getlabels"},"getLabels"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getLabels"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,"This method returns an array of category labels."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,"An array of category labels."),(0,n.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/review-master/docs/api/interfaces/DataProvider"},"DataProvider"),".",(0,n.kt)("a",{parentName:"p",href:"/review-master/docs/api/interfaces/DataProvider#getlabels"},"getLabels")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/boraelci/review-master/blob/62f17c8/src/providers/CategoricalDataProvider.tsx#L43"},"providers/CategoricalDataProvider.tsx:43")))}d.isMDXComponent=!0}}]);