"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9942],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return p}});var r=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=d(a),p=s,_=f["".concat(o,".").concat(p)]||f[p]||u[p]||n;return a?r.createElement(_,i(i({ref:e},c),{},{components:a})):r.createElement(_,i({ref:e},c))}));function p(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,i=new Array(n);i[0]=f;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:s,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},38:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=a(7462),s=a(3366),n=(a(7294),a(3905)),i=["components"],l={title:"classy.data.dataset.hf.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},o=void 0,d={unversionedId:"api/data/dataset/hf/base",id:"api/data/dataset/hf/base",title:"classy.data.dataset.hf.base",description:"Classes",source:"@site/docs/api/data/dataset/hf/base.md",sourceDirName:"api/data/dataset/hf",slug:"/api/data/dataset/hf/base",permalink:"/classy/docs/api/data/dataset/hf/base",tags:[],version:"current",frontMatter:{title:"classy.data.dataset.hf.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},u=[{value:"Classes",id:"clzs",level:2},{value:"HFBaseDataset",id:"HFBaseDataset",level:3},{value:"__init__",id:"HFBaseDataset-init",level:4},{value:"init_fields_batcher",id:"HFBaseDataset-init_fields_batcher",level:4}],f={toc:u};function p(t){var e=t.components,a=(0,s.Z)(t,i);return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clzs"},"Classes"),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"HFBaseDataset"},"HFBaseDataset"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"HFBaseDataset"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#HFBaseDataset",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/hf/base.py#L11-L54",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"},(0,n.kt)("p",null,"An iterable Dataset."),(0,n.kt)("p",null,"All datasets that represent an iterable of data samples should subclass it. Such form of datasets is particularly useful when data come from a stream."),(0,n.kt)("p",null,"All subclasses should overwrite :meth:",(0,n.kt)("code",null,"__iter__"),", which would return an iterator of samples in this dataset."),(0,n.kt)("p",null,"When a subclass is used with :class:",(0,n.kt)("code",null,"~torch.utils.data.DataLoader"),", each item in the dataset will be yielded from the :class:",(0,n.kt)("code",null,"~torch.utils.data.DataLoader"),"iterator. When :attr:",(0,n.kt)("code",null,"num_workers > 0"),", each worker process will have a different copy of the dataset object, so it is often desired to configure each copy independently to avoid having duplicate data returned from the workers. :func:",(0,n.kt)("code",null,"~torch.utils.data.get_worker_info"),", when called in a worker process, returns information about the worker. It can be used in either the dataset's :meth:",(0,n.kt)("code",null,"__iter__")," method or the :class:",(0,n.kt)("code",null,"~torch.utils.data.DataLoader")," 's :attr:",(0,n.kt)("code",null,"worker_init_fn")," option to modify each copy's behavior."),(0,n.kt)("p",null,"Example 1: splitting workload across all workers in :meth:",(0,n.kt)("code",null,"__iter__"),"::"),(0,n.kt)("pre",null,(0,n.kt)("code",null,'>>> class MyIterableDataset(torch.utils.data.IterableDataset): ...     def __init__(self, start, end): ...         super(MyIterableDataset).__init__() ...         assert end > start, "this example code only works with end >= start" ...         self.start = start ...         self.end = end ... ...     def __iter__(self): ...         worker_info = torch.utils.data.get_worker_info() ...         if worker_info is None:  # single-process data loading, return the full iterator ...             iter_start = self.start ...             iter_end = self.end ...         else:  # in a worker process ...             # split workload ...             per_worker = int(math.ceil((self.end - self.start) / float(worker_info.num_workers))) ...             worker_id = worker_info.id ...             iter_start = self.start + worker_id * per_worker ...             iter_end = min(iter_start + per_worker, self.end) ...         return iter(range(iter_start, iter_end)) ... >>> # should give same set of data as range(3, 7), i.e., [3, 4, 5, 6]. >>> ds = MyIterableDataset(start=3, end=7)',(0,n.kt)("p",null,">",">",">"," # Single-process loading\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=0)))\n","[3, 4, 5, 6]"),(0,n.kt)("p",null,">",">",">"," # Mult-process loading with two worker processes\n",">",">",">"," # Worker 0 fetched ","[3, 4]",".  Worker 1 fetched ","[5, 6]",".\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2)))\n","[3, 5, 4, 6]"),(0,n.kt)("p",null,">",">",">"," # With even more workers\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=20)))\n","[3, 4, 5, 6]"))),(0,n.kt)("p",null,"Example 2: splitting workload across all workers using :attr:",(0,n.kt)("code",null,"worker_init_fn"),"::"),(0,n.kt)("pre",null,(0,n.kt)("code",null,'>>> class MyIterableDataset(torch.utils.data.IterableDataset): ...     def __init__(self, start, end): ...         super(MyIterableDataset).__init__() ...         assert end > start, "this example code only works with end >= start" ...         self.start = start ...         self.end = end ... ...     def __iter__(self): ...         return iter(range(self.start, self.end)) ... >>> # should give same set of data as range(3, 7), i.e., [3, 4, 5, 6]. >>> ds = MyIterableDataset(start=3, end=7)',(0,n.kt)("p",null,">",">",">"," # Single-process loading\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=0)))\n","[3, 4, 5, 6]","\n",">",">",">","\n",">",">",">"," # Directly doing multi-process loading yields duplicate data\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2)))\n","[3, 3, 4, 4, 5, 5, 6, 6]"),(0,n.kt)("p",null,">",">",">"," # Define a ","<","code",">","worker","_","init","_","fn","<","/code",">"," that configures each dataset copy differently\n",">",">",">"," def worker_init_fn(worker_id):\n...     worker_info = torch.utils.data.get_worker_info()\n...     dataset = worker_info.dataset  # the dataset copy in this worker process\n...     overall_start = dataset.start\n...     overall_end = dataset.end\n...     # configure the dataset to only process the split workload\n...     per_worker = int(math.ceil((overall_end - overall_start) / float(worker_info.num_workers)))\n...     worker_id = worker_info.id\n...     dataset.start = overall_start + worker_id * per_worker\n...     dataset.end = min(dataset.start + per_worker, overall_end)\n..."),(0,n.kt)("p",null,">",">",">"," # Mult-process loading with the custom ","<","code",">","worker","_","init","_","fn","<","/code",">","\n",">",">",">"," # Worker 0 fetched ","[3, 4]",".  Worker 1 fetched ","[5, 6]",".\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2, worker_init_fn=worker_init_fn)))\n","[3, 5, 4, 6]"),(0,n.kt)("p",null,">",">",">"," # With even more workers\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=20, worker_init_fn=worker_init_fn)))\n","[3, 4, 5, 6]")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Subclasses (4)"),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{title:"HFQADataset",href:"/docs/api/data/dataset/hf/classification#HFQADataset"},"HFQADataset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{title:"HFSequenceDataset",href:"/docs/api/data/dataset/hf/classification#HFSequenceDataset"},"HFSequenceDataset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{title:"HFTokenDataset",href:"/docs/api/data/dataset/hf/classification#HFTokenDataset"},"HFTokenDataset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{title:"HFGenerationBaseDataset",href:"/docs/api/data/dataset/hf/generation#HFGenerationBaseDataset"},"HFGenerationBaseDataset"))))),(0,n.kt)("h4",{id:"HFBaseDataset-init"},"_","_","init","_","_"),(0,n.kt)("div",{className:"api__signature"},"def ",(0,n.kt)("span",{className:"ident"},"__init__"),"(",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0transformer_model:\xa0str,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0additional_special_tokens:\xa0Optional[List[str]]\xa0=\xa0None,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0truncation:\xa0Union[bool,\xa0str]\xa0=\xa0False,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0max_length:\xa0int\xa0=\xa0-1,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0**kwargs,",(0,n.kt)("br",null),")",(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#HFBaseDataset-init",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/hf/base.py#L11-L54",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__description"}),(0,n.kt)("div",{className:"api"},(0,n.kt)("h4",{id:"HFBaseDataset-init_fields_batcher"},"init_fields_batcher"),(0,n.kt)("div",{className:"api__signature"},"def ",(0,n.kt)("span",{className:"ident"},"init_fields_batcher"),"(",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,n.kt)("br",null),") \u2011>\xa0Dict[~KT,\xa0~VT]",(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#HFBaseDataset-init_fields_batcher",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/hf/base.py#L53-L54",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}))))))}p.isMDXComponent=!0}}]);