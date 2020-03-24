let mouseColorTracking = document.querySelector('.lines_color')
mouseColorTracking.onclick = function(){
$(document).mousemove(function (e) {

  let $width = ($(document).width()) / 255;
  let $height = ($(document).height()) / 255;
  var $pageX = parseInt(e.pageX / $width, 10);
  var $pageY = parseInt(e.pageY / $height, 10);
  let $a = $pageX,
      $b = ($pageY - 255) * (-1),
      $c = 0;
  if ($pageX <= $pageY) {
      $c = $pageY - $pageX;
  }
  $('.book').css('background-color', 'rgb('+$a+','+$b+','+$c+')');
});
}
