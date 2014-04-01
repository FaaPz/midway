/* midway - simplified responsive elements centering v1.0.0
 * Crafted in Finland by a Dutchman called Fabian de Laender
 * Copyright (c) 2014 Fabian de Laender; Licensed MIT
 */
function _initMidway() {
  'use strict';

  var centerHorizontal = document.querySelectorAll('.midway-horizontal'),
        centerVertical = document.querySelectorAll('.midway-vertical');

  for( var i = 0; i < centerHorizontal.length; i++ ) {
    centerHorizontal[i].style.marginLeft = -centerHorizontal[i].offsetWidth / 2 + 'px';
    centerHorizontal[i].style.display    = 'inline';
    centerHorizontal[i].style.position   = 'absolute';
    centerHorizontal[i].style.left       = '50%';
  }

  for( var i = 0; i < centerVertical.length; i++ ) {
    centerVertical[i].style.marginTop = -centerVertical[i].offsetWidth / 2 + 'px';
    centerVertical[i].style.display   = 'inline';
    centerVertical[i].style.position  = 'absolute';
    centerVertical[i].style.top       = '50%';
  }
}

window.onload = function() {
  _initMidway();
}

window.onresize = function() {
  _initMidway();
}