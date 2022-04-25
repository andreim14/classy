"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8323],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=c(t),m=i,f=v["".concat(u,".").concat(m)]||v[m]||p[m]||l;return t?n.createElement(f,r(r({ref:a},s),{},{components:t})):n.createElement(f,r({ref:a},s))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=v;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6068:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={title:"classy.evaluation.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},u=void 0,c={unversionedId:"api/evaluation/base",id:"api/evaluation/base",title:"classy.evaluation.base",description:"Classes",source:"@site/docs/api/evaluation/base.md",sourceDirName:"api/evaluation",slug:"/api/evaluation/base",permalink:"/classy/docs/api/evaluation/base",tags:[],version:"current",frontMatter:{title:"classy.evaluation.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Classes",id:"clzs",level:2},{value:"Evaluation",id:"Evaluation",level:3}],v={toc:p};function m(e){var a=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"clzs"},"Classes"),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"Evaluation"},"Evaluation"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"Evaluation"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#Evaluation",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/base.py#L6-L12",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (9)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"RougeEvaluation",href:"/docs/api/evaluation/generation#RougeEvaluation"},"RougeEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SacreBleuEvaluation",href:"/docs/api/evaluation/generation#SacreBleuEvaluation"},"SacreBleuEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"GenerationSimpleEvaluation",href:"/docs/api/evaluation/simple#GenerationSimpleEvaluation"},"GenerationSimpleEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"QASimpleEvaluation",href:"/docs/api/evaluation/simple#QASimpleEvaluation"},"QASimpleEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SentencePairSimpleEvaluation",href:"/docs/api/evaluation/simple#SentencePairSimpleEvaluation"},"SentencePairSimpleEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SequenceSimpleEvaluation",href:"/docs/api/evaluation/simple#SequenceSimpleEvaluation"},"SequenceSimpleEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"TokenSimpleEvaluation",href:"/docs/api/evaluation/simple#TokenSimpleEvaluation"},"TokenSimpleEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SeqEvalSpanEvaluation",href:"/docs/api/evaluation/span#SeqEvalSpanEvaluation"},"SeqEvalSpanEvaluation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SQuADV1Evaluation",href:"/docs/api/evaluation/squad#SQuADV1Evaluation"},"SQuADV1Evaluation"))))),(0,l.kt)("div",{className:"api__description"}))))}m.isMDXComponent=!0}}]);