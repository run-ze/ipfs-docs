(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{417:function(e,t,s){"use strict";s.r(t);var n=s(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshoot-file-transfers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot-file-transfers"}},[e._v("#")]),e._v(" Troubleshoot file transfers")]),e._v(" "),s("p",[e._v("This document is a guide to help troubleshoot transferring a file between two machines using ipfs.")]),e._v(" "),s("h2",{attrs:{id:"a-file-transfer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-file-transfer"}},[e._v("#")]),e._v(" A file transfer")]),e._v(" "),s("p",[e._v("To start, make sure that ipfs is running on both machines. To verify, run "),s("code",[e._v("ipfs id")]),e._v(" on each machine and check if the "),s("code",[e._v("Addresses")]),e._v(" field has anything in it. If it says "),s("code",[e._v("null")]),e._v(", then your node is not online, and you need to run "),s("code",[e._v("ipfs daemon")]),e._v(".")]),e._v(" "),s("p",[e._v("Now, let's call the node with the file you want to transfer node "),s("code",[e._v("A")]),e._v(" and the node you want to get the file to node "),s("code",[e._v("B")]),e._v(". On node "),s("code",[e._v("A")]),e._v(", add the file to IPFS using "),s("code",[e._v("ipfs add")]),e._v(". This will print out the multihash of the content you added. Now on node "),s("code",[e._v("B")]),e._v(" you can fetch the content using "),s("code",[e._v("ipfs get <hash>")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# On A")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ipfs "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" myfile.txt\nadded QmZJ1xT1T9KYkHhgRhbv8D7mYrbemaXwYUkg7CeHdrk1Ye myfile.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# On B")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ipfs get QmZJ1xT1T9KYkHhgRhbv8D7mYrbemaXwYUkg7CeHdrk1Ye\nSaving file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" to QmZJ1xT1T9KYkHhgRhbv8D7mYrbemaXwYUkg7CeHdrk1Ye\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" B / "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" B "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.00")]),e._v("% 1s\n")])])]),s("p",[e._v("If that worked and downloaded the file, then congratulations! You just used IPFS to move files across the internet! If the "),s("code",[e._v("ipfs get")]),e._v(" command is "),s("em",[e._v("hanging")]),e._v(", with no output, read onwards.")]),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v("So your IPFS file transfer appears not to be working. The primary reason this happens is because node "),s("code",[e._v("B")]),e._v(" cannot figure out how to connect to node "),s("code",[e._v("A")]),e._v(", or node "),s("code",[e._v("B")]),e._v(" doesn't even know it has to connect to node "),s("code",[e._v("A")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"checking-for-existing-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-for-existing-connections"}},[e._v("#")]),e._v(" Checking for existing connections")]),e._v(" "),s("p",[e._v("The first thing to do is to double-check that both nodes are in-fact running and online. To do this, run "),s("code",[e._v("ipfs id")]),e._v(" on each machine. If both nodes show some addresses like the example below, then your nodes are online:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ID"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"QmTNwsFkLAed15kQEC1ZJWPfoNbBQnMFojfJKQ9sZj1dk8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"PublicKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDZb6znj3LQZKP1+X81exf+vbnqNCMtHjZ5RKTCm7Fytnfe+AI1fhs9YbZdkgFkM1HLxmIOLQj2bMXPIGxUM+EnewN8tWurx4B3+lR/LWNwNYcCFL+jF2ltc6SE6BC8kMLEZd4zidOLPZ8lIRpd0x3qmsjhGefuRwrKeKlR4tQ3C76ziOms47uLdiVVkl5LyJ5+mn4rXOjNKt/oy2O4m1St7X7/yNt8qQgYsPfe/hCOywxCEIHEkqmil+vn7bu4RpAtsUzCcBDoLUIWuU3i6qfytD05hP8Clo+at+l//ctjMxylf3IQ5qyP+yfvazk+WHcsB0tWueEmiU5P2nfUUIR3AgMBAAE="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Addresses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ip4/127.0.0.1/tcp/4001/p2p/QmTNwsFkLAed15kQEC1ZJWPfoNbBQnMFojfJKQ9sZj1dk8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ip4/192.168.2.131/tcp/4001/p2p/QmTNwsFkLAed15kQEC1ZJWPfoNbBQnMFojfJKQ9sZj1dk8"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"AgentVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"go-ipfs/0.4.11-dev/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ProtocolVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ipfs/0.1.0"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Next, check to see if the nodes have a connection to each other. You can do this by running "),s("code",[e._v("ipfs swarm peers")]),e._v(" on one node and checking for the other nodes peer ID in the output. If the two nodes "),s("strong",[e._v("are connected")]),e._v(", and the "),s("code",[e._v("ipfs get")]),e._v(" command is still hanging, then something unexpected is going on. File an issue "),s("a",{attrs:{href:"https://github.com/ipfs/go-ipfs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("on GitHub"),s("OutboundLink")],1),e._v(" if this is happening.")]),e._v(" "),s("p",[e._v("If they are not connected, follow these steps to figure out what's going on.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#troubleshoot-file-transfers"}},[e._v("Troubleshoot file transfers")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#a-file-transfer"}},[e._v("A file transfer")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#checking-for-existing-connections"}},[e._v("Checking for existing connections")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#check-providers"}},[e._v("Check providers")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#check-addresses"}},[e._v("Check addresses")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#manually-connect-the-nodes"}},[e._v("Manually connect the nodes")])])])])])])]),e._v(" "),s("h3",{attrs:{id:"check-providers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-providers"}},[e._v("#")]),e._v(" Check providers")]),e._v(" "),s("p",[e._v("When requesting content on IPFS, nodes search the DHT for "),s("em",[e._v("provider records")]),e._v(" to see who has what content. Let's manually do that on node "),s("code",[e._v("B")]),e._v(" to make sure that node "),s("code",[e._v("B")]),e._v(" can determine that node "),s("code",[e._v("A")]),e._v(" has the data. Run "),s("code",[e._v("ipfs dht findprovs <hash>")]),e._v(". We expect to see the peer ID of node "),s("code",[e._v("A")]),e._v(" printed out. If this command returns nothing (or returns IDs that are not node "),s("code",[e._v("A")]),e._v("), then no record of "),s("code",[e._v("A")]),e._v(" having the data exists on the network. This situation can happen if the data is added while node "),s("code",[e._v("A")]),e._v(" does not have a daemon running. If this happens, you can run "),s("code",[e._v("ipfs dht provide <hash>")]),e._v(" on node "),s("code",[e._v("A")]),e._v(" to announce to the network that you have that hash. Then, restart the "),s("code",[e._v("ipfs get")]),e._v(" command, node "),s("code",[e._v("B")]),e._v(" should now be able to tell that node "),s("code",[e._v("A")]),e._v(" has the content it wants. If node "),s("code",[e._v("A")]),e._v("'s peer ID showed up in the initial "),s("code",[e._v("findprovs")]),e._v(" call, or manually providing the hash didn't resolve the problem, then it's likely that node "),s("code",[e._v("B")]),e._v(" is unable to make a connection to node "),s("code",[e._v("A")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"check-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-addresses"}},[e._v("#")]),e._v(" Check addresses")]),e._v(" "),s("p",[e._v("In the case where node "),s("code",[e._v("B")]),e._v(" cannot form a connection to node "),s("code",[e._v("A")]),e._v(", despite knowing that it needs to, the likely culprit is a bad network address translation (NAT). When node "),s("code",[e._v("B")]),e._v(" learns that it needs to connect to node "),s("code",[e._v("A")]),e._v(", it checks the DHT for addresses for node "),s("code",[e._v("A")]),e._v(", and then starts trying to connect to them. We can check those addresses by running "),s("code",[e._v("ipfs dht findpeer <node A peerID>")]),e._v(" on node "),s("code",[e._v("B")]),e._v(". This command should return a list of addresses for node "),s("code",[e._v("A")]),e._v(". If it doesn't return any addresses, then you should try running the manual, providing command from the previous steps. Example output of addresses might look something like this:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("/ip4/127.0.0.1/tcp/4001\n/ip4/192.168.2.133/tcp/4001\n/ip4/88.157.217.196/tcp/63674\n")])])]),s("p",[e._v("In this case, we can see a localhost "),s("code",[e._v("127.0.0.1")]),e._v(" address, a LAN address "),s("code",[e._v("192.168._._ and another address. If this third address matches your external IP address, then the network knows a valid external address for your node. At this point, it's safe to assume that your node has a difficult to traverse NAT situation. If this is the case, you can try to enable UPnP or NAT-PMP on the router of node")]),e._v("A"),s("code",[e._v("and retry the process. Otherwise, you can try manually connecting node")]),e._v("A"),s("code",[e._v("to node")]),e._v("B`.")]),e._v(" "),s("h3",{attrs:{id:"manually-connect-the-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-connect-the-nodes"}},[e._v("#")]),e._v(" Manually connect the nodes")]),e._v(" "),s("p",[e._v("On node "),s("code",[e._v("B")]),e._v(" run "),s("code",[e._v("ipfs id")]),e._v(" and take one of the multiaddrs that contains its public IP address, and then on node "),s("code",[e._v("A")]),e._v(" run "),s("code",[e._v("ipfs swarm connect <multiaddr>")]),e._v(". You can also try using a relayed connection. For more information "),s("RouterLink",{attrs:{to:"/how-to/experimental-features.html#circuit-relay"}},[e._v("read this doc")]),e._v(".")],1),e._v(" "),s("p",[e._v("If this manual step worked, then you likely have an issue with NAT traversal, and IPFS cannot figure out how to make it through.")])])}),[],!1,null,null,null);t.default=o.exports}}]);