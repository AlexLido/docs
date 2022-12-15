"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8901:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="How to Bridge Tokens through Jumpgate",s={unversionedId:"guides/jumpgates",id:"guides/jumpgates",title:"How to Bridge Tokens through Jumpgate",description:"Jumpgates are a class of contracts that faciliate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate.",source:"@site/docs/guides/jumpgates.md",sourceDirName:"guides",slug:"/guides/jumpgates",permalink:"/guides/jumpgates",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/jumpgates.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to claim Lido early stakers airdrop",permalink:"/guides/early-staker-airdrop"},next:{title:"Wallets",permalink:"/integrations/wallets"}},l=[{value:"1. Verify Jumpgate",id:"1-verify-jumpgate",children:[],level:3},{value:"2. Transfer tokens to Jumpgate",id:"2-transfer-tokens-to-jumpgate",children:[],level:3},{value:"3. Bridge Tokens",id:"3-bridge-tokens",children:[],level:3},{value:"4. Claim tokens",id:"4-claim-tokens",children:[],level:3}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-bridge-tokens-through-jumpgate"},"How to Bridge Tokens through Jumpgate"),(0,a.kt)("p",null,"Jumpgates are a class of contracts that faciliate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/IqphF28aTUU"},(0,a.kt)("strong",{parentName:"a"},"Watch video tutorial"))),(0,a.kt)("h3",{id:"1-verify-jumpgate"},"1. Verify Jumpgate"),(0,a.kt)("p",null,"In this step we will be making sure that the jumpgate is correctly configured. You will only need to do this once because jumpgates are non-upgradeable contracts."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Etherscan"),'  and open the Jumpgate page. Click the "Contract" tab, the green check mark confirms that the source code is verified. Check the parameters:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arbiterFee")," is always 0;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bridge")," is the address of the bridge. Currenty, all jumpgates use only Wormhole Token bridge at ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585"},(0,a.kt)("inlineCode",{parentName:"a"},"0x3ee18B2214AFF97000D974cf647E7C347E8fa585")),", and you can check the address against the ",(0,a.kt)("a",{parentName:"li",href:"https://book.wormhole.com/reference/contracts.html"},"Wormhole docs"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nonce")," is always 0;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner")," is the Aragon Agent at ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"},(0,a.kt)("inlineCode",{parentName:"a"},"0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"))," verifiable against ",(0,a.kt)("a",{parentName:"li",href:"/deployed-contracts#dao-contracts"},"Deployed contracts"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," is the recipient address in hexadecimal form. For Solana, this will an encoded LDO token account. Use ",(0,a.kt)("a",{parentName:"li",href:"https://appdevtools.com/base58-encoder-decoder"},"Base 58 decoder")," to decode this hexadecimal sequence to the Solana address format. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recipientChain")," is the target chain identifier. If the Jumpgate is using Wormhole bridge, you can check the id against the ",(0,a.kt)("a",{parentName:"li",href:"https://book.wormhole.com/reference/contracts.html"},"Wormhole docs"),", Solana id is 1; "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"renounceOwnership")," should yield an error;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"token")," is the address of the token being transfered, e.g. LDO at ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"},"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"),". Check the LDO address against ",(0,a.kt)("a",{parentName:"li",href:"/deployed-contracts#dao-contracts"},"Deployed contracts"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5924).Z})),(0,a.kt)("h3",{id:"2-transfer-tokens-to-jumpgate"},"2. Transfer tokens to Jumpgate"),(0,a.kt)("p",null,"The jumpgate is agnostic to how tokens were received. You can either transfer tokens directly or in the context of DAO operations via an Aragon vote or Easytrack transfer motion."),(0,a.kt)("h3",{id:"3-bridge-tokens"},"3. Bridge Tokens"),(0,a.kt)("p",null,"Now we can send tokens through the bridge. We cannot input the amount of tokens to bridge and the jumpgate will transfer the entirety of its token balance."),(0,a.kt)("p",null,'Open "Write contract" tab and connect your wallet by clicking the "Connect to Web3" button. We will now expand ',(0,a.kt)("inlineCode",{parentName:"p"},"bridgeTokens"),' function and click "Write". Remember that this function is permissionless and you can initiate the transfer from any account as long as you have enough ether for gas.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9205).Z})),(0,a.kt)("h3",{id:"4-claim-tokens"},"4. Claim tokens"),(0,a.kt)("p",null,"Claiming process may be different depending on the bridge but for now all jumpgates only support Wormhole Token Bridge. We will be using Portal Bridge (formerly Wormhole) website to claim tokens on Solana."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To go ",(0,a.kt)("a",{parentName:"li",href:"https://www.portalbridge.com/#/redeem"},"Portal Bridge website"),' Redeem page and connect your Ethereum wallet. Select "Token" in "Type" dropdown and "Ethereum" in "Source Chain". Paste the hash of the ',(0,a.kt)("inlineCode",{parentName:"li"},"bridgeTokens"),' transaction. At first, this should produce an error because it takes some time for Portal Bridge to process the bridge transaction. Try this step again in 10-20 minutes and click "Recover" button.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5269).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Recover" will redirect you to "Tokens" tab, where you will be able to confirm the recipient address. Connect your Solana wallet, click "Redeem". You will be prompted to sign a few transactions. Once those are confirmed, you will be able to see the tokens on the recipient.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2915).Z})))}p.isMDXComponent=!0},5924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/read-contract-b92acaf5b67c4e3fe78f250ba7144b25.png"},5269:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recover-07dbb89650584510b48159abbd96463b.png"},2915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redeem-a3efe4f96f27e876c9784d53eb773d21.png"},9205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/write-contract-98f7c6456f59b6ddc0e21e7f6d5fab86.png"}}]);