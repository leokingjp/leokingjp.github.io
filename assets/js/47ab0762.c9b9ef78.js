"use strict";(self.webpackChunkmilkomeda=self.webpackChunkmilkomeda||[]).push([[205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Getting Started with Milkomeda",sidebar_position:1},s="Getting Started with Milkomeda",d={unversionedId:"Milkomeda/intro",id:"Milkomeda/intro",title:"Getting Started with Milkomeda",description:"Milkomeda is a groundbreaking new protocol that brings EVM capabilities to non-EVM blockchains. As development progresses, Milkomeda will expand to offer L2 solutions (rollups) for several major blockchains including Cardano, Solana, and Algorand. Currently we have an EVM-based sidechain connected to Cardano up and running. We call this the Milkomeda C1 sidechain.",source:"@site/docs/Milkomeda/intro.md",sourceDirName:"Milkomeda",slug:"/Milkomeda/intro",permalink:"/docs/Milkomeda/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Getting Started with Milkomeda",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Obtaining Test ADA",permalink:"/docs/Milkomeda/for-developers/obtaining-test-ada"},next:{title:"for-end-users",permalink:"/docs/Milkomeda/for-end-users/"}},u={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-milkomeda"},"Getting Started with Milkomeda"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Milkomeda")," is a groundbreaking new protocol that brings EVM capabilities to non-EVM blockchains. As development progresses, Milkomeda will expand to offer L2 solutions (rollups) for several major blockchains including Cardano, Solana, and Algorand. Currently we have an EVM-based sidechain connected to Cardano up and running. We call this the ",(0,a.kt)("strong",{parentName:"p"},"Milkomeda C1")," sidechain."),(0,a.kt)("p",null,"Follow the steps in this guide to quickly get started using Milkomeda."),(0,a.kt)("h1",{id:""}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why Milkomeda?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Milkomeda provides non-EVM ecosystems the ability to inherit key elements such as rollups and Solidity support from EVM-based ecosystems.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developers have access to all of the tooling from the EVM ecosystem. Building, deploying, debugging, and auditing all work the same as in Ethereum. The capability for developers to port projects over from Ethereum will significantly broaden the selection of dApps available on supported L1 blockchains.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Security consistency among deployments: Multi-chain deployed code has the same security properties, eliminating the need to do individual audits per chain.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Future innovations in zero-knowledge technology will be implementable as L3+ solutions on top of Milkomeda.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Milkomeda empowers startups to build on chains like Cardano, Algorand, Solana, and Terra while tapping into the talent and resources of the largest community for smart contracts (Solidity).")),(0,a.kt)("h1",{id:"-1"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features of Milkomeda")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scalability: Milkomeda can scale to hundreds of transactions per second without sacrificing long-term decentralization.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Security: Our aim is to leverage the power of rollups for all chains, with audits at key points in the roadman to ensure security of the protocol.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User Experience: We collaborate with wallets to ensure the experience of moving assets to Milkomeda is a breeze.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interoperability: Solidity (EVM) support will come first, followed by Cairo and others.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Portability: Code once, deploy everywhere without sacrificing security.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developer Experience: Developers can draw directly on all of the tooling and resources of Ethereum.")),(0,a.kt)("h1",{id:"-2"}),(0,a.kt)("p",null,"\u200b",(0,a.kt)("a",{parentName:"p",href:"https://dcspark.gitbook.io/milkomeda-getting-started/for-end-users/"},"Getting Started: For End Users"),"\u200b"),(0,a.kt)("p",null,"End users can send ADA from the Cardano mainnet to a bridge address and receive wrapped ADA on the ",(0,a.kt)("strong",{parentName:"p"},"Milkomeda C1")," sidechain. Jump ahead to the ",(0,a.kt)("a",{parentName:"p",href:"./for-end-users"},"Getting Started for End Users page")," to start by setting up Flint and MetaMask."),(0,a.kt)("h1",{id:"-3"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./for-developers/"},"Getting Started: For Developers")),(0,a.kt)("p",null,"In addition to the mainnet version of the Milkomeda C1 sidechain which uses wrapped ADA for fees and gas, developers can also access the ",(0,a.kt)("strong",{parentName:"p"},"Milkomeda Devnet")," to wrap assets from the Cardano Testnet and deploy smart contracts on the Milkomeda C1 Devnet sidechain using wrapped Test ADA for fees and gas. Proceed to the ",(0,a.kt)("a",{parentName:"p",href:"https://dcspark.gitbook.io/milkomeda-getting-started/for-developers"},"next page")," to start by setting up Flint Wallet and obtaining some test ADA from the Cardano Testnet faucet."))}m.isMDXComponent=!0}}]);