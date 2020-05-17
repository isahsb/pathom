goog.provide('com.wsscode.pathom.viz.trace');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
goog.require('goog.object');
com.wsscode.pathom.viz.trace.render_trace = (function com$wsscode$pathom$viz$trace$render_trace(this$){
var map__64310 = fulcro.client.primitives.props(this$);
var map__64310__$1 = (((((!((map__64310 == null))))?(((((map__64310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64310):map__64310);
var trace_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64310__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590));
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64310__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","on-show-details","com.wsscode.pathom.viz.trace/on-show-details",-1635963710));
var container = goog.object.get(this$,"svgContainer");
var svg = goog.object.get(this$,"svg");
goog.object.set(svg,"innerHTML","");

return goog.object.set(this$,"renderedData",module$com$wsscode$pathom$viz$d3_trace.renderPathomTrace(svg,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.helpers.stringify_keyword_values(trace_data),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),(function (){var or__4131__auto__ = on_show_details;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})()], null))));
});
com.wsscode.pathom.viz.trace.recompute_trace_size = (function com$wsscode$pathom$viz$trace$recompute_trace_size(this$){
var container = goog.object.get(this$,"svgContainer");
return module$com$wsscode$pathom$viz$d3_trace.updateTraceSize((function (){var G__64318 = goog.object.get(this$,"renderedData");
goog.object.set(G__64318,"svgWidth",goog.object.get(container,"clientWidth"));

goog.object.set(G__64318,"svgHeight",goog.object.get(container,"clientHeight"));

return G__64318;
})());
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.trace !== 'undefined') && (typeof com.wsscode.pathom.viz.trace.D3Trace !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.trace.D3Trace = (function com$wsscode$pathom$viz$trace$D3Trace(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.trace.D3Trace.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.trace","D3Trace","com.wsscode.pathom.viz.trace/D3Trace",263040171),com.wsscode.pathom.viz.trace.D3Trace);

var x64328_64374 = com.wsscode.pathom.viz.trace.D3Trace.prototype;
x64328_64374.render = ((function (x64328_64374){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64329 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64330 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64331 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64332 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64333 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64334 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64335 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64336 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64337 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64338 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64334;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64335;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64336;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64337;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64338;

try{var _ = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (_,_STAR_reconciler_STAR__orig_val__64329,_STAR_depth_STAR__orig_val__64330,_STAR_shared_STAR__orig_val__64331,_STAR_instrument_STAR__orig_val__64332,_STAR_parent_STAR__orig_val__64333,_STAR_reconciler_STAR__temp_val__64334,_STAR_depth_STAR__temp_val__64335,_STAR_shared_STAR__temp_val__64336,_STAR_instrument_STAR__temp_val__64337,_STAR_parent_STAR__temp_val__64338,this$,this__50885__auto__,x64328_64374){
return (function (p1__64321_SHARP_){
return goog.object.set(this$,"svgContainer",p1__64321_SHARP_);
});})(_,_STAR_reconciler_STAR__orig_val__64329,_STAR_depth_STAR__orig_val__64330,_STAR_shared_STAR__orig_val__64331,_STAR_instrument_STAR__orig_val__64332,_STAR_parent_STAR__orig_val__64333,_STAR_reconciler_STAR__temp_val__64334,_STAR_depth_STAR__temp_val__64335,_STAR_shared_STAR__temp_val__64336,_STAR_instrument_STAR__temp_val__64337,_STAR_parent_STAR__temp_val__64338,this$,this__50885__auto__,x64328_64374))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","error-catch?","com.wsscode.pathom.viz.trace/error-catch?",-58122601)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (_,_STAR_reconciler_STAR__orig_val__64329,_STAR_depth_STAR__orig_val__64330,_STAR_shared_STAR__orig_val__64331,_STAR_instrument_STAR__orig_val__64332,_STAR_parent_STAR__orig_val__64333,_STAR_reconciler_STAR__temp_val__64334,_STAR_depth_STAR__temp_val__64335,_STAR_shared_STAR__temp_val__64336,_STAR_instrument_STAR__temp_val__64337,_STAR_parent_STAR__temp_val__64338,this$,this__50885__auto__,x64328_64374){
return (function (p1__64322_SHARP_){
return goog.object.set(this$,"svg",p1__64322_SHARP_);
});})(_,_STAR_reconciler_STAR__orig_val__64329,_STAR_depth_STAR__orig_val__64330,_STAR_shared_STAR__orig_val__64331,_STAR_instrument_STAR__orig_val__64332,_STAR_parent_STAR__orig_val__64333,_STAR_reconciler_STAR__temp_val__64334,_STAR_depth_STAR__temp_val__64335,_STAR_shared_STAR__temp_val__64336,_STAR_instrument_STAR__temp_val__64337,_STAR_parent_STAR__temp_val__64338,this$,this__50885__auto__,x64328_64374))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64333;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64332;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64331;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64330;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64329;
}});})(x64328_64374))
;

