(this["webpackJsonptwitchlink-homepage"]=this["webpackJsonptwitchlink-homepage"]||[]).push([[7],{101:function(t,e,o){},102:function(t,e,o){},107:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return O}));var n=o(23),i=o(24),a=o(26),s=o(25),l=o(2),c=o(0),d=(o(101),o(17)),h=o(85),r=o(84),u=o(30),b=o(46),k=o(8),j=o(12),w=(o(102),o(49)),m=function(t){var e=t.className,o=Object(j.a)(t,["className"]);return void 0===e?e="Modal":e+=" Modal",t.showModal?Object(l.jsx)("div",Object(k.a)(Object(k.a)({className:e},o),{},{children:Object(l.jsxs)("div",{className:"ModalWindow",children:[Object(l.jsxs)("div",{className:"ModalBody",children:[Object(l.jsx)(u.a,{className:"ModalTitle",children:t.modalTitle}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"ModalContent",children:t.children})]}),Object(l.jsxs)("div",{className:"ModalButtonArea",children:[Object(l.jsx)(w.a,{className:"ModalButton ModalOkButton",onClick:t.okCallback,children:t.okButton}),Object(l.jsx)(w.a,{className:"ModalButton ModalCancelButton",onClick:t.cancelCallback,children:t.cancelButton})]})]})})):Object(l.jsx)("div",{})},f=o(83),p=o(42),v=o.p+"static/media/github.e7ab8675.svg",O=function(t){Object(a.a)(o,t);var e=Object(s.a)(o);function o(t){var i;return Object(n.a)(this,o),(i=e.call(this,t)).state={showGithubModal:!1,showDonationModal:!1,startDownload:!1,donationButtonClicked:!1},i.setShowGithubModal=function(t){i.setState({showGithubModal:t})},i.setShowDonationModal=function(t){i.setState({showDonationModal:t})},i.setStartDownload=function(){i.setState({startDownload:!0}),setTimeout((function(){document.getElementById("download").click(),i.setShowGithubModal(!0)}),2e3)},i.setDonationButtonClicked=function(){i.setState({donationButtonClicked:!0})},i.downloadVersion=new URL(window.location.href).searchParams.get("download"),-1===f.a.versionList().indexOf(i.downloadVersion)&&(i.downloadVersion=void 0),i}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var t=this;void 0!==this.downloadVersion&&(this.visibilityEventListener=document.addEventListener("visibilitychange",(function(){document.hidden||!t.state.donationButtonClicked||t.state.startDownload||t.setStartDownload()})))}},{key:"componentWillUnmount",value:function(){void 0!==this.downloadVersion&&document.removeEventListener("visibilitychange",this.visibilityEventListener)}},{key:"T",value:function(t,e){return"en"===this.props.language?t:e}},{key:"render",value:function(){var t=this;if("en"===this.props.language)var e=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://paypal.me/devhotteok",target:"_blank",children:"PayPal"}),Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://www.buymeacoffee.com/devhotteok",target:"_blank",children:"Buy Me A Coffee"}),Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://toss.me/devhotteok",target:"_blank",children:"Toss"})]});else e=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://toss.me/devhotteok",target:"_blank",children:"\ud1a0\uc2a4(Toss)"}),Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://toon.at/donate/devhotteok",target:"_blank",children:"\ud22c\ub124\uc774\uc158(Toonation)"}),Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://twip.kr/donate/devhotteok",target:"_blank",children:"\ud2b8\uc715(Twip)"}),Object(l.jsx)(b.a.LinkButton,{onClick:this.setDonationButtonClicked,href:"https://www.buymeacoffee.com/devhotteok",target:"_blank",children:"Buy Me A Coffee"})]});if(void 0!==this.downloadVersion){if(f.a.versionList().indexOf(this.downloadVersion)<5)var o="TwitchLink-"+this.downloadVersion+".exe";else o="TwitchLinkSetup-"+this.downloadVersion+".exe";this.state.startDownload?(this.download=Object(l.jsxs)("div",{className:"downloadInProgress",children:[Object(l.jsx)(u.a,{children:this.T("Thanks for using TwitchLink!","TwitchLink\ub97c \uc774\uc6a9\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.")}),Object(l.jsx)(u.a,{children:this.T("Your download will begin shortly.","\uace7 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4.")}),Object(l.jsx)(b.a.LinkButton,{style:{margin:"10px auto"},id:"download",href:"https://github.com/devhotteok/TwitchLink/releases/download/"+this.downloadVersion+"/"+o,children:this.T("If the download doesn't start automatically, click here.","\ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc9c4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc774\uacf3\uc744 \ub204\ub974\uc138\uc694.")}),Object(l.jsx)(d.b,{className:"LinkButton helpButton",to:"/help?lang="+this.props.language,target:"_blank",children:this.T("Having trouble installing?","\uc124\uce58\ud558\ub294\ub370 \ubb38\uc81c\uac00 \uc788\ub098\uc694?")})]}),this.downloadButton=void 0):(this.download=Object(l.jsx)("div",{className:"downloadInProgress",children:Object(l.jsx)(u.a,{children:this.T("Please contribute to the development of TwitchLink before downloading.","\ub2e4\uc6b4\ub85c\ub4dc \uc804 TwitchLink\uc758 \uac1c\ubc1c\uc5d0 \uae30\uc5ec\ud574 \uc8fc\uc138\uc694.")})}),this.downloadButton=Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{onClick:function(){return t.setShowDonationModal(!0)},style:{margin:"30px auto",width:"fit-content",color:"gray",fontSize:"13pt",cursor:"pointer",textDecoration:"underline"},children:this.T("Just Download","\uadf8\ub0e5 \ub2e4\uc6b4\ub85c\ub4dc")})}))}return Object(l.jsx)("div",{className:"DonatePage",children:Object(l.jsxs)(h.a,{children:[Object(l.jsx)(r.a.TitleBar,{children:this.T("Become a Sponsor","\ud6c4\uc6d0\ud558\uae30")}),this.download,Object(l.jsx)(u.a,{className:"donateInfo",children:this.T("If you like the program, become a sponsor of TwitchLink!","\ud504\ub85c\uadf8\ub7a8\uc774 \ub9c8\uc74c\uc5d0 \ub4dc\uc2e0\ub2e4\uba74 TwitchLink\uc758 \uac1c\ubc1c\uc744 \ub3c4\uc640\uc8fc\uc138\uc694!")}),Object(l.jsxs)(b.a.ButtonArea,{children:[e,this.downloadButton]}),this.state.donationButtonClicked?Object(l.jsx)(u.a,{className:"thankyou",children:this.T("Thanks For Your Help!","\ud6c4\uc6d0\ud574\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.")}):Object(l.jsx)(l.Fragment,{}),Object(l.jsxs)(m,{showModal:this.state.showGithubModal,modalTitle:this.T("Visit our GitHub!","TwitchLink GitHub\ub97c \ubc29\ubb38\ud574 \ubcf4\uc138\uc694!"),okCallback:function(){t.setShowGithubModal(!1),document.getElementById("githubButton").click()},okButton:this.T("OK","\ud655\uc778"),cancelCallback:function(){t.setShowGithubModal(!1)},cancelButton:this.T("Cancel","\ucde8\uc18c"),children:[this.T("Visit our GitHub!","TwitchLink GitHub\ub97c \ubc29\ubb38\ud574 \ubcf4\uc138\uc694!"),Object(l.jsx)("br",{}),this.T("Help us improve features and fix bugs.","\uae30\ub2a5 \uac1c\uc120 \ubc0f \ubc84\uadf8 \uc218\uc815\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.jsxs)(b.a.LinkButton,{id:"githubButton",style:{marginTop:"20px"},className:"githubButton",href:"https://github.com/devhotteok/TwitchLink",target:"_blank",children:[Object(l.jsx)(p.a,{src:v,alt:"GitHub",style:{marginRight:"10px",filter:"invert(1)"}}),"GitHub"]})]}),Object(l.jsxs)(m,{showModal:this.state.showDonationModal,modalTitle:this.T("Just Download","\uadf8\ub0e5 \ub2e4\uc6b4\ub85c\ub4dc"),okCallback:function(){t.setShowDonationModal(!1)},okButton:this.T("Donate","\ud6c4\uc6d0\ud558\uae30"),cancelCallback:function(){t.setShowDonationModal(!1),t.setStartDownload()},cancelButton:this.T("Just Download","\uadf8\ub0e5 \ub2e4\uc6b4\ub85c\ub4dc"),children:[this.T("TwitchLink is an open source project.","TwitchLink\ub294 \uac1c\ubc1c\uc790\uc758 \uc7ac\ub2a5\uae30\ubd80\ub85c \uc6b4\uc601\ub418\ub294 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4."),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),this.T("Please consider donating to help us continue developing TwitchLink.","TwitchLink\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uac1c\ubc1c\ud560 \uc218 \uc788\ub3c4\ub85d \ud6c4\uc6d0\uc744 \uac80\ud1a0\ud574\ubcf4\uc138\uc694."),Object(l.jsx)("br",{}),this.T("Your support is a great help to our development.","\uc5ec\ub7ec\ubd84\uc758 \ub3c4\uc6c0\uc740 TwitchLink\uc758 \uc9c0\uc18d\uc801\uc778 \uac1c\ubc1c\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4.")]})]})})}}]),o}(c.Component)}}]);
//# sourceMappingURL=7.39d9983a.chunk.js.map