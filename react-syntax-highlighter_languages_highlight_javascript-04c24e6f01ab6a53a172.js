(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{eiiN:function(e,n){var a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function t(e){return e?"string"==typeof e?e:e.source:null}function i(e){return o("(?=",e,")")}function o(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=n.map((function(e){return t(e)})).join("");return r}e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t="<>",c="</>",l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},E={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:a.join(" "),literal:r.join(" "),built_in:s.join(" ")},d={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:E,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]};g.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,b,_,d,e.REGEXP_MODE];var N=g.contains.concat([{begin:/\(/,end:/\)/,contains:["self"].concat(g.contains,[e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE])},e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:N};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:E,contains:[e.SHEBANG({binary:"node",relevance:5}),{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,b,_,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,d,{begin:o(/[{,\n]\s*/,i(o(/(((\/\/.*$)|(\/\*(.|\n)*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:E,contains:N}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:t,end:c},{begin:l.begin,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),O],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0},{begin:"(get|set)\\s+(?="+n+"\\()",end:/{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},O]}],illegal:/#(?!!)/}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_javascript-04c24e6f01ab6a53a172.js.map