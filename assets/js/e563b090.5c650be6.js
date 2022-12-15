"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[953],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9786:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={},i="Subgraph",l={unversionedId:"integrations/subgraph",id:"integrations/subgraph",title:"Subgraph",description:"Introduction",source:"@site/docs/integrations/subgraph.md",sourceDirName:"integrations",slug:"/integrations/subgraph",permalink:"/integrations/subgraph",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/integrations/subgraph.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SDKs",permalink:"/integrations/sdk"},next:{title:"Specification",permalink:"/integrations/aave/specification"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"GraphQL Schema",id:"graphql-schema",children:[],level:2},{value:"Links",id:"links",children:[],level:2},{value:"Query Examples",id:"query-examples",children:[{value:"Rewards Distribution",id:"rewards-distribution",children:[],level:3},{value:"Oracle Reports",id:"oracle-reports",children:[],level:3},{value:"Transfers",id:"transfers",children:[],level:3},{value:"Submissions",id:"submissions",children:[],level:3},{value:"Node Operator Keys",id:"node-operator-keys",children:[],level:3}],level:2},{value:"Helpful Links",id:"helpful-links",children:[],level:2}],p={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subgraph"},"Subgraph"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Lido has a Subgraph deployed on ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/about/introduction#what-the-graph-is"},"The Graph Decentralized Network")," which indexes and organises data from the Lido smart contracts events, exposing a GraphQL endpoint for queries. Subgraph data is indexed and served by independent Indexers on the network."),(0,a.kt)("h2",{id:"graphql-schema"},"GraphQL Schema"),(0,a.kt)("p",null,"The schema of GraphQL entities available is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-subgraph/blob/master/schema.graphql"},(0,a.kt)("inlineCode",{parentName:"a"},"/schema.graphql")," "),"."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thegraph.com/explorer/subgraph?id=HXfMc1jPHfFQoccWd7VMv66km75FoxVHDMvsJj5vG5vf&view=Overview"},"Explorer Page")),(0,a.kt)("li",{parentName:"ul"},"GraphQL Endpoint: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://gateway.thegraph.com/api/[api-key]/subgraphs/id/HXfMc1jPHfFQoccWd7VMv66km75FoxVHDMvsJj5vG5vf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-subgraph/"},"Code Repo"))),(0,a.kt)("h2",{id:"query-examples"},"Query Examples"),(0,a.kt)("p",null,"Below are some sample queries you can use to gather information from the Lido contracts."),(0,a.kt)("p",null,"You can build your own queries using ",(0,a.kt)("a",{parentName:"p",href:"https://graphiql-online.com"},"GraphQL Explorer")," to test it out and query exactly what you need."),(0,a.kt)("h3",{id:"rewards-distribution"},"Rewards Distribution"),(0,a.kt)("p",null,"Daily staking rewards data with calculated APR and fees distribution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  totalRewards(first: 100, orderBy: block, orderDirection: desc) {\n    id\n    totalRewards\n    totalRewardsWithFees\n    insuranceFee\n    treasuryFee\n    totalFee\n    dust\n    nodeOperatorFees {\n      address\n      fee\n    }\n    nodeOperatorsShares {\n      address\n      shares\n    }\n    shares2mint\n    sharesToInsuranceFund\n    sharesToOperators\n    sharesToTreasury\n    totalPooledEtherBefore\n    totalPooledEtherAfter\n    totalSharesBefore\n    totalSharesAfter\n    apr\n    aprBeforeFees\n    aprRaw\n    preTotalPooledEther\n    postTotalPooledEther\n    timeElapsed\n    block\n    blockTime\n    transactionIndex\n  }\n}\n")),(0,a.kt)("h3",{id:"oracle-reports"},"Oracle Reports"),(0,a.kt)("p",null,"Daily completed oracle reports."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  oracleCompleteds(first: 500, orderBy: blockTime, orderDirection: desc) {\n    epochId\n    beaconBalance\n    beaconValidators\n    block\n    blockTime\n  }\n}\n")),(0,a.kt)("h3",{id:"transfers"},"Transfers"),(0,a.kt)("p",null,"stETH transfers between addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  lidoTransfers(first: 50) {\n    from\n    to\n    value\n    block\n    blockTime\n    transactionHash\n  }\n}\n")),(0,a.kt)("h3",{id:"submissions"},"Submissions"),(0,a.kt)("p",null,"stETH staking events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  lidoSubmissions(first: 50) {\n    sender\n    amount\n    block\n    blockTime\n    transactionHash\n  }\n}\n")),(0,a.kt)("h3",{id:"node-operator-keys"},"Node Operator Keys"),(0,a.kt)("p",null,"Fetch validator keys of a node operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  nodeOperatorSigningKeys(where: { operatorId: 0 }) {\n    pubkey\n  }\n}\n")),(0,a.kt)("h2",{id:"helpful-links"},"Helpful Links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=UrfIpm-Vlgs"},"Creating an API Key Video Tutorial")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/studio/managing-api-keys/"},"Managing your API Key & Setting your indexer preferences")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/developer/querying-from-your-app/"},"Querying from an Application")))}c.isMDXComponent=!0}}]);