import{a as x,b as m,c as r,d as a,e as F,f as R,g as T,h as p,i as n,j as J,k as y,l as I,m as Y8,n as z8,o as G8,p as N,q as e,t,u as f,v as _8,x as $8} from"./chunk-41d8b0a72daa0fc0.js";function*b8(_,H){let $,{lastIndex:Y}=_;while($=_.exec(H))yield $,{lastIndex:Y}=_;if(Y!==H.length)throw new Error("Failed to parse string")}function L(_,H="  ",$=80){const Y=new RegExp(R8,"gys"),Z=new RegExp(c,"gy"),G=[];let X=null,A=0,Q=0,w="",b=0,q="";const O=()=>{if(q&&q!=="\n"){const j=w.indexOf("\n"),U=j===-1?w.length:j;if(Q+q.length+U>$)q="\n"}const B=q==="\n"&&w?H.repeat(b):"",K=`${q}${B}${w}`;if(K){const j=K.lastIndexOf("\n");if(j===-1)Q+=K.length;else Q=K.length-j-1;G.push(K)}w=q=""},M=(...B)=>{for(let K of B)if(!X&&/^\s+$/.test(K))O(),q=K;else{if(!w)b=A;w+=K}};for(let B of b8(Y,_)){if(L.__strict&&B.groups.wildcard)throw new Error("Unexpected wildcard");if(B.groups.endTag){const K=B.groups.endTagName.toLowerCase();if(K===X)X=null;if(!X)--A,M(`</${K}>`)}if(!X){if(B.groups.space)M(...B[0].match(/\n/g)?.slice(0,2)??[" "]);else if(B.groups.comment||B.groups.dtd||B.groups.text||B.groups.wildcard)M(B[0]);else if(B.groups.startTag){const K=B.groups.startTagName.toLowerCase();if(M(`<${K}`),++A,B.groups.attrs){let{lastIndex:U}=Z,V,d;while(V=Z.exec(B.groups.attrs)){if({lastIndex:U}=Z,L.__strict&&V.groups.attrText)throw new Error("Unexpected attr text");if(V.groups.attrText){if(V.groups.attrSpace)M(/\n/.test(V.groups.attrSpace)?"\n":" ");M(V.groups.attrText)}else{if(V.groups.attrSpace||!d?.groups.attrText)M(/\n/.test(V.groups.attrSpace)?"\n":" ");M(`${V.groups.attrName}${V.groups.quotedAttrValue?`="${V.groups.quotedAttrValue}"`:V.groups.singleQuotedAttrValue?`='${V.groups.singleQuotedAttrValue}'`:V.groups.unquotedAttrValue?`=${V.groups.unquotedAttrValue}`:""}`)}d=V}if(U!==B.groups.attrs.length)throw new Error("Failed to parse attributes")}const j=Boolean(B.groups.closingSlash);if(M(j?" />":">"),j||j8.has(K))--A;else if(["pre","textarea","script","style"].includes(K))X=K}}else M(B[0])}O();let D=!1;while(/^\s+$/.test(G[G.length-1])){const B=G.pop();if(/\n/.test(B))D=!0}if(D)G.push("\n");return G.join("")}var u=String.raw`[A-Za-z][^/\s>]*`,X8=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,w8=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,h=String.raw`${X8}|${w8}`,B8=String.raw`"(?<quotedAttrValue>[^"]*)"`,Q8=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,A8=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,K8=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,q8=String.raw`${B8}|${Q8}|${A8}`,V8=String.raw`(?<attrName>${K8})(?:\s*=\s*(?:${q8}))?`,M8=String.raw`${h}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,c=String.raw`(?<attrSpace>\s*)(?:${V8}|(?<attrText>${M8}))`,I8={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${u})(?<attrs>(?:${c})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${u})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${h}|['"]`,wildcard:String.raw`.`},R8=Object.entries(I8).map(([_,H])=>`(?<${_}>${H})`).join("|"),j8=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function v(_,H,$,Y){return _.substring(0,$)+H+_.substring(Y)}function E(_,H,$=!1){return _.substring(0,_.indexOf(H)+($?H.length:0))}function C(_,H,$){const Y=_.length,Z=H!==void 0,G=Z?H.length:0,X=new Map,A=[];let Q=0;while(Q<Y){if(_.charCodeAt(Q)===60){const w=Q++,b=_.charCodeAt(Q)===47;if(b)Q++;let q=Q,O=0,M=!0;while(q<Y){const B=_.charCodeAt(q);if(B===62||B===32||B===9||B===10||B===13)break;if(O=q-Q,Z&&O<G&&B!==H.charCodeAt(O))M=!1;q++}if(!M||O<G){Q++;continue}const D=_.slice(Q,q);Q=q;while(Q<Y&&_.charCodeAt(Q)!==62)Q++;if(!b)A.push({name:D,position:w});else{const B=A.length>1,K=A.pop();if(K.name===D){const j=D.length,U=K.position;X.set($?`${D} : ${U}`:D,new l(D,_.substring(U+j+2,w),U,w+j+3,B))}else throw new Error(`Invalid closing html tag "${D}" at position ${w}, expected closing tag for "${K.name}".`)}}Q++}return X}class l{name;content;start;end;isChild;constructor(_,H,$,Y,Z){this.name=_,this.content=H,this.start=$,this.end=Y,this.isChild=Z}}async function k(_,H,$){if($.language===void 0)return _;let Y=H.get($.language);if(Y===void 0)Y=await D8($),H.set($.language,Y);return _.replace(new RegExp(/{{.*?}}/,"g"),(Z)=>Y.get(Z.slice(2,-2)))}async function D8(_){const H=new Map,Y=(await I(`${_.translationsPath}/${_.language}.ini`,_).then((Z)=>{if(Z.ok)return Z.text();throw new Error(`Could not load translation file for language "${_.language}".`)})).split("\n");for(let Z of Y){const[G,X]=Z.split("=");if(G===void 0||X===void 0)throw new Error(`Could not parse translation file for language "${_.language}".`);H.set(G,X.replaceAll("\\n","\n"))}return H}function g(_,H){return async function($){const Y=await I(`${H.pagesPath}${_}/${H.pageComponentFolderName}/${$}.html`,H).catch(()=>{return}),Z=Y===void 0||!Y.ok?await I(`${H.componentsPath}/${$}.html`,H).catch(()=>{return}):void 0;if(Y!==void 0&&Y.ok)return Y.text();if(Z!==void 0&&Z.ok)return Z.text();throw new Error(`No local or global component found with name "${$}".`)}}async function S(_,H,$){const Y=Array.from(C(_,"p-",!0).values());let Z=0;for(let G=0;G<Y.length;G++){const X=Y[G],A=Array.from(C(X.content,"sc-").entries()).map((w)=>[w[0].substring(3),w[1].content]),Q=await F8(X.name.substring(2),A,H,!1);if(X.isChild){const w=Y[G+1],b=w.name.length+2;w.content=v(w.content,Q,X.start-w.start-b,X.end-w.start-b)}else _=v(_,Q,X.start+Z,X.end+Z),Z+=Q.length-(X.end-X.start)}return $?L(_," ".repeat(4),200):_}async function F8(_,H,$,Y){const Z=await $(_);let G=await S(Z,$,!1);const X=C(G,"s-");let A=0;for(let[Q,w]of H){const b=await S(w,$,!1),q="s-"+Q;G=v(G,b,X.get(q).start+A,X.get(q).end+A);const O=q.length*2+5;A+=b.length-O}return Y?L(G," ".repeat(4),200):G}function P(_){return _.replace(new RegExp(/(?<=import\s*?["'])(?!http:\/\/|https:\/\/)[^./](.*?)["']|/.source+/(?<=import[\s\S]*?from\s*?["'])(?!http:\/\/|https:\/\/)[^./](.*?)["']|/.source+/(?<=export[\s\S]*?from\s*?["'])(?!http:\/\/|https:\/\/)[^./](.*?)["']/.source,"g"),"/node_modules/$&").replace(new RegExp(/(?<=import\s*?["']).*?["']|/.source+/(?<=import[\s\S]*?from\s*?["']).*?["']|/.source+/(?<=export[\s\S]*?from\s*?["']).*?["']/.source,"g"),(H)=>H.replaceAll("#","%23"))}async function i(_,H){const{pkgJson:$,pkgJsonUrl:Y}=await o(_,H);if($!==void 0&&$.exports!==void 0){if(_===Y)if(typeof $.exports==="object"){const Z=W($.exports);if(Z!==void 0)return Y+F(R(Z));if($.exports["."]!==void 0)if(typeof $.exports["."]==="object"){const G=W($.exports["."]);if(G!==void 0)return Y+F(R(G))}else return Y+F(R($.exports["."]))}else return Y+F(R($.exports));else if(typeof $.exports==="object"){const Z=_.replace(Y,"."),G=$.exports[Z];if(G!==void 0)if(typeof G==="object"){const w=W($.exports);if(w!==void 0)return Y+F(R(w))}else return Y+F(R(G));const X=Object.entries($.exports).find((w)=>w[0].includes("*")&&Z.startsWith(E(w[0],"*"))),A=X!==void 0?X[0]:void 0,Q=X!==void 0?X[1]:void 0;if(Q!==void 0)if(typeof Q==="object"){const w=W(Q);if(w!==void 0)return Y+F(R(Z.replace(E(A,"*"),E(w,"*"))))+".js"}else return Y+F(R(Z.replace(E(A,"*"),E(Q,"*"))))+".js"}}if($.module!==void 0||$.main!==void 0)return Y+F(R($.module??$.main));return _+"/index.js"}async function s(_,H,$){const Y=p(_).replaceAll("%23","#"),{pkgJson:Z,pkgJsonUrl:G}=await o(H,$);if(Z===void 0||Z.imports===void 0)return;const X=Object.entries(Z.imports).find(([Q])=>Q===Y);if(X===void 0)return;const A=X[1];if(A===void 0)return;if(typeof A==="object")return G+R(W(A));else return G+R(A)}async function o(_,H){while(_.length>=self.location.origin.length){const $=await y(H.useCache,_,()=>fetch(_+"/package.json"));if($.ok&&$.headers.get("content-type").includes("application/json"))return{pkgJson:await $.json(),pkgJsonUrl:_};else _=T(_)}}var W=function(_){if(_.browser!==void 0)if(typeof _.browser==="object")return W(_.browser);else return _.browser;if(_.import!==void 0)if(typeof _.import==="object")return W(_.import);else return _.import;if(_.default!==void 0)if(typeof _.default==="object")return W(_.default);else return _.default};function H8(_){return _.respondWith((async()=>{z=z===void 0?await N():z;const H=_.request.url,$=x(H)?m(H):r(m(H),z.pathPrefix);if($.charAt($.length-1)==="/")return e(H);if($==="/_reset")return t(self,z);if($==="/_update_router_config")return N().then((Y)=>z=Y).then(()=>new Response(null,{status:200}));if(z.useMocking&&_8(H,$,z))return $8($,z,_.request);if(x(H))return y(z.useCache,H,()=>fetch(_.request));if(z.assetPaths.some((Y)=>$.startsWith(Y))||$.startsWith(z.pagesPath+"/")&&$.includes(`/${z.pageComponentFolderName}/`)&&$.endsWith(".html"))return I($,z);if($.startsWith(z.pagesPath+"/")&&$.endsWith("controller.js"))return y(z.useCache,H,()=>W8($));if(z.jsPaths.some((Y)=>$.startsWith(Y)))return y(z.useCache,H,()=>y8($,_.request.referrer));if(!$.includes("."))return y(z.useCache,H,()=>U8($));return I($,z)})())}var U8=function(_){const H=($,Y)=>$.text().then((Z)=>S(Z,g(Y,z),z.formatHtmlComponents)).then((Z)=>k(Z,O8,z)).then((Z)=>new Response(Z,{headers:Object.fromEntries($.headers)}));return I(z.pagesPath+_+"/view.html",z).then(async($)=>{if(!$.ok){const Y=await f(z.pagesPath,_,z);if(Y===void 0||Y===_)return new Response(null,{status:404});return I(z.pagesPath+Y+"/view.html",z).then((Z)=>{if(!Z.ok)return new Response(null,{status:404});return H(Z,Y)})}else return H($,_)})},W8=function(_){return I(_,z).then(async(H)=>{if(!H.ok){const $=await f(z.pagesPath,_,z);if($===void 0||$===_)return new Response(null,{status:404});return new Response(null,{status:301,headers:{Location:self.location.origin+z.pathPrefix+$}})}else return H.text().then(($)=>{return $=P($),$+=`\nwindow.location["${n}"] = "${T(_)}";`,new Response($,{headers:Object.fromEntries(H.headers)})})})};async function y8(_,H){if(_.includes("%23"))return new Response(null,{status:301,headers:{Location:await s(self.location.origin+z.pathPrefix+_,H,z)}});return I(a(_),z).then(async($)=>{if(!$.ok||!$.headers.get("content-type").includes("javascript")){if(_.endsWith("index.js")||_.startsWith(z.mockPath)&&_.endsWith("mock.js"))return new Response(null,{status:404});return new Response(null,{status:301,headers:{Location:await i(self.location.origin+z.pathPrefix+_,z)}})}else return $.text().then((Y)=>new Response(P(Y),{headers:Object.fromEntries($.headers)}))})}var z,O8=new Map;function Z8(_,H=Y8()){return new J(H,"/src/ui/pages","_components","/src/ui/components",["/node_modules/sage-ui/css","/src/ui/assets","/vendor"],["/node_modules","/src"],"/api","/mock",!1,!1,!0,!0,_,"/src/ui/translations")}self.addEventListener("install",(_)=>{_.waitUntil(G8(Z8(z8("senseless-sage","sage-ui-demo","public"))))});self.addEventListener("fetch",H8);
;const version = 1724163322394