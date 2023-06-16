"use strict";(self.webpackChunkopen=self.webpackChunkopen||[]).push([[514,149],{4581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(2374),o=n(8290),l=n(6735),r=n(7888),c=n(3935),i=n(17),s=n(1821),d=n(5975),m=n(259),u=n(2206),b=n(9319),p=n(8828);const h={backToTopButton:"backToTopButton_en3k",backToTopButtonShow:"backToTopButtonShow_aVGH"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(2147),g=n(7218),k=n(9502),v=n(4206),C=n(3085);function _(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_uo3S",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_ZksD"};function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(_,{className:S.collapseSidebarButtonIcon}))}var N=n(5203),Z=n(8754);const T=Symbol("EmptyContext"),x=a.createContext(T);function y(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(x.Provider,{value:l},t)}var B=n(8209),L=n(4019),w=n(1185),H=n(296);function A(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(t),g=(0,l._F)(t,r),v=(0,B.Mg)(h,r),{collapsed:_,setCollapsed:S}=(0,L.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(x);if(e===T)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=function(e){void 0===e&&(e=!_),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:_,updateCollapsed:y}),(0,a.useEffect)((()=>{b&&I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,o.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(w.Z,(0,C.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?y(!1):(e.preventDefault(),y())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(A,{categoryLabel:u,onClick:e=>{e.preventDefault(),y()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(z,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:c+1})))}var M=n(3389),W=n(1789);const F={menuExternalLink:"menuExternalLink_LZRl"};function R(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,l._F)(t,r),h=(0,M.Z)(m);return a.createElement("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(w.Z,(0,C.Z)({className:(0,o.Z)("menu__link",!h&&F.menuExternalLink,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(W.Z,null)))}const D={menuHtmlItem:"menuHtmlItem_ZhR3"};function G(e){let{item:t,level:n,index:l}=e;const{value:r,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[D.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:r}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(G,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function V(e){let{items:t,...n}=e;return a.createElement(y,null,t.map(((e,t)=>a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n)))))}const z=(0,a.memo)(V),Y={menu:"menu_BxCZ",menuWithAnnouncementBar:"menuWithAnnouncementBar_U9Ky"};function q(e){let{path:t,sidebar:n,className:l}=e;const r=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",Y.menu,r&&Y.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:n,activePath:t,level:1})))}const K={sidebar:"sidebar_yAEa",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_EwuG",sidebarHidden:"sidebarHidden_hY8C",sidebarLogo:"sidebarLogo_r_mG"};function Q(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,o.Z)(K.sidebar,c&&K.sidebarWithHideableNavbar,r&&K.sidebarHidden)},c&&a.createElement(v.Z,{tabIndex:-1,className:K.sidebarLogo}),a.createElement(q,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:l}))}const j=a.memo(Q);var O=n(6683),X=n(1884);const J=e=>{let{sidebar:t,path:n}=e;const l=(0,O.e)();return a.createElement("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function $(e){return a.createElement(X.Zo,{component:J,props:e})}const ee=a.memo($);function te(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(j,e),o&&a.createElement(ee,e))}const ne={expandButton:"expandButton_P1sC",expandButtonIcon:"expandButtonIcon_qjeB"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:ne.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_muWh",docSidebarContainerHidden:"docSidebarContainerHidden_eBXQ"};function le(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:r}=(0,f.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),l((e=>!e))}),[l,c]);return a.createElement("aside",{className:(0,o.Z)(i.k.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement(te,{sidebar:t,path:r,onCollapse:d,isHidden:c})),c&&a.createElement(ae,{toggleSidebar:d}))}const ce={docMainContainer:"docMainContainer_UMnG",docMainContainerEnhanced:"docMainContainerEnhanced_QgyU",docItemWrapperEnhanced:"docItemWrapperEnhanced_U026"};function ie(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(ce.docMainContainer,(t||!l)&&ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced)},n))}const se={docPage:"docPage_k2h2",docsWrapper:"docsWrapper_h04l"};function de(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:se.docsWrapper},a.createElement(E,null),a.createElement("div",{className:se.docPage},n&&a.createElement(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ie,{hiddenSidebarContainer:o},t)))}var me=n(5149),ue=n(942);function be(e){const{versionMetadata:t}=e,n=(0,l.hI)(e);if(!n)return a.createElement(me.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(ue.Z,{version:t.version,tag:(0,r.os)(t.pluginId,t.version)}),a.createElement(c.FG,{className:(0,o.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(de,null,m)))))}},5149:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(2374),o=n(2206),l=n(3935),r=n(259);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},1821:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(2374),o=n(8754);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);