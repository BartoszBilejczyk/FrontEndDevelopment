var EffecktPageTransitions={fromPage:"",toPage:"",isAnimating:!1,isNextPageEnd:!1,isCurrentPageEnd:!1,transitionInEffect:"",transitionOutEffect:"",init:function(){this.initPages(),this.bindUIActions()},initPages:function(){var t=$("[data-effeckt-page]");this.fromPage=t.first().addClass("effeckt-page-active")},bindUIActions:function(){var t=this;$(".effeckt-page-transition-button").on(Effeckt.buttonPressedEvent,function(i){i.preventDefault();var e=$(this).data("effeckt-transition-in"),n=$(this).data("effeckt-transition-out");transitionPage=$(this).data("effeckt-transition-page"),$(this).data("effeckt-needs-perspective")&&$("html").addClass("md-perspective"),t.transitionPage(transitionPage,e,n)})},transitionPage:function(t,i,e){if(this.isAnimating)return!1;this.isAnimating=!0,this.isCurrentPageEnd=!1,this.isNextPageEnd=!1,this.transitionInEffect=i,this.transitionOutEffect=e,this.fromPage=$("[data-effeckt-page].effeckt-page-active"),this.toPage=$('[data-effeckt-page="'+t+'"]'),this.toPage.addClass("effeckt-page-animating effeckt-page-active "+this.transitionInEffect),this.fromPage.addClass("effeckt-page-animating"),this.fromPage.addClass(this.transitionOutEffect);var n=this;this.toPage.on(Effeckt.transitionAnimationEndEvent,function(){n.toPage.off(Effeckt.transitionAnimationEndEvent),n.isNextPageEnd=!0,n.isCurrentPageEnd&&n.resetTransition()}),this.fromPage.on(Effeckt.transitionAnimationEndEvent,function(){n.fromPage.off(Effeckt.transitionAnimationEndEvent),n.isCurrentPageEnd=!0,n.isNextPageEnd&&n.resetTransition()})},resetTransition:function(){this.isAnimating=!1,this.isCurrentPageEnd=!1,this.isNextPageEnd=!1,this.fromPage.removeClass("effeckt-page-animating effeckt-page-active "+this.transitionOutEffect),this.toPage.removeClass("effeckt-page-animating "+this.transitionInEffect),$("html").removeClass("md-perspective")}};EffecktPageTransitions.init();