x64328_64374.componentDidUpdate = ((function (x64328_64374){
return (function (prev_props__50862__auto__,prev_state__50863__auto__,snapshot__50864__auto__){
var this__50861__auto__ = this;
var this$ = this__50861__auto__;
var snapshot64323 = snapshot__50864__auto__;
var prev_props = goog.object.get(prev_props__50862__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__50863__auto__,"fulcro$state");
if((((!((this__50861__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__50861__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__50865__auto___64379 = fulcro.client.primitives.ident(this__50861__auto__,prev_props);
var next_ident__50866__auto___64380 = fulcro.client.primitives.ident(this__50861__auto__,fulcro.client.primitives.props(this__50861__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__50865__auto___64379,next_ident__50866__auto___64380)){
var idxr__50867__auto___64381 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__50867__auto___64381 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__50867__auto___64381),((function (idxr__50867__auto___64381,ident__50865__auto___64379,next_ident__50866__auto___64380,this$,snapshot64323,prev_props,_,this__50861__auto__,x64328_64374){
return (function (indexes__50868__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__50868__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__50865__auto___64379], null),cljs.core.disj,this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__50866__auto___64380], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__50861__auto__);
});})(idxr__50867__auto___64381,ident__50865__auto___64379,next_ident__50866__auto___64380,this$,snapshot64323,prev_props,_,this__50861__auto__,x64328_64374))
);
}
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590).cljs$core$IFn$_invoke$arity$1(prev_props),new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return com.wsscode.pathom.viz.trace.recompute_trace_size(this$);
} else {
return com.wsscode.pathom.viz.trace.render_trace(this$);
}
});})(x64328_64374))
;

x64328_64374.componentDidCatch = ((function (x64328_64374){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.trace","error-catch?","com.wsscode.pathom.viz.trace/error-catch?",-58122601),true], null));
});})(x64328_64374))
;

