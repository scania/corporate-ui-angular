(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/_commonjsHelpers-97e6d7b1.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/_commonjsHelpers-97e6d7b1.js ***!
  \*****************************************************************************/
/*! exports provided: a, c, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonjsGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createCommonjsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unwrapExports; });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}



/***/ }),

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-code-sample.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-code-sample.entry.js ***!
  \***********************************************************************/
/*! exports provided: c_code_sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_code_sample", function() { return Field; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");
/* harmony import */ var _commonjsHelpers_97e6d7b1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_commonjsHelpers-97e6d7b1.js */ "./node_modules/corporate-ui/dist/esm-es5/_commonjsHelpers-97e6d7b1.js");


var highlight = Object(_commonjsHelpers_97e6d7b1_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function (module, exports) {
    /*
    Syntax highlighting with language autodetection.
    https://highlightjs.org/
    */
    (function (factory) {
        // Find the global object for export to both the browser and web workers.
        var globalObject = typeof window === 'object' && window ||
            typeof self === 'object' && self;
        // Setup highlight.js for different environments. First is Node.js or
        // CommonJS.
        // `nodeType` is checked to ensure that `exports` is not a HTML element.
        if (!exports.nodeType) {
            factory(exports);
        }
        else if (globalObject) {
            // Export hljs globally even when using AMD for cases when this script
            // is loaded with others that may still expect a global hljs.
            globalObject.hljs = factory({});
        }
    }(function (hljs) {
        // Convenience variables for build-in objects
        var ArrayProto = [], objectKeys = Object.keys;
        // Global internal variables used within the highlight.js library.
        var languages = {}, aliases = {};
        // Regular expressions used throughout the highlight.js library.
        var noHighlightRe = /^(no-?highlight|plain|text)$/i, languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i, fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
        var spanEndTag = '</span>';
        // Global options used when within external APIs. This is modified when
        // calling the `hljs.configure` function.
        var options = {
            classPrefix: 'hljs-',
            tabReplace: null,
            useBR: false,
            languages: undefined
        };
        // keywords that should have no default relevance value
        var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');
        /* Utility functions */
        function escape(value) {
            return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        function tag(node) {
            return node.nodeName.toLowerCase();
        }
        function testRe(re, lexeme) {
            var match = re && re.exec(lexeme);
            return match && match.index === 0;
        }
        function isNotHighlighted(language) {
            return noHighlightRe.test(language);
        }
        function blockLanguage(block) {
            var i, match, length, _class;
            var classes = block.className + ' ';
            classes += block.parentNode ? block.parentNode.className : '';
            // language-* takes precedence over non-prefixed class names.
            match = languagePrefixRe.exec(classes);
            if (match) {
                return getLanguage(match[1]) ? match[1] : 'no-highlight';
            }
            classes = classes.split(/\s+/);
            for (i = 0, length = classes.length; i < length; i++) {
                _class = classes[i];
                if (isNotHighlighted(_class) || getLanguage(_class)) {
                    return _class;
                }
            }
        }
        function inherit(parent) {
            var key;
            var result = {};
            var objects = Array.prototype.slice.call(arguments, 1);
            for (key in parent)
                result[key] = parent[key];
            objects.forEach(function (obj) {
                for (key in obj)
                    result[key] = obj[key];
            });
            return result;
        }
        /* Stream merging */
        function nodeStream(node) {
            var result = [];
            (function _nodeStream(node, offset) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                    if (child.nodeType === 3)
                        offset += child.nodeValue.length;
                    else if (child.nodeType === 1) {
                        result.push({
                            event: 'start',
                            offset: offset,
                            node: child
                        });
                        offset = _nodeStream(child, offset);
                        // Prevent void elements from having an end tag that would actually
                        // double them in the output. There are more void elements in HTML
                        // but we list only those realistically expected in code display.
                        if (!tag(child).match(/br|hr|img|input/)) {
                            result.push({
                                event: 'stop',
                                offset: offset,
                                node: child
                            });
                        }
                    }
                }
                return offset;
            })(node, 0);
            return result;
        }
        function mergeStreams(original, highlighted, value) {
            var processed = 0;
            var result = '';
            var nodeStack = [];
            function selectStream() {
                if (!original.length || !highlighted.length) {
                    return original.length ? original : highlighted;
                }
                if (original[0].offset !== highlighted[0].offset) {
                    return (original[0].offset < highlighted[0].offset) ? original : highlighted;
                }
                /*
                To avoid starting the stream just before it should stop the order is
                ensured that original always starts first and closes last:
          
                if (event1 == 'start' && event2 == 'start')
                  return original;
                if (event1 == 'start' && event2 == 'stop')
                  return highlighted;
                if (event1 == 'stop' && event2 == 'start')
                  return original;
                if (event1 == 'stop' && event2 == 'stop')
                  return highlighted;
          
                ... which is collapsed to:
                */
                return highlighted[0].event === 'start' ? original : highlighted;
            }
            function open(node) {
                function attr_str(a) { return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"'; }
                result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
            }
            function close(node) {
                result += '</' + tag(node) + '>';
            }
            function render(event) {
                (event.event === 'start' ? open : close)(event.node);
            }
            while (original.length || highlighted.length) {
                var stream = selectStream();
                result += escape(value.substring(processed, stream[0].offset));
                processed = stream[0].offset;
                if (stream === original) {
                    /*
                    On any opening or closing tag of the original markup we first close
                    the entire highlighted node stack, then render the original tag along
                    with all the following original tags at the same offset and then
                    reopen all the tags on the highlighted stack.
                    */
                    nodeStack.reverse().forEach(close);
                    do {
                        render(stream.splice(0, 1)[0]);
                        stream = selectStream();
                    } while (stream === original && stream.length && stream[0].offset === processed);
                    nodeStack.reverse().forEach(open);
                }
                else {
                    if (stream[0].event === 'start') {
                        nodeStack.push(stream[0].node);
                    }
                    else {
                        nodeStack.pop();
                    }
                    render(stream.splice(0, 1)[0]);
                }
            }
            return result + escape(value.substr(processed));
        }
        /* Initialization */
        function dependencyOnParent(mode) {
            if (!mode)
                return false;
            return mode.endsWithParent || dependencyOnParent(mode.starts);
        }
        function expand_or_clone_mode(mode) {
            if (mode.variants && !mode.cached_variants) {
                mode.cached_variants = mode.variants.map(function (variant) {
                    return inherit(mode, { variants: null }, variant);
                });
            }
            // EXPAND
            // if we have variants then essentually "replace" the mode with the variants
            // this happens in compileMode, where this function is called from
            if (mode.cached_variants)
                return mode.cached_variants;
            // CLONE
            // if we have dependencies on parents then we need a unique
            // instance of ourselves, so we can be reused with many
            // different parents without issue
            if (dependencyOnParent(mode))
                return [inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null })];
            // no special dependency issues, just return ourselves
            return [mode];
        }
        function compileKeywords(rawKeywords, case_insensitive) {
            var compiled_keywords = {};
            if (typeof rawKeywords === 'string') { // string
                splitAndCompile('keyword', rawKeywords);
            }
            else {
                objectKeys(rawKeywords).forEach(function (className) {
                    splitAndCompile(className, rawKeywords[className]);
                });
            }
            return compiled_keywords;
            // ---
            function splitAndCompile(className, str) {
                if (case_insensitive) {
                    str = str.toLowerCase();
                }
                str.split(' ').forEach(function (keyword) {
                    var pair = keyword.split('|');
                    compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
                });
            }
        }
        function scoreForKeyword(keyword, providedScore) {
            // manual scores always win over common keywords
            // so you can force a score of 1 if you really insist
            if (providedScore)
                return Number(providedScore);
            return commonKeyword(keyword) ? 0 : 1;
        }
        function commonKeyword(word) {
            return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
        }
        function compileLanguage(language) {
            function reStr(re) {
                return (re && re.source) || re;
            }
            function langRe(value, global) {
                return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
            }
            function reCountMatchGroups(re) {
                return (new RegExp(re.toString() + '|')).exec('').length - 1;
            }
            // joinRe logically computes regexps.join(separator), but fixes the
            // backreferences so they continue to match.
            // it also places each individual regular expression into it's own
            // match group, keeping track of the sequencing of those match groups
            // is currently an exercise for the caller. :-)
            function joinRe(regexps, separator) {
                // backreferenceRe matches an open parenthesis or backreference. To avoid
                // an incorrect parse, it additionally matches the following:
                // - [...] elements, where the meaning of parentheses and escapes change
                // - other escape sequences, so we do not misparse escape sequences as
                //   interesting elements
                // - non-matching or lookahead parentheses, which do not capture. These
                //   follow the '(' with a '?'.
                var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
                var numCaptures = 0;
                var ret = '';
                for (var i = 0; i < regexps.length; i++) {
                    numCaptures += 1;
                    var offset = numCaptures;
                    var re = reStr(regexps[i]);
                    if (i > 0) {
                        ret += separator;
                    }
                    ret += "(";
                    while (re.length > 0) {
                        var match = backreferenceRe.exec(re);
                        if (match == null) {
                            ret += re;
                            break;
                        }
                        ret += re.substring(0, match.index);
                        re = re.substring(match.index + match[0].length);
                        if (match[0][0] == '\\' && match[1]) {
                            // Adjust the backreference.
                            ret += '\\' + String(Number(match[1]) + offset);
                        }
                        else {
                            ret += match[0];
                            if (match[0] == '(') {
                                numCaptures++;
                            }
                        }
                    }
                    ret += ")";
                }
                return ret;
            }
            function buildModeRegex(mode) {
                var matchIndexes = {};
                var matcherRe;
                var regexes = [];
                var matcher = {};
                var matchAt = 1;
                function addRule(rule, regex) {
                    matchIndexes[matchAt] = rule;
                    regexes.push([rule, regex]);
                    matchAt += reCountMatchGroups(regex) + 1;
                }
                var term;
                for (var i = 0; i < mode.contains.length; i++) {
                    var re;
                    term = mode.contains[i];
                    if (term.beginKeywords) {
                        re = '\\.?(?:' + term.begin + ')\\.?';
                    }
                    else {
                        re = term.begin;
                    }
                    addRule(term, re);
                }
                if (mode.terminator_end)
                    addRule("end", mode.terminator_end);
                if (mode.illegal)
                    addRule("illegal", mode.illegal);
                var terminators = regexes.map(function (el) { return el[1]; });
                matcherRe = langRe(joinRe(terminators, '|'), true);
                matcher.lastIndex = 0;
                matcher.exec = function (s) {
                    var rule;
                    if (regexes.length === 0)
                        return null;
                    matcherRe.lastIndex = matcher.lastIndex;
                    var match = matcherRe.exec(s);
                    if (!match) {
                        return null;
                    }
                    for (var i = 0; i < match.length; i++) {
                        if (match[i] != undefined && matchIndexes["" + i] != undefined) {
                            rule = matchIndexes["" + i];
                            break;
                        }
                    }
                    // illegal or end match
                    if (typeof rule === "string") {
                        match.type = rule;
                        match.extra = [mode.illegal, mode.terminator_end];
                    }
                    else {
                        match.type = "begin";
                        match.rule = rule;
                    }
                    return match;
                };
                return matcher;
            }
            function compileMode(mode, parent) {
                if (mode.compiled)
                    return;
                mode.compiled = true;
                mode.keywords = mode.keywords || mode.beginKeywords;
                if (mode.keywords)
                    mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
                mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);
                if (parent) {
                    if (mode.beginKeywords) {
                        mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
                    }
                    if (!mode.begin)
                        mode.begin = /\B|\b/;
                    mode.beginRe = langRe(mode.begin);
                    if (mode.endSameAsBegin)
                        mode.end = mode.begin;
                    if (!mode.end && !mode.endsWithParent)
                        mode.end = /\B|\b/;
                    if (mode.end)
                        mode.endRe = langRe(mode.end);
                    mode.terminator_end = reStr(mode.end) || '';
                    if (mode.endsWithParent && parent.terminator_end)
                        mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
                }
                if (mode.illegal)
                    mode.illegalRe = langRe(mode.illegal);
                if (mode.relevance == null)
                    mode.relevance = 1;
                if (!mode.contains) {
                    mode.contains = [];
                }
                mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
                    return expand_or_clone_mode(c === 'self' ? mode : c);
                }));
                mode.contains.forEach(function (c) { compileMode(c, mode); });
                if (mode.starts) {
                    compileMode(mode.starts, parent);
                }
                mode.terminators = buildModeRegex(mode);
            }
            compileMode(language);
        }
        /*
        Core highlighting function. Accepts a language name, or an alias, and a
        string with the code to highlight. Returns an object with the following
        properties:
      
        - relevance (int)
        - value (an HTML string with highlighting markup)
      
        */
        function highlight(name, value, ignore_illegals, continuation) {
            function escapeRe(value) {
                return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
            }
            function endOfMode(mode, lexeme) {
                if (testRe(mode.endRe, lexeme)) {
                    while (mode.endsParent && mode.parent) {
                        mode = mode.parent;
                    }
                    return mode;
                }
                if (mode.endsWithParent) {
                    return endOfMode(mode.parent, lexeme);
                }
            }
            function keywordMatch(mode, match) {
                var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
                return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
            }
            function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
                if (!leaveOpen && insideSpan === '')
                    return '';
                if (!classname)
                    return insideSpan;
                var classPrefix = noPrefix ? '' : options.classPrefix, openSpan = '<span class="' + classPrefix, closeSpan = leaveOpen ? '' : spanEndTag;
                openSpan += classname + '">';
                return openSpan + insideSpan + closeSpan;
            }
            function processKeywords() {
                var keyword_match, last_index, match, result;
                if (!top.keywords)
                    return escape(mode_buffer);
                result = '';
                last_index = 0;
                top.lexemesRe.lastIndex = 0;
                match = top.lexemesRe.exec(mode_buffer);
                while (match) {
                    result += escape(mode_buffer.substring(last_index, match.index));
                    keyword_match = keywordMatch(top, match);
                    if (keyword_match) {
                        relevance += keyword_match[1];
                        result += buildSpan(keyword_match[0], escape(match[0]));
                    }
                    else {
                        result += escape(match[0]);
                    }
                    last_index = top.lexemesRe.lastIndex;
                    match = top.lexemesRe.exec(mode_buffer);
                }
                return result + escape(mode_buffer.substr(last_index));
            }
            function processSubLanguage() {
                var explicit = typeof top.subLanguage === 'string';
                if (explicit && !languages[top.subLanguage]) {
                    return escape(mode_buffer);
                }
                var result = explicit ?
                    highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                    highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);
                // Counting embedded language score towards the host language may be disabled
                // with zeroing the containing mode relevance. Usecase in point is Markdown that
                // allows XML everywhere and makes every XML snippet to have a much larger Markdown
                // score.
                if (top.relevance > 0) {
                    relevance += result.relevance;
                }
                if (explicit) {
                    continuations[top.subLanguage] = result.top;
                }
                return buildSpan(result.language, result.value, false, true);
            }
            function processBuffer() {
                result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
                mode_buffer = '';
            }
            function startNewMode(mode) {
                result += mode.className ? buildSpan(mode.className, '', true) : '';
                top = Object.create(mode, { parent: { value: top } });
            }
            function doBeginMatch(match) {
                var lexeme = match[0];
                var new_mode = match.rule;
                if (new_mode && new_mode.endSameAsBegin) {
                    new_mode.endRe = escapeRe(lexeme);
                }
                if (new_mode.skip) {
                    mode_buffer += lexeme;
                }
                else {
                    if (new_mode.excludeBegin) {
                        mode_buffer += lexeme;
                    }
                    processBuffer();
                    if (!new_mode.returnBegin && !new_mode.excludeBegin) {
                        mode_buffer = lexeme;
                    }
                }
                startNewMode(new_mode);
                return new_mode.returnBegin ? 0 : lexeme.length;
            }
            function doEndMatch(match) {
                var lexeme = match[0];
                var end_mode = endOfMode(top, lexeme);
                if (!end_mode) {
                    return;
                }
                var origin = top;
                if (origin.skip) {
                    mode_buffer += lexeme;
                }
                else {
                    if (!(origin.returnEnd || origin.excludeEnd)) {
                        mode_buffer += lexeme;
                    }
                    processBuffer();
                    if (origin.excludeEnd) {
                        mode_buffer = lexeme;
                    }
                }
                do {
                    if (top.className) {
                        result += spanEndTag;
                    }
                    if (!top.skip && !top.subLanguage) {
                        relevance += top.relevance;
                    }
                    top = top.parent;
                } while (top !== end_mode.parent);
                if (end_mode.starts) {
                    if (end_mode.endSameAsBegin) {
                        end_mode.starts.endRe = end_mode.endRe;
                    }
                    startNewMode(end_mode.starts);
                }
                return origin.returnEnd ? 0 : lexeme.length;
            }
            var lastMatch = {};
            function processLexeme(text_before_match, match) {
                var lexeme = match && match[0];
                // add non-matched text to the current mode buffer
                mode_buffer += text_before_match;
                if (lexeme == null) {
                    processBuffer();
                    return 0;
                }
                // we've found a 0 width match and we're stuck, so we need to advance
                // this happens when we have badly behaved rules that have optional matchers to the degree that
                // sometimes they can end up matching nothing at all
                // Ref: https://github.com/highlightjs/highlight.js/issues/2140
                if (lastMatch.type == "begin" && match.type == "end" && lastMatch.index == match.index && lexeme === "") {
                    // spit the "skipped" character that our regex choked on back into the output sequence
                    mode_buffer += value.slice(match.index, match.index + 1);
                    return 1;
                }
                lastMatch = match;
                if (match.type === "begin") {
                    return doBeginMatch(match);
                }
                else if (match.type === "illegal" && !ignore_illegals) {
                    // illegal match, we do not continue processing
                    throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
                }
                else if (match.type === "end") {
                    var processed = doEndMatch(match);
                    if (processed != undefined)
                        return processed;
                }
                /*
                Why might be find ourselves here?  Only one occasion now.  An end match that was
                triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
                rule sets the end rule to a specific match.  Since the overall mode termination rule that's
                being used to scan the text isn't recompiled that means that any match that LOOKS like
                the end (but is not, because it is not an exact match to the beginning) will
                end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
                the end rule and fails to match, we wind up here, and just silently ignore the end.
          
                This causes no real harm other than stopping a few times too many.
                */
                mode_buffer += lexeme;
                return lexeme.length;
            }
            var language = getLanguage(name);
            if (!language) {
                throw new Error('Unknown language: "' + name + '"');
            }
            compileLanguage(language);
            var top = continuation || language;
            var continuations = {}; // keep continuations for sub-languages
            var result = '', current;
            for (current = top; current !== language; current = current.parent) {
                if (current.className) {
                    result = buildSpan(current.className, '', true) + result;
                }
            }
            var mode_buffer = '';
            var relevance = 0;
            try {
                var match, count, index = 0;
                while (true) {
                    top.terminators.lastIndex = index;
                    match = top.terminators.exec(value);
                    if (!match)
                        break;
                    count = processLexeme(value.substring(index, match.index), match);
                    index = match.index + count;
                }
                processLexeme(value.substr(index));
                for (current = top; current.parent; current = current.parent) { // close dangling modes
                    if (current.className) {
                        result += spanEndTag;
                    }
                }
                return {
                    relevance: relevance,
                    value: result,
                    illegal: false,
                    language: name,
                    top: top
                };
            }
            catch (e) {
                if (e.message && e.message.indexOf('Illegal') !== -1) {
                    return {
                        illegal: true,
                        relevance: 0,
                        value: escape(value)
                    };
                }
                else {
                    throw e;
                }
            }
        }
        /*
        Highlighting with language detection. Accepts a string with the code to
        highlight. Returns an object with the following properties:
      
        - language (detected language)
        - relevance (int)
        - value (an HTML string with highlighting markup)
        - second_best (object with the same structure for second-best heuristically
          detected language, may be absent)
      
        */
        function highlightAuto(text, languageSubset) {
            languageSubset = languageSubset || options.languages || objectKeys(languages);
            var result = {
                relevance: 0,
                value: escape(text)
            };
            var second_best = result;
            languageSubset.filter(getLanguage).filter(autoDetection).forEach(function (name) {
                var current = highlight(name, text, false);
                current.language = name;
                if (current.relevance > second_best.relevance) {
                    second_best = current;
                }
                if (current.relevance > result.relevance) {
                    second_best = result;
                    result = current;
                }
            });
            if (second_best.language) {
                result.second_best = second_best;
            }
            return result;
        }
        /*
        Post-processing of the highlighted markup:
      
        - replace TABs with something more useful
        - replace real line-breaks with '<br>' for non-pre containers
      
        */
        function fixMarkup(value) {
            return !(options.tabReplace || options.useBR)
                ? value
                : value.replace(fixMarkupRe, function (match, p1) {
                    if (options.useBR && match === '\n') {
                        return '<br>';
                    }
                    else if (options.tabReplace) {
                        return p1.replace(/\t/g, options.tabReplace);
                    }
                    return '';
                });
        }
        function buildClassName(prevClassName, currentLang, resultLang) {
            var language = currentLang ? aliases[currentLang] : resultLang, result = [prevClassName.trim()];
            if (!prevClassName.match(/\bhljs\b/)) {
                result.push('hljs');
            }
            if (prevClassName.indexOf(language) === -1) {
                result.push(language);
            }
            return result.join(' ').trim();
        }
        /*
        Applies highlighting to a DOM node containing code. Accepts a DOM node and
        two optional parameters for fixMarkup.
        */
        function highlightBlock(block) {
            var node, originalStream, result, resultNode, text;
            var language = blockLanguage(block);
            if (isNotHighlighted(language))
                return;
            if (options.useBR) {
                node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
            }
            else {
                node = block;
            }
            text = node.textContent;
            result = language ? highlight(language, text, true) : highlightAuto(text);
            originalStream = nodeStream(node);
            if (originalStream.length) {
                resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                resultNode.innerHTML = result.value;
                result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
            }
            result.value = fixMarkup(result.value);
            block.innerHTML = result.value;
            block.className = buildClassName(block.className, language, result.language);
            block.result = {
                language: result.language,
                re: result.relevance
            };
            if (result.second_best) {
                block.second_best = {
                    language: result.second_best.language,
                    re: result.second_best.relevance
                };
            }
        }
        /*
        Updates highlight.js global options with values passed in the form of an object.
        */
        function configure(user_options) {
            options = inherit(options, user_options);
        }
        /*
        Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
        */
        function initHighlighting() {
            if (initHighlighting.called)
                return;
            initHighlighting.called = true;
            var blocks = document.querySelectorAll('pre code');
            ArrayProto.forEach.call(blocks, highlightBlock);
        }
        /*
        Attaches highlighting to the page load event.
        */
        function initHighlightingOnLoad() {
            addEventListener('DOMContentLoaded', initHighlighting, false);
            addEventListener('load', initHighlighting, false);
        }
        function registerLanguage(name, language) {
            var lang = languages[name] = language(hljs);
            lang.rawDefinition = language.bind(null, hljs);
            if (lang.aliases) {
                lang.aliases.forEach(function (alias) { aliases[alias] = name; });
            }
        }
        function listLanguages() {
            return objectKeys(languages);
        }
        function getLanguage(name) {
            name = (name || '').toLowerCase();
            return languages[name] || languages[aliases[name]];
        }
        function autoDetection(name) {
            var lang = getLanguage(name);
            return lang && !lang.disableAutodetect;
        }
        /* Interface definition */
        hljs.highlight = highlight;
        hljs.highlightAuto = highlightAuto;
        hljs.fixMarkup = fixMarkup;
        hljs.highlightBlock = highlightBlock;
        hljs.configure = configure;
        hljs.initHighlighting = initHighlighting;
        hljs.initHighlightingOnLoad = initHighlightingOnLoad;
        hljs.registerLanguage = registerLanguage;
        hljs.listLanguages = listLanguages;
        hljs.getLanguage = getLanguage;
        hljs.autoDetection = autoDetection;
        hljs.inherit = inherit;
        // Common regexps
        hljs.IDENT_RE = '[a-zA-Z]\\w*';
        hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
        hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
        hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
        hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
        hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
        // Common modes
        hljs.BACKSLASH_ESCAPE = {
            begin: '\\\\[\\s\\S]', relevance: 0
        };
        hljs.APOS_STRING_MODE = {
            className: 'string',
            begin: '\'', end: '\'',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
        };
        hljs.QUOTE_STRING_MODE = {
            className: 'string',
            begin: '"', end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
        };
        hljs.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        };
        hljs.COMMENT = function (begin, end, inherits) {
            var mode = hljs.inherit({
                className: 'comment',
                begin: begin, end: end,
                contains: []
            }, inherits || {});
            mode.contains.push(hljs.PHRASAL_WORDS_MODE);
            mode.contains.push({
                className: 'doctag',
                begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                relevance: 0
            });
            return mode;
        };
        hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
        hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
        hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
        hljs.NUMBER_MODE = {
            className: 'number',
            begin: hljs.NUMBER_RE,
            relevance: 0
        };
        hljs.C_NUMBER_MODE = {
            className: 'number',
            begin: hljs.C_NUMBER_RE,
            relevance: 0
        };
        hljs.BINARY_NUMBER_MODE = {
            className: 'number',
            begin: hljs.BINARY_NUMBER_RE,
            relevance: 0
        };
        hljs.CSS_NUMBER_MODE = {
            className: 'number',
            begin: hljs.NUMBER_RE + '(' +
                '%|em|ex|ch|rem' +
                '|vw|vh|vmin|vmax' +
                '|cm|mm|in|pt|pc|px' +
                '|deg|grad|rad|turn' +
                '|s|ms' +
                '|Hz|kHz' +
                '|dpi|dpcm|dppx' +
                ')?',
            relevance: 0
        };
        hljs.REGEXP_MODE = {
            className: 'regexp',
            begin: /\//, end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                {
                    begin: /\[/, end: /\]/,
                    relevance: 0,
                    contains: [hljs.BACKSLASH_ESCAPE]
                }
            ]
        };
        hljs.TITLE_MODE = {
            className: 'title',
            begin: hljs.IDENT_RE,
            relevance: 0
        };
        hljs.UNDERSCORE_TITLE_MODE = {
            className: 'title',
            begin: hljs.UNDERSCORE_IDENT_RE,
            relevance: 0
        };
        hljs.METHOD_GUARD = {
            // excludes method names from keyword processing
            begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
            relevance: 0
        };
        return hljs;
    }));
});
var javascript = function (hljs) {
    var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
    var KEYWORDS = {
        keyword: 'in of if for while finally var new function do return void else break catch ' +
            'instanceof with throw case default try this switch continue typeof delete ' +
            'let yield const export super debugger as async await static ' +
            // ECMAScript 6 modules import
            'import from as',
        literal: 'true false null undefined NaN Infinity',
        built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
            'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
            'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
            'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
            'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
            'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
            'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
            'Promise'
    };
    var NUMBER = {
        className: 'number',
        variants: [
            { begin: '\\b(0[bB][01]+)n?' },
            { begin: '\\b(0[oO][0-7]+)n?' },
            { begin: hljs.C_NUMBER_RE + 'n?' }
        ],
        relevance: 0
    };
    var SUBST = {
        className: 'subst',
        begin: '\\$\\{', end: '\\}',
        keywords: KEYWORDS,
        contains: [] // defined later
    };
    var HTML_TEMPLATE = {
        begin: 'html`', end: '',
        starts: {
            end: '`', returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: 'xml',
        }
    };
    var CSS_TEMPLATE = {
        begin: 'css`', end: '',
        starts: {
            end: '`', returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: 'css',
        }
    };
    var TEMPLATE_STRING = {
        className: 'string',
        begin: '`', end: '`',
        contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
        ]
    };
    SUBST.contains = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        NUMBER,
        hljs.REGEXP_MODE
    ];
    var PARAMS_CONTAINS = SUBST.contains.concat([
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
    ]);
    return {
        aliases: ['js', 'jsx'],
        keywords: KEYWORDS,
        contains: [
            {
                className: 'meta',
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            },
            {
                className: 'meta',
                begin: /^#!/, end: /$/
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            TEMPLATE_STRING,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            NUMBER,
            {
                begin: /[{,\n]\s*/, relevance: 0,
                contains: [
                    {
                        begin: IDENT_RE + '\\s*:', returnBegin: true,
                        relevance: 0,
                        contains: [{ className: 'attr', begin: IDENT_RE, relevance: 0 }]
                    }
                ]
            },
            {
                begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                contains: [
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    hljs.REGEXP_MODE,
                    {
                        className: 'function',
                        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
                        end: '\\s*=>',
                        contains: [
                            {
                                className: 'params',
                                variants: [
                                    {
                                        begin: IDENT_RE
                                    },
                                    {
                                        begin: /\(\s*\)/,
                                    },
                                    {
                                        begin: /\(/, end: /\)/,
                                        excludeBegin: true, excludeEnd: true,
                                        keywords: KEYWORDS,
                                        contains: PARAMS_CONTAINS
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        className: '',
                        begin: /\s/,
                        end: /\s*/,
                        skip: true,
                    },
                    {
                        begin: /</, end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                        subLanguage: 'xml',
                        contains: [
                            { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: true },
                            {
                                begin: /<[A-Za-z0-9\\._:-]+/, end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/, skip: true,
                                contains: [
                                    { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: true },
                                    'self'
                                ]
                            }
                        ]
                    }
                ],
                relevance: 0
            },
            {
                className: 'function',
                beginKeywords: 'function', end: /\{/, excludeEnd: true,
                contains: [
                    hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }),
                    {
                        className: 'params',
                        begin: /\(/, end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        contains: PARAMS_CONTAINS
                    }
                ],
                illegal: /\[|%/
            },
            {
                begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            },
            hljs.METHOD_GUARD,
            {
                className: 'class',
                beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
                illegal: /[:"\[\]]/,
                contains: [
                    { beginKeywords: 'extends' },
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            {
                beginKeywords: 'constructor get set', end: /\{/, excludeEnd: true
            }
        ],
        illegal: /#(?!!)/
    };
};
var xml = function (hljs) {
    var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
    var TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [
            {
                className: 'attr',
                begin: XML_IDENT_RE,
                relevance: 0
            },
            {
                begin: /=\s*/,
                relevance: 0,
                contains: [
                    {
                        className: 'string',
                        endsParent: true,
                        variants: [
                            { begin: /"/, end: /"/ },
                            { begin: /'/, end: /'/ },
                            { begin: /[^\s"'=<>`]+/ }
                        ]
                    }
                ]
            }
        ]
    };
    return {
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
        case_insensitive: true,
        contains: [
            {
                className: 'meta',
                begin: '<!DOCTYPE', end: '>',
                relevance: 10,
                contains: [{ begin: '\\[', end: '\\]' }]
            },
            hljs.COMMENT('<!--', '-->', {
                relevance: 10
            }),
            {
                begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
                relevance: 10
            },
            {
                className: 'meta',
                begin: /<\?xml/, end: /\?>/, relevance: 10
            },
            {
                begin: /<\?(php)?/, end: /\?>/,
                subLanguage: 'php',
                contains: [
                    // We don't want the php closing tag ?> to close the PHP block when
                    // inside any of the following blocks:
                    { begin: '/\\*', end: '\\*/', skip: true },
                    { begin: 'b"', end: '"', skip: true },
                    { begin: 'b\'', end: '\'', skip: true },
                    hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null, className: null, contains: null, skip: true }),
                    hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null, className: null, contains: null, skip: true })
                ]
            },
            {
                className: 'tag',
                /*
                The lookahead pattern (?=...) ensures that 'begin' only matches
                '<style' as a single word, followed by a whitespace or an
                ending braket. The '$' is needed for the lexeme to be recognized
                by hljs.subMode() that tests lexemes outside the stream.
                */
                begin: '<style(?=\\s|>)', end: '>',
                keywords: { name: 'style' },
                contains: [TAG_INTERNALS],
                starts: {
                    end: '</style>', returnEnd: true,
                    subLanguage: ['css', 'xml']
                }
            },
            {
                className: 'tag',
                // See the comment in the <style tag about the lookahead pattern
                begin: '<script(?=\\s|>)', end: '>',
                keywords: { name: 'script' },
                contains: [TAG_INTERNALS],
                starts: {
                    end: '\<\/script\>', returnEnd: true,
                    subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
                }
            },
            {
                className: 'tag',
                begin: '</?', end: '/?>',
                contains: [
                    {
                        className: 'name', begin: /[^\/><\s]+/, relevance: 0
                    },
                    TAG_INTERNALS
                ]
            }
        ]
    };
};
var css = function (hljs) {
    var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
    var RULE = {
        begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/, returnBegin: true, end: ';', endsWithParent: true,
        contains: [
            {
                className: 'attribute',
                begin: /\S/, end: ':', excludeEnd: true,
                starts: {
                    endsWithParent: true, excludeEnd: true,
                    contains: [
                        {
                            begin: /[\w-]+\(/, returnBegin: true,
                            contains: [
                                {
                                    className: 'built_in',
                                    begin: /[\w-]+/
                                },
                                {
                                    begin: /\(/, end: /\)/,
                                    contains: [
                                        hljs.APOS_STRING_MODE,
                                        hljs.QUOTE_STRING_MODE
                                    ]
                                }
                            ]
                        },
                        hljs.CSS_NUMBER_MODE,
                        hljs.QUOTE_STRING_MODE,
                        hljs.APOS_STRING_MODE,
                        hljs.C_BLOCK_COMMENT_MODE,
                        {
                            className: 'number', begin: '#[0-9A-Fa-f]+'
                        },
                        {
                            className: 'meta', begin: '!important'
                        }
                    ]
                }
            }
        ]
    };
    return {
        case_insensitive: true,
        illegal: /[=\/|'\$]/,
        contains: [
            hljs.C_BLOCK_COMMENT_MODE,
            {
                className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
            },
            {
                className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
            },
            {
                className: 'selector-attr',
                begin: /\[/, end: /\]/,
                illegal: '$'
            },
            {
                className: 'selector-pseudo',
                begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            },
            {
                begin: '@(font-face|page)',
                lexemes: '[a-z-]+',
                keywords: 'font-face page'
            },
            {
                begin: '@', end: '[{;]',
                // because it doesn’t let it to be parsed as
                // a rule set but instead drops parser into
                // the default mode which is how it should be.
                illegal: /:/,
                contains: [
                    {
                        className: 'keyword',
                        begin: /\w+/
                    },
                    {
                        begin: /\s/, endsWithParent: true, excludeEnd: true,
                        relevance: 0,
                        contains: [
                            hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
                            hljs.CSS_NUMBER_MODE
                        ]
                    }
                ]
            },
            {
                className: 'selector-tag', begin: IDENT_RE,
                relevance: 0
            },
            {
                begin: '{', end: '}',
                illegal: /\S/,
                contains: [
                    hljs.C_BLOCK_COMMENT_MODE,
                    RULE,
                ]
            }
        ]
    };
};
var Field = /** @class */ (function () {
    function Field(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.type = 'html';
    }
    Field.prototype.componentWillLoad = function () {
        // FIXME: Would be better to make the code-sample component not initiating
        // the component but only render the html as text
        var parsed = this.el.innerHTML
            .replace(/"/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/<!---->/g, "");
        if (!document.head.attachShadow) {
            highlight.configure({
                classPrefix: 'sc-c-code-sample hljs-',
                useBR: true,
            });
        }
        highlight.registerLanguage('js', javascript);
        highlight.registerLanguage('html', xml);
        highlight.registerLanguage('css', css);
        this.code = highlight.highlight(this.type, parsed, false).value;
    };
    Field.prototype.render = function () {
        return [
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("code", Object.assign({ class: this.type }, { innerHTML: this.code })))
        ];
    };
    Object.defineProperty(Field.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field, "style", {
        get: function () { return ".hljs{display:block;overflow-x:auto;padding:.5em;background:#1e1e1e;color:#dcdcdc}.hljs-keyword,.hljs-link,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a;font-style:italic}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute,.hljs-builtin-name{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212}.hljs-addition,.hljs-deletion{display:inline-block;width:100%}.hljs-deletion{background-color:#600}:host{display:block}::slotted(:not(pre)){display:none!important}pre{padding:40px;background-color:var(--black);background-color:#2d2926;color:#fafafa}pre,pre code{font-size:1.3rem;white-space:pre-wrap;margin:0}"; },
        enumerable: true,
        configurable: true
    });
    return Field;
}());



/***/ })

}]);
//# sourceMappingURL=2-es5.js.map