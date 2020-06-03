(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(9),r=(a(0),a(181)),c={id:"inputs",sidebar_label:"Inputs",title:"Input files"},o={id:"inputs",title:"Input files",description:"Algorithms turn inputs into outputs. What are your inputs? They can be image files, folders containing images...",source:"@site/docs/inputs.md",permalink:"/qaboard/docs/inputs",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/inputs.md",sidebar_label:"Inputs",sidebar:"docs",previous:{title:"Adding QA-Board to your project",permalink:"/qaboard/docs/project-init"},next:{title:"Running your code",permalink:"/qaboard/docs/running-your-code"}},b=[{value:"Batches of inputs",id:"batches-of-inputs",children:[]},{value:"Identifying inputs (Recommended)",id:"identifying-inputs-recommended",children:[]},{value:"Handling multiple input types (Advanced)",id:"handling-multiple-input-types-advanced",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Algorithms turn inputs into outputs. ",Object(r.b)("em",{parentName:"p"},"What are your inputs?")," They can be image files, folders containing images..."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For QA-Board, an input is a ",Object(r.b)("strong",{parentName:"p"},"path"),', split into "',Object(r.b)("strong",{parentName:"p"},"$database")," / ",Object(r.b)("strong",{parentName:"p"},"$input"),'".')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("em",{parentName:"li"},"qaboard.yaml"),", define your default database ",Object(r.b)("inlineCode",{parentName:"li"},"inputs.database")," (it defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"/")," or ",Object(r.b)("inlineCode",{parentName:"li"},"C://"),")"),Object(r.b)("li",{parentName:"ol"},"Try to run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qa run --input relatve/path/to/your/input.file \n#=> it should invite you to run *your* code\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is also possible to use external input databases not just files. If you need it, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"metadata-integration-external-databases"}),"read this"),"."))),Object(r.b)("h2",{id:"batches-of-inputs"},"Batches of inputs"),Object(r.b)("p",null,"To run on batches of multiple inputs, use ",Object(r.b)("inlineCode",{parentName:"p"},"qa batch my-batch"),", where ",Object(r.b)("strong",{parentName:"p"},"my-batch")," is defined in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qa/batches.yaml (can be changed in qaboard.yaml via inputs.batches)"',title:'"qa/batches.yaml',"(can":!0,be:!0,changed:!0,in:!0,"qaboard.yaml":!0,via:!0,'inputs.batches)"':!0}),"my-batch:\n inputs:\n   - images/A.jpg\n   - images/B.jpg\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qa batch my-batch\n#=> qa run --input images/A.jpg\n#=> qa run --input images/B.jpg\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We'll cover ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"batches-running-on-multiple-inputs"}),"batches in more depth later"),". By default, batches run in parallel locally, but you can easily setup an async task queue like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"celery-integration"}),"Celery")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/wiki/Adding-new-runners"}),"others"),"."))),Object(r.b)("h2",{id:"identifying-inputs-recommended"},"Identifying inputs (Recommended)"),Object(r.b)("p",null,'You\'ll often want to do something like "run on all the images in a given folder". For that to work, you have to tell QA-Board how to identify your images as inputs.'),Object(r.b)("p",null,"In ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/blob/master/qaboard/sample_project/qaboard.yaml"}),Object(r.b)("em",{parentName:"a"},"qaboard.yaml"))," edit and ",Object(r.b)("inlineCode",{parentName:"p"},"inputs.globs")," with a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/glob.html"}),"glob pattern"),". Here is an example where your inputs are ",Object(r.b)("em",{parentName:"p"},".jpg")," images:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"inputs:\n  globs: '*.jpg'\n")),Object(r.b)("p",null,"When you do this, you no longer have to define an explicit list of input paths in your batches. You can instead use folders or even ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/glob.html"}),"globs/wildcards")," (",Object(r.b)("inlineCode",{parentName:"p"},"*"),", ",Object(r.b)("inlineCode",{parentName:"p"},"**"),"...):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qa/batches.yaml"',title:'"qa/batches.yaml"'}),"my-batch:\n inputs:\n   - images\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To run on all the inputs found under ",Object(r.b)("inlineCode",{parentName:"p"},"$database / $PATH")," you can simply use ",Object(r.b)("inlineCode",{parentName:"p"},"qa batch $PATH"),"."))),Object(r.b)("p",null,"You can give multiple patterns:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"inputs:\n  globs:\n  - '*.jpg'\n  - '*.bmp'\n  - '*.dng'\n")),Object(r.b)("p",null,"A common use case is identifying folders containing a file patching a pattern, for instance movies given a sequence of frames, ",Object(r.b)("em",{parentName:"p"},"frame_000.jpg"),", ",Object(r.b)("em",{parentName:"p"},"frame_001.jpg"),"... In this case you can use ",Object(r.b)("inlineCode",{parentName:"p"},"use_parent_folder"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'{3} title="qaboard.yaml"',"{3}":!0,title:'"qaboard.yaml"'}),"inputs:\n  globs: frame_000.jpg\n  use_parent_folder: false\n")),Object(r.b)("h2",{id:"handling-multiple-input-types-advanced"},"Handling multiple input types (Advanced)"),Object(r.b)("p",null,"Big projects sometimes need to distinguish different types of inputs, which will be processed with a different logic."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml" {3-9}',title:'"qaboard.yaml"',"{3-9}":!0}),"inputs:\n  types:\n    default: image\n    image:\n      globs: '*.raw'\n    movie:\n      globs: frame_000.jpg\n      use_parent_folder: true\n      # you can override the defaults per-type\n      database:\n        linux: /mnt/movies\n        windows: F://movies\n")),Object(r.b)("p",null,"You can choose what type each batch is: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'{7} title="qa/batches.yaml"',"{7}":!0,title:'"qa/batches.yaml"'}),"my-images:\n  inputs:\n  - my/image.jpg\n\nmy-batch:\n  type: movie\n  inputs:\n  - folder/of/movies\n  - other/movies\n")),Object(r.b)("p",null,"If needed, you can also specify the input type from the CLI:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qa batch my-imagess              # by default look for images\nqa --type movie batch my-movies  # here we look for movies\n")))}s.isMDXComponent=!0},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return a?i.a.createElement(d,o({ref:t},l,{components:a})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<r;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);