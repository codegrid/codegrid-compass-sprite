(function() {

  var $html = $('html');
  var dpr = window.devicePixelRatio;
  if (!dpr) { return; }
  if (dpr >= 2) {
    $html.removeClass('dpr-x1').addClass('dpr-x2');
  }

}());
