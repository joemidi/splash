"use strict";Banner.prototype.loader=function(){function n(){i.onVisible()}function e(){i.onPolite(),Enabler.isVisible()?n():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,n)}function t(){i.onInit(),Enabler.isPageLoaded()?e():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,e)}var i=this;Enabler.isInitialized()?t():Enabler.addEventListener(studio.events.StudioEvent.INIT,t)},Banner.prototype.politeLoad=function(n,e){for(var t=0,i=function(){++t===n.length&&e&&e()},o=0;o<n.length;o++)Enabler.loadScript(n[o],i)},Banner.prototype.bindEvents=function(){this.banner.addEventListener("click",function(){Enabler.exit("clickthrough")})};