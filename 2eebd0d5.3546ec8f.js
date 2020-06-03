(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),a=(r(0),r(181)),c={id:"troubleshooting",sidebar_label:"Troubleshooting",title:"Troubleshooting common issues"},i={id:"backend-admin/troubleshooting",title:"Troubleshooting common issues",description:"How to get logs from QA-Board's backend",source:"@site/docs/backend-admin/troubleshooting.md",permalink:"/qaboard/docs/backend-admin/troubleshooting",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/backend-admin/troubleshooting.md",sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/qaboard/docs/faq"},next:{title:"Upgrading the QA-Board host",permalink:"/qaboard/docs/backend-admin/host-upgrades"}},l=[{value:"How to get logs from QA-Board&#39;s backend",id:"how-to-get-logs-from-qa-boards-backend",children:[]},{value:"Restart the docker containers",id:"restart-the-docker-containers",children:[{value:"Start from scratch the docker container",id:"start-from-scratch-the-docker-container",children:[]},{value:"Quick wins when the disk is full",id:"quick-wins-when-the-disk-is-full",children:[]},{value:"Re-build and start the docker container",id:"re-build-and-start-the-docker-container",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-to-get-logs-from-qa-boards-backend"},"How to get logs from QA-Board's backend"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose logs -f backend\n# you can also log other services: proxy/cantaloupe/...\n\n# is the container even running ? restarting all the time\ndocker ps\n# get a shell\ndocker-compose exec backend bash\n")),Object(a.b)("h2",{id:"restart-the-docker-containers"},"Restart the docker containers"),Object(a.b)("p",null,"Symptom:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Cannot load the web application"),Object(a.b)("li",{parentName:"ul"},"500 errors"),Object(a.b)("li",{parentName:"ul"},"Often necessary if the disk got full..")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose.yml -f production.yml restart\n# if you make changes to the docker-compose files...\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")),Object(a.b)("h3",{id:"start-from-scratch-the-docker-container"},"Start from scratch the docker container"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose.yml -f production.yml down\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")),Object(a.b)("h3",{id:"quick-wins-when-the-disk-is-full"},"Quick wins when the disk is full"),Object(a.b)("p",null,"Symptom:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"500 errors"),Object(a.b)("li",{parentName:"ul"},"database unreachable in the logs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"no space left on device")," in the logs")),Object(a.b)("p",null,"Remove the IIIF image cache:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# stop\ndocker-compose -f docker-compose.yml -f production.yml down cantaloupe\n# remove with the volumes\ndocker-compose -f docker-compose.yml -f production.yml rm -v cantaloupe\ndocker-compose -f docker-compose.yml -f production.yml up -d cantaloupe\n")),Object(a.b)("p",null,"Remove unused docker images"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker image prune\n")),Object(a.b)("h3",{id:"re-build-and-start-the-docker-container"},"Re-build and start the docker container"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose.yml -f production.yml up -d --build\n# you can rebuild a subset of the services: backend, frontend...\n")))}d.isMDXComponent=!0},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,m=u["".concat(c,".").concat(p)]||u[p]||b[p]||a;return r?o.a.createElement(m,i({ref:t},s,{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);