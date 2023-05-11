"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"usage",title:"Usage"},s=void 0,i={unversionedId:"usage",id:"usage",title:"Usage",description:"First, check out the Example. Here is the App.tsx of the example application:",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/review-master/docs/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/review-master/docs/installation"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First, check out the ",(0,r.kt)("a",{parentName:"p",href:"/review-master/docs/example"},"Example"),". Here is the App.tsx of the example application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Chart as ChartJS, registerables } from \'chart.js\';\nimport React, { useState } from \'react\';\nimport {\n  Alert,\n  Card,\n  Col,\n  Container,\n  Form,\n  FormControl,\n  Row,\n} from \'react-bootstrap\';\nimport { Line, Radar } from \'react-chartjs-2\';\nimport {\n  AnalysisModel,\n  CategoricalViewer,\n  HistoricalViewer,\n  StarsViewer,\n} from \'review-master\';\nimport \'./App.css\';\nimport sampleData from \'./data/analysisResponse.json\';\n\nChartJS.register(...registerables);\n\nconst App = () => {\n  const [inputJson, setInputJson] = useState(\'\');\n  const [invalidJson, setInvalidJson] = useState(false);\n  const analysisModel = new AnalysisModel(inputJson || sampleData);\n  const historicalViewer = new HistoricalViewer(analysisModel, \'day\');\n  const categoricalViewer = new CategoricalViewer(analysisModel);\n  const starsViewer = new StarsViewer(analysisModel);\n\n  const { options: historicalOptions, data: historicalData } =\n    historicalViewer.getOptionsAndData();\n  const { options: categoricalOptions, data: categoricalData } =\n    categoricalViewer.getOptionsAndData();\n\n  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    try {\n      const json = JSON.parse(event.target.value);\n      setInputJson(json);\n      setInvalidJson(false);\n    } catch (error) {\n      setInvalidJson(true);\n    }\n  };\n\n  return (\n    <Container className="mt-4">\n      <Row>\n        <Col>\n          <h1>Review Analysis Visualization</h1>\n          <Form.Group>\n            <Form.Label>Paste your JSON data:</Form.Label>\n            <FormControl\n              as="textarea"\n              rows={6}\n              value={inputJson ? JSON.stringify(inputJson) : \'\'}\n              onChange={handleInputChange}\n              placeholder="Paste your JSON data here, or leave empty to use sample data..."\n            />\n          </Form.Group>\n          {invalidJson && (\n            <Alert variant="danger">\n              Invalid JSON data! Please validate your JSON at{\' \'}\n              <Alert.Link href="https://jsonformatter.curiousconcept.com/">\n                https://jsonformatter.curiousconcept.com/\n              </Alert.Link>{\' \'}\n              and try again.\n            </Alert>\n          )}\n        </Col>\n      </Row>\n      <Row className="mt-4">\n        <Col className="mx-auto" md={9}>\n          <Card className="shadow p-3">\n            <Card.Title className="text-center">\n              <h5>Historical View</h5>\n            </Card.Title>\n            <Card.Body>\n              <Line options={historicalOptions} data={historicalData} />\n            </Card.Body>\n          </Card>\n        </Col>\n        <Col className="mx-auto" md={3}>\n          <Card className="shadow p-3">\n            <Card.Title className="text-center">\n              <h5>Statistical Analysis of Star Ratings</h5>\n            </Card.Title>\n            <Card.Body\n              className="text-center"\n              style={{ maxWidth: \'100%\', margin: \'0 auto\' }}\n            >\n              {starsViewer.createTable()}\n            </Card.Body>\n          </Card>\n        </Col>\n      </Row>\n      <Row className="mt-4">\n        <Col className="mx-auto" md={8}>\n          <Card className="shadow p-3">\n            <Card.Title className="text-center">\n              <h5>Categorical View</h5>\n            </Card.Title>\n            <Card.Body>\n              <Radar\n                height={500}\n                options={categoricalOptions}\n                data={categoricalData}\n              />\n            </Card.Body>\n          </Card>\n        </Col>\n      </Row>\n    </Container>\n  );\n};\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);