(this["webpackJsonptwitchlink-homepage"]=this["webpackJsonptwitchlink-homepage"]||[]).push([[7],{101:function(t,e,n){},102:function(t,e,n){},107:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var a=n(23),o=n(24),i=n(26),s=n(25),c=n(2),l=n(0),h=(n(101),n(17)),d=n(85),r=n(84),u=n(30),b=n(46),j=n(8),k=n(12),f=(n(102),n(49)),m=function(t){var e=t.className,n=Object(k.a)(t,["className"]);return void 0==e?e="Modal":e+=" Modal",t.showModal?Object(c.jsx)("div",Object(j.a)(Object(j.a)({className:e},n),{},{children:Object(c.jsxs)("div",{className:"ModalWindow",children:[Object(c.jsxs)("div",{className:"ModalBody",children:[Object(c.jsx)(u.a,{className:"ModalTitle",children:t.modalTitle}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"ModalContent",children:t.children})]}),Object(c.jsxs)("div",{className:"ModalButtonArea",children:[Object(c.jsx)(f.a,{className:"ModalButton ModalOkButton",onClick:t.okCallback,children:t.okButton}),Object(c.jsx)(f.a,{className:"ModalButton ModalCancelButton",onClick:t.cancelCallback,children:t.cancelButton})]})]})})):Object(c.jsx)("div",{})},w=n(83),p=n(42),O=n.p+"static/media/github.e7ab8675.svg",g=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).state={showGithubModal:!1},o.setShowGithubModal=function(t){o.setState({showGithubModal:t})},o}return Object(o.a)(n,[{key:"T",value:function(t,e){return"en"==this.props.language?t:e}},{key:"render",value:function(){var t=this;if("en"==this.props.language)var e=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a.LinkButton,{href:"https://paypal.me/devhotteok",target:"_blank",children:"PayPal"}),Object(c.jsx)(b.a.LinkButton,{href:"https://www.buymeacoffee.com/devhotteok",target:"_blank",children:"Buy Me A Coffee"}),Object(c.jsx)(b.a.LinkButton,{href:"https://toss.me/devhotteok",target:"_blank",children:"Toss"})]});else e=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a.LinkButton,{href:"https://toss.me/devhotteok",target:"_blank",children:"\ud1a0\uc2a4(Toss)"}),Object(c.jsx)(b.a.LinkButton,{href:"https://toon.at/donate/devhotteok",target:"_blank",children:"\ud22c\ub124\uc774\uc158(Toonation)"}),Object(c.jsx)(b.a.LinkButton,{href:"https://www.buymeacoffee.com/devhotteok",target:"_blank",children:"Buy Me A Coffee"}),Object(c.jsx)(b.a.LinkButton,{href:"https://twip.kr/donate/devhotteok",target:"_blank",children:"\ud2b8\uc715(Twip)"})]});var n=new URL(window.location.href).searchParams.get("download");if(-1==w.a.versionList().indexOf(n)&&(n=void 0),void 0!=n){if(w.a.versionList().indexOf(n)<5)var a="TwitchLink-"+n+".exe";else a="TwitchLinkSetup-"+n+".exe";this.download=Object(c.jsxs)("div",{className:"downloadInProgress",children:[Object(c.jsx)(u.a,{children:this.T("Thanks for using TwitchLink!","TwitchLink\ub97c \uc774\uc6a9\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.")}),Object(c.jsx)(u.a,{children:this.T("Your download will begin shortly.","\uace7 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4.")}),Object(c.jsx)(b.a.LinkButton,{style:{margin:"10px auto"},id:"download",href:"https://github.com/devhotteok/TwitchLink/releases/download/"+n+"/"+a,children:this.T("If the download doesn't start automatically, click here.","\ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc9c4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc774\uacf3\uc744 \ub204\ub974\uc138\uc694.")}),Object(c.jsx)(h.b,{className:"LinkButton helpButton",to:"/help?lang="+this.props.language,target:"_blank",children:this.T("Having trouble installing?","\uc124\uce58\ud558\ub294\ub370 \ubb38\uc81c\uac00 \uc788\ub098\uc694?")})]})}return Object(c.jsx)("div",{className:"DonatePage",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(r.a.TitleBar,{children:this.T("Become a Sponsor","\ud6c4\uc6d0\ud558\uae30")}),this.download,Object(c.jsx)(u.a,{className:"donateInfo",children:this.T("If you like the program, become a sponsor of TwitchLink!","\ud504\ub85c\uadf8\ub7a8\uc774 \ub9c8\uc74c\uc5d0 \ub4dc\uc2e0\ub2e4\uba74 TwitchLink\uc758 \uac1c\ubc1c\uc744 \ub3c4\uc640\uc8fc\uc138\uc694!")}),Object(c.jsx)(b.a.ButtonArea,{children:e}),Object(c.jsx)(u.a,{className:"thankyou",children:this.T("Thanks For Your Help!","\ud6c4\uc6d0\ud574\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.")}),Object(c.jsxs)(m,{showModal:this.state.showGithubModal,modalTitle:this.T("Visit our GitHub!","TwitchLink GitHub\ub97c \ubc29\ubb38\ud558\uc138\uc694!"),okCallback:function(){t.openGithub()},okButton:this.T("OK","\ud655\uc778"),cancelCallback:function(){t.closeGithubModal()},cancelButton:this.T("Cancel","\ucde8\uc18c"),children:[this.T("Visit our GitHub!","TwitchLink GitHub\ub97c \ubc29\ubb38\ud558\uc138\uc694!"),Object(c.jsx)("br",{}),this.T("Help us improve features, fix bugs, and contribute to TwitchLink open source!","\uae30\ub2a5 \uac1c\uc120 \ubc0f \ubc84\uadf8 \uc218\uc815\uc5d0 \ucc38\uc5ec\ud558\uace0 TwitchLink \uc624\ud508\uc18c\uc2a4\uc5d0 \uae30\uc5ec\ud558\uc138\uc694!"),Object(c.jsxs)(b.a.LinkButton,{id:"githubButton",style:{marginTop:"20px"},className:"githubButton",href:"https://github.com/devhotteok/TwitchLink",target:"_blank",children:[Object(c.jsx)(p.a,{src:O,alt:"Language",style:{marginRight:"10px",filter:"invert(1)"}}),"GitHub"]})]})]})})}},{key:"openGithub",value:function(){this.closeGithubModal(),document.getElementById("githubButton").click()}},{key:"closeGithubModal",value:function(){this.setShowGithubModal(!1)}},{key:"componentDidMount",value:function(){void 0!=this.download&&setTimeout((function(){document.getElementById("download").click()}),2e3)}}]),n}(l.Component)}}]);
//# sourceMappingURL=7.d105abc3.chunk.js.map