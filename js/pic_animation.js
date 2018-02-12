$(function () {
  setTimeout("pict()"); //アニメーション実行
})

function pict() {
  $(".pict1, .pict2, .pict3").animate({
    marginTop: "-=10px"
  }, 800).animate({
    marginTop: "+=10px"
  }, 800);
  $("#work, #recruite").animate({
    backgroundSize: "-=20px"
  }, 1000).animate({
    backgroundSize: "+=20px"
  }, 1000);
  setTimeout("pict()"); //アニメーションを繰り返す感覚
}
