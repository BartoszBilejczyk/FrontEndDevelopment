var EffecktOffScreenNav={nav:$("#effeckt-off-screen-nav"),closeButton:$("#effeckt-off-screen-nav-close"),effeckt_type:"",threedee:!1,_checkForMore:{"effeckt-off-screen-nav-top-card-deck":{showMethod:"_showCardDeckTop",hideMethod:"_hideCardDeckTop",initMethod:"_initCardDeckTop",endMethod:"_endCardDeck"},"effeckt-off-screen-nav-bottom-card-deck":{showMethod:"_showCardDeckBottom",hideMethod:"_hideCardDeckBottom",initMethod:"_initCardDeckBottom",endMethod:"_endCardDeck"}},init:function(){this.bindUIActions()},bindUIActions:function(){var e=this;$(".off-screen-nav-button, #effeckt-off-screen-nav-close").on(Effeckt.buttonPressedEvent,function(){e.toggleNav(this)})},toggleNav:function(e){var t=$(e),n=this;if(this.effeckt_type=t.data("effeckt-type"),this.threedee=t.data("threedee"),this.nav.hasClass("effeckt-show")){var n=this;this.nav.removeClass("effeckt-show"),this.nav.on(Effeckt.transitionAnimationEndEvent,function(){n.nav.off(Effeckt.transitionAnimationEndEvent),n.hideNav(),$("[data-effeckt-page].effeckt-page-active, .effeckt-overlay").off(Effeckt.buttonPressedEvent)}),this.nav.data("effeckt-needs-hide-class")&&this.nav.addClass("effeckt-hide"),this._checkForMoreOnHide()}else this.nav.addClass(this.effeckt_type),this.closeButton.data("effeckt-type",this.effeckt_type),this.threedee&&$("body").addClass("effeckt-perspective"),t.data("effeckt-needs-hide-class")&&this.nav.data("effeckt-needs-hide-class",t.data("effeckt-needs-hide-class")),this.nav.on(Effeckt.transitionAnimationEndEvent,function(){n.nav.off(Effeckt.transitionAnimationEndEvent),n.nav.addClass("effeckt-show"),$("[data-effeckt-page].effeckt-page-active, .effeckt-overlay").on(Effeckt.buttonPressedEvent,n.toggleNav.bind(n))}),this._checkForMoreOnShow()},hideNav:function(){this.nav.removeClass(this.closeButton.data("effeckt-type")),this.nav.removeClass("effeckt-hide"),this.nav.removeData("effeckt-needs-hide-class"),$("body").removeClass("effeckt-perspective")},_checkForMoreOnShow:function(){for(effeckt_type in this._checkForMore)if(effeckt_type===this.effeckt_type){var e=this._checkForMore[effeckt_type].hideMethod,t=this._checkForMore[effeckt_type].initMethod;this._callThisMethod(e),this._callThisMethod(t);break}},_checkForMoreOnHide:function(){for(effeckt_type in this._checkForMore)if(effeckt_type===this.effeckt_type){var e=this._checkForMore[effeckt_type].hideMethod,t=this._checkForMore[effeckt_type].endMethod;this._callThisMethod(e),this._callThisMethod(t);break}},_initCardDeckTop:function(){var e=this;this.nav.find("h4").on(Effeckt.buttonPressedEvent,function(t){t.preventDefault(),e.nav.hasClass("shown")?e._hideCardDeckTop():e._showCardDeckTop()})},_hideCardDeckTop:function(){var e=this.nav.find("li");e.removeAttr("style"),this.nav.removeClass("shown"),e.each(function(t){$(this).css(Modernizr.prefixed("transform"),"translateY("+2*t+"px)").css("z-index",e.length-t).css("width",100-t/2+"%").css("margin-left",t/4+"%")})},_showCardDeckTop:function(){var e=this.nav.find("li");e.removeAttr("style"),this.nav.addClass("shown"),e.each(function(e){var t=$(this).height();$(this).css(Modernizr.prefixed("transform"),"translateY("+(e+1)*t+"px)").css("width","100%")})},_initCardDeckBottom:function(){var e=this;this.nav.find("h4").on(Effeckt.buttonPressedEvent,function(t){t.preventDefault(),e.nav.hasClass("shown")?e._hideCardDeckBottom():e._showCardDeckBottom()})},_hideCardDeckBottom:function(){var e=this.nav.find("li");e.removeAttr("style"),this.nav.removeClass("shown"),e.each(function(t){$(this).css(Modernizr.prefixed("transform"),"translateY(-"+2*t+"px)").css("z-index",e.length-t).css("width",100-t/2+"%").css("margin-left",t/4+"%")})},_showCardDeckBottom:function(){var e=this.nav.find("li");e.removeAttr("style"),this.nav.addClass("shown"),e.each(function(e){var t=$(this).height();$(this).css(Modernizr.prefixed("transform"),"translateY(-"+(e+1)*t+"px)").css("width","100%")})},_endCardDeck:function(){var e=this.nav.find("li");e.removeAttr("style"),this.nav.find("h4").off(Effeckt.buttonPressedEvent)},_callThisMethod:function(e){"undefined"!=typeof e&&this[e]()}};EffecktOffScreenNav.init();