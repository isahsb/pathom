goog.provide('com.wsscode.pathom.viz.codemirror');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('com.wsscode.fuzzy');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cljsjs.codemirror');
goog.require('com.wsscode.pathom.connect');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('goog.object');
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$fold$foldcode=shadow.js.require("module$node_modules$codemirror$addon$fold$foldcode", {});
var module$node_modules$codemirror$addon$fold$foldgutter=shadow.js.require("module$node_modules$codemirror$addon$fold$foldgutter", {});
var module$node_modules$codemirror$addon$fold$brace_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$brace_fold", {});
var module$node_modules$codemirror$addon$fold$indent_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$indent_fold", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$addon$search$match_highlighter=shadow.js.require("module$node_modules$codemirror$addon$search$match_highlighter", {});
var module$node_modules$codemirror$addon$search$search=shadow.js.require("module$node_modules$codemirror$addon$search$search", {});
var module$node_modules$codemirror$addon$search$searchcursor=shadow.js.require("module$node_modules$codemirror$addon$search$searchcursor", {});
var module$node_modules$codemirror$addon$hint$anyword_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$anyword_hint", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$display$placeholder=shadow.js.require("module$node_modules$codemirror$addon$display$placeholder", {});
var module$node_modules$parinfer_codemirror$parinfer_codemirror=shadow.js.require("module$node_modules$parinfer_codemirror$parinfer_codemirror", {});
var module$com$wsscode$pathom$viz$pathom_mode=shadow.js.require("module$com$wsscode$pathom$viz$pathom_mode", {});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"obj","obj",981763962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","onChange","com.wsscode.pathom.viz.codemirror/onChange",-981932428),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54351){
return cljs.core.map_QMARK_(G__54351);
})], null),(function (G__54351){
return cljs.core.map_QMARK_(G__54351);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","props","com.wsscode.pathom.viz.codemirror/props",1974059462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54358){
return cljs.core.map_QMARK_(G__54358);
}),(function (G__54358){
return cljs.core.contains_QMARK_(G__54358,new cljs.core.Keyword(null,"value","value",305978217));
})], null),(function (G__54358){
return ((cljs.core.map_QMARK_(G__54358)) && (cljs.core.contains_QMARK_(G__54358,new cljs.core.Keyword(null,"value","value",305978217))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"value","value",305978217)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54367){
return cljs.core.map_QMARK_(G__54367);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)))], null),null));
com.wsscode.pathom.viz.codemirror.prop_call = (function com$wsscode$pathom$viz$codemirror$prop_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54674 = arguments.length;
var i__4731__auto___54675 = (0);
while(true){
if((i__4731__auto___54675 < len__4730__auto___54674)){
args__4736__auto__.push((arguments[i__4731__auto___54675]));

var G__54676 = (i__4731__auto___54675 + (1));
i__4731__auto___54675 = G__54676;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5720__auto__ = (function (){var G__54391 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__54391) : name.call(null,G__54391));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.pathom.viz.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.viz.codemirror.prop_call.cljs$lang$applyTo = (function (seq54370){
var G__54372 = cljs.core.first(seq54370);
var seq54370__$1 = cljs.core.next(seq54370);
var G__54374 = cljs.core.first(seq54370__$1);
var seq54370__$2 = cljs.core.next(seq54370__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54372,G__54374,seq54370__$2);
});

com.wsscode.pathom.viz.codemirror.html_props = (function com$wsscode$pathom$viz$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54396){
var vec__54399 = p__54396;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.pathom.viz.codemirror.pathom_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.codemirror !== 'undefined') && (typeof com.wsscode.pathom.viz.codemirror.Editor !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.codemirror.Editor = (function com$wsscode$pathom$viz$codemirror$Editor(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.codemirror.Editor.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","Editor","com.wsscode.pathom.viz.codemirror/Editor",1297864274),com.wsscode.pathom.viz.codemirror.Editor);

var x54423_54701 = com.wsscode.pathom.viz.codemirror.Editor.prototype;
x54423_54701.componentDidMount = ((function (x54423_54701){
return (function (){
var this__52643__auto__ = this;
var this$ = this__52643__auto__;
var reconciler__52644__auto__ = fulcro.client.primitives.get_reconciler(this__52643__auto__);
var lifecycle__52645__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__52646__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__52643__auto__,"fulcro$mounted",true);

if((indexer__52646__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__52646__auto__,this__52643__auto__);
}

if(cljs.core.truth_(lifecycle__52645__auto__)){
(lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2(this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__52645__auto__.call(null,this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

var textarea = goog.object.get(this$,"textNode");
var options = cljs.core.clj__GT_js((function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var process = new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","process","com.wsscode.pathom.viz.codemirror/process",-99358605).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var codemirror = CodeMirror.fromTextArea(textarea,options);
cljs.core.reset_BANG_(com.wsscode.pathom.viz.codemirror.pathom_cache,cljs.core.PersistentArrayMap.EMPTY);

try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x54423_54701){
return (function (p1__54402_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__54402_SHARP_,"origin"),"setValue")){
clearTimeout(goog.object.get(this$,"editorHold"));

goog.object.set(this$,"editorHold",setTimeout(((function (textarea,options,process,codemirror,this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x54423_54701){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(textarea,options,process,codemirror,this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x54423_54701))
,(300)));

return com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"onChange","onChange",-312891301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__54402_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x54423_54701))
);

codemirror.setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e54430){var e_54717 = e54430;
console.warn("Error setting up CodeMirror",e_54717);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x54423_54701))
;

x54423_54701.componentWillReceiveProps = ((function (x54423_54701){
return (function (next_props__52630__auto__){
var this__52629__auto__ = this;
var this$ = this__52629__auto__;
var map__54432 = goog.object.get(next_props__52630__auto__,"fulcro$value");
var map__54432__$1 = (((((!((map__54432 == null))))?(((((map__54432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54432):map__54432);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54432__$1,new cljs.core.Keyword(null,"value","value",305978217));
var force_index_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54432__$1,new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54432__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var cm = goog.object.get(this$,"codemirror");
var cur_index = goog.object.getValueByKeys(cm,["options","pathomIndex"]);
if(cljs.core.truth_((function (){var and__4120__auto__ = cur_index;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = force_index_update_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.deref(cur_index));
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(com.wsscode.pathom.viz.codemirror.pathom_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(cur_index,indexes);

goog.object.set(goog.object.getValueByKeys(cm,["options","hintOptions"]),"hint",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.codemirror.autocomplete,indexes));
} else {
}

if(cljs.core.not(goog.object.get(this$,"editorHold"))){
var cur_value = cm.getValue();
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cur_value);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(value);
} else {
return null;
}
} else {
return null;
}
});})(x54423_54701))
;

x54423_54701.componentWillUnmount = ((function (x54423_54701){
return (function (){
var this__52647__auto__ = this;
var this$ = this__52647__auto__;
var reconciler__52648__auto__ = fulcro.client.primitives.get_reconciler(this__52647__auto__);
var lifecycle__52649__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52648__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__52650__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__52648__auto__);
var st__52651__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__52650__auto__);
var indexer__52652__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__52650__auto__);
goog.object.set(this__52647__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__52651__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__52651__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__52647__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__52651__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__52647__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__52649__auto__)){
(lifecycle__52649__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__52649__auto__.cljs$core$IFn$_invoke$arity$2(this__52647__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)) : lifecycle__52649__auto__.call(null,this__52647__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)));
} else {
}

if(cljs.core.truth_(indexer__52652__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__52652__auto__,this__52647__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5718__auto__)){
var cm = temp__5718__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x54423_54701))
;

x54423_54701.render = ((function (x54423_54701){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__54466 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__54467 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__54468 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__54469 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__54470 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__54471 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__54472 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__54473 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__54474 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__54475 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__54471;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__54472;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__54473;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__54474;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__54475;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111)], 0))),fulcro.util.force_children(React.createElement("textarea",({"ref": ((function (props,_STAR_reconciler_STAR__orig_val__54466,_STAR_depth_STAR__orig_val__54467,_STAR_shared_STAR__orig_val__54468,_STAR_instrument_STAR__orig_val__54469,_STAR_parent_STAR__orig_val__54470,_STAR_reconciler_STAR__temp_val__54471,_STAR_depth_STAR__temp_val__54472,_STAR_shared_STAR__temp_val__54473,_STAR_instrument_STAR__temp_val__54474,_STAR_parent_STAR__temp_val__54475,this$,this__52659__auto__,x54423_54701){
return (function (p1__54405_SHARP_){
return goog.object.set(this$,"textNode",p1__54405_SHARP_);
});})(props,_STAR_reconciler_STAR__orig_val__54466,_STAR_depth_STAR__orig_val__54467,_STAR_shared_STAR__orig_val__54468,_STAR_instrument_STAR__orig_val__54469,_STAR_parent_STAR__orig_val__54470,_STAR_reconciler_STAR__temp_val__54471,_STAR_depth_STAR__temp_val__54472,_STAR_shared_STAR__temp_val__54473,_STAR_instrument_STAR__temp_val__54474,_STAR_parent_STAR__temp_val__54475,this$,this__52659__auto__,x54423_54701))
, "defaultValue": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)})))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__54470;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__54469;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__54468;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__54467;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__54466;
}});})(x54423_54701))
;


com.wsscode.pathom.viz.codemirror.Editor.prototype.constructor = com.wsscode.pathom.viz.codemirror.Editor;

com.wsscode.pathom.viz.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.pathom.viz.codemirror/Editor";

com.wsscode.pathom.viz.codemirror.Editor.prototype.fulcro$isComponent = true;

var x54482_54745 = com.wsscode.pathom.viz.codemirror.Editor;


var x54483_54746 = com.wsscode.pathom.viz.codemirror.Editor.prototype;


com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$type = true;

com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.pathom.viz.codemirror/Editor";

com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.codemirror/Editor");
});
com.wsscode.pathom.viz.codemirror.editor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.Editor);
com.wsscode.pathom.viz.codemirror.escape_re = (function com$wsscode$pathom$viz$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(input).replace(re,"\\$1");
});
com.wsscode.pathom.viz.codemirror.fuzzy_re = (function com$wsscode$pathom$viz$codemirror$fuzzy_re(input){
return RegExp(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.escape_re(c)),".*"].join('');
}),"",input),"i");
});
com.wsscode.pathom.viz.codemirror.str__GT_keyword = (function com$wsscode$pathom$viz$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.pathom.viz.codemirror.token_context = (function com$wsscode$pathom$viz$codemirror$token_context(p__54508,token){
while(true){
var map__54509 = p__54508;
var map__54509__$1 = (((((!((map__54509 == null))))?(((((map__54509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54509):map__54509);
var indexes = map__54509__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54509__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (p__54508,token,state,mode,path_stack,map__54509,map__54509__$1,indexes,index_io){
return (function() {
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx = null;
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
var mode__$1 = goog.object.get(s,"mode");
var key = goog.object.get(s,"key");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",goog.object.getValueByKeys(s,"key","mode"))))){
var key__$1 = com.wsscode.pathom.viz.codemirror.str__GT_keyword(goog.object.getValueByKeys(s,"key","key"));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof key === 'string')))){
var key__$1 = com.wsscode.pathom.viz.codemirror.str__GT_keyword(key);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
var G__54789 = goog.object.getValueByKeys(s,"prev","prev");
var G__54790 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1);
s = G__54789;
ctx = G__54790;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),ctx], null);

}
}
break;
}
});
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx = function(s,ctx){
switch(arguments.length){
case 1:
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1.call(this,s);
case 2:
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2.call(this,s,ctx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1;
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2;
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx;
})()
;})(p__54508,token,state,mode,path_stack,map__54509,map__54509__$1,indexes,index_io))
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && ((((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ident","ident",-742346)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))))){
return find_ctx(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",goog.object.getValueByKeys(path_stack,"prev","mode")))?goog.object.getValueByKeys(path_stack,"prev","prev","prev"):goog.object.getValueByKeys(path_stack,"prev","prev")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_(goog.object.getValueByKeys(path_stack,"prev","mode"))){
return find_ctx(goog.object.get(path_stack,"prev"));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentVector.EMPTY], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",mode)){
var prev = goog.object.getValueByKeys(path_stack,"prev");
var G__54800 = indexes;
var G__54801 = (function (){var obj54536 = ({"state":(function (){var obj54538 = ({"mode":goog.object.get(prev,"mode"),"pathStack":prev});
return obj54538;
})()});
return obj54536;
})();
p__54508 = G__54800;
token = G__54801;
continue;
} else {
return null;
}
}
}
}
break;
}
});
com.wsscode.pathom.viz.codemirror.completions = (function com$wsscode$pathom$viz$codemirror$completions(index,token,reg){
if(cljs.core.map_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323).cljs$core$IFn$_invoke$arity$1(index))){
var ctx = com.wsscode.pathom.viz.codemirror.token_context(index,token);
if(cljs.core.truth_(reg)){
var G__54540 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ctx);
var G__54540__$1 = (((G__54540 instanceof cljs.core.Keyword))?G__54540.fqn:null);
switch (G__54540__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776),com.wsscode.pathom.viz.codemirror.pathom_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__54540,G__54540__$1,ctx){
return (function (p1__54539_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__54539_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__54540,G__54540__$1,ctx))
),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(index));

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('com.wsscode.pathom.viz.codemirror.completions', com.wsscode.pathom.viz.codemirror.completions);
goog.object.set(window,"cljsDeref",cljs.core.deref);
com.wsscode.pathom.viz.codemirror.cm_completions = (function com$wsscode$pathom$viz$codemirror$cm_completions(index,cm){
var cur = cm.getCursor();
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
return com.wsscode.pathom.viz.codemirror.completions(index,token,reg);
});
com.wsscode.pathom.viz.codemirror.fuzzy_match = (function com$wsscode$pathom$viz$codemirror$fuzzy_match(blank_QMARK_,reg,options){
if(cljs.core.truth_(blank_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,options);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),com.wsscode.fuzzy.fuzzy_match(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","blank?","com.wsscode.pathom.viz.codemirror/blank?",631214481),new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630)],[blank_QMARK_,reg,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__54554_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)],[p1__54554_SHARP_]);
}),cljs.core.str),options)])));
}
});
com.wsscode.pathom.viz.codemirror.autocomplete = (function com$wsscode$pathom$viz$codemirror$autocomplete(index,cm,options){
var cur = cm.getCursor();
var line = cur.line;
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var blank_QMARK_ = (function (){var fexpr__54561 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["(",null,"{",null,"[",null," ",null], null), null);
return (fexpr__54561.cljs$core$IFn$_invoke$arity$1 ? fexpr__54561.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__54561.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.pathom.viz.codemirror.cm_completions(index,cm));
if(cljs.core.truth_(words)){
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.fuzzy_match(blank_QMARK_,reg,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),cljs.core.PersistentHashSet.EMPTY),words)))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.pathom.viz.codemirror.def_cm_command = (function com$wsscode$pathom$viz$codemirror$def_cm_command(name,f){
return goog.object.set(goog.object.get(CodeMirror,"commands"),name,f);
});
com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_ = (function com$wsscode$pathom$viz$codemirror$key_has_children_QMARK_(completions,token){
var reg = com.wsscode.pathom.viz.codemirror.str__GT_keyword(goog.object.get(token,"string"));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && (((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(completions,reg))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.namespace(reg))))));
});
goog.exportSymbol('com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_', com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_);
com.wsscode.pathom.viz.codemirror.str_repeat = (function com$wsscode$pathom$viz$codemirror$str_repeat(s,n){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,s));
});
com.wsscode.pathom.viz.codemirror.def_cm_command("pathomJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var indent = (function (){var or__4131__auto__ = goog.object.getValueByKeys(token,["state","pathStack","indent"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",goog.object.getValueByKeys(token,["state","mode"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom-composite",goog.object.get(token,"type"))))){
var line = cur.line;
var start = CodeMirror.Pos(line,goog.object.get(token,"start"));
var end = CodeMirror.Pos(line,goog.object.get(token,"end"));
var s = goog.object.get(token,"string");
var vec__54584 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start.ch,indent))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos((line + (1)),((2) + indent)),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.str_repeat(" ",(indent + (1)))),"[]}"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos(line,((goog.object.get(token,"start") + cljs.core.count(s)) + (3))),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," []}"].join('')], null));
var cursor_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584,(0),null);
var joined = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584,(1),null);
cm.replaceRange(joined,start,end);

