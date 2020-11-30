(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{422:function(e,s,o){"use strict";o.r(s);var t=o(18),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"move-an-ipfs-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-an-ipfs-installation"}},[e._v("#")]),e._v(" Move an IPFS installation")]),e._v(" "),o("p",[e._v("This page walks through how to move your IPFS installation from one system to another. This process is cross-platform compatible and is especially useful for readers who are changing operating systems. The process is to grab the "),o("code",[e._v(".ipfs")]),e._v(" folder from the "),o("em",[e._v("home")]),e._v(" directory of the "),o("em",[e._v("donor")]),e._v(" system, and copy it over to "),o("em",[e._v("home")]),e._v(" directory on the receiving system.")]),e._v(" "),o("p",[e._v("This process is not a backup procedure; do not treat it as such. Many things can go wrong with this process, most of which relate to "),o("em",[e._v("peer IDs")]),e._v(". Since we are duplicating an "),o("code",[e._v(".ipfs")]),e._v(" installation folder, both IPFS peers have the same peer ID. This issue is ok as long as you delete the old "),o("em",[e._v("donor")]),e._v(" installation once the copy is complete. Never start two peers with the same peer IDs on different places, as they will misbehave.")]),e._v(" "),o("h2",{attrs:{id:"move-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-installation"}},[e._v("#")]),e._v(" Move installation")]),e._v(" "),o("p",[e._v("The easiest way to move your IPFS installation is to grab the "),o("code",[e._v(".ipfs")]),e._v(" folder, and move it to another destination.")]),e._v(" "),o("h3",{attrs:{id:"linux-and-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-and-macos"}},[e._v("#")]),e._v(" Linux and macOS")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Stop any IPFS daemons, services, or applications from running.")])]),e._v(" "),o("li",[o("p",[e._v("In a terminal, move to where your IPFS repository is stored, likely your "),o("em",[e._v("home")]),e._v(" folder:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Make a copy of the "),o("code",[e._v(".ipfs")]),e._v(" directory:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" --recursive --verbose .ipfs ipfs-backup\n\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.ipfs'")]),e._v(" -"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ipfs-backup'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.ipfs/datastore_spec'")]),e._v(" -"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ipfs-backup/data'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])]),e._v(" "),o("li",[o("p",[e._v("You now have a copy of your IPFS repository within the "),o("code",[e._v("ipfs-backup")]),e._v(" folder.")])])]),e._v(" "),o("h3",{attrs:{id:"windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),o("ol",[o("li",[e._v("Stop any IPFS daemons, services, or applications from running.")]),e._v(" "),o("li",[e._v("Open the file explorer and go to "),o("strong",[e._v("C:")]),e._v(" → "),o("strong",[e._v("Users")]),e._v(" → "),o("strong",[e._v("Your Username")]),e._v(".")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("View")]),e._v(" tab at the top of the file explorer window, and check the "),o("strong",[e._v("Hidden items")]),e._v(" checkbox.")]),e._v(" "),o("li",[e._v("Find the "),o("code",[e._v(".ipfs")]),e._v(" within your user's "),o("em",[e._v("home")]),e._v(" folder. This is usually "),o("code",[e._v("C:\\Users\\Your Username\\.ipfs")]),e._v(".")]),e._v(" "),o("li",[e._v("Copy this folder to somewhere convenient like the "),o("code",[e._v("Desktop")]),e._v(" and rename it to "),o("code",[e._v("ipfs-backup")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"restore-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#restore-installation"}},[e._v("#")]),e._v(" Restore installation")]),e._v(" "),o("p",[e._v("Once you have a backup of your IPFS repository in "),o("code",[e._v("ipfs-backup")]),e._v(", you can move it to the computer you want to restore to. Once there, you can restore your IPFS repository.")]),e._v(" "),o("h3",{attrs:{id:"linux-and-macos-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-and-macos-2"}},[e._v("#")]),e._v(" Linux and macOS")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Stop any IPFS daemons, services, or applications from running.")])]),e._v(" "),o("li",[o("p",[e._v("In a terminal, move to where your IPFS repository is stored, likely your "),o("em",[e._v("home")]),e._v(" folder:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Move your current IPFS repository to another folder. If something goes wrong you can restore your installation from here:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" .ipfs ipfs-old\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Move your backup IPFS repository to "),o("code",[e._v(".ipfs")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" ipfs-backup .ipfs\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Start an IPFS daemon:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("ipfs daemon\n\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Initializing daemon"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" go-ipfs version: "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),e._v(".0-dev-a22dc826c\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Repo version: "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Daemon is ready\n")])])])]),e._v(" "),o("li",[o("p",[e._v("If everything is working fine, you can delete your old IPFS repository:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf .ipfs-old\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"windows-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-2"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),o("ol",[o("li",[e._v("If restoring to the IPFS Desktop application, open the application at least once before attempting to restore anything.")]),e._v(" "),o("li",[e._v("Stop any IPFS daemons, services, or applications from running.")]),e._v(" "),o("li",[e._v("Open the file explorer and go to "),o("code",[e._v("C:\\Users\\Your Username")]),e._v(".")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("View")]),e._v(" tab at the top of the file explorer window, and check the "),o("strong",[e._v("Hidden items")]),e._v(" checkbox.")]),e._v(" "),o("li",[e._v("Find the "),o("code",[e._v(".ipfs")]),e._v(" within your user's "),o("em",[e._v("home")]),e._v(" folder. The full address is usually something like "),o("code",[e._v("C:\\Users\\Your Username\\.ipfs")]),e._v(".")]),e._v(" "),o("li",[e._v("Rename the "),o("code",[e._v(".ipfs")]),e._v(" folder to "),o("code",[e._v("ipfs-old")]),e._v(". We can restore from "),o("code",[e._v("ipfs-old")]),e._v(" if anything goes wrong.")]),e._v(" "),o("li",[e._v("Copy your "),o("code",[e._v("ipfs-backup")]),e._v(" IPFS repository into your user's "),o("em",[e._v("home")]),e._v(" folder and rename it to "),o("code",[e._v(".ipfs")]),e._v(".")]),e._v(" "),o("li",[e._v("Open the IPFS Desktop application or run "),o("code",[e._v("ipfs daemon")]),e._v(" with Powershell. Everything should start, and your IPFS repository should restore normally.")])]),e._v(" "),o("h2",{attrs:{id:"windows-subsystem-for-linux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-subsystem-for-linux"}},[e._v("#")]),e._v(" Windows Subsystem for Linux")]),e._v(" "),o("p",[e._v("If you have IPFS installed in the Windows Subsystem for Linux, you can move your IPFS repository from Linux into your Windows environment. This process overwrites the IPFS repository in Windows.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("On Windows, open the IPFS Desktop application or run an "),o("code",[e._v("ipfs daemon")]),e._v(". Do this at least once.")])]),e._v(" "),o("li",[o("p",[e._v("Stop any IPFS daemons, services, or applications from running in your Linux and Windows environments.")])]),e._v(" "),o("li",[o("p",[e._v("Copy your Linux IPFS repository to Windows. This process overwrites the IPFS repository in Windows:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" --recursive --verbose ~/.ipfs /mnt/c/Users/Your Username/\n")])])])]),e._v(" "),o("li",[o("p",[e._v("On Windows, open the IPFS Desktop application or run an "),o("code",[e._v("ipfs daemon")]),e._v(". Everything should open successfully.")])])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("Here are some common issues you might run into when moving your IPFS installation.")]),e._v(" "),o("h3",{attrs:{id:"linux-and-macos-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-and-macos-3"}},[e._v("#")]),e._v(" Linux and macOS")]),e._v(" "),o("h4",{attrs:{id:"ipfs-daemon-doesn-t-run-successfully"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipfs-daemon-doesn-t-run-successfully"}},[e._v("#")]),e._v(" IPFS daemon doesn't run successfully")]),e._v(" "),o("p",[e._v("If "),o("code",[e._v("ipfs daemon")]),e._v(" doesn't run successfully then you can restore your old IPFS repository, assuming you made a copy:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" .ipfs ipfs-backup-broken\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" .ipfs-old .ipfs\n")])])]),o("p",[e._v("Running "),o("code",[e._v("ipfs daemon")]),e._v(" now loads your old IPFS repository. Try repeating the backup and restore steps. Make sure to stop any IPFS services, daemons, or applications when backing up and restoring an IPFS repository.")]),e._v(" "),o("h3",{attrs:{id:"windows-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-3"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),o("h4",{attrs:{id:"ipfs-desktop-has-an-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipfs-desktop-has-an-error"}},[e._v("#")]),e._v(" IPFS Desktop has an error")]),e._v(" "),o("p",[e._v("Make sure to open the IPFS Desktop application at least once before attempting to move any IPFS repositories. The IPFS Desktop relies upon another directory called "),o("code",[e._v(".ipfs-desktop")]),e._v(". The migration sometimes fails if this folder does not exist.")]),e._v(" "),o("h4",{attrs:{id:"ipfs-desktop-won-t-open"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipfs-desktop-won-t-open"}},[e._v("#")]),e._v(" IPFS Desktop won't open")]),e._v(" "),o("p",[e._v("In your user's "),o("em",[e._v("home")]),e._v(" folder, rename "),o("code",[e._v(".ipfs")]),e._v(" and "),o("code",[e._v(".ipfs-desktop")]),e._v(" to "),o("code",[e._v("ipfs-broken")]),e._v(" and "),o("code",[e._v("ipfs-desktop-broken")]),e._v(" respectively. Open the IPFS Desktop application; this creates new "),o("code",[e._v(".ipfs")]),e._v(" and "),o("code",[e._v(".ipfs-desktop")]),e._v(" folders. Close the IPFS desktop application and replace "),o("code",[e._v(".ipfs")]),e._v(" with "),o("code",[e._v("ipfs-broken")]),e._v(". If the IPFS desktop application opens, then you now know that the original "),o("code",[e._v(".ipfs-desktop")]),e._v(" folder was the issue. If the IPFS desktop application doesn't open, then the original "),o("code",[e._v(".ipfs")]),e._v(" folder may be the issue. If both original folders are causing issues, you may have a corrupted database. If this is the case, post your issue on the "),o("a",{attrs:{href:"https://discuss.ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPFS forums"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);s.default=a.exports}}]);