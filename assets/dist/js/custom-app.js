"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var o={};function s(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=r,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,r){r(1),r(2),r(3),e.exports=r(4)},function(e,t){$("#technologyboxowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#instrumentsboxowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#contactusboxowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#ourcompanyboxowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#companylistboxowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#footliquidityprovidersowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}}),$("#foottechnologysowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:30,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},480:{items:1},992:{items:2},1200:{items:3}}})},function(e,t){var r={tr:{NameAlert:"MINIMUM 5 CHARACTERS",PhoneAlert:"WRONG PHONE",EmailAlert:"WRONG EMAIL"},en:{NameAlert:"MINIMUM 5 CHARACTERS",PhoneAlert:"WRONG PHONE",EmailAlert:"WRONG EMAIL"}},a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.partnerform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendPartnerForm",value:function(){}},{key:"setPartnerFormErrorMessages",value:function(e,t,r,o){var s=document.getElementById(e);s.innerHTML=t,s.classList.add(r),s.classList.remove(o)}},{key:"setPartnerFormErrorInput",value:function(e){document.getElementById(e)}},{key:"setPartnerFormErrorIcon",value:function(e,t,r){var o=document.getElementById(e);o.classList.add(t),o.classList.remove(r)}},{key:"verifyContent",value:function(e,t,r,o){var s=document.getElementById(t),n=(document.getElementById(r),document.getElementById(o),s.value.trim());switch(e){case"inputNameProcess":n.length<5?(this.setPartnerFormErrorMessages(r,a.translate("tr","NameAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check")):(this.setPartnerFormErrorMessages(r,"","check","error"),this.setPartnerFormErrorIcon(o,"check","error")),this.setPartnerFormErrorInput(t);break;case"inputPhoneProcess":n.replace(/\s/g,"").length<11?(this.setPartnerFormErrorMessages(r,a.translate("tr","PhoneAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check")):(this.setPartnerFormErrorMessages(r,"","check","error"),this.setPartnerFormErrorIcon(o,"check","error")),this.setPartnerFormErrorInput(t);break;case"inputEmailProcess":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)?(this.setPartnerFormErrorMessages(r,"","check","error"),this.setPartnerFormErrorIcon(o,"check","error")):(this.setPartnerFormErrorMessages(r,a.translate("tr","EmailAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check")),this.setPartnerFormErrorInput(t)}}},{key:"verifyContentErrorDelete",value:function(e,t,r,o){var s=document.getElementById(t),n=(document.getElementById(r),document.getElementById(o),s.value.trim());switch(e){case"inputNameProcess":0===n.length&&(this.setPartnerFormErrorMessages(r,a.translate("tr","NameAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check"),this.setPartnerFormErrorInput(t));break;case"inputPhoneProcess":0===n.length&&(this.setPartnerFormErrorMessages(r,a.translate("tr","PhoneAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check"),this.setPartnerFormErrorInput(t));break;case"inputEmailProcess":0===n.length&&(this.setPartnerFormErrorMessages(r,a.translate("tr","EmailAlert"),"error","check"),this.setPartnerFormErrorIcon(o,"error","check"),this.setPartnerFormErrorInput(t))}}}]),e}())},function(e,t){var r={tr:{NameAlert:"MINIMUM 5 CHARACTERS",PhoneAlert:"WRONG PHONE",EmailAlert:"WRONG EMAIL",MessageAlert:"MINIMUM 10 CHARACTERS",MessageCharacterOutAlert:"MAXIMUM 2000 CHARACTERS"},en:{NameAlert:"MINIMUM 5 CHARACTERS",PhoneAlert:"WRONG PHONE",EmailAlert:"WRONG EMAIL",MessageAlert:"MINIMUM 10 CHARACTERS",MessageCharacterOutAlert:"MAXIMUM 2000 CHARACTERS"}},a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,t){return r.hasOwnProperty(e)&&r[e].hasOwnProperty(t)?r[e][t]:""}}]),e}();window.contactform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendContactForm",value:function(){}},{key:"setContactFormErrorMessages",value:function(e,t,r,o){var s=document.getElementById(e);s.innerHTML=t,s.classList.add(r),s.classList.remove(o)}},{key:"setContactFormErrorInput",value:function(e){document.getElementById(e)}},{key:"setContactFormErrorIcon",value:function(e,t,r){var o=document.getElementById(e);o.classList.add(t),o.classList.remove(r)}},{key:"verifyContent",value:function(e,t,r,o){var s=document.getElementById(t),n=(document.getElementById(r),document.getElementById(o),s.value.trim());switch(e){case"inputNameProcess":n.length<5?(this.setContactFormErrorMessages(r,a.translate("tr","NameAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):(this.setContactFormErrorMessages(r,"","check","error"),this.setContactFormErrorIcon(o,"check","error")),this.setContactFormErrorInput(t);break;case"inputPhoneProcess":n.replace(/\s/g,"").length<11?(this.setContactFormErrorMessages(r,a.translate("tr","PhoneAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):(this.setContactFormErrorMessages(r,"","check","error"),this.setContactFormErrorIcon(o,"check","error")),this.setContactFormErrorInput(t);break;case"inputEmailProcess":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)?(this.setContactFormErrorMessages(r,"","check","error"),this.setContactFormErrorIcon(o,"check","error")):(this.setContactFormErrorMessages(r,a.translate("tr","EmailAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")),this.setContactFormErrorInput(t);break;case"inputMessageProcess":n.length<10?(this.setContactFormErrorMessages(r,a.translate("tr","MessageAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):2e3<=n.length?(this.setContactFormErrorMessages(r,a.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):(this.setContactFormErrorMessages(r,"","check","error"),this.setContactFormErrorIcon(o,"check","error")),this.setContactFormErrorInput(t)}}},{key:"verifyContentErrorDelete",value:function(e,t,r,o){var s=document.getElementById(t),n=(document.getElementById(r),document.getElementById(o),s.value.trim());switch(e){case"inputNameProcess":0===n.length&&(this.setContactFormErrorMessages(r,a.translate("tr","NameAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check"),this.setContactFormErrorInput(t));break;case"inputPhoneProcess":0===n.length&&(this.setContactFormErrorMessages(r,a.translate("tr","PhoneAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check"),this.setContactFormErrorInput(t));break;case"inputEmailProcess":0===n.length&&(this.setContactFormErrorMessages(r,a.translate("tr","EmailAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check"),this.setContactFormErrorInput(t));break;case"inputMessageProcess":n.length<10?(this.setContactFormErrorMessages(r,a.translate("tr","MessageAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):2e3<=n.length?(this.setContactFormErrorMessages(r,a.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setContactFormErrorIcon(o,"error","check")):(this.setContactFormErrorMessages(r,a.translate("tr",""),"check","error"),this.setContactFormErrorIcon(o,"check","error")),this.setContactFormErrorInput(t)}}}]),e}())},function(e,t){window.formValidator=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"_fullNameInvalid",value:function(){document.getElementById("iconNameId").classList.add("error"),document.getElementById("iconNameId").classList.remove("check"),document.getElementById("msgNameId").innerText="MINIMUM 5 CHARACTERS",document.getElementById("msgNameId").classList.add("error"),document.getElementById("msgNameId").classList.remove("check")}},{key:"_fullNameValid",value:function(){document.getElementById("inputNameId").classList.add("check"),document.getElementById("iconNameId").classList.remove("error"),document.getElementById("msgNameId").innerText="",document.getElementById("msgNameId").classList.add("check"),document.getElementById("msgNameId").classList.remove("error")}},{key:"_emailInvalid",value:function(){document.getElementById("iconEmailId").classList.add("error"),document.getElementById("iconEmailId").classList.remove("check"),document.getElementById("msgEmailId").innerText="WRONG EMAIL",document.getElementById("msgEmailId").classList.add("error"),document.getElementById("msgEmailId").classList.remove("check")}},{key:"_emailValid",value:function(){document.getElementById("iconEmailId").classList.add("check"),document.getElementById("iconEmailId").classList.remove("error"),document.getElementById("msgEmailId").innerText="",document.getElementById("msgEmailId").classList.add("check"),document.getElementById("msgEmailId").classList.remove("error")}},{key:"_phoneInvalid",value:function(){document.getElementById("iconPhoneId").classList.add("error"),document.getElementById("iconPhoneId").classList.remove("check"),document.getElementById("msgPhoneId").innerText="WRONG PHONE",document.getElementById("msgPhoneId").classList.add("error"),document.getElementById("msgPhoneId").classList.remove("check")}},{key:"_phoneValid",value:function(){document.getElementById("iconPhoneId").classList.add("check"),document.getElementById("iconPhoneId").classList.remove("error"),document.getElementById("msgPhoneId").innerText="",document.getElementById("msgPhoneId").classList.add("check"),document.getElementById("msgPhoneId").classList.remove("error")}},{key:"_messageInvalid",value:function(e){document.getElementById("iconMessageId").classList.add("error"),document.getElementById("iconMessageId").classList.remove("check"),document.getElementById("msgMessageId").innerText=e,document.getElementById("msgMessageId").classList.add("error"),document.getElementById("msgMessageId").classList.remove("check")}},{key:"_messageValid",value:function(){document.getElementById("inputMessageId").classList.add("check"),document.getElementById("iconMessageId").classList.remove("error"),document.getElementById("msgMessageId").innerText="",document.getElementById("msgMessageId").classList.add("check"),document.getElementById("msgMessageId").classList.remove("error")}},{key:"_verifyFullname",value:function(){return document.getElementById("inputNameId").value.length<5?(this._fullNameInvalid(),!1):(this._fullNameValid(),!0)}},{key:"_verifyEmail",value:function(){return document.getElementById("inputEmailId").value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(this._emailValid(),!0):(this._emailInvalid(),!1)}},{key:"_verifyPhone",value:function(){return document.getElementById("inputPhoneId").value.replace(/\s/g,"").length<11?(this._phoneInvalid(),!1):(this._phoneValid(),!0)}},{key:"_verifyMessage",value:function(){return document.getElementById("inputMessageId").value.length<10?(this._messageInvalid("MINIMUM 10 CHARACTERS"),!1):2e3<=document.getElementById("inputMessageId").value.length?(this._messageInvalid("MAXIMUM 2000 CHARACTERS"),!1):(this._messageValid(),!0)}},{key:"_verifyTerms",value:function(){return!0}},{key:"_ajaxCall",value:function(t){var r=this,o=$('button[type="submit"]').html();console.log(o),$('button[type="submit"]').html("SENDING"),console.log("Ajax Call:",t);var e={type:t,full_name:document.getElementById("inputNameId").value,email:document.getElementById("inputEmailId").value,phone:document.getElementById("inputPhoneId").value};document.getElementById("inputMessageId")&&(e.message=document.getElementById("inputMessageId").value),$.post("/send_mail",e).done(function(e){if($('button[type="submit"]').html(o),console.log(e),e.success)switch(t){case"instruments":window.location.href="/instruments-seefull-thank";break;case"contact":window.location.href="/contact-us-thank";break;case"partner":window.location.href="/become-a-partner-thank";break;case"meta":case"pro":window.location.href="/platforms-thank"}else switch(e.error_code){case 1e3:case 1001:case 1002:alert("Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin");break;case 1003:r._fullNameInvalid();break;case 1004:r._emailInvalid();break;case 1005:r._phoneInvalid();break;case 1006:r._messageInvalid()}})}},{key:"verifyContactForm",value:function(){return this._verifyFullname()&&this._verifyEmail()&&this._verifyPhone()&&this._verifyMessage()&&this._verifyTerms()?(console.log("DOGRU"),this._ajaxCall("contact")):console.log("HATA"),!1}},{key:"verifyMetaForm",value:function(){return this._verifyFullname()&&this._verifyEmail()&&this._verifyPhone()&&this._verifyTerms()?this._ajaxCall("meta"):console.log("HATA"),!1}},{key:"verifyProForm",value:function(){return this._verifyFullname()&&this._verifyEmail()&&this._verifyPhone()&&this._verifyTerms()?(console.log("DOGRU"),this._ajaxCall("pro")):console.log("HATA"),!1}},{key:"verifyPartnerForm",value:function(){return this._verifyFullname()&&this._verifyEmail()&&this._verifyPhone()&&this._verifyTerms()?(console.log("DOGRU"),this._ajaxCall("partner")):console.log("HATA"),!1}},{key:"verifyInstrumentsForm",value:function(){return this._verifyFullname()&&this._verifyEmail()&&this._verifyPhone()&&this._verifyTerms()?(console.log("DOGRU"),this._ajaxCall("instruments")):console.log("HATA"),!1}}]),e}())}]);
//# sourceMappingURL=custom-app.js.map
