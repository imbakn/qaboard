(window.webpackJsonp=window.webpackJsonp||[]).push([[12,17,52],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(104),l=t(105),i=t(21),o=t(113),s=t(2),u=t(6),m=t(110),d=t(132),b=t(134),h=t(135),f=t(136),p=t(133),v=t(108),E=t(107),k=t(60),O=t.n(k);var j=function e(a,t){return"link"===a.type?(n=a.href,c=t,(r=function(e){return e.endsWith("/")?e:e+"/"})(n)===r(c)):"category"===a.type&&a.items.some((function(a){return e(a,t)}));var n,c,r};function _(e){var a,t,r,l=e.item,i=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,f=l.label,p=j(l,d),v=(t=p,r=Object(n.useRef)(t),Object(n.useEffect)((function(){r.current=t}),[t]),r.current),E=Object(n.useState)((function(){return!!o&&(!p&&l.collapsed)})),k=E[0],_=E[1];Object(n.useEffect)((function(){p&&!v&&k&&_(!1)}),[p,v,k]);var g=Object(n.useCallback)((function(e){e.preventDefault(),_((function(e){return!e}))}),[_]);return 0===h.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:f},c.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&p},a[O.a.menuLinkText]=!o,a)),onClick:o?g:void 0,href:o?"#!":void 0},b),f),c.a.createElement("ul",{className:"menu__list"},h.map((function(e){return c.a.createElement(w,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:d})}))))}function g(e){var a=e.item,t=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,i=a.label,o=j(a,n);return c.a.createElement("li",{className:"menu__list-item",key:i},c.a.createElement(v.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:l},Object(E.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),i))}function w(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(g,e)}}var C=function(e){var a,t,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,u=void 0===o||o,E=Object(n.useState)(!1),k=E[0],j=E[1],_=Object(l.a)(),g=_.siteConfig,C=(g=void 0===g?{}:g).themeConfig,N=(C=void 0===C?{}:C).navbar,y=(N=void 0===N?{}:N).title,S=void 0===y?"":y,x=N.hideOnScroll,M=void 0!==x&&x,P=_.isClient,I=Object(f.a)(),B=I.logoLink,D=I.logoLinkProps,L=I.logoImageUrl,R=I.logoAlt,W=Object(d.a)().isAnnouncementBarClosed,A=Object(p.a)().scrollY;Object(b.a)(k);var F=Object(h.a)();return Object(n.useEffect)((function(){F===h.b.desktop&&j(!1)}),[F]),c.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(a={},a[O.a.sidebarWithHideableNavbar]=M,a))},M&&c.a.createElement(v.a,Object(s.a)({tabIndex:"-1",className:O.a.sidebarLogo,to:B},D),null!=L&&c.a.createElement("img",{key:P,src:L,alt:R}),null!=S&&c.a.createElement("strong",null,S)),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",O.a.menu,(t={"menu--show":k},t[O.a.menuWithAnnouncementBar]=!W&&0===A,t))},c.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?c.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement("ul",{className:"menu__list"},i.map((function(e){return c.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:r})})))))},N=t(128),y=t(129),S=t(109),x=t(65),M=t.n(x);function P(e){var a,t,n=e.currentDocRoute,i=e.docsMetadata,s=e.children,u=Object(l.a)(),m=u.siteConfig,d=u.isClient,b=i.permalinkToSidebar,h=i.docsSidebars,f=i.version,p=h[b[n.path]];return c.a.createElement(o.a,{version:f,key:d},c.a.createElement("div",{className:M.a.docPage},p&&c.a.createElement("div",{className:M.a.docSidebarContainer,role:"complementary"},c.a.createElement(C,{sidebar:p,path:n.path,sidebarCollapsible:null===(a=null===(t=m.themeConfig)||void 0===t?void 0:t.sidebarCollapsible)||void 0===a||a})),c.a.createElement("main",{className:M.a.docMainContainer},c.a.createElement(r.a,{components:N.a},s))))}a.default=function(e){var a=e.route.routes,t=e.docsMetadata,n=e.location,r=a.find((function(e){return Object(S.matchPath)(n.pathname,e)}));return r?c.a.createElement(P,{currentDocRoute:r,docsMetadata:t},Object(i.a)(a)):c.a.createElement(y.default,e)}},114:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(111),l=t.n(r),i=t(109),o=t(105),s=!1;a.a=function(e){var a=Object(n.useRef)(!1),r=Object(n.useRef)(null),u=Object(i.useHistory)(),m=Object(o.a)().siteConfig,d=(void 0===m?{}:m).baseUrl,b=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,u.push(n)}}),a.current=!0)},h=function(){s?b():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(50),t.e(53)]).then(t.bind(null,117)),t.e(37).then(t.t.bind(null,116,7))]).then((function(e){var a=e[0],t=e[1].default;s=!0,window.searchData=a,window.DocSearch=t,b()}))},f=Object(n.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:f,onBlur:f,ref:r}))}},129:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(113);a.default=function(){return c.a.createElement(r.a,{title:"Page Not Found"},c.a.createElement("div",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);