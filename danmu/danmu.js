/**
 * Created by wanghan on 2017/2/9.
 */

  var screenW=parseInt($(".screen").width());
  var screenH=parseInt($(".screen").height());

  //绑定点击和回车事件
  $("#btn").bind("click",auto);                    //bind("e".function)此处function只能写函数名auto,不能写auto()
  document.onkeydown=function (e) {
      if (e.keyCode == 13){
        auto();
      }
  }
  //被绑定的事件
  function auto() {
      var inp = $("#in").val();                        //val()获取input或hidden或摁键对象的值
      $("#in").val("");                                //val("")给input或hidden或摁键对象赋一个空值,只使用input或hidden对象
      var newspan = $("<span id='spa'></span>");
      newspan.text(inp);
      var top = parseInt(screenH*(Math.random()));
      newspan.css({"color":getRandomColor(),"top":top,"right":-200,"width":200});
      $(".screen").append(newspan);
      newspan.animate({"right":screenW+200},10000,"linear",function(){
          $(this).remove();
      });

  }

  //获取随机颜色
  function getRandomColor(){
    return '#' + (function(h){
            return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16));
  }