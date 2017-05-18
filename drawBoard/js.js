/**
 * Created by wanghan on 2017/4/21.
 */
window.onload=function () {
    var c = document.getElementById('can');   //画布
    var ctx = c.getContext('2d');             //画笔
    c.onmousedown = function(ev) {
        var ev = ev || window.event;         //获取event对象
        ctx.moveTo(ev.clientX-c.offsetLeft+$(document).scrollLeft(),ev.clientY-c.offsetTop+$(document).scrollTop());
        var draw=document.getElementById("hua");
        // draw.style.display="none";     //会出现画布移位
        draw.style.color="white";
        document.onmousemove = function(ev) {
            var ev = ev || window.event;
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#666";
            // ctx.lineTo(ev.clientX-c.offsetLeft,ev.clientY-c.offsetTop);  //滚动条下拉时出现画笔移位
            ctx.lineTo(ev.clientX-c.offsetLeft+$(document).scrollLeft(),ev.clientY-c.offsetTop+$(document).scrollTop());
            ctx.stroke();
        };
        c.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
// 上传文件

$("#reset").click(function () {
    var c = document.getElementById('can');
    var ctx = c.getContext('2d');

    // 方法1.canvas每当高度或宽度被重设时，画布内容就会被清空
    // 方法2.clearRect()
    // 方法3.用某一特定颜色填充画布



    //ctx.clearRect(0,0,c.width,c.height);
    //c.height=c.height;

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.closePath();
})

