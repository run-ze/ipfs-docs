(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{451:function(e,t,s){"use strict";s.r(t);var o=s(18),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"contribution-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contribution-tutorial"}},[e._v("#")]),e._v(" Contribution tutorial")]),e._v(" "),s("p",[e._v("While the "),s("RouterLink",{attrs:{to:"/community/contribute/grammar-formatting-and-style/"}},[e._v("grammar, formatting, and style")]),e._v(" and the "),s("RouterLink",{attrs:{to:"/community/contribute/writing-guide/"}},[e._v("writing guide")]),e._v(" can both help you write excellent content for the IPFS Docs project, they don't delve into how you can actually submit you content changes. This guide will walk you through finding an issue, fixing it, and then submitting your fix to the "),s("code",[e._v("ipfs/ipfs-docs")]),e._v(" project.")],1),e._v(" "),s("p",[e._v("There are plenty of small-sized issues around IPFS documentation that make for easy, helpful contributions to the IPFS project. Here, we'll walk through:")]),e._v(" "),s("ol",[s("li",[e._v("Finding an issue.")]),e._v(" "),s("li",[e._v("Discussing the issue.")]),e._v(" "),s("li",[e._v("Creating a fix.")]),e._v(" "),s("li",[e._v("Submitting a "),s("em",[e._v("pull request")]),e._v(".")]),e._v(" "),s("li",[e._v("Waiting for a review.")]),e._v(" "),s("li",[e._v("Merging your fix.")])]),e._v(" "),s("p",[e._v("This may look like a lot of steps for a small issue fix, but they're all necessary to make sure we keep the docs in this project up to standard. Plus, you're not on your own — half these steps can be completed by official IPFS docs staff!")]),e._v(" "),s("h2",{attrs:{id:"finding-an-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finding-an-issue"}},[e._v("#")]),e._v(" Finding an issue")]),e._v(" "),s("p",[e._v("The IPFS project is hosted in GitHub. There's a bunch of reasons for this, one of them being that GitHub comes with an issue tracker, which enables the core IPFS team to field problems from the community. All community issues can read the docs, find issues, and raise issues in the docs repository (called a "),s("em",[e._v("repo")]),e._v(" for short).")]),e._v(" "),s("p",[e._v("All issues involving the IPFS docs themselves can be found in the "),s("a",{attrs:{href:"https://github.com/ipfs/ipfs-docs/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("ipfs/ipfs-docs")]),e._v(" repo"),s("OutboundLink")],1),e._v(" under the "),s("a",{attrs:{href:"https://github.com/ipfs/ipfs-docs/issues/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("Issues")]),e._v(" tab"),s("OutboundLink")],1),e._v(". Here you can see all the issues that are currently open. We try to tag each issue with relevant descriptive tags. Tags like "),s("em",[e._v("difficulty")]),e._v(" and "),s("em",[e._v("size")]),e._v(" can give a sense of the amount of effort a task will take to complete.")]),e._v(" "),s("p",[e._v("Let's jump into finding an issue.")]),e._v(" "),s("ol",[s("li",[e._v("Go to the IPFS repository at "),s("a",{attrs:{href:"https://github.com/ipfs/ipfs-docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/ipfs/ipfs-docs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Select the "),s("strong",[e._v("Issues")]),e._v(" tab.")]),e._v(" "),s("li",[e._v("Click the "),s("strong",[e._v("Label")]),e._v(" dropdown and select the "),s("strong",[e._v("help wanted")]),e._v(" tag.")]),e._v(" "),s("li",[e._v("Select an issue that interests you.")])]),e._v(" "),s("p",[e._v("Make a note of the issue number and keep it handy for later.")]),e._v(" "),s("h2",{attrs:{id:"discussing-the-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discussing-the-issue"}},[e._v("#")]),e._v(" Discussing the issue")]),e._v(" "),s("p",[e._v("As you can probably tell from the available tags, there are lots of different types of issues. Some are tiny one-sentence changes, and others are sizable projects that require a rewrite of several pages. For small issues, there may be very little or no discussion. There's no need to waste everybody's time talking about changing a broken link. But more significant issues will likely need input from different members of the project.")]),e._v(" "),s("p",[e._v("When adding to a discussion, remember that it may take days or weeks to conclude an issue. With this in mind, try to include all the relevant information anyone might need within each message.")]),e._v(" "),s("p",[e._v("Let's add to the discussion of the issue you've chosen:")]),e._v(" "),s("ol",[s("li",[e._v("Read through all the previous posts to get up to speed about the issue.")]),e._v(" "),s("li",[e._v("Add any comments you feel are necessary.")]),e._v(" "),s("li",[e._v("If you still want to tackle this issue, post a message saying that you'd like to take ownership of it.")])]),e._v(" "),s("p",[e._v("Once you've claimed ownership of an issue, a member of the core IPFS team will assign you to it. If this is a large issue, someone from the IPFS team will check in with you from time to time and make sure you've got everything you need to progress with the issue.")]),e._v(" "),s("h2",{attrs:{id:"creating-a-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-fix"}},[e._v("#")]),e._v(" Creating a fix")]),e._v(" "),s("p",[e._v("If you've got this far, then you should have an issue in hand and a basic idea of how to fix it. Next up is implementing your fix! The process goes something like this:")]),e._v(" "),s("ol",[s("li",[e._v("Create a "),s("em",[e._v("fork")]),e._v(".")]),e._v(" "),s("li",[e._v("Make changes locally on your machine.")]),e._v(" "),s("li",[e._v("Push your changes.")])]),e._v(" "),s("p",[e._v("If you're not familiar with Git and GitHub, then the phrase "),s("em",[e._v("fork")]),e._v(" might not mean much to you. Essentially, a "),s("em",[e._v("fork")]),e._v(" of a project is your own personal copy of that project. You can make as many changes to this copy whenever you want, because you own it. The idea is that you can modify this personal copy and send your changes to the project team, who can then review all the work you've done.")]),e._v(" "),s("p",[e._v("The process for creating a fork of an existing piece of IPFS documentation is incredibly simple:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Go to the "),s("code",[e._v("ipfs/ipfs-docs-v2")]),e._v(" repository in "),s("a",{attrs:{href:"https://github.com/ipfs/ipfs-docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(". (Note that this is a different repo than the one in which the issues themselves live; our issues live in "),s("code",[e._v("ipfs/ipfs-docs")]),e._v(", but the code for the documentation website lives at "),s("code",[e._v("ipfs/ipfs-docs-v2")]),e._v(".)")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("Fork")]),e._v(" to create a copy of the project.")])]),e._v(" "),s("li",[s("p",[e._v("Clone your copy of the project down to your local machine:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/YOUR_USERNAME/ipfs-docs-v2.git\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Make your changes locally.")])]),e._v(" "),s("li",[s("p",[e._v("Once all your changes are complete, make sure to push everything back to GitHub:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Fixed a broken URL, issue #123."')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push\n")])])])])]),e._v(" "),s("p",[e._v("When adding a commit comment that actively fixes an issue within the project, try to summarize the fix in a few words, and quote the issue number. Following this convention makes it easier for other people to quickly see what you've done.")]),e._v(" "),s("h2",{attrs:{id:"create-a-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-request"}},[e._v("#")]),e._v(" Create a pull request")]),e._v(" "),s("p",[e._v("Once you're done making commits, and are ready to get a core team member's review of your work, it's time to create a pull request.")]),e._v(" "),s("ol",[s("li",[e._v("Go to the "),s("code",[e._v("ipfs/ipfs-docs-v2")]),e._v(" repository on "),s("a",{attrs:{href:"https://github.com/ipfs/ipfs-docs-v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Select the "),s("strong",[e._v("Pull requests")]),e._v(" tab.")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New pull request")]),e._v(".")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("compare across forks")]),e._v(" and select your repository from the "),s("strong",[e._v("head repository")]),e._v(" dropdown.")]),e._v(" "),s("li",[e._v("Leave a comment to expand upon your changes.")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Create pull request")]),e._v(".")])]),e._v(" "),s("p",[e._v("GitHub will check if your changes create any merge conflicts with the branch you are trying to merge into.")]),e._v(" "),s("h2",{attrs:{id:"waiting-for-a-review"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#waiting-for-a-review"}},[e._v("#")]),e._v(" Waiting for a review")]),e._v(" "),s("p",[e._v("Before your changes can be merged into the project, they have to pass a review. Some other IPFS repose, like "),s("code",[e._v("ipfs/ipfs-js")]),e._v(" and "),s("code",[e._v("ipfs/ipfs-go")]),e._v(", have automatic tests that run against a pull request. These tests must pass "),s("em",[e._v("before")]),e._v(" the changes can be merged into the project.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ipfs/ipfs-docs-v2")]),e._v(" project doesn't currently have any automatic tests, so all pull requests from the community must be reviewed by at least one project member before they are merged in. Depending on the size of the pull request, this could take anywhere from a few minutes to a few days to review everything. Depending on the complexity of the pull request, there may be further discussion regarding your changes. Keep returning to GitHub and checking your "),s("a",{attrs:{href:"https://github.com/notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("notifications page"),s("OutboundLink")],1),e._v(" to make sure you don't miss anything.")]),e._v(" "),s("h2",{attrs:{id:"merge-your-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-your-fix"}},[e._v("#")]),e._v(" Merge your fix")]),e._v(" "),s("p",[e._v("Once your pull request has been approved, it's ready to be merged into the project! Only project members with the correct rights can merge changes into the project, but you'll be notified as soon as the merge is complete.")]),e._v(" "),s("h2",{attrs:{id:"finishing-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finishing-up"}},[e._v("#")]),e._v(" Finishing up")]),e._v(" "),s("p",[e._v("So there you have it! You've successfully completed your first contribution to the IPFS documentation. We're always on the lookout for great writers and educators to help us improve the IPFS docs and make the internet better for everyone, so keep up the good work!")])])}),[],!1,null,null,null);t.default=i.exports}}]);