/** Compiled By kissy-xtemplate */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/
        var widgetToTop = function (scope, buffer, undefined) {
            var tpl = this,
                nativeCommands = tpl.root.nativeCommands,
                utils = tpl.root.utils;
            var callFnUtil = utils["callFn"],
                callCommandUtil = utils["callCommand"],
                eachCommand = nativeCommands["each"],
                withCommand = nativeCommands["with"],
                ifCommand = nativeCommands["if"],
                setCommand = nativeCommands["set"],
                includeCommand = nativeCommands["include"],
                parseCommand = nativeCommands["parse"],
                extendCommand = nativeCommands["extend"],
                blockCommand = nativeCommands["block"],
                macroCommand = nativeCommands["macro"],
                debuggerCommand = nativeCommands["debugger"];
            buffer.write('<div class="J_UpTOTop up-to-top">\r\n    <div class="update-gotop">\r\n        <a class="feedback" target="_blank" href="http://ur.taobao.com/survey/view.htm?id=2052">反馈</a>\r\n\r\n        <p title="回到顶部" class="go-to-top J_GoToTop">\r\n            <a pointname="tbscj.11.1" class="J_HotPoint" target="_self" href="javascript:scrollTo(0,0);">top</a>\r\n        </p>\r\n    </div>\r\n</div>\r\n', 0);
            return buffer;
        };
widgetToTop.TPL_NAME = module.name;
widgetToTop.version = "5.0.0";
return widgetToTop
});