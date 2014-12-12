/*! PhotoSwipe Default UI - 4.0.0 - 2014-12-11
* http://photoswipe.com
* Copyright (c) 2014 Dmitry Semenov; */
!function(e,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:e.PhotoSwipeUI_Default=o()}(this,function(){"use strict";var e=function(e,o){var n,t,l,i,s,r,a,u,p,c,d,m,f,w,h,v,_=this,b=!1,C=!0,g=!0,T={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,o){return e.title?(o.children[0].innerHTML=e.title,!0):(o.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],indexIndicatorSep:" / "},I=function(e){if(f)return!0;e=e||window.event;for(var o,n,t=e.target||e.srcElement,l=t.className,i=0;i<O.length;i++)o=O[i],o.onTap&&l.indexOf("pswp__"+o.name)>-1&&(o.onTap(),n=!0);n&&(e.stopPropagation&&e.stopPropagation(),f=!0,w=setTimeout(function(){f=!1},30))},E=function(){return!e.likelyTouchDevice||e.options.mouseUsed||screen.width>1200},F=function(){return g=!g,g?(o.removeClass(a,"pswp__share-modal--fade-in"),setTimeout(function(){g&&o[(g?"add":"remove")+"Class"](a,"pswp__share-modal--hidden")},300)):(o[(g?"add":"remove")+"Class"](a,"pswp__share-modal--hidden"),setTimeout(function(){g||o.addClass(a,"pswp__share-modal--fade-in")},30)),g||K(),!1},x=function(e){e=e||window.event;var o=e.target||e.srcElement;return o.href?o.hasAttribute("download")?!0:(window.open(o.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),g||F(),!1):!1},K=function(){for(var o,n,t="",l=0;l<e.options.shareButtons.length;l++)o=e.options.shareButtons[l],n=o.url.replace("{{url}}",encodeURIComponent(window.location.href)).replace("{{image_url}}",encodeURIComponent(e.currItem.src||"")).replace("{{raw_image_url}}",e.currItem.src||"").replace("{{text}}",encodeURIComponent(e.currItem.title||"")),t+='<a href="'+n+'" target="_blank" class="pswp__share--'+o.id+'"'+(o.download?"download":"")+">"+o.label+"</a>";a.children[0].innerHTML=t,a.children[0].onclick=x},k=function(n){for(var t=0;t<e.options.closeElClasses.length;t++)if(o.hasClass(n,"pswp__"+e.options.closeElClasses[t]))return!0},L=0,S=function(){clearTimeout(v),L=0,p&&_.setIdle(!1)},z=function(o){o=o?o:window.event;var n=o.relatedTarget||o.toElement;n&&"HTML"!==n.nodeName||(clearTimeout(v),v=setTimeout(function(){_.setIdle(!0)},e.options.timeToIdleOutside))},M=function(e){d!==e&&(o[(e?"remove":"add")+"Class"](c,"pswp__preloader--active"),d=e)},O=[{name:"caption",option:"captionEl",onInit:function(e){l=e}},{name:"share-modal",option:"shareEl",onInit:function(e){a=e},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(e){r=e},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){s=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){c=e}}];_.init=function(){o.extend(e.options,T,!0),t=e.scrollWrap.children[1];var s=e.listen;s("onVerticalDrag",function(e){C&&.95>e?_.hideControls():!C&&e>=.95&&_.showControls()});var u;s("onPinchClose",function(e){C&&.9>e?(_.hideControls(),u=!0):u&&!C&&e>.9&&_.showControls()}),s("zoomGestureEnded",function(){u=!1,u&&!C&&_.showControls()}),s("beforeChange",_.update),s("doubleTap",function(o){var n=e.currItem.initialZoomLevel;e.getZoomLevel()!==n?e.zoomTo(n,o,333):e.zoomTo(e.currItem.doubleTapZoom,o,333)}),e.options.timeToIdle&&s("mouseUsed",function(){o.bind(document,"mousemove",S),o.bind(document,"mouseout",z),h=setInterval(function(){L++,2===L&&_.setIdle(!0)},e.options.timeToIdle/2)}),s("preventDragEvent",function(e,o,n){var t=e.target||e.srcElement;t&&t.className&&e.type.indexOf("mouse")>-1&&(t.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(t.tagName))&&(n.prevent=!1)}),s("bindEvents",function(){o.bind(t,"pswpTap click",I),o.bind(e.scrollWrap,"pswpTap",_.onGlobalTap),e.likelyTouchDevice||o.bind(e.scrollWrap,"mouseover",_.onMouseOver)}),s("unbindEvents",function(){g||F(),h&&clearInterval(h),o.unbind(document,"mouseout",z),o.unbind(document,"mousemove",S),o.unbind(t,"pswpTap click",I),o.unbind(e.scrollWrap,"pswpTap",_.onGlobalTap),o.unbind(e.scrollWrap,"mouseover",_.onMouseOver),n&&(o.unbind(document,n.eventK,_.updateFullscreen),n.isFullscreen()&&(T.hideAnimationDuration=0,n.exit()),n=null)}),s("destroy",function(){e.options.captionEl&&(i&&t.removeChild(i),o.removeClass(l,"pswp__caption--empty")),a&&(a.children[0].onclick=null),o.removeClass(t,"pswp__ui--over-close"),o.addClass(t,"pswp__ui--hidden"),_.setIdle(!1)}),e.options.showAnimationDuration||o.removeClass(t,"pswp__ui--hidden"),s("initialZoomIn",function(){e.options.showAnimationDuration&&o.removeClass(t,"pswp__ui--hidden")}),s("initialZoomOut",function(){o.addClass(t,"pswp__ui--hidden")}),s("parseVerticalMargin",function(n){var s=n.vGap;if(E()){var r=e.options.barsSize;if(e.options.captionEl&&"auto"===r.bottom)if(i||(i=o.createEl("pswp__caption pswp__caption--fake"),i.appendChild(o.createEl("pswp__caption__center")),t.insertBefore(i,l),o.addClass(t,"pswp__ui--fit")),e.options.addCaptionHTMLFn(n,i,!0)){var a=i.clientHeight;s.bottom=parseInt(a,10)||44}else s.bottom=r.top;else s.bottom=r.bottom;s.top=r.top}else s.top=s.bottom=0});var p,c,d,f=function(n){for(var t=n.length,l=0;t>l;l++){p=n[l],c=p.className;for(var i=0;i<O.length;i++)d=O[i],c.indexOf("pswp__"+d.name)>-1&&(e.options[d.option]?(o.removeClass(p,"pswp__element--disabled"),d.onInit&&d.onInit(p)):o.addClass(p,"pswp__element--disabled"))}};f(t.children),f(t.children[0].children),e.options.shareEl&&r&&a&&(g=!0),e.options.fullscreenEl&&(n||(n=_.getFullscreenAPI()),n?(o.bind(document,n.eventK,_.updateFullscreen),_.updateFullscreen(),o.addClass(e.template,"pswp--supports-fs")):o.removeClass(e.template,"pswp--supports-fs")),e.options.preloaderEl&&(M(!0),s("beforeChange",function(){clearTimeout(m),m=setTimeout(function(){e.currItem&&e.currItem.loading?(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth)&&M(!1):M(!0)},e.options.loadingIndicatorDelay)}),s("imageLoadComplete",function(o,n){e.currItem===n&&M(!0)}))},_.setIdle=function(e){p=e,o[(e?"add":"remove")+"Class"](t,"pswp__ui--idle")},_.update=function(){C&&e.currItem?(_.updateIndexIndicator(),e.options.captionEl&&(e.options.addCaptionHTMLFn(e.currItem,l),e.currItem.title?o.removeClass(l,"pswp__caption--empty"):o.addClass(l,"pswp__caption--empty")),b=!0):b=!1},_.updateFullscreen=function(){o[(n.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")},_.updateIndexIndicator=function(){e.options.counterEl&&(s.innerHTML=e.getCurrentIndex()+1+e.options.indexIndicatorSep+e.options.getNumItemsFn())},_.onGlobalTap=function(n){n=n||window.event;var t=n.target||n.srcElement;if(!f)if(n.detail&&"mouse"===n.detail.pointerType)k(t)&&e.close(),o.hasClass(t,"pswp__img")&&(1===e.getZoomLevel()&&e.getZoomLevel()<=e.currItem.fitRatio?e.close():e.toggleDesktopZoom(n.detail.releasePoint));else if(e.options.tapToToggleControls&&(C?_.hideControls():_.showControls()),e.options.tapToClose&&(o.hasClass(t,"pswp__img")||k(t)))return void e.close()},_.onMouseOver=function(e){e=e||window.event;var n=e.target||e.srcElement;k(n)?o.addClass(t,"pswp__ui--over-close"):o.removeClass(t,"pswp__ui--over-close")},_.hideControls=function(){o.addClass(t,"pswp__ui--hidden"),C=!1},_.showControls=function(){C=!0,b||_.update(),o.removeClass(t,"pswp__ui--hidden")},_.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},_.getFullscreenAPI=function(){var o,n=document.documentElement,t="fullscreenchange";return n.requestFullscreen?o={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:t}:n.mozRequestFullScreen?o={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+t}:n.webkitRequestFullscreen?o={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+t}:n.msRequestFullscreen&&(o={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),o&&(o.enter=function(){return u=e.options.closeOnScroll,e.options.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?e.template[this.enterK]():void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},o.exit=function(){return e.options.closeOnScroll=u,document[this.exitK]()},o.isFullscreen=function(){return document[this.elementK]}),o}};return e});