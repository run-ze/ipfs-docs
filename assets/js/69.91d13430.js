(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{407:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h2",{attrs:{id:"dropped-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dropped-connections"}},[e._v("#")]),e._v(" Dropped connections")]),e._v(" "),a("p",[e._v("If you are running an IPFS node prior to version "),a("code",[e._v("0.4.20")]),e._v(" you need to upgrade. These nodes will be unstable and cause performance issues for the network. Please "),a("a",{attrs:{href:"update-procedure"}},[e._v("update to IPFS 0.5")]),e._v(" as soon as possible!")]),e._v(" "),a("h2",{attrs:{id:"ipfs-libp2p-address-format-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipfs-libp2p-address-format-changes"}},[e._v("#")]),e._v(" IPFS/Libp2p address format changes")]),e._v(" "),a("p",[e._v("If you were using a multiaddr library (go, js, etc.) to name files because "),a("code",[e._v("/ipfs/QmSomePeerID")]),e._v(" looks like "),a("code",[e._v("/ipfs/QmSomeFile")]),e._v(", your tool may break if you upgrade this library. If you're manually parsing multiaddrs and are searching for the string "),a("code",[e._v("/ipfs/...")]),e._v(" , you'll need to search for "),a("code",[e._v("/p2p/...")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"curl-requests-failing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl-requests-failing"}},[e._v("#")]),e._v(" Curl requests failing")]),e._v(" "),a("p",[e._v("The gateway will redirect from "),a("code",[e._v("http://localhost:5001/ipfs/CID/...")]),e._v(" to "),a("code",[e._v("http://CID.ipfs.localhost:5001/...")]),e._v(" by default. Curl doesn't follow redirects by default. To avoid breaking cURL and other clients that don't support redirects, Go-IPFS will return the requested file along with the redirect. Browsers will follow the redirect and abort the download while cURL will ignore the redirect and finish the download.")]),e._v(" "),a("h2",{attrs:{id:"minimum-rsa-key-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-rsa-key-size"}},[e._v("#")]),e._v(" Minimum RSA key size")]),e._v(" "),a("p",[e._v("IPFS now enforces a minimum key size of 2048. IPFS generates 2048 bit RSA keys by default so this shouldn't be an issue for most people. However, users who explicitly chose a smaller key size will not be able to communicate with new nodes.")]),e._v(" "),a("h2",{attrs:{id:"unable-to-read-datastore-from-js-ipfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-read-datastore-from-js-ipfs"}},[e._v("#")]),e._v(" Unable to read datastore from JS-IPFS")]),e._v(" "),a("p",[e._v("JS-IPFS nodes will no longer be able to read Go-ipfs datastores. Avoid pointing two nodes at the same datastore. If your Go-IPFS node reads a JS-IPFS datastore it will upgrade it and no longer be compatible with JS-IPFS.")]),e._v(" "),a("h2",{attrs:{id:"using-ipfs-as-a-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-ipfs-as-a-library"}},[e._v("#")]),e._v(" Using IPFS as a library")]),e._v(" "),a("p",[e._v("You will need to upgrade to the new interfaces for IPFS to connect to your various APIs.")]),e._v(" "),a("h2",{attrs:{id:"ipfs-lite-not-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipfs-lite-not-running"}},[e._v("#")]),e._v(" IPFS-lite not running")]),e._v(" "),a("p",[e._v("IPFS-lite needs to be updated to the latest 0.5 features.")]),e._v(" "),a("h2",{attrs:{id:"quic-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quic-protocol"}},[e._v("#")]),e._v(" QUIC protocol")]),e._v(" "),a("p",[e._v("If you have enabled the QUIC experiment and are trying to connect to new nodes, it won’t work. This is the final breaking change before QUIC is stabilized and becomes the default.")])])}),[],!1,null,null,null);t.default=s.exports}}]);