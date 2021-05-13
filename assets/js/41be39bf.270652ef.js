(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(92)),c={},o={unversionedId:"contracts/steth-price-feed",id:"contracts/steth-price-feed",isDocsHomePage:!1,title:"StEthPriceFeed",description:"- Source Code",source:"@site/docs/contracts/steth-price-feed.md",sourceDirName:"contracts",slug:"/contracts/steth-price-feed",permalink:"/contracts/steth-price-feed",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/steth-price-feed.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"StableSwapStateOracle",permalink:"/contracts/stable-swap-state-oracle"},next:{title:"NodeOperatorsRegistry",permalink:"/contracts/node-operators-registry"}},l=[{value:"Vocabulary",id:"vocabulary",children:[]},{value:"stETH price feed specification",id:"steth-price-feed-specification",children:[]},{value:"Fail conditions",id:"fail-conditions",children:[]},{value:"View Methods",id:"view-methods",children:[{value:"safe_price()",id:"safe_price",children:[]},{value:"current_price()",id:"current_price",children:[]}]},{value:"Methods",id:"methods",children:[{value:"update_safe_price()",id:"update_safe_price",children:[]},{value:"fetch_safe_price()",id:"fetch_safe_price",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/lidofinance/steth-price-feed/blob/main/contracts/StEthPriceFeed.vy"},"Source Code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xab55bf4dfbf469ebfe082b7872557d1f87692fe6"},"Deployed Contract"))),Object(i.b)("p",null,"Lido intends to provide secure and reliable price feed for stETH for protocols that intend to integrate it. Unfortunately, Chainlik is not available for stETH and Uniswap TWAP is not feasible at the moment: we'd want deep liquidity on stETH/ETH pair for this price, but Uni v2 doesn't allow tight curves for similaraly-priced coins."),Object(i.b)("p",null,'stETH has deep liquidity in the Curve pool but it doesn\'t have a TWAP capability, so that\'s out, too. In the moment Curve price is flashloanable, if not easily. We decided that in a pinch we can provide a "price anchor" that would attest that "stETH/ETH price on Curve used to be around in recent past" (implemented using the ',Object(i.b)("a",{parentName:"p",href:"./stable-swap-state-oracle"},"StableSwapStateOracle"),") and a price feed that could provide a reasonably safe estimation of current stETH/ETH price."),Object(i.b)("h2",{id:"vocabulary"},"Vocabulary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Current price"),"\u2014current price of stETH on Curve pool. Flashloanable."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Historical price"),'\u2014the price of stETH on Curve pool that was at least 15 blocks ago. May be older than 15 blocks: in that case, the pool price that was 15 blocks ago differs from the "historical price" by no more than ',Object(i.b)("inlineCode",{parentName:"li"},"N"),"%."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Safe price range"),"\u2014the range from ",Object(i.b)("inlineCode",{parentName:"li"},"historical price - N%")," to ",Object(i.b)("inlineCode",{parentName:"li"},"min(historical price + N%, 1)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Safe price"),"\u2014the price that's within the safe price range.")),Object(i.b)("p",null,"The parameter ",Object(i.b)("inlineCode",{parentName:"p"},"N")," is configured by the price feed admin; we're planning to initially set it to ",Object(i.b)("inlineCode",{parentName:"p"},"5%"),"."),Object(i.b)("h2",{id:"steth-price-feed-specification"},"stETH price feed specification"),Object(i.b)("p",null,'The feed is used to fetch stETH/ETH pair price in a safe manner. By "safe" we mean that the price should be expensive to significantly manipulate in any direction, e.g. using flash loans or sandwich attacks.'),Object(i.b)("p",null,"The feed interfaces with two contracts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Curve stETH/ETH pool: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/curvefi/curve-contract/blob/c6df0cf/contracts/pools/steth/StableSwapSTETH.vy"},"source"),", ",Object(i.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xdc24316b9ae028f1497c275eb9192a3ea0f67022"},"deployed contract"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"./stable-swap-state-oracle"},"StableSwapStateOracle"))),Object(i.b)("p",null,"The pool is used as the main price source, and the oracle provides time-shifted price from the same pool used to establish a safe price range."),Object(i.b)("p",null,"The price is defined as the amount of ETH wei needed to buy 1 stETH. For example, a price equal to ",Object(i.b)("inlineCode",{parentName:"p"},"10**18")," would mean that stETH is pegged 1:1 to ETH."),Object(i.b)("p",null,"The safe price is defined as the one that satisfies all of the following conditions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The absolute value of percentage difference between the safe price and the time-shifted price fetched from the Merkle oracle is at most ",Object(i.b)("inlineCode",{parentName:"li"},"max_safe_price_difference"),"."),Object(i.b)("li",{parentName:"ul"},"The safe price is at most ",Object(i.b)("inlineCode",{parentName:"li"},"10**18"),", meaning that stETH cannot be more expensive than ETH.")),Object(i.b)("h2",{id:"fail-conditions"},"Fail conditions"),Object(i.b)("p",null,"Price feed can give incorrect data in, as far as we can tell, three situations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"stETH/ETH price moving suddenly and very quickly. There is at least 15 blocks delay between price drop and offchain oracle feed providers submitting a new historical price, and likely more bc tx are not mined instanteously. That should not happen normally: while stETH/ETH is volatile, it's not 5%-in-four-minutes volatile."),Object(i.b)("li",{parentName:"ul"},"oracle feed going stale because feed providers go offline. This is mitigated by the fact it's operated by several very experienced professionals (all of which, e.g., are Chainlink operators too) - and we only need one operational provider to maintain the feed. The only realistic scenario where this feed goes offline is deprecating the oracle alltogether."),Object(i.b)("li",{parentName:"ul"},"Multi-block flashloan attack. An block producer who is able to reliably get 2 blocks in a row can treat two blocks as an atomic transaction, leading to what is essentially a multiblock flashloan attack to manipulate price. That can lead to a short period of time (a few blocks) where stETH/ETH price feed is artificially manipulated. This attack is not mitigated, but in our opinion, not very realistic. It's very hard to pull off.")),Object(i.b)("h2",{id:"view-methods"},"View Methods"),Object(i.b)("h3",{id:"safe_price"},"safe_price()"),Object(i.b)("p",null,"Returns the cached safe price and its timestamp."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"safe_price() -> (price: uint256, timestamp: uint256)\n")),Object(i.b)("h3",{id:"current_price"},"current_price()"),Object(i.b)("p",null,"Returns the current pool price and whether the price is safe."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"current_price() -> (price: uint256, is_safe: bool)\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"update_safe_price"},"update_safe_price()"),Object(i.b)("p",null,"Sets the cached safe price to the ",Object(i.b)("inlineCode",{parentName:"p"},"max(current pool price, 1)")," given that the latter is safe."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"update_safe_price() -> uint256\n")),Object(i.b)("h3",{id:"fetch_safe_price"},"fetch_safe_price()"),Object(i.b)("p",null,"Returns the cached safe price and its timestamp. Calls ",Object(i.b)("inlineCode",{parentName:"p"},"update_safe_price()")," prior to that if\nthe cached safe price is older than ",Object(i.b)("inlineCode",{parentName:"p"},"max_age")," seconds."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"fetch_safe_price(max_age: uint256) -> (price: uint256, timestamp: uint256)\n")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"max_age")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"uint256")),Object(i.b)("td",{parentName:"tr",align:null},"Amount of seconds last value of safe price considered to be valid")))))}p.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,f=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return a?n.a.createElement(f,o(o({ref:t},s),{},{components:a})):n.a.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);