(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return o(9622)}])},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),u=o(6273),c=o(2725),i=o(3462),f=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function h(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var y=l.default.forwardRef(function(e,t){var o,r,y=e.href,x=e.as,b=e.children,_=e.prefetch,m=e.passHref,j=e.replace,C=e.shallow,g=e.scroll,M=e.locale,L=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,R=e.legacyBehavior,N=void 0===R?!0!==Boolean(!1):R,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,N&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var w=!1!==_,k=l.default.useContext(i.RouterContext),T=l.default.useContext(f.AppRouterContext);T&&(k=T);var I=l.default.useMemo(function(){var e=n(u.resolveHref(k,y,!0),2),t=e[0],o=e[1];return{href:t,as:x?u.resolveHref(k,x):o||t}},[k,y,x]),S=I.href,U=I.as,B=l.default.useRef(S),H=l.default.useRef(U);N&&(r=l.default.Children.only(o));var Z=N?r&&"object"==typeof r&&r.ref:t,A=n(s.useIntersection({rootMargin:"200px"}),3),D=A[0],K=A[1],G=A[2],X=l.default.useCallback(function(e){(H.current!==U||B.current!==S)&&(G(),H.current=U,B.current=S),D(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[U,Z,S,G,D]);l.default.useEffect(function(){var e=K&&w&&u.isLocalURL(S),t=void 0!==M?M:k&&k.locale,o=v[S+"%"+U+(t?"%"+t:"")];e&&!o&&h(k,S,U,{locale:t})},[U,S,K,M,w,k]);var q={ref:X,onClick:function(e){N||"function"!=typeof L||L(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:i,scroll:c}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,k,S,U,j,C,g,M,Boolean(T),w)},onMouseEnter:function(e){N||"function"!=typeof E||E(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!w&&T)&&u.isLocalURL(S)&&h(k,S,U,{priority:!0})},onTouchStart:function(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!w&&T)&&u.isLocalURL(S)&&h(k,S,U,{priority:!0})}};if(!N||m||"a"===r.type&&!("href"in r.props)){var z=void 0!==M?M:k&&k.locale,F=k&&k.isLocaleDomain&&d.getDomainLocale(U,z,k.locales,k.domainLocales);q.href=F||p.addBasePath(c.addLocale(U,z,k&&k.defaultLocale))}return N?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},P,q),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,i=e.disabled||!l,f=n(r.useState(!1),2),s=f[0],d=f[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!i&&!s&&v&&v.tagName){var e,n,r,f,p,h,y;return n=function(e){return e&&d(e)},p=(f=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),u.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,h=f.observer,(y=f.elements).set(v,n),h.observe(v),function(){if(y.delete(v),h.unobserve(v),0===y.size){h.disconnect(),u.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var x=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(x)}}},[v,i,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(9311),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},9622:function(e,t,o){"use strict";o.r(t);var n=o(5893),r=o(9008),a=o.n(r),l=o(1664),u=o.n(l),c=function(){return(0,n.jsxs)("div",{className:"main-contents flex justify-center items-center",children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"404 Not found"})}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("div",{className:"flex flec-col mb-2 text-xl",children:[(0,n.jsx)("div",{className:"px-2 border-r-2 border-rose-500",children:"404"}),(0,n.jsx)("div",{className:"px-2",children:"Not Found"})]}),(0,n.jsx)("ul",{className:"flex justify-center",children:(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/",children:"Home"})})})]})]})};t.default=c},9008:function(e,t,o){e.exports=o(5443)},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);