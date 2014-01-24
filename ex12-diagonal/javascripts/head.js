(function() {

  var $html = $('html');
  var dpr = window.devicePixelRatio;
  if (!dpr) { return; }
  if (dpr >= 2) {
    $html.removeClass('dpr-1').addClass('dpr-2');
  }

}());