x64328_64374.componentDidMount = ((function (x64328_64374){
return (function (){
var this__50869__auto__ = this;
var this$ = this__50869__auto__;
var reconciler__50870__auto__ = fulcro.client.primitives.get_reconciler(this__50869__auto__);
var lifecycle__50871__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__50870__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__50872__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__50870__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__50869__auto__,"fulcro$mounted",true);

if((indexer__50872__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__50872__auto__,this__50869__auto__);
}

if(cljs.core.truth_(lifecycle__50871__auto__)){
(lifecycle__50871__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__50871__auto__.cljs$core$IFn$_invoke$arity$2(this__50869__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__50871__auto__.call(null,this__50869__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

com.wsscode.pathom.viz.trace.render_trace(this$);

return module$com$wsscode$pathom$viz$detect_element_size.addResizeListener(goog.object.get(this$,"svgContainer"),((function (this$,reconciler__50870__auto__,lifecycle__50871__auto__,indexer__50872__auto__,this__50869__auto__,x64328_64374){
return (function (){
return com.wsscode.pathom.viz.trace.recompute_trace_size(this$);
});})(this$,reconciler__50870__auto__,lifecycle__50871__auto__,indexer__50872__auto__,this__50869__auto__,x64328_64374))
);
});})(x64328_64374))
;


com.wsscode.pathom.viz.trace.D3Trace.prototype.constructor = com.wsscode.pathom.viz.trace.D3Trace;

com.wsscode.pathom.viz.trace.D3Trace.prototype.constructor.displayName = "com.wsscode.pathom.viz.trace/D3Trace";

com.wsscode.pathom.viz.trace.D3Trace.prototype.fulcro$isComponent = true;

var x64354_64385 = com.wsscode.pathom.viz.trace.D3Trace;
x64354_64385.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64354_64385.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64354_64385){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute","$pathom-attribute",136176450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#d4d4d4",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#94a0ad"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute-bounds","$pathom-attribute-bounds",1081784475),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"5 1",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-detail-marker","$pathom-detail-marker",484829335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#a4e3bf",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-waiting-resolver","$pathom-event-waiting-resolver",1991089170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-skip-wait-key","$pathom-event-skip-wait-key",467184324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-external-wait-key","$pathom-event-external-wait-key",-899963717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-call-resolver","$pathom-event-call-resolver",-1470476292),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#af9df4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-call-resolver-batch","$pathom-event-call-resolver-batch",2109737882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(42, 0, 208, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-schedule-resolver","$pathom-event-schedule-resolver",-1948594459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#efaf42"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-error","$pathom-event-error",390118112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#bb0808"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-label-text","$pathom-label-text",112483055),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"fill","fill",883462889),"#222",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-vruler","$pathom-vruler",745098620),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#2b98f0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-axis","$pathom-axis",1091857414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#e5e5e5"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-tooltip","$pathom-tooltip",1186389629),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#00000069 0px 1px 3px 0px","nowrap","12px","-1000px","#fff","10","break-all","1px 6px","fixed","none","sans-serif","-1000px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-details-count","$pathom-details-count",-1094731595),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#8bdc47",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"7px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-children-count","$pathom-children-count",343508656),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#d2a753",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"7px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute-toggle-children","$pathom-attribute-toggle-children",-1500657954),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default",new cljs.core.Keyword(null,"fill","fill",883462889),"#757575",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-8px, 13px)"], null)], null)], null);
});})(x64354_64385))
;

x64354_64385.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64354_64385){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64354_64385))
;


var x64357_64407 = com.wsscode.pathom.viz.trace.D3Trace.prototype;
x64357_64407.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64357_64407.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64357_64407){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute","$pathom-attribute",136176450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#d4d4d4",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#94a0ad"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute-bounds","$pathom-attribute-bounds",1081784475),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"5 1",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-detail-marker","$pathom-detail-marker",484829335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#a4e3bf",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-waiting-resolver","$pathom-event-waiting-resolver",1991089170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-skip-wait-key","$pathom-event-skip-wait-key",467184324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-external-wait-key","$pathom-event-external-wait-key",-899963717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de5615"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-call-resolver","$pathom-event-call-resolver",-1470476292),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#af9df4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-call-resolver-batch","$pathom-event-call-resolver-batch",2109737882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(42, 0, 208, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-schedule-resolver","$pathom-event-schedule-resolver",-1948594459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#efaf42"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-event-error","$pathom-event-error",390118112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#bb0808"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-label-text","$pathom-label-text",112483055),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"fill","fill",883462889),"#222",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-vruler","$pathom-vruler",745098620),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#2b98f0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-axis","$pathom-axis",1091857414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#e5e5e5"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-tooltip","$pathom-tooltip",1186389629),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#00000069 0px 1px 3px 0px","nowrap","12px","-1000px","#fff","10","break-all","1px 6px","fixed","none","sans-serif","-1000px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-details-count","$pathom-details-count",-1094731595),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#8bdc47",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"7px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-children-count","$pathom-children-count",343508656),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#d2a753",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"7px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-attribute-toggle-children","$pathom-attribute-toggle-children",-1500657954),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default",new cljs.core.Keyword(null,"fill","fill",883462889),"#757575",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-8px, 13px)"], null)], null)], null);
});})(x64357_64407))
;

x64357_64407.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64357_64407){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64357_64407))
;


com.wsscode.pathom.viz.trace.D3Trace.cljs$lang$type = true;

com.wsscode.pathom.viz.trace.D3Trace.cljs$lang$ctorStr = "com.wsscode.pathom.viz.trace/D3Trace";

com.wsscode.pathom.viz.trace.D3Trace.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.trace/D3Trace");
});
com.wsscode.pathom.viz.trace.d3_trace = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.trace.D3Trace);

//# sourceMappingURL=com.wsscode.pathom.viz.trace.js.map
