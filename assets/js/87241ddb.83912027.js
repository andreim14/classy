"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4983],{3905:function(a,e,s){s.d(e,{Zo:function(){return d},kt:function(){return u}});var t=s(7294);function i(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function n(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,t)}return s}function l(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){i(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}function r(a,e){if(null==a)return{};var s,t,i=function(a,e){if(null==a)return{};var s,t,i={},n=Object.keys(a);for(t=0;t<n.length;t++)s=n[t],e.indexOf(s)>=0||(i[s]=a[s]);return i}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(t=0;t<n.length;t++)s=n[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}var c=t.createContext({}),o=function(a){var e=t.useContext(c),s=e;return a&&(s="function"==typeof a?a(e):l(l({},e),a)),s},d=function(a){var e=o(a.components);return t.createElement(c.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var s=a.components,i=a.mdxType,n=a.originalType,c=a.parentName,d=r(a,["components","mdxType","originalType","parentName"]),m=o(s),u=i,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return s?t.createElement(y,l(l({ref:e},d),{},{components:s})):t.createElement(y,l({ref:e},d))}));function u(a,e){var s=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var n=s.length,l=new Array(n);l[0]=m;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=a,r.mdxType="string"==typeof a?a:i,l[1]=r;for(var o=2;o<n;o++)l[o]=s[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},7597:function(a,e,s){s.r(e),s.d(e,{assets:function(){return y},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return _}});var t=s(7462),i=s(3366),n=s(7294),l=s(3905),r=s(4578),c=s(3995),o=function(a){function e(){return a.apply(this,arguments)||this}(0,r.Z)(e,a);var s=e.prototype;return s.url=function(){var a=this.props.name.replace(/\./g,"-");return"/docs/api/"+this.package().replace("classy.","").replace(/\./g,"/")+"/#"+a},s.package=function(){var a=this.props.package;if(void 0===a){var e=this.props.name.split(".");return c[e[0]]}return a},s.surface=function(){return this.props.displayName||this.props.name},s.render=function(){return n.createElement("a",{className:"direct-api-link",title:this.props.name,href:this.url(),target:"_blank"},this.surface())},e}(n.Component),d=["components"],p={sidebar_position:4,title:"Mixins"},m=void 0,u={unversionedId:"reference-manual/mixins",id:"reference-manual/mixins",title:"Mixins",description:"To extend the functionalities of our models, we use the mixin pattern. Basically, a mixin is a self-contained unit",source:"@site/docs/reference-manual/mixins.md",sourceDirName:"reference-manual",slug:"/reference-manual/mixins",permalink:"/classy/docs/reference-manual/mixins",editUrl:"https://github.com/sunglasses-ai/classy/edit/main/docs/docs/reference-manual/mixins.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Mixins"},sidebar:"tutorialSidebar",previous:{title:"Default Profiles",permalink:"/classy/docs/reference-manual/profiles"}},y={},_=[],f={toc:_};function h(a){var e=a.components,s=(0,i.Z)(a,d);return(0,l.kt)("wrapper",(0,t.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To extend the functionalities of our models, we use the ",(0,l.kt)("strong",{parentName:"p"},"mixin")," pattern. Basically, a mixin is a self-contained unit\nthat offers a number of predefined methods that are added to the object that is ",(0,l.kt)("em",{parentName:"p"},"mixed-in"),"."),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"classy"),", we have four mixins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(o,{name:"PredictionMixin",mdxType:"ApiLink"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(o,{name:"SavingMixin",mdxType:"ApiLink"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(o,{name:"TaskMixin",mdxType:"ApiLink"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(o,{name:"TaskUIMixin",mdxType:"ApiLink"}))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SavingMixin")," offers a utility to save and load a few samples from your dataset to be used inside ",(0,l.kt)("inlineCode",{parentName:"p"},"classy demo"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PredictionMixin")," offers a method that is used at inference time, ",(0,l.kt)(o,{name:"PredictionMixin.batch_predict",displayName:"batch_predict",mdxType:"ApiLink"}),", that your custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassyPLModule")," ",(0,l.kt)("strong",{parentName:"p"},"should always implement"),"."),(0,l.kt)("p",null,"As for ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskMixin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskUIMixin"),", they handle the behaviour of a model when invoked through either ",(0,l.kt)("inlineCode",{parentName:"p"},"classy predict interactive"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"classy demo"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskMixin")," handles how your model reads input from the command line (e.g., a sentence-pair classifier\nwill have to read from input twice, as opposed to, for example, a sequence classifier); similarly, ",(0,l.kt)("inlineCode",{parentName:"p"},"TaskUIMixin")," handles\nyour model's rendering of its inputs and outputs in ",(0,l.kt)("inlineCode",{parentName:"p"},"classy demo"),", hence through ",(0,l.kt)("a",{parentName:"p",href:"https://streamlit.io/"},"Streamlit"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassyPLModule")," is defined as a ",(0,l.kt)("inlineCode",{parentName:"p"},"pl.LightningModule")," mixed in with ",(0,l.kt)("inlineCode",{parentName:"p"},"PredictionMixin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"SavingMixin"),". Our\ndefault task-specific models (",(0,l.kt)("inlineCode",{parentName:"p"},"HF<Task>PLModule"),") are mixed in with their task-specific bash and UI mixins\n(e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"HFTokensPLModule")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassyModule")," mixed in with ",(0,l.kt)("inlineCode",{parentName:"p"},"TokensTaskMixin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TokensTaskUIMixin"),")."))))}h.isMDXComponent=!0},3995:function(a){a.exports=JSON.parse('{"ClassySample":"classy.data.data_drivers","DataDriver":"classy.data.data_drivers","GenerationDataDriver":"classy.data.data_drivers","GenerationSample":"classy.data.data_drivers","JSONLGenerationDataDriver":"classy.data.data_drivers","JSONLQADataDriver":"classy.data.data_drivers","JSONLSentencePairDataDriver":"classy.data.data_drivers","JSONLSequenceDataDriver":"classy.data.data_drivers","JSONLTokensDataDriver":"classy.data.data_drivers","QADataDriver":"classy.data.data_drivers","QASample":"classy.data.data_drivers","SentencePairDataDriver":"classy.data.data_drivers","SentencePairSample":"classy.data.data_drivers","SequenceDataDriver":"classy.data.data_drivers","SequenceSample":"classy.data.data_drivers","TSVGenerationDataDriver":"classy.data.data_drivers","TSVQADataDriver":"classy.data.data_drivers","TSVSentencePairDataDriver":"classy.data.data_drivers","TSVSequenceDataDriver":"classy.data.data_drivers","TSVTokensDataDriver":"classy.data.data_drivers","TokensDataDriver":"classy.data.data_drivers","TokensSample":"classy.data.data_drivers","get_data_driver":"classy.data.data_drivers","ClassyDataModule":"classy.data.data_modules","TrainCoordinates":"classy.data.data_modules","load_coordinates":"classy.data.data_modules","path_if_exists":"classy.data.data_modules","BaseDataset":"classy.data.dataset.base","batchify":"classy.data.dataset.base","batchify_matrices":"classy.data.dataset.base","HFBaseDataset":"classy.data.dataset.hf.base","HFQADataset":"classy.data.dataset.hf.classification","HFSentencePairDataset":"classy.data.dataset.hf.classification","HFSequenceDataset":"classy.data.dataset.hf.classification","HFTokenDataset":"classy.data.dataset.hf.classification","BartHFGenerationDataset":"classy.data.dataset.hf.generation","DecHFGenerationBaseDataset":"classy.data.dataset.hf.generation","EncDecHFGenerationBaseDataset":"classy.data.dataset.hf.generation","GPT2HFGenerationCataset":"classy.data.dataset.hf.generation","HFGenerationBaseDataset":"classy.data.dataset.hf.generation","MBartHFGenerationDataset":"classy.data.dataset.hf.generation","T5HFGenerationDataset":"classy.data.dataset.hf.generation","Evaluation":"classy.evaluation.base","RougeEvaluation":"classy.evaluation.generation","SacreBleuEvaluation":"classy.evaluation.generation","GenerationSimpleEvaluation":"classy.evaluation.simple","QASimpleEvaluation":"classy.evaluation.simple","SentencePairSimpleEvaluation":"classy.evaluation.simple","SequenceSimpleEvaluation":"classy.evaluation.simple","TokenSimpleEvaluation":"classy.evaluation.simple","accuracy":"classy.evaluation.simple","p_r_f_support":"classy.evaluation.simple","SeqEvalSpanEvaluation":"classy.evaluation.span","SQuADV1Evaluation":"classy.evaluation.squad","AdafactorWithWarmupFactory":"classy.optim.factories","AdagradWithWarmupFactory":"classy.optim.factories","AdamWWithWarmupFactory":"classy.optim.factories","AdamWithWarmupFactory":"classy.optim.factories","Factory":"classy.optim.factories","RAdamFactory":"classy.optim.factories","TorchFactory":"classy.optim.factories","WeightDecayOptimizer":"classy.optim.factories","RAdam":"classy.optim.optimizers.radam","ModelCheckpointWithBest":"classy.pl_callbacks.best_checkpoint","EvaluationPredictionCallback":"classy.pl_callbacks.prediction","FileDumperPredictionCallback":"classy.pl_callbacks.prediction","PredictionCallback":"classy.pl_callbacks.prediction","PredictionPLCallback":"classy.pl_callbacks.prediction","WANDBLoggerPredictionCallback":"classy.pl_callbacks.prediction","ClassificationOutput":"classy.pl_modules.base","ClassyPLModule":"classy.pl_modules.base","HFQAPLModule":"classy.pl_modules.hf.classification","HFSentencePairPLModule":"classy.pl_modules.hf.classification","HFSequenceCommonPLModule":"classy.pl_modules.hf.classification","HFSequencePLModule":"classy.pl_modules.hf.classification","HFTokensPLModule":"classy.pl_modules.hf.classification","BartGenerativeModule":"classy.pl_modules.hf.generation","GPT2GenerativeModule":"classy.pl_modules.hf.generation","HFGenerationPLModule":"classy.pl_modules.hf.generation","MBartGenerativeModule":"classy.pl_modules.hf.generation","T5GenerativeModule":"classy.pl_modules.hf.generation","PredictionMixin":"classy.pl_modules.mixins.prediction","SavingMixin":"classy.pl_modules.mixins.saving","GenerationTask":"classy.pl_modules.mixins.task","QATask":"classy.pl_modules.mixins.task","SentencePairTask":"classy.pl_modules.mixins.task","SequenceTask":"classy.pl_modules.mixins.task","TaskMixin":"classy.pl_modules.mixins.task","TokensTask":"classy.pl_modules.mixins.task","GenerationTaskServeMixin":"classy.pl_modules.mixins.task_serve","MarshalInputSample":"classy.pl_modules.mixins.task_serve","MarshalOutputSample":"classy.pl_modules.mixins.task_serve","QATaskServeMixin":"classy.pl_modules.mixins.task_serve","SentencePairTaskServeMixin":"classy.pl_modules.mixins.task_serve","SequenceTaskServeMixin":"classy.pl_modules.mixins.task_serve","TaskServeMixin":"classy.pl_modules.mixins.task_serve","TokenTaskServeMixin":"classy.pl_modules.mixins.task_serve","GenerationTaskUIMixin":"classy.pl_modules.mixins.task_ui","QATaskUIMixin":"classy.pl_modules.mixins.task_ui","SentencePairTaskUIMixin":"classy.pl_modules.mixins.task_ui","SequenceTaskUIMixin":"classy.pl_modules.mixins.task_ui","TaskUIMixin":"classy.pl_modules.mixins.task_ui","TokenTaskUIMixin":"classy.pl_modules.mixins.task_ui","get_commands":"classy.scripts.cli","install_autocomplete":"classy.scripts.cli","automatically_infer_test_path":"classy.scripts.cli.evaluate","ClassyBlame":"classy.scripts.cli.train","apply_profiles_and_cli":"classy.scripts.cli.train","classy_merge":"classy.scripts.cli.train","handle_device":"classy.scripts.cli.train","autocomplete_model_path":"classy.scripts.cli.utils","checkpoint_path_from_user_input":"classy.scripts.cli.utils","get_device":"classy.scripts.cli.utils","import_module_and_submodules":"classy.scripts.cli.utils","maybe_find_directory":"classy.scripts.cli.utils","push_python_path":"classy.scripts.cli.utils","try_get_checkpoint_path_from_user_input":"classy.scripts.cli.utils","AnswerPositionUIMetric":"classy.scripts.model.describe","ClassSpecificInputLenUIMetric":"classy.scripts.model.describe","InfoBoxUIMetric":"classy.scripts.model.describe","InputLenUIMetric":"classy.scripts.model.describe","LabelsUIMetric":"classy.scripts.model.describe","LambdaWrapperUIMetric":"classy.scripts.model.describe","UIMetric":"classy.scripts.model.describe","UIMetricsManager":"classy.scripts.model.describe","get_random_color":"classy.scripts.model.describe","get_ui_metrics":"classy.scripts.model.describe","init_layout":"classy.scripts.model.describe","assert_file_exists":"classy.scripts.model.download","download":"classy.scripts.model.download","download_resource":"classy.scripts.model.download","request_file":"classy.scripts.model.download","evaluate":"classy.scripts.model.evaluate","export":"classy.scripts.model.export","strip_checkpoint":"classy.scripts.model.export","zip_run":"classy.scripts.model.export","import_zip":"classy.scripts.model.import_","file_main":"classy.scripts.model.predict","interactive_main":"classy.scripts.model.predict","train":"classy.scripts.model.train","create_info_file":"classy.scripts.model.upload","upload":"classy.scripts.model.upload","add_noise_to_value":"classy.utils.commons","chunks":"classy.utils.commons","execute_bash_command":"classy.utils.commons","flatten":"classy.utils.commons","get_local_ip_address":"classy.utils.commons","grouper":"classy.utils.commons","split_by_first":"classy.utils.commons","ConfigBlamer":"classy.utils.config","ExplainableConfig":"classy.utils.config","NodeInfo":"classy.utils.config","create_data_dir":"classy.utils.data","load_dataset":"classy.utils.data","shuffle_and_store_dataset":"classy.utils.data","shuffle_dataset":"classy.utils.data","split_dataset":"classy.utils.data","Experiment":"classy.utils.experiment","Run":"classy.utils.experiment","ensure_dir":"classy.utils.file","get_md5":"classy.utils.file","fix_paths":"classy.utils.hydra","ConfigBlame":"classy.utils.hydra_patch","NormalConfigBlame":"classy.utils.hydra_patch","OverrideConfigBlame":"classy.utils.hydra_patch","dict_config_deepcopy_patch":"classy.utils.hydra_patch","flatten_keys":"classy.utils.hydra_patch","load_classy_module_from_checkpoint":"classy.utils.lightning","load_prediction_dataset_conf_from_checkpoint":"classy.utils.lightning","load_training_conf_from_checkpoint":"classy.utils.lightning","get_project_logger":"classy.utils.log","adapt_dataset_from":"classy.utils.omegaconf","resolve_hf_generation_base_dataset_on_transformer_model":"classy.utils.omegaconf","resolve_hf_generation_module_on_transformer_model":"classy.utils.omegaconf","requires":"classy.utils.optional_deps","ConfigPrinter":"classy.utils.rich_config","RichNodeInfo":"classy.utils.rich_config","get_rich_tree_config":"classy.utils.rich_config","print_config":"classy.utils.rich_config","rich_to_html":"classy.utils.rich_config","get_md_200_random_color_generator":"classy.utils.streamlit","get_md_400_random_color_generator":"classy.utils.streamlit","get_random_color_generator":"classy.utils.streamlit","load_bundle":"classy.utils.train_coordinates","Vocabulary":"classy.utils.vocabulary"}')}}]);