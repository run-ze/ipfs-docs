(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{420:function(e,t,s){"use strict";s.r(t);var a=s(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pin-files-using-ipfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pin-files-using-ipfs"}},[e._v("#")]),e._v(" Pin files using IPFS")]),e._v(" "),s("p",[e._v('Pinning is a very important concept in IPFS. IPFS semantics try to make it feel like every single object is local — there is no "retrieve this file for me from a remote server", just '),s("code",[e._v("ipfs cat")]),e._v(" or "),s("code",[e._v("ipfs get")]),e._v(", which act the same way no matter where the actual object is located. While this is nice, sometimes you want to be able to control what you keep around. Pinning is the mechanism that allows you to tell IPFS to always keep a given object local. IPFS has a fairly aggressive caching mechanism that will keep an object local for a short time after you perform any IPFS operation on it, but these objects may get garbage-collected fairly regularly. To prevent that garbage collection, simply pin the hash you care about. Objects added through "),s("code",[e._v("ipfs add")]),e._v(" are pinned recursively by default.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('echo "ipfs rocks" > foo\nipfs add foo\nipfs pin ls --type=all\nipfs pin rm <foo hash>\nipfs pin rm -r <foo hash>\nipfs pin ls --type=all\n')])])]),s("h2",{attrs:{id:"three-kinds-of-pins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-kinds-of-pins"}},[e._v("#")]),e._v(" Three kinds of pins")]),e._v(" "),s("p",[e._v("As you may have noticed, the first "),s("code",[e._v("ipfs pin rm")]),e._v(' command didn\'t work — it should have warned you that the given hash was "pinned recursively". There are three types of pins in the IPFS world:')]),e._v(" "),s("ul",[s("li",[e._v("Direct pins, which pin just a single block, and no others in relation to it")]),e._v(" "),s("li",[e._v("Recursive pins, which pin a given block and all of its children")]),e._v(" "),s("li",[e._v("Indirect pins, which are the result of a given block's parent being pinned recursively")])]),e._v(" "),s("p",[e._v("A pinned object cannot be garbage-collected — try this for proof:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("ipfs "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" foo\nipfs repo gc\nipfs "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("foo hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("But if "),s("code",[e._v("foo")]),e._v(" were to somehow become unpinned ...")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("ipfs pin "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -r "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("foo hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nipfs repo gc\nipfs "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("foo hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);