/**
 * Created by wanghan on 2017/4/5.
 */
var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;
var deltaTime;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;
var babyTail=[];
var bigTail=[];
var babyEye=[];
var bigEye=[];
var babyBody=[];
var data;
var momBodyOra=[];
var momBodyBlu=[];
window.onload=game;
function game() {
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init() {
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    can1.addEventListener("mousemove",onMouseMove,false);
    canWidth=can1.width;
    canHeight=can1.height;
    bgPic.src="./src/background.jpg";
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    mom=new momObj();
    mom.init();
    mx=canWidth*0.5;
    my=canHeight*0.5;
    baby=new babyObj();
    baby.init();
    for(var i =0;i<8;i++){
        babyTail[i]=new Image();
        babyTail[i].src="./src/babyTail"+i+".png";
    }
    for(var i =0;i<8;i++){
        bigTail[i]=new Image();
        bigTail[i].src="./src/bigTail"+i+".png";
    }
    for(var i =0;i<2;i++){
        babyEye[i]=new Image();
        babyEye[i].src="./src/babyEye"+i+".png";
    }
    for(var i =0;i<2;i++){
        bigEye[i]=new Image();
        bigEye[i].src="./src/bigEye"+i+".png";
    }
    for(var i =0;i<20;i++){
        babyBody[i]=new Image();
        babyBody[i].src="./src/babyFade"+i+".png";
    }
    data=new dataObj();
    for(var i =0;i<8;i++){
        momBodyOra[i]=new Image();
        momBodyOra[i].src="./src/bigSwim"+i+".png";
        momBodyBlu[i]=new Image();
        momBodyBlu[i].src="./src/bigSwimBlue"+i+".png";
    }
}
function gameloop() {
    window.requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    if(deltaTime>40)deltaTime=40;
    drawBackground();
    ane.draw();
    fruit.draw();
    fruitMonitor();

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    momFruitsCollision();
    baby.draw();
    momBabyCollision();
    data.draw();
}
function onMouseMove(e) {
    if(!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
}