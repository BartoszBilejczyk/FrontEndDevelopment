/*! @license
 *  Project: Buttons
 *  Description: A highly customizable CSS button library built with Sass and Compass
 *  Author: Alex Wolfe
 *  License: Apache License v2.0
 */
!function($,t,n,i){"use strict";function e(t,n){this.options=$.extend({},d,n),this._defaults=d,this._name=o,this.$element=$(t),this.init()}var o="menuButton",u=".button-dropdown",d={propertyName:"value"};e.prototype={constructor:e,init:function(){this.toggle()},toggle:function(t,n){"show"===this.$element.data("dropdown")?this.hideMenu():this.showMenu()},showMenu:function(){this.$element.data("dropdown","show"),this.$element.find("ul").show()},hideMenu:function(){this.$element.data("dropdown","hide"),this.$element.find("ul").hide()}},$.fn[o]=function(t){return this.each(function(){$.data(this,"plugin_"+o)?$.data(this,"plugin_"+o).toggle():$.data(this,"plugin_"+o,new e(this,t))})},$(n).on("click",function(t){$.each($("[data-buttons=dropdown]"),function(n,i){$(t.target.offsetParent)[0]!=$(this)[0]&&$.data(this,"plugin_"+o)&&($.data(this,"plugin_"+o).hideMenu(),$(this).find("ul").hide())})}),$(n).on("click","[data-buttons=dropdown]",function(t){var n=$(t.currentTarget);n.menuButton()}),$(n).on("click","[data-buttons=dropdown] > a",function(t){t.preventDefault()})}(jQuery,window,document);
