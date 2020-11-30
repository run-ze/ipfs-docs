(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{443:function(e,t,o){"use strict";o.r(t);var a=o(18),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"distributed-hash-tables-dhts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distributed-hash-tables-dhts"}},[e._v("#")]),e._v(" Distributed Hash Tables (DHTs)")]),e._v(" "),o("p",[e._v("The DHT is how IPFS nodes keep track of who has what data. A regular hash table is a key-value store where the "),o("em",[e._v("keys")]),e._v(" are "),o("a",{attrs:{href:"/concepts/hashing"}},[e._v("hashes")]),e._v(". In the case of IPFS, the "),o("em",[e._v("values")]),e._v(" can be any block of data, and the "),o("em",[e._v("keys")]),e._v(" are the CIDs of those blocks. IPFS uses hash tables to store who has what data.")]),e._v(" "),o("p",[e._v("In a regular key-value store, all the data within the table is stored in one place. Databases like SQL work this way; all the data you need can be found in a single place. However, the "),o("em",[e._v("distributed")]),e._v(" part of "),o("em",[e._v("DHT")]),e._v(" means that the entire table is spread across different locations. Each computer running IPFS, also known as a "),o("em",[e._v("node")]),e._v(", holds a piece of the larger table. Nodes do not store information on what every other node is storing since that wouldn't scale very well.")]),e._v(" "),o("p",[e._v("So IPFS uses lots of small tables instead of one big table, but that brings another set of problems. If the data is spread across lots of different tables, how does IPFS know where the data is? To solve this, IPFS uses a piece of software called "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kademlia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kademlia"),o("OutboundLink")],1),e._v(" to learn which nodes have what data. This is called "),o("em",[e._v("providing")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"providing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#providing"}},[e._v("#")]),e._v(" Providing")]),e._v(" "),o("p",[e._v("IPFS nodes can "),o("em",[e._v("provide")]),e._v(" blocks of data. This doesn't necessarily mean that the node actually "),o("em",[e._v("has")]),e._v(" the data, but it knows where to get it. When trying to provide a block, your node will look for peers with PeerIDs most "),o("em",[e._v("similar")]),e._v(" to the CID of the block. These peers will not store the data for you, but they will store a record saying that you can provide the block. How similar a PeerID is to a CID is defined as the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Exclusive_or",target:"_blank",rel:"noopener noreferrer"}},[e._v("exclusive-or (XOR) distance"),o("OutboundLink")],1),e._v(" between the bytes that make up the PeerID, and the bytes that make up the CID.")]),e._v(" "),o("p",[e._v("Using the table below, we can see that "),o("code",[e._v("QmAlex")]),e._v(" and "),o("code",[e._v("QmBrian")]),e._v(" can provide "),o("code",[e._v("QmVYD...")]),e._v(". "),o("code",[e._v("QmAlex")]),e._v(" and "),o("code",[e._v("QmCharlotte")]),e._v(" can provide "),o("code",[e._v("QmZij...")]),e._v(". Only "),o("code",[e._v("QmCharlotte")]),e._v(" and provide "),o("code",[e._v("QmXPg...")]),e._v(".")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Key")]),e._v(" "),o("th",[e._v("Value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("QmVYDW8wjWPe851DS3gGCUyPymNk4fnPaKmQSg9H8dSSa2")])]),e._v(" "),o("td",[o("code",[e._v("QmAlex")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("QmVYDW8wjWPe851DS3gGCUyPymNk4fnPaKmQSg9H8dSSa2")])]),e._v(" "),o("td",[o("code",[e._v("QmBrian")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("QmZijpFzuUFF4LwBr9PxsSTdVvfF6E6Fueiz5wLTA6MTrM")])]),e._v(" "),o("td",[o("code",[e._v("QmCharlotte")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("QmZijpFzuUFF4LwBr9PxsSTdVvfF6E6Fueiz5wLTA6MTrM")])]),e._v(" "),o("td",[o("code",[e._v("QmAlex")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("QmXPgotVGXrng5UETiF9qTUEaJanjRWPwcwwNQCKANJpCM")])]),e._v(" "),o("td",[o("code",[e._v("QmCharlotte")])])])])]),e._v(" "),o("p",[e._v("To see this in action, you can run "),o("code",[e._v("ipfs dht findprovs <CID>")]),e._v(" to find the providers of a particular CID:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("ipfs dht findprovs QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG\n\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" QmNgDsms4K3jomZpr1yuC8JYWstvzFLCjEGY7aoHrnxX7r\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" QmQzustKyCbyy3BbpetySYk88D8mtS9No8xEJP7B5tV324\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" QmR6oSKYSfgsqa1wjfJ8hUPYAS8wjuLxW1Fxu911v3ajwc\n")])])]),o("h2",{attrs:{id:"managing-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#managing-data"}},[e._v("#")]),e._v(" Managing data")]),e._v(" "),o("p",[e._v("When you add a file to IPFS, it gets stored as blocks of data. Each of these blocks has a CID, which is the "),o("a",{attrs:{href:"/concepts/content-addressing"}},[e._v("content-address")]),e._v(" of that block of data. This means that every unique block has a unique CID. IPFS nodes use the DHT to advertise which blocks they "),o("em",[e._v("have")]),e._v(", which blocks they "),o("em",[e._v("want")]),e._v(", and which blocks they "),o("em",[e._v("don't want")]),e._v(".")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Have")]),e._v(" "),o("th",[e._v("Want")]),e._v(" "),o("th",[e._v("Don't Want")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("I can provide this block.")]),e._v(" "),o("td",[e._v("I am looking for this block.")]),e._v(" "),o("td",[e._v("I am not looking for this block. If I am provided this block, I will just discard it.")])])])]),e._v(" "),o("h2",{attrs:{id:"re-providing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#re-providing"}},[e._v("#")]),e._v(" Re-providing")]),e._v(" "),o("p",[e._v("If a node announces to the network that it can provide a particular CID, the state of that information is now outside the control of the node. If the node were to drop off the network, there's no way to announce that the CID is no longer available. Take this scenario:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("Node A")]),e._v(" announces to the network that it can provide "),o("code",[e._v("CID X")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Node B")]),e._v(" makes a record that "),o("code",[e._v("Node A")]),e._v(" can provide "),o("code",[e._v("CID X")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Node A")]),e._v(" loses its internet connection and can no longer provide anything.")]),e._v(" "),o("li",[o("code",[e._v("Node B")]),e._v(" isn't aware that "),o("code",[e._v("Node A")]),e._v(" can no longer provide "),o("code",[e._v("CID X")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Node C")]),e._v(" asks for "),o("code",[e._v("CID X")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Node B")]),e._v(" sends "),o("code",[e._v("Node C")]),e._v(" to "),o("code",[e._v("Node A")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Node C")]),e._v(" waits for "),o("code",[e._v("Node A")]),e._v(" to respond until the heat-death of the universe happens. Or until the timeout is reached, whichever comes first.")])]),e._v(" "),o("p",[e._v("To avoid these sorts of problems, nodes must regularly re-announce which CIDs they can provide. This happens at least every 12 hours. If "),o("code",[e._v("Node B")]),e._v(" doesn't get a re-announcement from "),o("code",[e._v("Node A")]),e._v(" that they can still provide "),o("code",[e._v("CID X")]),e._v(" within a 12 hour period, "),o("code",[e._v("Node B")]),e._v(" will remove "),o("code",[e._v("Node A")]),e._v(" from the provider list.")]),e._v(" "),o("h2",{attrs:{id:"dual-dht"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dual-dht"}},[e._v("#")]),e._v(" Dual DHT")]),e._v(" "),o("p",[e._v("IPFS nodes participate in two DHTs: one for the public internet WAN, and one for their local network LAN.")]),e._v(" "),o("ol",[o("li",[e._v("When connected to the public internet, IPFS will use both DHTs for finding peers, content, and IPNS records. Nodes only publish provider and IPNS records to the WAN DHT to avoid flooding the local network.")]),e._v(" "),o("li",[e._v("When not connected to the public internet, nodes publish provider and IPNS records to the LAN DHT.")])]),e._v(" "),o("p",[e._v("Nodes will participate in the DHT from their LAN and will store some of that generated metadata, but only expect the DHT to be used when the LAN is disconnected. Nodes will only store part of the public DHT when they are externally reachable, and not behind a Network Address Translation (NAT). A feature called "),o("a",{attrs:{href:"/recent-releases/go-ipfs-0-5/features#autonat"}},[e._v("AutoNAT was introduced in Go-IPFS 0.5")]),e._v(" to detect whether or not a node is "),o("em",[e._v("reachable")]),e._v(" from the public internet.")]),e._v(" "),o("p",[e._v("The WAN DHT includes all peers with at least one public IP address. IPFS will only consider an IPv6 address public if it is in the "),o("a",{attrs:{href:"https://www.iana.org/assignments/ipv6-address-space/ipv6-address-space.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("public internet range "),o("code",[e._v("2000::/3")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If you are interested in how DHTs fit into the overall lifecycle of data in IPFS, check out this video from IPFS Camp 2019! "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=fLUq0RkiTBA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core Course: The Lifecycle of Data in Dweb"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);