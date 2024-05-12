import{r as C,f as T,j as u,u as Qn,c as j,a as ln,b as ot,S as Zn,d as pe,o as Wt,e as Ce,g as ta,h as ea,I as na,i as aa,k as ra,l as ia,R as fn,F as _,T as rt,L as mt}from"./index-CTny87M6.js";function oa(t,e){if(t!=null){if(typeof t=="function"){t(e);return}try{t.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}}}function sa(...t){return e=>{t.forEach(n=>{oa(n,e)})}}function la(...t){return C.useMemo(()=>sa(...t),t)}var Qt=T(function(e,n){const{htmlWidth:a,htmlHeight:r,alt:i,...o}=e;return u.jsx("img",{width:a,height:r,ref:n,alt:i,...o})});Qt.displayName="NativeImage";function fa(t){const{loading:e,src:n,srcSet:a,onLoad:r,onError:i,crossOrigin:o,sizes:s,ignoreFallback:l}=t,[f,c]=C.useState("pending");C.useEffect(()=>{c(n?"loading":"pending")},[n]);const m=C.useRef(),d=C.useCallback(()=>{if(!n)return;g();const b=new Image;b.src=n,o&&(b.crossOrigin=o),a&&(b.srcset=a),s&&(b.sizes=s),e&&(b.loading=e),b.onload=y=>{g(),c("loaded"),r==null||r(y)},b.onerror=y=>{g(),c("failed"),i==null||i(y)},m.current=b},[n,o,a,s,r,i,e]),g=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return Qn(()=>{if(!l)return f==="loading"&&d(),()=>{g()}},[f,d,l]),l?"loaded":f}var ca=(t,e)=>t!=="loaded"&&e==="beforeLoadOrError"||t==="failed"&&e==="onError";function ua(t,e=[]){const n=Object.assign({},t);for(const a of e)a in n&&delete n[a];return n}var cn=T(function(e,n){const{fallbackSrc:a,fallback:r,src:i,srcSet:o,align:s,fit:l,loading:f,ignoreFallback:c,crossOrigin:m,fallbackStrategy:d="beforeLoadOrError",referrerPolicy:g,...b}=e,y=a!==void 0||r!==void 0,x=f!=null||c||!y,P=fa({...e,crossOrigin:m,ignoreFallback:x}),w=ca(P,d),k={ref:n,objectFit:l,objectPosition:s,...x?b:ua(b,["onError","onLoad"])};return w?r||u.jsx(j.img,{as:Qt,className:"chakra-image__placeholder",src:a,...k}):u.jsx(j.img,{as:Qt,src:i,srcSet:o,crossOrigin:m,loading:f,referrerPolicy:g,className:"chakra-image",...k})});cn.displayName="Image";function un(t){return C.Children.toArray(t).filter(e=>C.isValidElement(e))}var[Ni,ma]=ln({strict:!1,name:"ButtonGroupContext"});function da(t){const[e,n]=C.useState(!t);return{ref:C.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:e?"button":void 0}}function Zt(t){const{children:e,className:n,...a}=t,r=C.isValidElement(e)?C.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,i=ot("chakra-button__icon",n);return u.jsx(j.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:i,children:r})}Zt.displayName="ButtonIcon";function te(t){const{label:e,placement:n,spacing:a="0.5rem",children:r=u.jsx(Zn,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o,...s}=t,l=ot("chakra-button__spinner",i),f=n==="start"?"marginEnd":"marginStart",c=C.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[f]:e?a:0,fontSize:"1em",lineHeight:"normal",...o}),[o,e,f,a]);return u.jsx(j.div,{className:l,...s,__css:c,children:r})}te.displayName="ButtonSpinner";var jt=T((t,e)=>{const n=ma(),a=pe("Button",{...n,...t}),{isDisabled:r=n==null?void 0:n.isDisabled,isLoading:i,isActive:o,children:s,leftIcon:l,rightIcon:f,loadingText:c,iconSpacing:m="0.5rem",type:d,spinner:g,spinnerPlacement:b="start",className:y,as:x,...P}=Wt(t),w=C.useMemo(()=>{const z={...a==null?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:z}}},[a,n]),{ref:k,type:I}=da(x),E={rightIcon:f,leftIcon:l,iconSpacing:m,children:s};return u.jsxs(j.button,{ref:la(e,k),as:x,type:d??I,"data-active":Ce(o),"data-loading":Ce(i),__css:w,className:ot("chakra-button",y),...P,disabled:r||i,children:[i&&b==="start"&&u.jsx(te,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:m,children:g}),i?c||u.jsx(j.span,{opacity:0,children:u.jsx(Ne,{...E})}):u.jsx(Ne,{...E}),i&&b==="end"&&u.jsx(te,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:m,children:g})]})});jt.displayName="Button";function Ne(t){const{leftIcon:e,rightIcon:n,children:a,iconSpacing:r}=t;return u.jsxs(u.Fragment,{children:[e&&u.jsx(Zt,{marginEnd:r,children:e}),a,n&&u.jsx(Zt,{marginStart:r,children:n})]})}var mn={exports:{}},va="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pa=va,ga=pa;function dn(){}function vn(){}vn.resetWarningCache=dn;var ba=function(){function t(a,r,i,o,s,l){if(l!==ga){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vn,resetWarningCache:dn};return n.PropTypes=n,n};mn.exports=ba();var ha=mn.exports;const h=ta(ha);var[ya,pn]=ln({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),$t=T(function(e,n){const a=ea("List",e),{children:r,styleType:i="none",stylePosition:o,spacing:s,...l}=Wt(e),f=un(r),m=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return u.jsx(ya,{value:a,children:u.jsx(j.ul,{ref:n,listStyleType:i,listStylePosition:o,role:"list",__css:{...a.container,...m},...l,children:f})})});$t.displayName="List";var xa=T((t,e)=>{const{as:n,...a}=t;return u.jsx($t,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...a})});xa.displayName="OrderedList";var ka=T(function(e,n){const{as:a,...r}=e;return u.jsx($t,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...r})});ka.displayName="UnorderedList";var gn=T(function(e,n){const a=pn();return u.jsx(j.li,{ref:n,...e,__css:a.item})});gn.displayName="ListItem";var wa=T(function(e,n){const a=pn();return u.jsx(na,{ref:n,role:"presentation",...e,__css:a.icon})});wa.displayName="ListIcon";function Sa(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):aa(t)?Object.keys(t).reduce((n,a)=>(n[a]=e(t[a]),n),{}):t!=null?e(t):null}var bn=t=>u.jsx(j.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});bn.displayName="StackItem";function Aa(t){const{spacing:e,direction:n}=t,a={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Sa(n,r=>a[r])}}var dt=T((t,e)=>{const{isInline:n,direction:a,align:r,justify:i,spacing:o="0.5rem",wrap:s,children:l,divider:f,className:c,shouldWrapChildren:m,...d}=t,g=n?"row":a??"column",b=C.useMemo(()=>Aa({spacing:o,direction:g}),[o,g]),y=!!f,x=!m&&!y,P=C.useMemo(()=>{const k=un(l);return x?k:k.map((I,E)=>{const z=typeof I.key<"u"?I.key:E,F=E+1===k.length,M=m?u.jsx(bn,{children:I},z):I;if(!y)return M;const Vt=C.cloneElement(f,{__css:b}),qn=F?null:Vt;return u.jsxs(C.Fragment,{children:[M,qn]},z)})},[f,b,y,x,m,l]),w=ot("chakra-stack",c);return u.jsx(j.div,{ref:e,display:"flex",alignItems:r,justifyContent:i,flexDirection:g,flexWrap:s,gap:y?void 0:o,className:w,...d,children:P})});dt.displayName="Stack";var hn=T((t,e)=>u.jsx(dt,{align:"center",...t,direction:"column",ref:e}));hn.displayName="VStack";var Tt=T((t,e)=>u.jsx(dt,{align:"center",...t,direction:"row",ref:e}));Tt.displayName="HStack";var st=T(function(e,n){const a=pe("Heading",e),{className:r,...i}=Wt(e);return u.jsx(j.h2,{ref:n,className:ot("chakra-heading",e.className),...i,__css:a})});st.displayName="Heading";var yn=T(function(e,n){const{borderLeftWidth:a,borderBottomWidth:r,borderTopWidth:i,borderRightWidth:o,borderWidth:s,borderStyle:l,borderColor:f,...c}=pe("Divider",e),{className:m,orientation:d="horizontal",__css:g,...b}=Wt(e),y={vertical:{borderLeftWidth:a||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:r||i||s||"1px",width:"100%"}};return u.jsx(j.hr,{ref:n,"aria-orientation":d,...b,__css:{...c,border:"0",borderColor:f,borderStyle:l,...y[d],...g},className:ot("chakra-divider",m)})});yn.displayName="Divider";function Ea(t,e={}){const{ssr:n=!0,fallback:a}=e,{getWindow:r}=ra(),i=Array.isArray(t)?t:[t];let o=Array.isArray(a)?a:[a];o=o.filter(f=>f!=null);const[s,l]=C.useState(()=>i.map((f,c)=>({media:f,matches:n?!!o[c]:r().matchMedia(f).matches})));return C.useEffect(()=>{const f=r();l(i.map(d=>({media:d,matches:f.matchMedia(d).matches})));const c=i.map(d=>f.matchMedia(d)),m=d=>{l(g=>g.slice().map(b=>b.media===d.media?{...b,matches:d.matches}:b))};return c.forEach(d=>{typeof d.addListener=="function"?d.addListener(m):d.addEventListener("change",m)}),()=>{c.forEach(d=>{typeof d.removeListener=="function"?d.removeListener(m):d.removeEventListener("change",m)})}},[r]),s.map(f=>f.matches)}function Oa(t){const{breakpoint:e,hide:n,children:a,ssr:r}=t,[i]=Ea(e,{ssr:r});return(n?!i:i)?a:null}var _e=(t,e)=>{var n,a;return(a=(n=t==null?void 0:t.breakpoints)==null?void 0:n[e])!=null?a:e};function Pa(t){const{breakpoint:e="",below:n,above:a}=t,r=ia(),i=_e(r,n),o=_e(r,a);let s=e;return i?s=`(max-width: ${i})`:o&&(s=`(min-width: ${o})`),s}function xn(t){const{children:e,ssr:n}=t,a=Pa(t);return u.jsx(Oa,{breakpoint:a,ssr:n,children:e})}xn.displayName="Show";var je={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},Te={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]};function Le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Le(Object(n),!0).forEach(function(a){N(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Mt(t){"@babel/helpers - typeof";return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(t)}function Ia(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ca(t,e,n){return e&&ze(t.prototype,e),n&&ze(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ge(t,e){return _a(t)||Ta(t,e)||kn(t,e)||za()}function yt(t){return Na(t)||ja(t)||kn(t)||La()}function Na(t){if(Array.isArray(t))return ee(t)}function _a(t){if(Array.isArray(t))return t}function ja(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ta(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function kn(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function La(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function za(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Me=function(){},be={},wn={},Sn=null,An={mark:Me,measure:Me};try{typeof window<"u"&&(be=window),typeof document<"u"&&(wn=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(An=performance)}catch{}var Ma=be.navigator||{},Re=Ma.userAgent,De=Re===void 0?"":Re,V=be,A=wn,Fe=Sn,St=An;V.document;var U=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",En=~De.indexOf("MSIE")||~De.indexOf("Trident/"),At,Et,Ot,Pt,It,W="___FONT_AWESOME___",ne=16,On="fa",Pn="svg-inline--fa",q="data-fa-i2svg",ae="data-fa-pseudo-element",Ra="data-fa-pseudo-element-pending",he="data-prefix",ye="data-icon",We="fontawesome-i2svg",Da="async",Fa=["HTML","HEAD","STYLE","SCRIPT"],In=function(){try{return!0}catch{return!1}}(),S="classic",O="sharp",xe=[S,O];function xt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[S]}})}var vt=xt((At={},N(At,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(At,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),At)),pt=xt((Et={},N(Et,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(Et,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Et)),gt=xt((Ot={},N(Ot,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(Ot,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ot)),Wa=xt((Pt={},N(Pt,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(Pt,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Pt)),$a=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cn="fa-layers-text",Ya=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ua=xt((It={},N(It,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(It,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),It)),Nn=[1,2,3,4,5,6,7,8,9,10],Ba=Nn.concat([11,12,13,14,15,16,17,18,19,20]),Ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bt=new Set;Object.keys(pt[S]).map(bt.add.bind(bt));Object.keys(pt[O]).map(bt.add.bind(bt));var Va=[].concat(xe,yt(bt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(Nn.map(function(t){return"".concat(t,"x")})).concat(Ba.map(function(t){return"w-".concat(t)})),ct=V.FontAwesomeConfig||{};function Ga(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A&&typeof A.querySelector=="function"){var Ja=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ja.forEach(function(t){var e=ge(t,2),n=e[0],a=e[1],r=Xa(Ga(n));r!=null&&(ct[a]=r)})}var _n={styleDefault:"solid",familyDefault:"classic",cssPrefix:On,replacementClass:Pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ct.familyPrefix&&(ct.cssPrefix=ct.familyPrefix);var it=v(v({},_n),ct);it.autoReplaceSvg||(it.observeMutations=!1);var p={};Object.keys(_n).forEach(function(t){Object.defineProperty(p,t,{enumerable:!0,set:function(n){it[t]=n,ut.forEach(function(a){return a(p)})},get:function(){return it[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){it.cssPrefix=e,ut.forEach(function(n){return n(p)})},get:function(){return it.cssPrefix}});V.FontAwesomeConfig=p;var ut=[];function Ka(t){return ut.push(t),function(){ut.splice(ut.indexOf(t),1)}}var B=ne,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qa(t){if(!(!t||!U)){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(e,a),t}}var Qa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var t=12,e="";t-- >0;)e+=Qa[Math.random()*62|0];return e}function lt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ke(t){return t.classList?lt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Za(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(jn(t[n]),'" ')},"").trim()}function Yt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function we(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function tr(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function er(t){var e=t.transform,n=t.width,a=n===void 0?ne:n,r=t.height,i=r===void 0?ne:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&En?l+="translate(".concat(e.x/B-a/2,"em, ").concat(e.y/B-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):l+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),l+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var nr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tn(){var t=On,e=Pn,n=p.cssPrefix,a=p.replacementClass,r=nr;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var $e=!1;function Gt(){p.autoAddCss&&!$e&&(qa(Tn()),$e=!0)}var ar={mixout:function(){return{dom:{css:Tn,insertCss:Gt}}},hooks:function(){return{beforeDOMElementCreation:function(){Gt()},beforeI2svg:function(){Gt()}}}},$=V||{};$[W]||($[W]={});$[W].styles||($[W].styles={});$[W].hooks||($[W].hooks={});$[W].shims||($[W].shims=[]);var R=$[W],Ln=[],rr=function t(){A.removeEventListener("DOMContentLoaded",t),Rt=1,Ln.map(function(e){return e()})},Rt=!1;U&&(Rt=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Rt||A.addEventListener("DOMContentLoaded",rr));function ir(t){U&&(Rt?setTimeout(t,0):Ln.push(t))}function kt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?jn(t):"<".concat(e," ").concat(Za(a),">").concat(i.map(kt).join(""),"</").concat(e,">")}function Ye(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var or=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Xt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?or(n,r):n,l,f,c;for(a===void 0?(l=1,c=e[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,e[f],f,e);return c};function sr(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function re(t){var e=sr(t);return e.length===1?e[0].toString(16):null}function lr(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ue(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function ie(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ue(e);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Ue(e)):R.styles[t]=v(v({},R.styles[t]||{}),i),t==="fas"&&ie("fa",e)}var Ct,Nt,_t,tt=R.styles,fr=R.shims,cr=(Ct={},N(Ct,S,Object.values(gt[S])),N(Ct,O,Object.values(gt[O])),Ct),Se=null,zn={},Mn={},Rn={},Dn={},Fn={},ur=(Nt={},N(Nt,S,Object.keys(vt[S])),N(Nt,O,Object.keys(vt[O])),Nt);function mr(t){return~Va.indexOf(t)}function dr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!mr(r)?r:null}var Wn=function(){var e=function(i){return Xt(tt,function(o,s,l){return o[l]=Xt(s,i,{}),o},{})};zn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Mn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Fn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in tt||p.autoFetchSvg,a=Xt(fr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Rn=a.names,Dn=a.unicodes,Se=Ut(p.styleDefault,{family:p.familyDefault})};Ka(function(t){Se=Ut(t.styleDefault,{family:p.familyDefault})});Wn();function Ae(t,e){return(zn[t]||{})[e]}function vr(t,e){return(Mn[t]||{})[e]}function K(t,e){return(Fn[t]||{})[e]}function $n(t){return Rn[t]||{prefix:null,iconName:null}}function pr(t){var e=Dn[t],n=Ae("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return Se}var Ee=function(){return{prefix:null,iconName:null,rest:[]}};function Ut(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?S:n,r=vt[a][t],i=pt[a][t]||pt[a][r],o=t in R.styles?t:null;return i||o||null}var Be=(_t={},N(_t,S,Object.keys(gt[S])),N(_t,O,Object.keys(gt[O])),_t);function Bt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},N(e,S,"".concat(p.cssPrefix,"-").concat(S)),N(e,O,"".concat(p.cssPrefix,"-").concat(O)),e),o=null,s=S;(t.includes(i[S])||t.some(function(f){return Be[S].includes(f)}))&&(s=S),(t.includes(i[O])||t.some(function(f){return Be[O].includes(f)}))&&(s=O);var l=t.reduce(function(f,c){var m=dr(p.cssPrefix,c);if(tt[c]?(c=cr[s].includes(c)?Wa[s][c]:c,o=c,f.prefix=c):ur[s].indexOf(c)>-1?(o=c,f.prefix=Ut(c,{family:s})):m?f.iconName=m:c!==p.replacementClass&&c!==i[S]&&c!==i[O]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var d=o==="fa"?$n(f.iconName):{},g=K(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||g||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!tt.far&&tt.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},Ee());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===O&&(tt.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=G()||"fas"),l}var gr=function(){function t(){Ia(this,t),this.definitions={}}return Ca(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=v(v({},n.definitions[s]||{}),o[s]),ie(s,o[s]);var l=gt[S][s];l&&ie(l,o[s]),Wn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),t}(),He=[],et={},at={},br=Object.keys(at);function hr(t,e){var n=e.mixoutsTo;return He=t,et={},Object.keys(at).forEach(function(a){br.indexOf(a)===-1&&delete at[a]}),He.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Mt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(at)}),n}function oe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,n)})}function Y(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,e):void 0}function se(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||G();if(e)return e=K(n,e)||e,Ye(Yn.definitions,n,e)||Ye(R.styles,n,e)}var Yn=new gr,yr=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Q("noAuto")},xr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Q("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ir(function(){wr({autoReplaceSvgRoot:n}),Q("watch",e)})}},kr={icon:function(e){if(e===null)return null;if(Mt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ut(e[0]);return{prefix:a,iconName:K(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match($a))){var r=Bt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=G();return{prefix:i,iconName:K(i,e)||e}}}},L={noAuto:yr,config:p,dom:xr,parse:kr,library:Yn,findIconDefinition:se,toHtml:kt},wr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(R.styles).length>0||p.autoFetchSvg)&&U&&p.autoReplaceSvg&&L.dom.i2svg({node:a})};function Ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return kt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(U){var a=A.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Sr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(we(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=Yt(v(v({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ar(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:o}),children:a}]}]}function Oe(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,c=t.titleId,m=t.extra,d=t.watchable,g=d===void 0?!1:d,b=a.found?a:n,y=b.width,x=b.height,P=r==="fak",w=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(M){return m.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(m.classes).join(" "),k={children:[],attributes:v(v({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(x)})},I=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/x*16*.0625,"em")}:{};g&&(k.attributes[q]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||ht())},children:[l]}),delete k.attributes.title);var E=v(v({},k),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:v(v({},I),m.styles)}),z=a.found&&n.found?Y("generateAbstractMask",E)||{children:[],attributes:{}}:Y("generateAbstractIcon",E)||{children:[],attributes:{}},F=z.children,wt=z.attributes;return E.children=F,E.attributes=wt,s?Ar(E):Sr(E)}function Ve(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[q]="");var c=v({},o.styles);we(r)&&(c.transform=er({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Yt(c);m.length>0&&(f.style=m);var d=[];return d.push({tag:"span",attributes:f,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Er(t){var e=t.content,n=t.title,a=t.extra,r=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Yt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Jt=R.styles;function le(t){var e=t[0],n=t[1],a=t.slice(4),r=ge(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Or={found:!1,width:512,height:512};function Pr(t,e){!In&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fe(t,e){var n=e;return e==="fa"&&p.styleDefault!==null&&(e=G()),new Promise(function(a,r){if(Y("missingIconAbstract"),n==="fa"){var i=$n(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Jt[e]&&Jt[e][t]){var o=Jt[e][t];return a(le(o))}Pr(t,e),a(v(v({},Or),{},{icon:p.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}var Ge=function(){},ce=p.measurePerformance&&St&&St.mark&&St.measure?St:{mark:Ge,measure:Ge},ft='FA "6.5.2"',Ir=function(e){return ce.mark("".concat(ft," ").concat(e," begins")),function(){return Un(e)}},Un=function(e){ce.mark("".concat(ft," ").concat(e," ends")),ce.measure("".concat(ft," ").concat(e),"".concat(ft," ").concat(e," begins"),"".concat(ft," ").concat(e," ends"))},Pe={begin:Ir,end:Un},Lt=function(){};function Xe(t){var e=t.getAttribute?t.getAttribute(q):null;return typeof e=="string"}function Cr(t){var e=t.getAttribute?t.getAttribute(he):null,n=t.getAttribute?t.getAttribute(ye):null;return e&&n}function Nr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function _r(){if(p.autoReplaceSvg===!0)return zt.replace;var t=zt[p.autoReplaceSvg];return t||zt.replace}function jr(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function Tr(t){return A.createElement(t)}function Bn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?jr:Tr:n;if(typeof t=="string")return A.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Bn(o,{ceFn:a}))}),r}function Lr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Bn(r),n)}),n.getAttribute(q)===null&&p.keepOriginalSource){var a=A.createComment(Lr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ke(n).indexOf(p.replacementClass))return zt.replace(e);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return kt(s)}).join(`
`);n.setAttribute(q,""),n.innerHTML=o}};function Je(t){t()}function Hn(t,e){var n=typeof e=="function"?e:Lt;if(t.length===0)n();else{var a=Je;p.mutateApproach===Da&&(a=V.requestAnimationFrame||Je),a(function(){var r=_r(),i=Pe.begin("mutate");t.map(r),i(),n()})}}var Ie=!1;function Vn(){Ie=!0}function ue(){Ie=!1}var Dt=null;function Ke(t){if(Fe&&p.observeMutations){var e=t.treeCallback,n=e===void 0?Lt:e,a=t.nodeCallback,r=a===void 0?Lt:a,i=t.pseudoElementsCallback,o=i===void 0?Lt:i,s=t.observeMutationsRoot,l=s===void 0?A:s;Dt=new Fe(function(f){if(!Ie){var c=G();lt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xe(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Xe(m.target)&&~Ha.indexOf(m.attributeName))if(m.attributeName==="class"&&Cr(m.target)){var d=Bt(ke(m.target)),g=d.prefix,b=d.iconName;m.target.setAttribute(he,g||c),b&&m.target.setAttribute(ye,b)}else Nr(m.target)&&r(m.target)})}}),U&&Dt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zr(){Dt&&Dt.disconnect()}function Mr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Rr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Bt(ke(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=vr(r.prefix,t.innerText)||Ae(r.prefix,re(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Dr(t){var e=lt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ht()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Rr(t),a=n.iconName,r=n.prefix,i=n.rest,o=Dr(t),s=oe("parseNodeAttributes",{},t),l=e.styleParser?Mr(t):[];return v({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wr=R.styles;function Gn(t){var e=p.autoReplaceSvg==="nest"?qe(t,{styleParser:!1}):qe(t);return~e.extra.classes.indexOf(Cn)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}var X=new Set;xe.map(function(t){X.add("fa-".concat(t))});Object.keys(vt[S]).map(X.add.bind(X));Object.keys(vt[O]).map(X.add.bind(X));X=yt(X);function Qe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var n=A.documentElement.classList,a=function(m){return n.add("".concat(We,"-").concat(m))},r=function(m){return n.remove("".concat(We,"-").concat(m))},i=p.autoFetchSvg?X:xe.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Wr));i.includes("fa")||i.push("fa");var o=[".".concat(Cn,":not([").concat(q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=lt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Pe.begin("onTree"),f=s.reduce(function(c,m){try{var d=Gn(m);d&&c.push(d)}catch(g){In||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(d){Hn(d,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),m(d)})})}function $r(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(t).then(function(n){n&&Hn([n],e)})}function Yr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:se(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:se(r||{})),t(a,v(v({},n),{},{mask:r}))}}var Ur=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?D:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,d=m===void 0?null:m,g=n.titleId,b=g===void 0?null:g,y=n.classes,x=y===void 0?[]:y,P=n.attributes,w=P===void 0?{}:P,k=n.styles,I=k===void 0?{}:k;if(e){var E=e.prefix,z=e.iconName,F=e.icon;return Ht(v({type:"icon"},e),function(){return Q("beforeDOMElementCreation",{iconDefinition:e,params:n}),p.autoA11y&&(d?w["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(b||ht()):(w["aria-hidden"]="true",w.focusable="false")),Oe({icons:{main:le(F),mask:l?le(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:z,transform:v(v({},D),r),symbol:o,title:d,maskId:c,titleId:b,extra:{attributes:w,styles:I,classes:x}})})}},Br={mixout:function(){return{icon:Yr(Ur)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Qe,n.nodeCallback=$r,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return Qe(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,m=a.maskId,d=a.extra;return new Promise(function(g,b){Promise.all([fe(r,s),c.iconName?fe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var x=ge(y,2),P=x[0],w=x[1];g([n,Oe({icons:{main:P,mask:w},prefix:s,iconName:r,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:d,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Yt(s);l.length>0&&(r.style=l);var f;return we(o)&&(f=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Hr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ht({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(yt(i)).join(" ")},children:o}]})}}}},Vr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,m=c===void 0?{}:c;return Ht({type:"counter",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Er({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(yt(s))}})})}}}},Gr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?D:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,m=c===void 0?{}:c,d=a.styles,g=d===void 0?{}:d;return Ht({type:"text",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Ve({content:n,transform:v(v({},D),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(p.cssPrefix,"-layers-text")].concat(yt(f))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(En){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ve({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Xr=new RegExp('"',"ug"),Ze=[1105920,1112319];function Jr(t){var e=t.replace(Xr,""),n=lr(e,0),a=n>=Ze[0]&&n<=Ze[1],r=e.length===2?e[0]===e[1]:!1;return{value:re(r?e[0]:e),isSecondary:a||r}}function tn(t,e){var n="".concat(Ra).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=lt(t.children),o=i.filter(function(F){return F.getAttribute(ae)===e})[0],s=V.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Ya),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?O:S,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pt[d][l[2].toLowerCase()]:Ua[d][f],b=Jr(m),y=b.value,x=b.isSecondary,P=l[0].startsWith("FontAwesome"),w=Ae(g,y),k=w;if(P){var I=pr(y);I.iconName&&I.prefix&&(w=I.iconName,g=I.prefix)}if(w&&!x&&(!o||o.getAttribute(he)!==g||o.getAttribute(ye)!==k)){t.setAttribute(n,k),o&&t.removeChild(o);var E=Fr(),z=E.extra;z.attributes[ae]=e,fe(w,g).then(function(F){var wt=Oe(v(v({},E),{},{icons:{main:F,mask:Ee()},prefix:g,iconName:k,extra:z,watchable:!0})),M=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=wt.map(function(Vt){return kt(Vt)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Kr(t){return Promise.all([tn(t,"::before"),tn(t,"::after")])}function qr(t){return t.parentNode!==document.head&&!~Fa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ae)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function en(t){if(U)return new Promise(function(e,n){var a=lt(t.querySelectorAll("*")).filter(qr).map(Kr),r=Pe.begin("searchPseudoElements");Vn(),Promise.all(a).then(function(){r(),ue(),e()}).catch(function(){r(),ue(),n()})})}var Qr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=en,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;p.searchPseudoElements&&en(r)}}},nn=!1,Zr={mixout:function(){return{dom:{unwatch:function(){Vn(),nn=!0}}}},hooks:function(){return{bootstrap:function(){Ke(oe("mutationObserverCallbacks",{}))},noAuto:function(){zr()},watch:function(n){var a=n.observeMutationsRoot;nn?ue():Ke(oe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},an=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ti={mixout:function(){return{parse:{transform:function(n){return an(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=an(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:d};return{tag:"g",attributes:v({},g.outer),children:[{tag:"g",attributes:v({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),g.path)}]}]}}}},Kt={x:0,y:0,width:"100%",height:"100%"};function rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ei(t){return t.tag==="g"?t.children:[t]}var ni={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Bt(r.split(" ").map(function(o){return o.trim()})):Ee();return i.prefix||(i.prefix=G()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,d=o.icon,g=tr({transform:l,containerWidth:m,iconWidth:f}),b={tag:"rect",attributes:v(v({},Kt),{},{fill:"white"})},y=c.children?{children:c.children.map(rn)}:{},x={tag:"g",attributes:v({},g.inner),children:[rn(v({tag:c.tag,attributes:v(v({},c.attributes),g.path)},y))]},P={tag:"g",attributes:v({},g.outer),children:[x]},w="mask-".concat(s||ht()),k="clip-".concat(s||ht()),I={tag:"mask",attributes:v(v({},Kt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,P]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:ei(d)},I]};return a.push(E,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(w,")")},Kt)}),{children:a,attributes:r}}}},ai={provides:function(e){var n=!1;V.matchMedia&&(n=V.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ri={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ii=[ar,Br,Hr,Vr,Gr,Qr,Zr,ti,ni,ai,ri];hr(ii,{mixoutsTo:L});L.noAuto;L.config;L.library;L.dom;var me=L.parse;L.findIconDefinition;L.toHtml;var oi=L.icon;L.layer;L.text;L.counter;function on(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?on(Object(n),!0).forEach(function(a){nt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):on(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function si(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function li(t,e){if(t==null)return{};var n=si(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function de(t){return fi(t)||ci(t)||ui(t)||mi()}function fi(t){if(Array.isArray(t))return ve(t)}function ci(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ui(t,e){if(t){if(typeof t=="string")return ve(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(t,e)}}function ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function mi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function di(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,f=t.spinPulse,c=t.spinReverse,m=t.pulse,d=t.fixedWidth,g=t.inverse,b=t.border,y=t.listItem,x=t.flip,P=t.size,w=t.rotation,k=t.pull,I=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":d,"fa-inverse":g,"fa-border":b,"fa-li":y,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},nt(e,"fa-".concat(P),typeof P<"u"&&P!==null),nt(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),nt(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),nt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(I).map(function(E){return I[E]?E:null}).filter(function(E){return E})}function vi(t){return t=t-0,t===t}function Xn(t){return vi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var pi=["style"];function gi(t){return t.charAt(0).toUpperCase()+t.slice(1)}function bi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Xn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[gi(r)]=i:e[r]=i,e},{})}function Jn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return Jn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=bi(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[Xn(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=li(n,pi);return r.attrs.style=H(H({},r.attrs.style),o),t.apply(void 0,[e.tag,H(H({},r.attrs),s)].concat(de(a)))}var Kn=!1;try{Kn=!0}catch{}function hi(){if(!Kn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function sn(t){if(t&&Ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(me.icon)return me.icon(t);if(t===null)return null;if(t&&Ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?nt({},t,e):{}}var Z=fn.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,l=t.maskId,f=sn(n),c=qt("classes",[].concat(de(di(t)),de(i.split(" ")))),m=qt("transform",typeof t.transform=="string"?me.transform(t.transform):t.transform),d=qt("mask",sn(a)),g=oi(f,H(H(H(H({},c),m),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!g)return hi("Could not find icon",f),null;var b=g.abstract,y={ref:e};return Object.keys(t).forEach(function(x){Z.defaultProps.hasOwnProperty(x)||(y[x]=t[x])}),yi(b[0],y)});Z.displayName="FontAwesomeIcon";Z.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};Z.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var yi=Jn.bind(null,fn.createElement);const xi=()=>{const t=j(Z);return u.jsxs(_,{direction:"column",alignItems:"center",justifyContent:"center",w:"100%",children:[u.jsx(st,{fontSize:"4xl",fontWeight:"extrabold",children:"Certifications"}),u.jsxs(_,{direction:"column",gap:"10px",my:"40px",px:"10px",children:[u.jsxs(rt,{children:[u.jsx(t,{icon:je,boxSize:"15px",mr:"10px"}),u.jsx(mt,{href:"/assets/AWS Certified Solutions Architect - Associate certificate.pdf",isExternal:!0,children:"AWS Certified Solutions Architect - Associate"})]}),u.jsxs(rt,{children:[u.jsx(t,{icon:je,boxSize:"15px",mr:"10px"}),u.jsx(mt,{href:"/assets/Azure AZ-900.pdf",isExternal:!0,children:"Azure Fundamentals - AZ 900"})]})]})]})};var ki={prefix:"far",iconName:"circle-dot",icon:[512,512,[128280,"dot-circle"],"f192","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},wi=ki;const Si=({title:t,organisation:e,timePeriod:n,activites:a,stepCount:r,lastStep:i})=>{const o=j(Z);return u.jsxs(_,{gap:4,w:"80%",children:[u.jsxs(_,{position:"relative",children:[r===1?u.jsx(o,{icon:wi,boxSize:"25px"}):u.jsx(o,{icon:Te,color:"#D6D6D6",boxSize:"25px"}),!i&&u.jsx(yn,{h:"full",position:"absolute",left:"12px",orientation:"vertical",mt:"25px",borderColor:"#383636"})]}),u.jsxs(_,{direction:"column",gap:1,mb:"40px",children:[u.jsx(st,{as:"h4",size:"md",children:t}),u.jsx(mt,{isExternal:!0,fontSize:"18px",fontWeight:"600",children:e}),u.jsx(rt,{p:"5px",px:"10px",bgColor:"#D9D9D9",w:"fit-content",borderRadius:"15px",fontSize:"12px",textTransform:"uppercase",children:n}),a.length>0&&u.jsx($t,{mt:"10px",spacing:3,children:a.map(s=>u.jsxs(gn,{display:"flex",alignItems:"baseline",children:[u.jsx(o,{icon:Te,mr:"8px",boxSize:"6px"}),u.jsx(rt,{display:"inline",children:s})]},s.substring(0,15)))})]})]})},Ai=()=>{const t=[{title:"Senior Software Engineer",organisation:"Presidio",timePeriod:"Sep 2023 - Present",activites:["Built and refactored several UI components using VueJs and ReactJs.","Designed multiple REST APIs using NodeJS and .NET Core.","Leveraged AWS as a cloud provider to deploy and manage apps.","Created and managed SQL scripts for a few processes that involved updating/removing data from SQL server DB.","Developed an automation script with Puppeteer, enhancing the developer workflow thereby significantly reducing time spent on repetitive tasks by 75%."]},{title:"Software Engineer",organisation:"Presidio",timePeriod:"JUL 2021 - sep 2023",activites:["Used Vue and NextJS as frontend technologies to develop the user interface by following the coding standards and the UX design templates.","Developed backend APIs with NodeJS using the serverless framework.","Utilised DynamoDB and RDS as the database and used its SDK for making operations to manipulate the data persisted on DB.","Worked with a few AWS services like DynamoDB, SES, Lambda, S3 and Cloudwatch.","Used Material, Bootstrap and TailwindCSS as UI libraries for creating reusable frontend components."]},{title:"Software Engineer Trainee",organisation:"Presidio",timePeriod:"SEP 2020 - JUN 2021",activites:["Developed a Hiring Management System to streamline candidate management, meeting scheduling, and feedback processes for the HR department.","Engaged in the entire product life cycle, spanning from the initial gathering of requirements to the final stages of system testing and deployment.","Involved in both frontend and backend development.","Upheld coding standards and confirmed functionality through the inclusion of test cases."]}];return u.jsxs(_,{direction:"column",alignItems:"center",justifyContent:"center",w:"100%",id:"work",children:[u.jsx(st,{fontSize:"4xl",fontWeight:"extrabold",children:"Work Experience"}),t.length>0&&u.jsx(_,{direction:"column",my:"60px",alignItems:"center",w:{sm:"90%",lg:"50%"},children:t.map((e,n)=>u.jsx(Si,{title:e.title,organisation:e.organisation,timePeriod:e.timePeriod,activites:e.activites,stepCount:n+1,lastStep:n+1===t.length},e.title+e.organisation))})]})};var Ei={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Oi={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const Pi=()=>{const t=j(Z);return u.jsxs(_,{alignItems:"center",justifyContent:"space-around",width:"100%",my:"60px",minHeight:"60vh",bgGradient:"radial(gray.500 1px, transparent 0)",bgSize:"40px 40px",py:"100px",id:"home",scrollBehavior:"smooth",children:[u.jsxs(hn,{gap:"10",bgColor:"#F5F5F5",borderRadius:"20px",m:"50px",children:[u.jsxs(dt,{direction:"column",m:"0px",children:[u.jsx(st,{fontSize:"4xl",fontWeight:"extrabold",children:"Govind Kurapati"}),u.jsx(rt,{fontSize:"2xl",color:"brand.main",fontWeight:"medium",children:"Software Developer"})]}),u.jsxs(dt,{w:"100%",gap:"2",children:[u.jsxs(Tt,{alignItems:"center",justifyContent:"space-between",children:[u.jsxs(Tt,{children:[u.jsx(t,{icon:Ei,boxSize:8}),u.jsx(jt,{variant:"link",color:"gray.800",children:u.jsx(mt,{href:"https://www.linkedin.com/in/govind-k-2b4880148",isExternal:!0,children:"LinkedIn"})})]}),u.jsxs(Tt,{children:[u.jsx(t,{icon:Oi,boxSize:8}),u.jsx(jt,{variant:"link",color:"gray.800",children:u.jsx(mt,{href:"https://github.com/GovindKurapati",isExternal:!0,children:"GitHub"})})]})]}),u.jsx(_,{w:"100%",children:u.jsx(jt,{w:"100%",variant:"solid",size:"lg",_hover:{bg:"gray.600",color:"#F5F5F5"},children:"Resume"})})]})]}),u.jsx(xn,{above:"md",children:u.jsx(_,{children:u.jsx(cn,{src:"./assets/hero.png",title:"hero",width:450})})})]})},Ii=()=>{const t=["ReactJS","VueJS","Angular","NodeJS","JavaScript","Java","Python",".NET","SpringBoot","AWS","Azure","NextJS","NestJS"];return u.jsxs(_,{direction:"column",alignItems:"center",justifyContent:"center",w:"100%",id:"skills",children:[u.jsx(st,{fontSize:"4xl",fontWeight:"extrabold",children:"Skills"}),u.jsx(_,{w:{sm:"80%",md:"80%",xl:"50%"},wrap:"wrap",alignItems:"center",justifyContent:"center",my:"40px",children:t.map(e=>u.jsx(_,{children:u.jsx(_,{maxWidth:"150px",height:"80px",alignItems:"center",p:"20px",borderRadius:"15",bgImage:"linear-gradient(#ECEBEB, #DBDBDB)",fontSize:"lg",m:"10px",minWidth:"150px",justifyContent:"center",children:u.jsx(rt,{children:e})})},e))})]})},_i=()=>u.jsxs(_,{gap:1,width:"100%",direction:"column",scrollBehavior:"smooth",children:[u.jsx(Pi,{}),u.jsx(Ai,{}),u.jsx(Ii,{}),u.jsx(xi,{})]});export{_i as default};
