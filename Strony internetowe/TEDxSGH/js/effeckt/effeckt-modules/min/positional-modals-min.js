var EffecktPositionalModals={modalButtonClass:".effeckt-positional-modal-button",modalCloseButtonClass:".effeckt-modal-close",modalWrapClass:"effeckt-positional-modal-wrap",modalsList:[],init:function(){this.bindUIActions()},bindUIActions:function(){var t=this;$(this.modalButtonClass).on(Effeckt.buttonPressedEvent,function(e){e.preventDefault(),t.openModal($(this))}),$(document).on(Effeckt.buttonPressedEvent,this.modalCloseButtonClass,function(e){e.preventDefault(),t.close($(this))})},openModal:function(t){var e=this,o=t.data("effeckt-type"),s=t.data("effeckt-position"),i=t.offset(),a={width:t.outerWidth(),height:t.outerHeight()},n=$(".effeckt-page-active").scrollTop();if(this.contains(t))return!1;var l=this.createModal($("#effeckt-modal-wrap").html(),o,s);switch(l.show(),console.log(l.width()),this.add(t,l),s){case"below":l.css({top:i.top+a.height+n,left:i.left-l.outerWidth()/2+a.width/2});break;case"right":l.css({top:i.top-l.outerHeight()/2+n+a.height/2,left:i.left+a.width});break;case"left":l.css({top:i.top-l.outerHeight()/2+n+a.height/2,left:i.left-l.outerWidth()});break;default:case"above":l.css({top:i.top-l.outerHeight()+n,left:i.left-l.outerWidth()/2+a.width/2})}l.addClass("effeckt-show")},close:function(t){var e=this,o=t.parents('[class~="'+this.modalWrapClass+'"]'),s=this.getSenderButton(o);o.removeClass("effeckt-show"),o.on(Effeckt.transitionAnimationEndEvent,function(){o.off(Effeckt.transitionAnimationEndEvent),o.hide().remove()}),this.remove(o),o.find(".effeckt-positional-modal").removeClass("effeckt-show"),s&&s.data("effeckt-needs-hide-class")&&o.addClass("effeckt-hide")},createModal:function(t,e,o){var s=$("<div>").addClass("effeckt-positional-modal-wrap "+e).attr("data-effeckt-position",o);return s.html(t),s},getSenderButton:function(t){for(var e,e=0,o=this.modalsList.length;o>e;e++)if(this.modalsList[e].modal.get(0)==t.get(0))return this.modalsList[e].element;return!1},add:function(t,e){$(".effeckt-page-active").append(e),this.modalsList.push({element:t,modal:e})},remove:function(t){for(var e,e=0,o=this.modalsList.length;o>e;e++)if(this.modalsList[e].modal.get(0)==t.get(0))return this.modalsList.splice(e,1),!0},contains:function(t){for(var e,e=0,o=this.modalsList.length;o>e;e++)if(this.modalsList[e].element.get(0)==t.get(0))return!0;return!1}};EffecktPositionalModals.init();