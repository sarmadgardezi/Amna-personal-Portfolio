(self.webpackChunkmonica_site_playground=self.webpackChunkmonica_site_playground||[]).push([[216],{8797:function(e,t,a){var u="[object Symbol]",n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,c="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",f="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="['’]",m="["+i+"]",s="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\d+",g="[\\u2700-\\u27bf]",x="["+o+"]",p="[^\\ud800-\\udfff"+i+d+c+o+f+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+f+"]",h="(?:"+x+"|"+p+")",A="(?:"+v+"|"+p+")",N="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",j="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",O="[\\ufe0e\\ufe0f]?",Z=O+j+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",E,b].join("|")+")"+O+j+")*"),I="(?:"+[g,E,b].join("|")+")"+Z,S=RegExp(l,"g"),z=RegExp(s,"g"),C=RegExp([v+"?"+x+"+"+N+"(?="+[m,v,"$"].join("|")+")",A+"+"+y+"(?="+[m,v+h,"$"].join("|")+")",v+"?"+h+"+"+N,v+"+"+y,d,I].join("|"),"g"),U=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,k="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,L="object"==typeof self&&self&&self.Object===Object&&self,G=k||L||Function("return this")();var R,T=(R={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==R?void 0:R[e]});var w=Object.prototype.toString,H=G.Symbol,D=H?H.prototype:void 0,Y=D?D.toString:void 0;function _(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&w.call(e)==u}(e))return Y?Y.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function q(e){return null==e?"":_(e)}var F,J=(F=function(e,t,a){return e+(a?"-":"")+t.toLowerCase()},function(e){return function(e,t,a,u){var n=-1,r=e?e.length:0;for(u&&r&&(a=e[++n]);++n<r;)a=t(a,e[n],n,e);return a}(function(e,t,a){return e=q(e),void 0===(t=a?void 0:t)?function(e){return U.test(e)}(e)?function(e){return e.match(C)||[]}(e):function(e){return e.match(n)||[]}(e):e.match(t)||[]}(function(e){return(e=q(e))&&e.replace(r,T).replace(z,"")}(e).replace(S,"")),F,"")});e.exports=J},9837:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var u=a(7294),n=a(1419),r=a.n(n),c=a(4891),o=a(6701),f="metaimage-module--sitename--XHEZT",i=a(5444),l=a(5510),m=a(8797);var s=function(e){var t=e.tags;return t?t.map((function(e){return u.createElement(l.zx,{className:"SeoImageTags-module--squareButton--ksGcK",key:e}," ",u.createElement(i.Link,{to:"/tags/"+m(e)+"/"},u.createElement("span",null,e)))})):[]},d=a(4341),g=a(6810),x=function(e){var t=e.location,a=r().parse(t.search.replace("?","")).title||"",n=r().parse(t.search.replace("?","")).tags,i=null!=n&&n.length?n.split(","):[],l=i.slice(0,3);return u.createElement("div",{className:"metaimage-module--container--APs12"},u.createElement("div",{className:"metaimage-module--main--SYvSw"},u.createElement("h1",{className:"metaimage-module--title--HCFGm"},"  ",u.createElement("span",{className:"article-title"},a),"  "),u.createElement("div",{className:"metaimage-module--meta--pNn8A"},u.createElement("span",{className:"metaimage-module--icon---OHwX"},u.createElement(d.Z,{tags:i})),"  ",u.createElement(s,{tags:l}))," "),u.createElement("div",{className:"metaimage-module--footer--nu5q4"},u.createElement("img",{src:o.Z,className:"metaimage-module--avatar--tbqG3",alt:"animated headshot of Monica"})," ",u.createElement(c.Z,{variant:"logo",padding:"10em"}),u.createElement("span",{className:f},"• aboutmonica.com    "),u.createElement("img",{src:g.Z,className:"metaimage-module--socialIcon--C5oax"})," ",u.createElement("span",{className:f},"@indigitalcolor")," "))}}}]);
//# sourceMappingURL=component---src-pages-metaimage-jsx-176a544c852a4a58a569.js.map