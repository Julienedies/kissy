/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Dec 11 12:52
*/
KISSY.add("component/base",function(e,f,d,c,b,a,g,k){e.mix(f,{Controller:d,Render:c,Container:b,DelegateChildren:a,DecorateChild:k,DecorateChildren:g});return f},{requires:"./base/impl,./base/controller,./base/render,./base/container,./base/delegate-children,./base/decorate-children,./base/decorate-child".split(",")});
KISSY.add("component/base/box-render",function(e){function f(){}var d=e.all,c=e.Env.host.document;f.ATTRS={el:{setter:function(b){return d(b)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},content:{},elBefore:{},render:{},visible:{value:!0},visibleMode:{value:"display"},contentEl:{valueFn:function(){return this.get("el")}}};f.HTML_PARSER={el:function(b){return b},content:function(b){return(this.get("contentEl")||b).html()}};f.prototype={__createDom:function(){var b,a;
this.get("srcNode")||(a=this.get("contentEl"),b=d("<"+this.get("elTagName")+">"),a&&b.append(a),this.setInternal("el",b),a||this.setInternal("contentEl",b))},__renderUI:function(){if(!this.get("srcNode")){var b=this.get("render"),a=this.get("el"),g=this.get("elBefore");g?a.insertBefore(g,void 0):b?a.appendTo(b,void 0):a.appendTo(c.body,void 0)}},_onSetElAttrs:function(b){this.get("el").attr(b)},_onSetElCls:function(b){this.get("el").addClass(b)},_onSetElStyle:function(b){this.get("el").css(b)},_onSetWidth:function(b){this.get("el").width(b)},
_onSetHeight:function(b){this.get("el").height(b)},_onSetContent:function(b){var a;if(!this.get("srcNode")||this.get("rendered"))a=this.get("contentEl"),"string"==typeof b?a.html(b):b&&a.empty().append(b)},_onSetVisible:function(b){var a=this.get("el"),c=this.getCssClassWithState("-shown"),e=this.getCssClassWithState("-hidden"),d=this.get("visibleMode");b?(a.removeClass(e),a.addClass(c)):(a.removeClass(c),a.addClass(e));"visibility"==d?a.css("visibility",b?"visible":"hidden"):a.css("display",b?"":
"none")},__destructor:function(){var b=this.get("el");b&&b.remove()}};return f},{requires:["node"]});
KISSY.add("component/base/box",function(){function e(){}e.ATTRS={content:{view:1},width:{view:1},height:{view:1},elCls:{view:1},elStyle:{view:1},elAttrs:{view:1},elBefore:{view:1},el:{view:1},render:{view:1},visibleMode:{view:1},visible:{value:!0,view:1},srcNode:{view:1}};e.prototype={_onSetVisible:function(e){this.get("rendered")&&this.fire(e?"show":"hide")},show:function(){this.render();this.set("visible",!0);return this},hide:function(){this.set("visible",!1);return this}};return e});
KISSY.add("component/base/container",function(e,f,d,c){return f.extend([d,c])},{requires:["./controller","./delegate-children","./decorate-children"]});
KISSY.add("component/base/controller",function(e,f,d,c,b,a,g,k){function p(i){return function(a){this==a.target&&(a=a.newVal,this.get("view").set(i,a))}}function u(i){return function(a){var b=this.get("view");return a===k?b.get(i):a}}function n(i){var b,c,g,d={},h,f=i.get("xrender");b=i.getAttrs();for(g in b)if(c=b[g],c.view){if((h=i.get(g))!==k)d[g]=h;i.on("after"+e.ucfirst(g)+"Change",p(g));c.getter=u(g)}i=i.constructor;for(c=[];i&&i!=s;)(b=a.getXClassByConstructor(i))&&c.push(b),i=i.superclass&&
i.superclass.constructor;i=c.join(" ");d.ksComponentCss=i;return new f(d)}function t(a,b){var c=a.relatedTarget;return c&&(c===b[0]||b.contains(c))}function h(a,b){return function(c){if(!a.get("disabled"))a[b](c)}}var j=e.Env.host.document.documentMode||e.UA.ie,l=e.Features,q=d.Gesture,o=".-ks-component-focus"+e.now(),m=".-ks-component-mouse"+e.now(),r=l.isTouchSupported(),s=b.extend([f],{isController:!0,getCssClassWithPrefix:a.getCssClassWithPrefix,initializer:function(){this.setInternal("view",
n(this))},createDom:function(){var a;a=this.get("view");a.create(k);a=a.getKeyEventTarget();this.get("allowTextSelection")||a.unselectable(k)},renderUI:function(){var a,b,c;this.get("view").render();b=this.get("children").concat();for(a=this.get("children").length=0;a<b.length;a++)c=this.addChild(b[a]),c.render()},_onSetFocusable:function(a){var b=this.getKeyEventTarget();if(a)b.attr("tabIndex",0).attr("hideFocus",!0).on("focus"+o,h(this,"handleFocus")).on("blur"+o,h(this,"handleBlur")).on("keydown"+
o,h(this,"handleKeydown"));else b.removeAttr("tabIndex"),b.detach(o)},_onSetHandleMouseEvents:function(a){var b=this.get("el");if(a){if(!r)b.on("mouseenter"+m,h(this,"handleMouseEnter")).on("mouseleave"+m,h(this,"handleMouseLeave")).on("contextmenu"+m,h(this,"handleContextMenu"));b.on(q.start+m,h(this,"handleMouseDown")).on(q.end+m,h(this,"handleMouseUp")).on(q.tap+m,h(this,"performActionInternal"));if(j&&9>j)b.on("dblclick"+m,h(this,"handleDblClick"))}else b.detach(m)},_onSetFocused:function(a){a&&
this.getKeyEventTarget()[0].focus()},getContentElement:function(){return this.get("view").getContentElement()},getKeyEventTarget:function(){return this.get("view").getKeyEventTarget()},addChild:function(a,b){var g=this.get("children"),e;b===k&&(b=g.length);e=g[b]&&g[b].get("el")||null;var d=a;this.create();var h=this.getContentElement(),d=c.create(d,this);d.setInternal("parent",this);d.set("render",h);d.set("elBefore",e);d.create(k);a=d;g.splice(b,0,a);this.get("rendered")&&a.render();return a},removeChild:function(a,
b){var c=this.get("children"),g=e.indexOf(a,c);-1!=g&&c.splice(g,1);b&&a.destroy&&a.destroy();return a},removeChildren:function(a){var b,c=[].concat(this.get("children"));for(b=0;b<c.length;b++)this.removeChild(c[b],a);return this},getChildAt:function(a){return this.get("children")[a]||null},handleDblClick:function(a){this.performActionInternal(a)},handleMouseOver:function(a){var b=this.get("el");t(a,b)||this.handleMouseEnter(a)},handleMouseOut:function(a){var b=this.get("el");t(a,b)||this.handleMouseLeave(a)},
handleMouseEnter:function(a){this.set("highlighted",!!a)},handleMouseLeave:function(a){this.set("active",!1);this.set("highlighted",!a)},handleMouseDown:function(a){var b;if(1==a.which||r)if(b=this.getKeyEventTarget(),this.get("activeable")&&this.set("active",!0),this.get("focusable")&&(b[0].focus(),this.set("focused",!0)),!this.get("allowTextSelection"))b=(b=a.target.nodeName)&&b.toLowerCase(),"input"!=b&&"textarea"!=b&&a.preventDefault()},handleMouseUp:function(a){this.get("active")&&(1==a.which||
r)&&this.set("active",!1)},handleContextMenu:function(){},handleFocus:function(a){this.set("focused",!!a);this.fire("focus")},handleBlur:function(a){this.set("focused",!a);this.fire("blur")},handleKeyEventInternal:function(a){if(a.keyCode==d.KeyCodes.ENTER)return this.performActionInternal(a)},handleKeydown:function(a){if(this.handleKeyEventInternal(a))return a.halt(),!0},performActionInternal:function(){},destructor:function(){var a,b=this.get("children");for(a=0;a<b.length;a++)b[a].destroy&&b[a].destroy();
this.get("view").destroy()}},{ATTRS:{handleMouseEvents:{value:!0},focusable:{value:!0,view:1},allowTextSelection:{value:!1},activeable:{value:!0},focused:{view:1},active:{view:1},highlighted:{view:1},children:{value:[]},prefixCls:{value:"ks-",view:1},parent:{setter:function(a){this.addTarget(a)}},disabled:{view:1},xrender:{value:g},defaultChildXClass:{}}},{xclass:"controller"});return s},{requires:"./box,event,./impl,./uibase,./manager,./render".split(",")});
KISSY.add("component/base/decorate-child",function(e,f){function d(){}e.augment(d,f,{decorateInternal:function(c){this.set("el",c);var b=this.get("decorateChildCls");if(c=c.one("."+b))(b=this.findUIConstructorByNode(c,1))?this.decorateChildrenInternal(b,c):this.decorateChildren(c)}});return d},{requires:["./decorate-children"]});
KISSY.add("component/base/decorate-children",function(e,f){function d(){}e.augment(d,{decorateInternal:function(c){this.set("el",c);this.decorateChildren(c)},findUIConstructorByNode:function(c){var c=c.attr("class")||"",b=this.get("prefixCls"),c=c.replace(RegExp("\\b"+b,"ig"),"");return f.getConstructorByXClass(c)},decorateChildrenInternal:function(c,b){this.addChild(new c({srcNode:b,prefixCls:this.get("prefixCls")}))},decorateChildren:function(c){var b=this;c.children().each(function(a){var c=b.findUIConstructorByNode(a);
b.decorateChildrenInternal(c,a)})}});return d},{requires:["./manager"]});
KISSY.add("component/base/delegate-children",function(e,f){function d(){}function c(a){if(!this.get("disabled")){var b=this.getOwnerControl(a.target,a);if(b&&!b.get("disabled"))switch(a.type){case g.start:b.handleMouseDown(a);break;case g.end:b.handleMouseUp(a);break;case g.tap:b.performActionInternal(a);break;case "mouseover":b.handleMouseOver(a);break;case "mouseout":b.handleMouseOut(a);break;case "contextmenu":b.handleContextMenu(a);break;case "dblclick":b.handleDblClick(a)}}}var b=e.UA,a=e.Env.host.document.documentMode||
b.ie,g=f.Gesture,k=e.Features.isTouchSupported();d.ATTRS={delegateChildren:{value:!0}};e.augment(d,{__bindUI:function(){var b;this.get("delegateChildren")&&(b=g.start+" "+g.end+" "+g.tap+" ",k||(b+="mouseover mouseout contextmenu "+(a&&9>a?"dblclick ":"")),this.get("el").on(b,c,this))},getOwnerControl:function(a){for(var b=this.get("children"),c=b.length,g=this.get("el")[0];a&&a!==g;){for(var d=0;d<c;d++)if(b[d].get("el")[0]===a)return b[d];a=a.parentNode}return null}});return d},{requires:["event"]});
KISSY.add("component/base/impl",function(e,f,d){return{Manager:d,UIBase:f,create:function(c,b){var a;c&&!c.isController&&!c.xclass&&(c.xclass=b.get("defaultChildXClass"));if(c&&(a=c.xclass))b&&!c.prefixCls&&(c.prefixCls=b.get("prefixCls")),a=d.getConstructorByXClass(a),c=new a(c);return c}}},{requires:["./uibase","./manager"]});
KISSY.add("component/base/manager",function(e){function f(a){for(var a=e.trim(a).split(/\s+/),b=0;b<a.length;b++)a[b]&&(a[b]=this.get("prefixCls")+a[b]);return a.join(" ")}var d={},c={},b={__instances:c,addComponent:function(a,b){c[a]=b},removeComponent:function(a){delete c[a]},getComponent:function(a){return c[a]},getCssClassWithPrefix:f,getXClassByConstructor:function(a){for(var b in d)if(d[b].constructor==a)return b;return 0},getConstructorByXClass:function(a){for(var a=a.split(/\s+/),b=-1,c,e=
null,f=0;f<a.length;f++){var n=d[a[f]];if(n&&(c=n.priority)>b)b=c,e=n.constructor}return e},setConstructorByXClass:function(a,b){e.isFunction(b)?d[a]={constructor:b,priority:0}:(b.priority=b.priority||0,d[a]=b)}};b.getCssClassWithPrefix=f;return b});
KISSY.add("component/base/render",function(e,f,d,c,b){return c.extend([f],{getCssClassWithState:function(a){var b=this.get("ksComponentCss")||"",a=a||"";return this.getCssClassWithPrefix(b.split(/\s+/).join(a+" ")+a)},getCssClassWithPrefix:b.getCssClassWithPrefix,createDom:function(){this.get("el").addClass(this.getCssClassWithState())},getKeyEventTarget:function(){return this.get("el")},_onSetHighlighted:function(a){var b=this.getCssClassWithState("-hover");this.get("el")[a?"addClass":"removeClass"](b)},
_onSetDisabled:function(a){var b=this.getCssClassWithState("-disabled");this.get("el")[a?"addClass":"removeClass"](b).attr("aria-disabled",a);this.get("focusable")&&this.getKeyEventTarget().attr("tabIndex",a?-1:0)},_onSetActive:function(a){var b=this.getCssClassWithState("-active");this.get("el")[a?"addClass":"removeClass"](b).attr("aria-pressed",!!a)},_onSetFocused:function(a){var b=this.get("el"),c=this.getCssClassWithState("-focused");b[a?"addClass":"removeClass"](c)},getContentElement:function(){return this.get("contentEl")||
this.get("el")}},{ATTRS:{prefixCls:{value:"ks-"},focusable:{value:!0},focused:{},active:{},disabled:{},highlighted:{}},HTML_PARSER:{disabled:function(){var a=this.getCssClassWithState("-disabled");return this.get("el").hasClass(a)}}})},{requires:["./box-render","./impl","./uibase","./manager"]});
KISSY.add("component/base/uibase",function(e,f,d,c,b){var d=e.noop,a=f.extend({constructor:function(){var b;a.superclass.constructor.apply(this,arguments);this.decorateInternal&&(b=this.get("srcNode"))&&this.decorateInternal(b);this.get("autoRender")&&this.render()},bindInternal:d,syncInternal:d,initializer:function(){var a,b=e.one(this.get("srcNode"));(a=this.get("id"))&&c.addComponent(a,this);if(b){var d=this.constructor,g,f;f=this.collectConstructorChains();for(a=f.length-1;0<=a;a--)if(d=f[a],
g=d.HTML_PARSER){var d=b,h=void 0,j=void 0,l=this.userConfig||{};for(h in g)h in l||(j=g[h],e.isFunction(j)?this.setInternal(h,j.call(this,d)):"string"==typeof j?this.setInternal(h,d.one(j)):e.isArray(j)&&j[0]&&this.setInternal(h,d.all(j[0])))}this.setInternal("srcNode",b)}},create:function(){this.get("created")||(this.fire("beforeCreateDom"),this.callMethodByHierarchy("createDom","__createDom"),this.setInternal("created",!0),this.fire("afterCreateDom"),this.callPluginsMethod("createDom"));return this},
render:function(){this.get("rendered")||(this.create(b),this.fire("beforeRenderUI"),this.callMethodByHierarchy("renderUI","__renderUI"),this.fire("afterRenderUI"),this.callPluginsMethod("renderUI"),this.fire("beforeBindUI"),a.superclass.bindInternal.call(this),this.callMethodByHierarchy("bindUI","__bindUI"),this.fire("afterBindUI"),this.callPluginsMethod("bindUI"),this.fire("beforeSyncUI"),a.superclass.syncInternal.call(this),this.callMethodByHierarchy("syncUI","__syncUI"),this.fire("afterSyncUI"),
this.callPluginsMethod("syncUI"),this.setInternal("rendered",!0));return this},createDom:d,renderUI:d,bindUI:d,syncUI:d,plug:function(){var b;b=this.get("plugins");a.superclass.plug.apply(this,arguments);b=b[b.length-1];this.get("rendered")?(b.pluginCreateDom(this),b.pluginRenderUI(this),b.pluginBindUI(this),b.pluginSyncUI(this)):this.get("created")&&b.pluginCreateDom(this);return this},destructor:function(){var a;(a=this.get("id"))&&c.removeComponent(a)}},{ATTRS:{rendered:{value:!1},created:{value:!1},
xclass:{valueFn:function(){return c.getXClassByConstructor(this.constructor)}}}}),g=a.extend;e.mix(a,{HTML_PARSER:{},extend:function p(a,b,d){var f=e.makeArray(arguments),j={},l=f[f.length-1];l.xclass&&(f.pop(),f.push(l.xclass));f=g.apply(this,f);e.isArray(a)&&(e.each(a.concat(f),function(a){a&&e.each(a.HTML_PARSER,function(a,b){j[b]=a})}),f.HTML_PARSER=j);l.xclass&&c.setConstructorByXClass(l.xclass,{constructor:f,priority:l.priority});f.extend=p;return f}});return a},{requires:["rich-base","node",
"./manager"]});