(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{393:function(t,e,a){"use strict";a.r(e);var s=a(18),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"host-a-git-style-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-a-git-style-repo"}},[t._v("#")]),t._v(" Host a Git-style repo")]),t._v(" "),a("p",[t._v('Have you ever said to yourself: "Man, my Git server isn\'t distributed enough" or "I wish I had an easy way to serve a static Git repository worldwide". Well, wish no more.')]),t._v(" "),a("p",[t._v("In this guide, we discuss how to serve a Git repository through the IPFS network. The end result will be a "),a("code",[t._v("git clone")]),t._v("able url served through IPFS!")]),t._v(" "),a("p",[t._v("To start, select a Git repository you want to host, and do a bare clone of it:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --bare git@myhost.io/myrepo\n")])])]),a("p",[t._v("For those who aren't super Git-savvy, a bare repository means that it doesn't have a working tree, and can be used as a server. They have a slightly different format than your normal Git repository.")]),t._v(" "),a("p",[t._v("Now, to get it ready to be cloned, you need to do the following:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myrepo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-server-info\n")])])]),a("p",[t._v("Optionally, you can unpack all of Git's objects:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cp objects/pack/*.pack .\ngit unpack-objects < ./*.pack\nrm ./*.pack\n")])])]),a("p",[t._v("Doing this breaks up Git's large packfile into all of its individual objects. This will allow IPFS to deduplicate objects if you add multiple versions of this Git repository.")]),t._v(" "),a("p",[t._v("Once you've done that, that repository is ready to be served. All that's left to do is to add it to IPFS:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ pwd\n/code/myrepo\n$ ipfs add -r .\n...\n...\n...\nadded QmX679gmfyaRkKMvPA4WGNWXj9PtpvKWGPgtXaF18etC95 .\n")])])]),a("p",[t._v("Now, try cloning it:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /tmp\n$ git clone http://localhost:8080/ipfs/QmX679gmfyaRkKMvPA4WGNWXj9PtpvKWGPgtXaF18etC95 myrepo\n")])])]),a("p",[t._v("Note: make sure to change out that hash for yours.")]),t._v(" "),a("p",[t._v("Now, you may be asking \"Well, what good is a Git repository that I can't change anything on?\" Here's one use case. Say you program in Go. For those who don't know, Go uses version control paths for its imports, i.e:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/whyrusleeping/mycoollibrary"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This is a really nice feature, and solves a lot of problems — but often times, it's possible to run into"),a("br"),t._v("\nthe issue where you're using someone's library, and they change the API, and it breaks your code."),a("br"),t._v("\nUsing what we've done above, you could clone the library, and add it into IPFS, so your import"),a("br"),t._v("\npaths will now look something like:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tmylib "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gateway.ipfs.io/ipfs/QmX679gmfyaRkKMvPA4WGNWXj9PtpvKWGPgtXaF18etC95"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("And you will be guaranteed to have the same code every time!")]),t._v(" "),a("p",[t._v("Note: Since Go doesn't allow the usage of localhost for import paths, we use the public HTTP gateways. This provides no security guarantees, as a man-in-the-middle attack could ship you bad code. You could use a domain name that redirects to the localhost instead to avoid the issue.")])])}),[],!1,null,null,null);e.default=o.exports}}]);