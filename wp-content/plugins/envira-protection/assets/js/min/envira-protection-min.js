jQuery(document).ready(function($){$(document).on("contextmenu dragstart",".envirabox-wrap, .envira-gallery-image, .envirabox-image, #envirabox-thumbs img, .envirabox-nav, .envira-gallery-item .caption, .envira-video-play-icon, .envirabox-inner",function(){return!1});var e={alt:!1,shift:!1,meta:!1};$(document).on("keydown",function(n){n.altKey&&(e.alt=!0),n.shiftKey&&(e.shift=!0),n.metaKey&&(e.meta=!0)}),$(document).on("keyup",function(n){n.altKey||(e.alt=!1),n.shiftKey&&(e.shift=!1),n.metaKey||(e.meta=!1)}),$(document).on("click",".envira-gallery-image, .envirabox-image, #envirabox-thumbs img, .envirabox-nav, .envira-gallery-item .caption",function(n){return e.alt||e.shift||e.meta?(n.preventDefault(),!1):void 0})});