cm.setCursor(cursor_end);

return cm.showHint();
} else {
return null;
}
}));
com.wsscode.pathom.viz.codemirror.pathom = (function com$wsscode$pathom$viz$codemirror$pathom(p__54591){
var map__54592 = p__54591;
var map__54592__$1 = (((((!((map__54592 == null))))?(((((map__54592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54592):map__54592);
var props = map__54592__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","matchBrackets","com.wsscode.pathom.viz.codemirror/matchBrackets",-486136415),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","highlightSelectionMatches","com.wsscode.pathom.viz.codemirror/highlightSelectionMatches",503061089),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","foldGutter","com.wsscode.pathom.viz.codemirror/foldGutter",-1672459260),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","autoCloseBrackets","com.wsscode.pathom.viz.codemirror/autoCloseBrackets",2107290696),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","hintOptions","com.wsscode.pathom.viz.codemirror/hintOptions",1347660047),new cljs.core.Keyword(null,"pathomIndex","pathomIndex",-359731824),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","gutters","com.wsscode.pathom.viz.codemirror/gutters",461580477)],[true,true,true,"pathom",new cljs.core.PersistentArrayMap(null, 2, ["Ctrl-Space","autocomplete","Cmd-J","pathomJoin"], null),true,true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.codemirror.autocomplete,indexes),new cljs.core.Keyword(null,"completeSingle","completeSingle",-665527534),false], null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(indexes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)]);
var G__54608 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","process","com.wsscode.pathom.viz.codemirror/process",-99358605),((function (options,map__54592,map__54592__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__54592,map__54592__$1,props,indexes){
return (function (cm__$1,e){
if(((cljs.core.not(goog.object.getValueByKeys(cm__$1,["state","completionActive"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key")))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__54592,map__54592__$1,props,indexes))
);

return module$node_modules$parinfer_codemirror$parinfer_codemirror.init(cm,"smart",({"forceBalance": true}));
});})(options,map__54592,map__54592__$1,props,indexes))
),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),((function (options,map__54592,map__54592__$1,props,indexes){
return (function (p1__54587_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__54587_SHARP_], 0));
});})(options,map__54592,map__54592__$1,props,indexes))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__54608) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__54608));
});
com.wsscode.pathom.viz.codemirror.clojure = (function com$wsscode$pathom$viz$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),"clojure",new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","matchBrackets","com.wsscode.pathom.viz.codemirror/matchBrackets",-486136415),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","highlightSelectionMatches","com.wsscode.pathom.viz.codemirror/highlightSelectionMatches",503061089),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","foldGutter","com.wsscode.pathom.viz.codemirror/foldGutter",-1672459260),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","gutters","com.wsscode.pathom.viz.codemirror/gutters",461580477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__54630 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),((function (options){
return (function (p1__54628_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__54628_SHARP_], 0));
});})(options))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__54630) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__54630));
});

//# sourceMappingURL=com.wsscode.pathom.viz.codemirror.js.map
