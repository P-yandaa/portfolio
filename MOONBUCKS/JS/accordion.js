// アコーディオンメニュー

//アコーディオンをクリックした時の動作
$(".title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".box"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作
});

// ボタン押したら開く
$(function () {
  $(".ac_btn").click(function () {
    $(this).next(".ac_box").slideToggle();

     $("ac_btn").not($(this)).next(".ac_box").slideUp();
  });
});
