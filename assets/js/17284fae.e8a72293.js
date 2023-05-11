"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={id:"example",title:"Example"},o=void 0,s={unversionedId:"example",id:"example",title:"Example",description:"Visit http://review-master.s3-website-us-east-1.amazonaws.com or click the images below for the interactive example app.",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/review-master/docs/example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/example.md",tags:[],version:"current",frontMatter:{id:"example",title:"Example"},sidebar:"tutorialSidebar",previous:{title:"StarsViewer",permalink:"/review-master/docs/api/classes/StarsViewer"},next:{title:"Installation",permalink:"/review-master/docs/installation"}},l={},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"http://review-master.s3-website-us-east-1.amazonaws.com"},"http://review-master.s3-website-us-east-1.amazonaws.com")," or click the images below for the interactive example app."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://review-master.s3-website-us-east-1.amazonaws.com"},(0,a.kt)("img",{alt:"Example1",src:n(8414).Z,width:"3448",height:"1792"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://review-master.s3-website-us-east-1.amazonaws.com"},(0,a.kt)("img",{alt:"Example2",src:n(984).Z,width:"3456",height:"1244"}))),(0,a.kt)("p",null,"This application uses the following sample data stored as analysisResponse.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "analysis": [\n    {\n      "reviewId": "1",\n      "date": "April 30, 2023",\n      "stars": "4.5",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Value for Money",\n        "Sound Quality",\n        "Comfort and Fit",\n        "Connectivity and Compatibility"\n      ],\n      "negativeCategories": ["Battery Life"]\n    },\n    {\n      "reviewId": "2",\n      "date": "April 30, 2023",\n      "stars": "3",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Connectivity and Compatibility",\n        "Comfort and Fit"\n      ],\n      "negativeCategories": ["Value for Money", "Sound Quality", "Battery Life"]\n    },\n    {\n      "reviewId": "3",\n      "date": "April 30, 2023",\n      "stars": "5",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Sound Quality",\n        "Comfort and Fit",\n        "Connectivity and Compatibility"\n      ],\n      "negativeCategories": ["Value for Money", "Battery Life"]\n    },\n    {\n      "reviewId": "4",\n      "date": "April 29, 2023",\n      "stars": "2",\n      "generalSentiment": "Negative",\n      "positiveCategories": ["Comfort and Fit"],\n      "negativeCategories": [\n        "Value for Money",\n        "Sound Quality",\n        "Battery Life",\n        "Connectivity and Compatibility"\n      ]\n    },\n    {\n      "reviewId": "5",\n      "date": "April 28, 2023",\n      "stars": "4",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Value for Money",\n        "Comfort and Fit",\n        "Connectivity and Compatibility"\n      ],\n      "negativeCategories": ["Sound Quality", "Battery Life"]\n    },\n    {\n      "reviewId": "6",\n      "date": "April 27, 2023",\n      "stars": "1",\n      "generalSentiment": "Negative",\n      "positiveCategories": [],\n      "negativeCategories": [\n        "Value for Money",\n        "Sound Quality",\n        "Comfort and Fit",\n        "Battery Life",\n        "Connectivity and Compatibility"\n      ]\n    },\n    {\n      "reviewId": "7",\n      "date": "April 27, 2023",\n      "stars": "4",\n      "generalSentiment": "Positive",\n      "positiveCategories": ["Sound Quality", "Comfort and Fit"],\n      "negativeCategories": [\n        "Value for Money",\n        "Battery Life",\n        "Connectivity and Compatibility"\n      ]\n    },\n    {\n      "reviewId": "8",\n      "date": "April 26, 2023",\n      "stars": "3",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Value for Money",\n        "Comfort and Fit",\n        "Battery Life"\n      ],\n      "negativeCategories": ["Sound Quality", "Connectivity and Compatibility"]\n    },\n    {\n      "reviewId": "9",\n      "date": "April 26, 2023",\n      "stars": "5",\n      "generalSentiment": "Positive",\n      "positiveCategories": [\n        "Value for Money",\n        "Sound Quality",\n        "Comfort and Fit",\n        "Battery Life",\n        "Connectivity and Compatibility"\n      ],\n      "negativeCategories": []\n    },\n    {\n      "reviewId": "10",\n      "date": "April 26, 2023",\n      "stars": "2",\n      "generalSentiment": "Negative",\n      "positiveCategories": [],\n      "negativeCategories": [\n        "Value for Money",\n        "Sound Quality",\n        "Comfort and Fit",\n        "Battery Life",\n        "Connectivity and Compatibility"\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"For a quick start, check out the ",(0,a.kt)("a",{parentName:"p",href:"/review-master/docs/usage"},"Usage")," for this example app's App.tsx. You can find its entire source code in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/boraelci/review-master/tree/main/example"},"GitHub repo"),"."))}u.isMDXComponent=!0},984:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/categorical-f8bf1c3324320b0382f492b83f24dde7.png"},8414:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/historical-f5f5e8b8fb088da48af3218581023828.png"}}]);