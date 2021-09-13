"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[408],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p="Quick operator's guide",s={unversionedId:"proxy/operator_guide",id:"proxy/operator_guide",isDocsHomePage:!1,title:"Quick operator's guide",description:"This guide will interest people who want to register with Neon EVM as a Proxy operator for processing transactions on Solana. It is assumed these people have experience compiling Solana-based blockchain nodes or have worked as blockchain validators.",source:"@site/docs/proxy/operator_guide.md",sourceDirName:"proxy",slug:"/proxy/operator_guide",permalink:"/docs/proxy/operator_guide",editUrl:"https://github.com/neonlabsorg/neon-evm.docs/docs/proxy/operator_guide.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NeonSwap demo guide",permalink:"/docs/neonswap/solana_neonswap"},next:{title:"Web3 concept",permalink:"/docs/software_manuals/foundational_topics/web3"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Duties of a proxy operator",id:"duties-of-a-proxy-operator",children:[]},{value:"Operator requirements",id:"operator-requirements",children:[]},{value:"Installation",id:"installation",children:[{value:"Using Docker",id:"using-docker",children:[]},{value:"Using PIP",id:"using-pip",children:[]}]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-operators-guide"},"Quick operator's guide"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This guide will interest people who want to register with Neon EVM as a Proxy operator for processing transactions on Solana. It is assumed these people have experience compiling Solana-based blockchain nodes or have worked as blockchain validators.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Ethereum users have the opportunity to run their applications based on smart contracts, on Solana via Neon EVM. Smart contracts generate transactions in accordance with the Ethereum rules and submit them to Neon EVM. Since the structures of Ethereum and Solana transactions differ from each other, Neon EVM contains special Proxy servers responsible for converting and executing transactions in Solana. These servers are configured and maintained by special staff of Neon EVM - proxy operators. "),(0,o.kt)("p",null,"This guide contains a list of the proxy operator duties, instructions to ensure the successful operation of a proxy and thus the successful execution of transactions."),(0,o.kt)("h2",{id:"duties-of-a-proxy-operator"},"Duties of a proxy operator"),(0,o.kt)("p",null,"The main task of a proxy operator is to install software on a server to accept a transaction formed according to Ehereum rules and ensure its execution in Solana, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuring a Proxy server to perform the following operations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Receiving requests over Web3 API protocol."),(0,o.kt)("li",{parentName:"ul"},"Shaping responses using Web3 API protocol."),(0,o.kt)("li",{parentName:"ul"},"Converting transactions to Solana format."))),(0,o.kt)("li",{parentName:"ul"},"Connecting a Proxy server to a Solana cluster RPC endoint.   (- \u044d\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f ????)"),(0,o.kt)("li",{parentName:"ul"},"Successful execution of transactions.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All operations related to the execution of transactions on Solana are performed by the software installed on your node.")),(0,o.kt)("h2",{id:"operator-requirements"},"Operator requirements"),(0,o.kt)("p",null,"If you do not have public and private keys in Solana, as well as a balance to keep the SOL tokens, you need to create them first."),(0,o.kt)("h4",{id:"minimum-sol-requirements"},"Minimum SOL requirements"),(0,o.kt)("p",null,"There is no strict minimum amount of SOL required to run an operator on Neon EVM."),(0,o.kt)("h4",{id:"hardware-recommendations"},"Hardware recommendations"),(0,o.kt)("p",null,"The minimum specifications recommended to choose your node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"High Clock Speed 4+ Cores, or more"),(0,o.kt)("li",{parentName:"ul"},"2.8 GHz, or faster"))),(0,o.kt)("li",{parentName:"ul"},"RAM",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"16 GB, or more"))),(0,o.kt)("li",{parentName:"ul"},"Disk space amount",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"80 GB, or more")))),(0,o.kt)("h4",{id:"software-recommendations"},"Software recommendations"),(0,o.kt)("p",null,"The following software should be installed on your node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04, or later"),(0,o.kt)("li",{parentName:"ul"},"MacOS Darwin 10.12, or later"))),(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Docker-compose")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Docker is used only for development purposes. Running an operator inside Docker for a live network is not recommended. This is due to Docker's overall containerization overhead and resultant performance degradation.")),(0,o.kt)("h4",{id:"networking"},"Networking"),(0,o.kt)("p",null,"Internet service should be at least 300 Mbit/s."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"After you have choosed a node that meets the listed recommendations, you can start installing a proxy operator software on it.  "),(0,o.kt)("h3",{id:"using-docker"},"Using Docker"),(0,o.kt)("h4",{id:"run-a-daemon"},"Run a daemon"),(0,o.kt)("p",null,"Make sure that you have a daemon running. If you see something like:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker info\nCannot connect to the Docker daemon at <docker.sock>. Is the docker daemon running?\n")),(0,o.kt)("p",null,"you need to run the daemon first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo systemctl start docker\n")),(0,o.kt)("h4",{id:"clone-the-proxy-modelpy-repository-from-github"},"Clone the ",(0,o.kt)("em",{parentName:"h4"},"proxy-model.py")," repository from GitHub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/neonlabsorg/proxy-model.py.git\n$ cd proxy-model.py\n")),(0,o.kt)("h4",{id:"start-docker"},"Start docker"),(0,o.kt)("p",null,"\u0421reate an image of a machine on which the proxy will run.\nWhen starting docker, you need to set the ",(0,o.kt)("em",{parentName:"p"},"CONFIG")," environment variable, which can take one of the following values: ",(0,o.kt)("em",{parentName:"p"},"local"),", ",(0,o.kt)("em",{parentName:"p"},"devnet"),", ",(0,o.kt)("em",{parentName:"p"},"testnet"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo docker run --rm -ti --network=host -e CONFIG=<network mode> cybercoredev/proxy:v0.2.0\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The command line options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--rm"),": delete a container when the command is completed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-ti"),": allocate a pseudo-TTY connected to the container\u2019s stdin; creating an interactive bash shell in the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--network host"),": use host network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e"),": set environment variables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG=<network mode>"),": specifies a Solana cluster operating mode; either ",(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG=devnet")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG=testnet")," is recommended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cybercoredev/proxy:v0.2.0"),": the specific proxy name.")),(0,o.kt)("h4",{id:"start-proxy"},"Start proxy"),(0,o.kt)("p",null,"To start a proxy, you just need to run the ",(0,o.kt)("em",{parentName:"p"},"run-proxy.sh")," script. This script will automatically perform all the actions required to build a docker, including: installation of packages and modules, patching API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo ./proxy/run-proxy.sh\n")),(0,o.kt)("h4",{id:"config-values"},"CONFIG values"),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," value (devnet/testnet/local), by default, the corresponding variables are set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SOLANA_URL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NEON_CHAIN_ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NEON_CLI_TIMEOUT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EVM_LOADER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"COLLATERAL_POOL_BASE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ETH_TOKEN_MINT"))),(0,o.kt)("p",null,"When you start docker, you can override all these parameters by specifying different values for them on the command line. The table below shows default values for the following variables:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"SOLANA_URL"),(0,o.kt)("th",{parentName:"tr",align:"left"},"NEON_CHAIN_ID"),(0,o.kt)("th",{parentName:"tr",align:"left"},"NEON_CLI_TIMEOUT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"https://api.devnet.solana.com")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6e"),(0,o.kt)("td",{parentName:"tr",align:"left"},"10 s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"https://api.testnet.solana.com")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"15 s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"http://localhost:8899")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0x6f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0,9 s")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SOLANA_URL"),(0,o.kt)("br",{parentName:"p"}),"\n","Specifies a Solana RPC endpoint that a proxy is connecting to. If you specify ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG=local")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SOLANA_URL=<your node URL>"),", then requests of a proxy will be sent to your node.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NEON_CHAIN_ID"),(0,o.kt)("br",{parentName:"p"}),"\n","You can run a proxy with your own chain by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CHAIN_ID"),".  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NEON_CLI_TIMEOUT"),(0,o.kt)("br",{parentName:"p"}),"\n","In Neon EVM, a transaction is run for emulation before execution to determine accounts that will be involved in it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," variable specifies the time (in seconds) required for a transaction to be executed.  "),(0,o.kt)("p",null,"The emulation execution time is affected by the following factors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The geographical distance between a node and proxy."),(0,o.kt)("li",{parentName:"ul"},"The load of the node due to processing requests at the moment.")),(0,o.kt)("p",null,"Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," time too short may not be sufficient to complete a transaction and pack it into a block. Therefore, ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," is set to the smallest value for ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG = local"),". Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEON_CLI_TIMEOUT")," value too high may block other users from accessing this node.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EVM_LOADER"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"EVM_LOADER"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"EVM_LOADER"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"EVM_LOADER=deploy"),", then the new Neon EVM will be deployed.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"COLLATERAL_POOL_BASE"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"COLLATERAL_POOL_BASE"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"COLLATERAL_POOL_BASE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"7SBdHNeF9FFYySEoszpjZXXQsAiwa5Lzpsz6nUJWusEx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"7SBdHNeF9FFYySEoszpjZXXQsAiwa5Lzpsz6nUJWusEx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"COLLATERAL_POOL_BASE=deploy"),", then the new collateral pool accounts will be created.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ETH_TOKEN_MINT"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG")," defaults the following values for the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CONFIG"),(0,o.kt)("th",{parentName:"tr",align:"left"},"ETH_TOKEN_MINT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"devnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"testnet"),(0,o.kt)("td",{parentName:"tr",align:"left"},"89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"local"),(0,o.kt)("td",{parentName:"tr",align:"left"},"deploy")))),(0,o.kt)("p",null,"If you set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH_TOKEN_MINT=deploy"),", then the new collateral pool accounts will be created.\nnew token will be created."),(0,o.kt)("h3",{id:"using-pip"},"Using PIP"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("em",{parentName:"p"},"proxy-model.py")," repository from GitHub.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pip install git+https://github.com/neonlabsorg/proxy-model.py\n$ cd proxy-model.py\n")),(0,o.kt)("p",null,"Install packages specified in ",(0,o.kt)("em",{parentName:"p"},"requirements.txt")," using PIP. At the time of creating this guide, the list of packages in requirements.txt was as follows:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat requirements.txt\n  typing-extensions==3.7.4.2\n  ecdsa==0.16.0\n  pysha3==1.0.2\n  eth-keys==0.3.3\n  rlp==2.0.1\n  web3\n  solana==0.10.0\n")),(0,o.kt)("p",null,"Install the packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pip install -r requirements.txt\n")),(0,o.kt)("p",null,"Set the following variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export EVM_LOADER=CXRkrvuH4DikTHuC97ofmX1LMvaMeffmwDwNcoN2AJ4Z\nexport ETH_TOKEN_MINT=HPsV9Deocecw3GeZv1FkAPNCBRfuVyfw9MMwjwRe1xaU\nexport SOLANA_URL="http://localhost:8899"\nexport COLLATERAL_POOL_BASE=CXRkrvuH4DikTHuC97ofmX1LMvaMeffmwDwNcoN2AJ4Z\n')),(0,o.kt)("p",null,"Start proxy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ python3 -m proxy --hostname 0.0.0.0 --port 9090 --enable-web-server --plugins proxy.plugin.SolanaProxyPlugin\n")),(0,o.kt)("p",null,"After running this command, the proxy will contact the node at ",(0,o.kt)("inlineCode",{parentName:"p"},"SOLANA_URL"),"."))}d.isMDXComponent=!0}}]);