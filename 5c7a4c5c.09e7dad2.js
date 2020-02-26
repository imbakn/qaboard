(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(174)),i={id:"project-init",sidebar_label:"Project Initial Setup",title:"Adding QA-Board to your project"},c={id:"project-init",title:"Adding QA-Board to your project",description:"Go at the root of your project's git repository and run:\r",source:"@site/docs/project-init.md",permalink:"/qaboard/docs/project-init",sidebar_label:"Project Initial Setup",sidebar:"docs",previous:{title:"Starting a QA-Board server",permalink:"/qaboard/docs/start-server"},next:{title:"Input files",permalink:"/qaboard/docs/inputs"}},l=[{value:"Storing results",id:"storing-results",children:[]},{value:"Gitlab Integration",id:"gitlab-integration",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Go at the root of your project's git repository and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Sorry we need a utf8 locale\n# export LC_ALL=en_US.utf8 LANG=en_US.utf8            # bash users\n\nqa init\n#=> \ud83c\udf89\ud83c\udf89\ud83c\udf89\n")),Object(o.b)("p",null,"Along with previously existing files and directories, your root directory will now contain a structure similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"root-git-repository\n\u251c\u2500\u2500 qa\n\u2502  \u251c\u2500\u2500 main.py         # sample entrypoint that runs your code\n\u2502  \u251c\u2500\u2500 batches.yaml    # examples of how to run multiple tests\n\u2502  \u2514\u2500\u2500 metrics.yaml    # examples of how to define KPIs\n\u2514\u2500\u2500 qaboard.yaml       # \ud83d\udc47 QA-Board configuration \u2699\ufe0f \n")),Object(o.b)("h2",{id:"storing-results"},"Storing results"),Object(o.b)("p",null,"For now, we expect that all computers running ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," can access a shared storage (",Object(o.b)("inlineCode",{parentName:"p"},"NFS"),", ",Object(o.b)("inlineCode",{parentName:"p"},"samba"),"...) at ",Object(o.b)("inlineCode",{parentName:"p"},"/var/qaboard/data"),". To create this directly locally, run: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /var/qabaord/data\nchmod -R 777 /var/qaboard/data\n")),Object(o.b)("p",null,"To change this location, or set it up for Windows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# qaboard.yaml\nci_root:\n  linux: /var/qaboard/data\n  windows: '//shared_storage/var/qaboard/data'\n")),Object(o.b)("h2",{id:"gitlab-integration"},"Gitlab Integration"),Object(o.b)("p",null,"Create a Gitlab integration to keep the QA-Board and ",Object(o.b)("inlineCode",{parentName:"p"},"git")," in sync."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Be one of the project's Masters / Maintainers."),Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://gitlab.com/$YOUR_GROUP/PROJECT/settings/integrations"}),"https://gitlab.com/$YOUR_GROUP/PROJECT/settings/integrations"),". (or an on-premises host...)"),Object(o.b)("li",{parentName:"ol"},"Add an integration with:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"URL:")," ",Object(o.b)("inlineCode",{parentName:"li"},"http://$QABOARD_HOST/webhook/gitlab")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Secret token:")," ",Object(o.b)("em",{parentName:"li"},"(leave the field empty)"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'To test everything went well, Gitlab lets you "Test" your new hook. You should get a blue happy ',Object(o.b)("inlineCode",{parentName:"p"},"200 OK")," message  \ud83d\udd35\ud83c\udf89.")),Object(o.b)("div",{className:"admonition admonition-important"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"To make sure you can view your runs...")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Commit thoses changes and push!"),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"For now, the web interface can only show runs from commit that were pushed to Gitlab.")," We plan on removing this restriction and even the need to setup an integration. We'll also support other git servers (e.g. GitHub)."))))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},b,{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);