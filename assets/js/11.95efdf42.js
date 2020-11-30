(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(t,e,s){t.exports=s.p+"assets/img/companion-permissions.58520b79.png"},381:function(t,e,s){t.exports=s.p+"assets/img/companion-permissions-bulk.32c50809.png"},457:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-window-ipfs-in-ipfs-companion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-window-ipfs-in-ipfs-companion"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("window.ipfs")]),t._v(" in IPFS Companion")]),t._v(" "),a("p",[t._v('Learn about exposing IPFS API in IPFS Companion via "window.ipfs".')]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("h2",{attrs:{id:"window-ipfs-is-currently-disabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-ipfs-is-currently-disabled"}},[t._v("#")]),t._v(" "),a("code",[t._v("window.ipfs")]),t._v(" is currently disabled")]),t._v(" "),a("p",[t._v("IPFS Companion 2.11 stopped injecting "),a("code",[t._v("window.ipfs")]),t._v(". It will be restored after the "),a("a",{attrs:{href:"https://github.com/ipfs-shipyard/ipfs-companion/issues/843",target:"_blank",rel:"noopener noreferrer"}},[t._v("move to JS API with async await and async iterables"),a("OutboundLink")],1),t._v(", with a likely ETA of Q3 2020. This page is provided for reference only.")])]),t._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),a("p",[t._v("IPFS Companion exposes a subset of IPFS APIs as "),a("code",[t._v("window.ipfs")]),t._v(" on every webpage. This means websites can detect that "),a("code",[t._v("window.ipfs")]),t._v(" already exists and use it instead of spawning their own "),a("code",[t._v("js-ipfs")]),t._v(" node, which saves resources, battery, etc.")]),t._v(" "),a("p",[t._v("For more context, see:")]),t._v(" "),a("ul",[a("li",[t._v("First iteration: "),a("a",{attrs:{href:"https://github.com/ipfs-shipyard/ipfs-companion/issues/330",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.ipfs v1"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Second iteration (currently under development): "),a("a",{attrs:{href:"https://github.com/ipfs-shipyard/ipfs-companion/issues/589",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.ipfs v2"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"creating-applications-using-window-ipfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-applications-using-window-ipfs"}},[t._v("#")]),t._v(" Creating applications using "),a("code",[t._v("window.ipfs")])]),t._v(" "),a("p",[t._v("If a user has installed IPFS Companion, "),a("code",[t._v("window.ipfs")]),t._v(" will be available as soon as the first script runs on your web page, so you'll be able to detect it using a simple "),a("code",[t._v("if")]),t._v(" statement:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ipfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'version'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fallback")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To add and get content, you could update the above example to do something like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ipfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=^.^='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ipfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// =^.^=")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ERR_IPFS_PROXY_ACCESS_DENIED'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Proxy is present but user denied access.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (fallback to js-ipfs or js-ipfs-http-client goes here)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Something else went wrong (error handling)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No IPFS Proxy")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (fallback to js-ipfs or js-ipfs-http-client goes here)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Use "),a("a",{attrs:{href:"https://github.com/ipfs-shipyard/ipfs-provider",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipfs-provider"),a("OutboundLink")],1),t._v(" to ensure your app follows any future changes of this interface. It reduces amount of code needed to implement a robust fallback to HTTP API or embedded js-ipfs when "),a("code",[t._v("window.ipfs")]),t._v(" is not available.")])]),t._v(" "),a("h3",{attrs:{id:"error-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-codes"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),a("p",[t._v("Errors returned by IPFS proxy can be identified by the value of the "),a("code",[t._v("code")]),t._v(" attribute.")]),t._v(" "),a("p",[a("code",[t._v("ERR_IPFS_PROXY_ACCESS_DENIED")]),t._v(" is thrown when the current scope has no access rights to requested commands.")]),t._v(" "),a("p",[t._v("Optional "),a("code",[t._v("scope")]),t._v(" and "),a("code",[t._v("permissions")]),t._v(" attributes provide detailed information:")]),t._v(" "),a("ul",[a("li",[t._v("If access was denied for a specific command, then the "),a("code",[t._v("permissions")]),t._v(" list is present and includes names of blocked commands")]),t._v(" "),a("li",[t._v("If the entire IPFS proxy was disabled by the user, then the "),a("code",[t._v("permissions")]),t._v(" list is missing entirely")])]),t._v(" "),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("h3",{attrs:{id:"what-is-a-window-ipfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-window-ipfs"}},[t._v("#")]),t._v(" What is a "),a("code",[t._v("window.ipfs")]),t._v("?")]),t._v(" "),a("p",[t._v("It is an IPFS proxy endpoint that enables you to obtain an IPFS API instance. Depending how IPFS Companion is configured, you may be talking directly to a "),a("code",[t._v("js-ipfs")]),t._v(" node running in Companion, a "),a("code",[t._v("go-ipfs")]),t._v(" daemon over "),a("code",[t._v("js-ipfs-http-client")]),t._v(", or a "),a("code",[t._v("js-ipfs")]),t._v(" daemon over "),a("code",[t._v("js-ipfs-http-client")]),t._v(" ... and potentially others in the future. Note that object returned by "),a("code",[t._v("window.ipfs.enable")]),t._v(" is "),a("em",[t._v("not")]),t._v(" an instance of "),a("code",[t._v("js-ipfs")]),t._v(" or "),a("code",[t._v("js-ipfs-http-client")]),t._v(", but is a proxy to one of them, so don't expect to be able to detect either of them or be able to use any undocumented or instance-specific functions.")]),t._v(" "),a("p",[t._v("For information on available functions, see the "),a("a",{attrs:{href:"https://github.com/ipfs/js-ipfs",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-ipfs"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/ipfs/js-ipfs-http-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-ipfs-http-client"),a("OutboundLink")],1),t._v(" docs for available functions. If you find that some new functions are missing, the proxy might be out of date. Please check the "),a("a",{attrs:{href:"https://github.com/tableflip/ipfs-postmsg-proxy#current-status",target:"_blank",rel:"noopener noreferrer"}},[t._v("current status"),a("OutboundLink")],1),t._v(" and submit a PR.")]),t._v(" "),a("h3",{attrs:{id:"how-do-i-fall-back-if-window-ipfs-is-not-available"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-fall-back-if-window-ipfs-is-not-available"}},[t._v("#")]),t._v(" How do I fall back if "),a("code",[t._v("window.ipfs")]),t._v(" is not available?")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"https://github.com/ipfs-shipyard/ipfs-companion/blob/master/examples/window.ipfs-fallback.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("example code"),a("OutboundLink")],1),t._v(" (and "),a("a",{attrs:{href:"https://ipfs-shipyard.github.io/ipfs-companion/examples/window.ipfs-fallback.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("live demo"),a("OutboundLink")],1),t._v(") for getting an IPFS instance with a fallback.")]),t._v(" "),a("p",[a("strong",[t._v("Tip:")]),t._v(" Use the "),a("a",{attrs:{href:"https://www.npmjs.com/package/window.ipfs-fallback",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.ipfs-fallback"),a("OutboundLink")],1),t._v(" library, which takes care of the fallback ceremony. It will ensure your app follows API changes and does not break in the future.")]),t._v(" "),a("h3",{attrs:{id:"what-about-ipfs-node-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-about-ipfs-node-configuration"}},[t._v("#")]),t._v(" What about IPFS node configuration?")]),t._v(" "),a("p",[t._v("Right now, access to the "),a("code",[t._v("config")]),t._v(" command is blocked, and you can't make any assumptions about how the node is configured. For example, the user may not have enabled experimental features like PubSub.")]),t._v(" "),a("p",[t._v("Spawn a dedicated js-ipfs instance if you need non-standard configuration or any experimental features.")]),t._v(" "),a("h3",{attrs:{id:"is-there-a-permission-control-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-there-a-permission-control-acl"}},[t._v("#")]),t._v(" Is there a permission control (ACL)?")]),t._v(" "),a("p",[t._v("Yes. IPFS Companion users are able to selectively control access to proxied commands, so calls may reject (or callback) with "),a("a",{attrs:{href:"#error-codes"}},[t._v("an error")]),t._v(" if a user decides to deny access. The first time you call a proxied function, the user will be prompted to allow or deny the call, and the decision will be remembered for subsequent calls. Here's what it looks like:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(380),alt:"single permission dialog in Firefox",width:"740",height:"463",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"do-i-need-to-confirm-every-api-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-confirm-every-api-call"}},[t._v("#")]),t._v(" Do I need to confirm every API call?")]),t._v(" "),a("p",[t._v("Command access needs to be confirmed only once "),a("a",{attrs:{href:"#how-are-permissions-scoped"}},[t._v("per scope")]),t._v(". If you provide a list of commands when requesting an API instance via "),a("code",[t._v("window.ipfs.enable({commands})")]),t._v(", then a single permission dialog will be displayed to the user:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(381),alt:"bulk permission dialog in Firefox",width:"740",height:"460",loading:"lazy"}})]),t._v(" "),a("p",[t._v("For everything else, only the first call requires a decision from the user. You will be able to call previously whitelisted IPFS commands and users will "),a("em",[t._v("not")]),t._v(" be prompted to allow/deny access the second time.")]),t._v(" "),a("p",[t._v("Note that users can modify their permission decisions after the fact, so you should not expect to always be allowed to call a command if it was successfully called previously.")]),t._v(" "),a("h3",{attrs:{id:"can-i-disable-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-disable-this"}},[t._v("#")]),t._v(" Can I disable this?")]),t._v(" "),a("p",[t._v("Users can permanently deny access to all IPFS commands by disabling the "),a("code",[t._v("window.ipfs")]),t._v(" experiment IPFS Companion's preferences.")]),t._v(" "),a("h3",{attrs:{id:"how-are-permissions-scoped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-permissions-scoped"}},[t._v("#")]),t._v(" How are permissions scoped?")]),t._v(" "),a("p",[t._v("Permissions are scoped to the "),a("strong",[t._v("origin and path")]),t._v(" (and sub-paths) of the file from which the permission was requested.")]),t._v(" "),a("p",[t._v("Scoped permissions in "),a("code",[t._v("window.ipfs")]),t._v(" work similarly to how they work for "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("service worker registrations"),a("OutboundLink")],1),t._v(", except that the user cannot control the scope, and it is set to the origin and path from which the permission was requested.")]),t._v(" "),a("p",[t._v("Scope-based permissions allow applications running on an IPFS gateway to be granted different permissions. Consider the following two websites running on the ipfs.io gateway:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ipfs.io/ipfs/QmQxeMcbqW9npq5h5kyE2iPECR9jxJF4j5x4bSRQ2phLY4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QmQxeMcbqW9npq5h5kyE2iPECR9jxJF4j5x4bSRQ2phLY4"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ipfs.io/ipfs/QmTegrragyzfFq6DSuUaPYoKzm4eRBj2tgQaDHC72dLLaV/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QmTegrragyzfFq6DSuUaPYoKzm4eRBj2tgQaDHC72dLLaV"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("With "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("same-origin policy"),a("OutboundLink")],1),t._v(", these two applications would be granted the same permissions. With scoped permissions, these applications will be given a different set of permissions. For example:")]),t._v(" "),a("ul",[a("li",[t._v("Allow "),a("code",[t._v("files.add")]),t._v(" to "),a("code",[t._v("https://domain.com/")]),t._v(" "),a("ul",[a("li",[t._v("...will allow "),a("code",[t._v("files.add")]),t._v(" to:\n"),a("ul",[a("li",[a("code",[t._v("https://domain.com/file")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/file2.html")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/sub/paths")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/sub/paths/files")])]),t._v(" "),a("li",[t._v("etc.")])])])])]),t._v(" "),a("li",[t._v("Allow "),a("code",[t._v("files.add")]),t._v(" to "),a("code",[t._v("https://domain.com/feature")]),t._v(" "),a("ul",[a("li",[t._v("...will allow "),a("code",[t._v("files.add")]),t._v(" to:\n"),a("ul",[a("li",[a("code",[t._v("https://domain.com/feature/file")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/feature/file2.html")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/feature/sub/paths")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/feature/sub/paths/files")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/featuresearch/sub/paths/files")]),t._v(" (note substring)")]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/features.html")]),t._v(" (note substring)")]),t._v(" "),a("li",[t._v("etc.")])])]),t._v(" "),a("li",[t._v("...will cause additional prompt for "),a("code",[t._v("files.add")]),t._v(" to:\n"),a("ul",[a("li",[a("code",[t._v("https://domain.com/")])]),t._v(" "),a("li",[a("code",[t._v("https://domain.com/files")])]),t._v(" "),a("li",[t._v("etc.")])])])])])]),t._v(" "),a("h3",{attrs:{id:"are-mutable-file-system-mfs-files-sandboxed-to-a-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#are-mutable-file-system-mfs-files-sandboxed-to-a-directory"}},[t._v("#")]),t._v(" Are Mutable File System (MFS) files sandboxed to a directory?")]),t._v(" "),a("p",[t._v("Yes. To avoid conflicts, each app gets its own MFS directory where it can store files. When using MFS commands ("),a("a",{attrs:{href:"https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#mutable-file-system",target:"_blank",rel:"noopener noreferrer"}},[t._v("more info"),a("OutboundLink")],1),t._v("), this directory will be automatically added to paths you pass. Your app's MFS directory is based on the "),a("strong",[t._v("origin and path")]),t._v(" where your application is running. For example:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("files.write")]),t._v(" to "),a("code",[t._v("/myfile.txt")]),t._v(" on "),a("code",[t._v("https://domain.com/")]),t._v(" "),a("ul",[a("li",[t._v("writes to "),a("code",[t._v("/dapps/https/domain.com/myfile.txt")])])])]),t._v(" "),a("li",[a("code",[t._v("files.write")]),t._v(" to "),a("code",[t._v("/path/to/myfile.txt")]),t._v(" on "),a("code",[t._v("https://domain.com/feature")]),t._v(" "),a("ul",[a("li",[t._v("writes to "),a("code",[t._v("/dapps/https/domain.com/feature/path/to/myfile.txt")])])])]),t._v(" "),a("li",[a("code",[t._v("files.read")]),t._v(" from "),a("code",[t._v("/feature/path/to/myfile.txt")]),t._v(" on "),a("code",[t._v("https://domain.com/")]),t._v(" "),a("ul",[a("li",[t._v("reads from "),a("code",[t._v("/dapps/https/domain.com/feature/path/to/myfile.txt")])])])]),t._v(" "),a("li",[a("code",[t._v("files.stat")]),t._v(" to "),a("code",[t._v("/")]),t._v(" on "),a("code",[t._v("https://domain.com/feature")]),t._v(" "),a("ul",[a("li",[t._v("stats "),a("code",[t._v("/dapps/https/domain.com/feature")])])])]),t._v(" "),a("li",[a("code",[t._v("files.read")]),t._v(" from "),a("code",[t._v("/../myfile.txt")]),t._v(" on "),a("code",[t._v("https://domain.com/feature")]),t._v(" "),a("ul",[a("li",[t._v("reads from "),a("code",[t._v("/dapps/https/domain.com/feature/myfile.txt")]),t._v(" (no traverse above your app's root)")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);