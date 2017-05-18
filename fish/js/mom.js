/**
 * Created by wanghan on 2017/4/5.
 */
var momObj=function () {
    this.x;
    this.y;
    this.angle;
    this.bigEye=new Image();
    this.bigTail=new Image();
    this.bigTailTimer=0;
    this.bigTailCount=0;
    this.bigEyeTimer=0;
    this.bigEyeCount=0;
    this.bigEyeInterval=1000;
    this.momBodyCount=0;
}
momObj.prototype.init=function () {
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;

}
momObj.prototype.draw=function () {
    this.x =lerpDistance(mx,this.x,0.98);
    this.y =lerpDistance(my,this.y,0.98);
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpDistance(beta, this.angle, 0.6);
    this.bigTailTimer+=deltaTime;
    if(this.bigTailTimer>50){
        this.bigTailCount=(this.bigTailCount+1)%8;
        this.bigTailTimer%=50;
    }
    this.bigEyeTimer+=deltaTime;
    if(this.bigEyeTimer>this.bigEyeInterval){
        this.bigEyeCount=(this.bigEyeCount+1)%2;
        this.bigEyeTimer%=this.bigEyeInterval;
        if(this.bigEyeCount==0){
            this.bigEyeInterval=Math.random()*1000+2000;
        }else {
            this.bigEyeInterval=200;
        }
    }
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var bigTailCount=this.bigTailCount;
    var bigEyeCount=this.bigEyeCount;
    var momBodyCount=this.momBodyCount;
    if(data.double==1){
        ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
    }else{
        ctx1.drawImage(momBodyBlu[momBodyCount],-momBodyBlu[momBodyCount].width*0.5,-momBodyBlu[momBodyCount].height*0.5);
    }


    ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,-bigTail[bigTailCount].height*0.5);
    ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,-bigEye[bigEyeCount].height*0.5);
    ctx1.restore();
    
}