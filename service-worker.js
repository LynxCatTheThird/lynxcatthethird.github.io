if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),b={module:{uri:c},exports:r,require:d};s[c]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-6fb979ed.js",revision:"caf48f1320ddd966aa13cca27187e111"},{url:"assets/404.html-b88aceec.js",revision:"ac0d3d616ea47a85936c4b1bcb481e71"},{url:"assets/aboutme.html-d9f7476c.js",revision:"5c601108c7cdb7cb6baf7de5f8ab1564"},{url:"assets/aboutme.html-e4c735f2.js",revision:"f80cb55a304cc3e9088c5e30975f529d"},{url:"assets/app-6cc705c1.js",revision:"9e17f81221f78f6218aa5fc82e08eaa7"},{url:"assets/arc-106d9a8a.js",revision:"bac01b298326f980a1d66531dc74e650"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fa8841cf.js",revision:"34b2dbde32156a3e945129af69ce72c3"},{url:"assets/c4Diagram-73a25429-8053a9fe.js",revision:"a773adfc26abd1d2477fd77c36247dc1"},{url:"assets/classDiagram-d26c05e1-bf14f0a3.js",revision:"569afabb5a4f52098047ff2cb68c9793"},{url:"assets/classDiagram-v2-656fc6c4-a524f2eb.js",revision:"315395e91b9f4d6d6db26e5902f02235"},{url:"assets/codemirror-editor-4652054b.js",revision:"fc74498dabfe30e3237969f4381b8ace"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-a49d2d2a-64cca3ac.js",revision:"50ce633e2e6537177c93a2861fadc05f"},{url:"assets/edges-66ea8538-691ea282.js",revision:"1d975d72c08d9542500f90ef28d5b5a3"},{url:"assets/erDiagram-731c3598-66a58cf7.js",revision:"210e75e1f888a574cc8c23f2d41d2bc8"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-ec654d50-a997f5e0.js",revision:"91f773215e2560dc0426bfcd02a8dee2"},{url:"assets/flowDb-9e6c6aac-4ca6f9d8.js",revision:"b9761dbce4af85bc3ea18343004944c8"},{url:"assets/flowDiagram-b66fcae9-0e8574b9.js",revision:"5fedfd110f0248bb673e79d911d098c2"},{url:"assets/flowDiagram-v2-fe64f300-aef08451.js",revision:"32cc903c57aae9bed2a8199b5cbca0dc"},{url:"assets/ganttDiagram-55b9c28c-009bfcd4.js",revision:"4d2bffa0699fd52d72d1c49a971e453f"},{url:"assets/gitGraphDiagram-566a7451-e7794d58.js",revision:"4b19e10c93bbc2d594b3cdae6b60baea"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-1e7f2254-9cd1c3be.js",revision:"2956c31f691d739b42a7fee9fa628672"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-04949200.js",revision:"d126177741bed6121bce3946607f1404"},{url:"assets/index.html-109bd5b1.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-112dfa86.js",revision:"2cbfb588efa2ebcf7e40ba851a09cb86"},{url:"assets/index.html-11bbaf1d.js",revision:"22cf1f842508835f1356bc873974999a"},{url:"assets/index.html-5cd5e83b.js",revision:"8881001424dc75b829f277882b2e8b44"},{url:"assets/index.html-74161021.js",revision:"b8be7afd31597551d9638fe55afc13d3"},{url:"assets/index.html-753b7161.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-7939a081.js",revision:"829ed5401f223794ba00af7953178253"},{url:"assets/index.html-974edf9e.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-9a3eb9af.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-9caeeca3.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-a943d13c.js",revision:"036a9672702da365fcb2f4468d852c98"},{url:"assets/index.html-b03f059f.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-be84a93c.js",revision:"00b5018e5c9e374568fcfad3fbcb09d3"},{url:"assets/index.html-c1deb070.js",revision:"7801d4e4b5cd8278a9c609e49d75da06"},{url:"assets/index.html-c4a57f85.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-c4bd12ae.js",revision:"45a540e66eaf43d1ba0ea665e706911c"},{url:"assets/index.html-c82ff012.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-cd2fae5b.js",revision:"6883f50b9caa09db2048f9172692a8c5"},{url:"assets/index.html-cfbaac24.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-da5ecba3.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-dcf7b719.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-de7b0f3c.js",revision:"15c2ad9a54e0531785f9ab39d2f943f7"},{url:"assets/index.html-e43f28f1.js",revision:"2cba34246a61b688d43627cebb3ce411"},{url:"assets/index.html-eff1535b.js",revision:"bbf17d8dd6c3edcbad667b68f1c92f9c"},{url:"assets/index.html-fbd5c31e.js",revision:"17bf5a6eaa69fb3d3cf16d821f04f2e1"},{url:"assets/infoDiagram-f43c69c6-01a885ee.js",revision:"3c7a4c470e5a7a0bc50ecb48f3dba13f"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/journeyDiagram-4f4351b8-82ce297d.js",revision:"5eed1eb903a39504ddd66476e34d94bd"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-136bdaa0.js",revision:"ea2a9a3c52308519ed581b03421be276"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-aa7ca8d7.js",revision:"210df19730594ef18cd22c6830ec59c8"},{url:"assets/linear-cdf7fe7d.js",revision:"fa3b4426882e78f751e2b932e3d14139"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/markdown.html-82cf02e3.js",revision:"a41a3863a12cdcb0a83568e6f32e85d8"},{url:"assets/markdown.html-e44ee15b.js",revision:"a48d9cfbb7907ddaaf398a0d036d1ba0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-4e4fe027.js",revision:"42e5eec2a033c145e4aecf5446a23c57"},{url:"assets/mindmap-definition-89ece3a3-ad8005b3.js",revision:"193a306d4d9d5fe8f62eb9e36564ce12"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-c8640b32-7867e10d.js",revision:"b9eb9be65f43fae8cce030d165dc9426"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-f7a9076b-adce3282.js",revision:"6066156761b2ed6955e16bebc2bb3620"},{url:"assets/requirementDiagram-429b9d18-7e06fc49.js",revision:"94d2a9b80e88885497965f167948326c"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-a3b50578.js",revision:"2aa4df7b4457edbac1cca916abf80172"},{url:"assets/selectAll-09195e7c.js",revision:"e336e99c0646761ea7fc7b1fe89afb66"},{url:"assets/sequenceDiagram-9506b40c-4e7b5d07.js",revision:"c81e7eec4cfdd765c4cf705ab5497935"},{url:"assets/slides.html-1778c043.js",revision:"d9c696f2d369236c31b0133fc2526abb"},{url:"assets/slides.html-f0bdc69b.js",revision:"ac4c90ec6be8a2af255ceb7b1e9e52e7"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-0dc7ce84-9fc7051e.js",revision:"12e8645b6e88635c26a6ba86df00d57c"},{url:"assets/stateDiagram-v2-e65458cd-98492e51.js",revision:"5e055e240ccb1bc745b88e0f72eca558"},{url:"assets/style-0c95b2ab.css",revision:"d270cc1757ac4b17984b47fe878144fa"},{url:"assets/styles-7882abfe-67b35bed.js",revision:"7a5efcbba06939220fa0466dba8a98c0"},{url:"assets/styles-a893c203-90def3f7.js",revision:"03826619dd17c6550631421e6fe53551"},{url:"assets/styles-b820c189-37cb139c.js",revision:"17409df1e9a118f57e0aec2093c0eec9"},{url:"assets/svgDraw-95adee0a-708a8381.js",revision:"bf0900d8b8f6ba4069a971277178716e"},{url:"assets/svgDrawCommon-f26cad39-2ca35290.js",revision:"c3ea2fa0f71f09054240e383783c86e6"},{url:"assets/timeline-definition-46a17596-a3a72393.js",revision:"0578edb013d7ffc7af6cc68d27d6a8e1"},{url:"assets/twikoo.all.min-bdd1cb21.js",revision:"3c57386ac0d193351ae549d2d948644b"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-5fb2d677.js",revision:"f654507fade14d665b36c6d56f3a059f"},{url:"assets/VuePlayground-2e7843bd.js",revision:"2921b0feef1110c9b6da12af4639b8ca"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/图床测试.html-04e62bd9.js",revision:"15eb4bb232741c5730c86c93b937d60a"},{url:"assets/图床测试.html-a74a98a9.js",revision:"a78c00e60fdb209f2f8ec8fa9bb364e0"},{url:"assets/生物备战-难题分析（1）.html-d0566e1c.js",revision:"ee8586a3be27ffad7993e9c1e2e63e5c"},{url:"assets/生物备战-难题分析（1）.html-daf69f8d.js",revision:"7a6f7b93647057c13cea0f1e4b99e80a"},{url:"assets/类原生优化计划.html-4f5c4b64.js",revision:"61de607b6b7b4082c34348f09f684c31"},{url:"assets/类原生优化计划.html-a9f07aa8.js",revision:"93941d7c3f6fd9cc42cc6a0267c42a1d"},{url:"assets/网站速度优化指北.html-392f7960.js",revision:"abfbd11109488df81640ef82cb8458f3"},{url:"assets/网站速度优化指北.html-b8440411.js",revision:"a96831f127df256d22efed67e7e55de7"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"8a0b1eb6ce5a23a114495aa556f2d64d"},{url:"aboutme.html",revision:"8ecb3bd496c27aec92e4732398c807d2"},{url:"article/index.html",revision:"815e8f85a9df61785171e529de4fdabe"},{url:"category/index.html",revision:"0fbfe3af62805b513e5058f14e3745dd"},{url:"category/科学与技术/index.html",revision:"f02cdeca2c0e2618c52dc1a4f5e145fb"},{url:"index.html",revision:"bd9c3abedbf795c5d2ed36be78d0793b"},{url:"posts/index.html",revision:"ca7882e191d5132e193010746358bb9e"},{url:"posts/markdown.html",revision:"781d451c1216415f22dd8dbbe1ed880f"},{url:"posts/图床测试.html",revision:"6364b8e76101109ccdb99f4b2c090626"},{url:"posts/生物备战-难题分析（1）.html",revision:"46d0fdf7d042a4b41327b94d36ddbc00"},{url:"posts/类原生优化计划.html",revision:"89faa475f104a2589f2b4d4fab7f641c"},{url:"posts/网站速度优化指北.html",revision:"bf23d6bfccd5aa7b063c2b8b969f22a1"},{url:"slides.html",revision:"73d7b073acd950211a349ce495c8a89f"},{url:"star/index.html",revision:"575e2c0e45efaf9347048104ad3da4a1"},{url:"tag/index.html",revision:"08010c73fccb1a239a892365dccaea70"},{url:"tag/典题分析/index.html",revision:"bf6f3e8270417895f5a7566d161f686b"},{url:"tag/刷机/index.html",revision:"d37aeffd51abd350722a13f37511056f"},{url:"tag/生物/index.html",revision:"8083aa9d8ade6d1602fab97f68612157"},{url:"tag/网站搭建/index.html",revision:"edb10e677b9f2b797e5b7d26d8185f85"},{url:"tag/计算机/index.html",revision:"dc33b11d8f1c665606d7f3e978ea61c9"},{url:"timeline/index.html",revision:"9ebd48f06adb77ca2db5b9439100a0e7"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.webp",revision:"445aed87ac7e215d5baf13e2fc12f2a9"},{url:"assets/images/cover10.webp",revision:"58322a99cb03cba2ea9ab1d43c04416b"},{url:"assets/images/cover2.webp",revision:"f34dc0e185fe745f2435d6025d93ec05"},{url:"assets/images/cover3.webp",revision:"9003720b678b922db64543051d88a8ab"},{url:"assets/images/cover4.webp",revision:"458c3cc376b8dca73de9bce9fb44f7e2"},{url:"assets/images/cover5.webp",revision:"c04b9c569f01b02f8aaa00b14d0dd63f"},{url:"assets/images/cover6.webp",revision:"413a1df069ae3f65f06e8734ae463036"},{url:"assets/images/cover7.webp",revision:"28946a92ee2c18489e4e51bee1d91c6a"},{url:"assets/images/cover8.webp",revision:"a790ffb0551922d29b8a06ac7555b20e"},{url:"assets/images/cover9.webp",revision:"9a60576c92aca3e40f82ce58548a63fd"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
