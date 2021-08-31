"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8158],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Solana cluster",c={unversionedId:"software_manuals/foundational_topics/solana-cluster",id:"software_manuals/foundational_topics/solana-cluster",isDocsHomePage:!1,title:"Solana cluster",description:"Solana maintains several different clusters with different purposes. A Solana cluster is a set of validators that serve client transactions and maintain the integrity of the registry. Two or more clusters can coexist if they have a common genesis block. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong address are rejected.",source:"@site/docs/software_manuals/foundational_topics/solana-cluster.md",sourceDirName:"software_manuals/foundational_topics",slug:"/software_manuals/foundational_topics/solana-cluster",permalink:"/docs/software_manuals/foundational_topics/solana-cluster",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/software_manuals/foundational_topics/solana-cluster.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof-of-Stake",permalink:"/docs/software_manuals/foundational_topics/proof-of-stake"},next:{title:"How to deploy an Ethereum contract",permalink:"/docs/software_manuals/how_to_guides/deploy_contract"}},p=[{value:"Endpoints",id:"endpoints",children:[]},{value:"Synchronization",id:"synchronization",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solana-cluster"},"Solana cluster"),(0,o.kt)("p",null,"Solana maintains several different clusters with different purposes. A Solana cluster is a set of validators that serve client transactions and maintain the integrity of the registry. Two or more clusters can coexist if they have a common genesis block. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong address are rejected.  "),(0,o.kt)("h3",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Solana maintains dedicated api nodes to fulfill JSON-RPC requests for each public cluster, and third parties may as well. Here are the public RPC endpoints currently available and recommended for each public cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Devnet endpoint",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.devnet.solana.com")," \u2014 single Solana-hosted api node; rate-limited.",(0,o.kt)("br",{parentName:"li"}),"Devnet serves as a playground for anyone who wants to take Solana for a test drive, as a user, token holder, app developer, or validator. Tokens are not real."),(0,o.kt)("li",{parentName:"ul"},"Testnet endpoint",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.testnet.solana.com")," \u2014 single Solana-hosted api node; rate-limited.",(0,o.kt)("br",{parentName:"li"}),"Testnet is used to stress test recent release features on a live cluster, particularly focused on network performance, stability and validator behavior. Tokens are not real."),(0,o.kt)("li",{parentName:"ul"},"Mainnet Beta endpoints",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.mainnet-beta.solana.com")," \u2014 Solana-hosted api node cluster, backed by a load balancer; rate-limited.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"https://solana-api.projectserum.com")," \u2014 Project Serum-hosted api node.",(0,o.kt)("br",{parentName:"li"}),"This is a permissionless, persistent cluster for early token holders and launch partners. Issuing tokens are real SOL.")),(0,o.kt)("h3",{id:"synchronization"},"Synchronization"),(0,o.kt)("p",null,"Fast, reliable synchronization is one of the main challenges for achieving high throughput. Traditional blockchains synchronize on large chunks of transactions called blocks. As a consensus algorithm, they use ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Proof_of_work"},"Proof-of-Work"))," or ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Proof_of_stake"},"Proof-of-Stake")),".",(0,o.kt)("br",{parentName:"p"}),"\n","Unlike traditional synchronization methods, Solana takes a completely approach, which it calls ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://docs.neonlabs.org/docs/glossary#proof-of-history"},"Proof-of-History")),". Solana uses an optimistic method of processing blocks (it was introduced in 1981 and called ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Optimistic Concurrency Control"),").",(0,o.kt)("br",{parentName:"p"}),"\n","The peculiarity of this method is that Solana technically never sends a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://docs.neonlabs.org/docs/glossary#block"},"block")),", but uses the term to describe the sequence of entries that validators vote on to achieve ",(0,o.kt)("em",{parentName:"p"},"confirmation"),". By processing the transactions optimistically, there is effectively no delay between the time the last entry is received and the time when the node can vote. In the event consensus is not achieved, a node simply rolls back its state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"More details"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/overview"},"A Solana cluster"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/clusters"},"Solana clusters"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/rpc-endpoints"},"Solana cluster RPC endpoints"))))}d.isMDXComponent=!0}}]);