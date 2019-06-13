window.onload = function(){
var oPrev = document.getElementById("prev"),
    oNext = document.getElementById("next"),
    oMain = document.getElementsByClassName("main")[0];
    ocontainer = document.getElementsByClassName("container")[0];
var oList = document.getElementsByClassName("list")[0],
    oLi = document.getElementsByTagName("li");

var timer,timer2,
    oLilength = oLi.length,
    index = 0,
    flag = true;
function moveImg(dis){
        flag = false;
        var time=400;
        var eachTime=20;
        var eachDis=dis/(time/eachTime);
        var newLeft = oMain.offsetLeft+dis;
        function eachMove() { 
            if ( dis > 0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft) {
                 oMain.style.left = oMain.offsetLeft + eachDis +"px";
            }else{
                clearInterval(timer);
                oMain.style.left = newLeft+"px";
                if (newLeft == -3060) {
                    oMain.style.left = -510 +"px";
                }
                if (newLeft == 0) {
                    oMain.style.left = -2550 + "px";
                }
                flag = true;
            }
        }
        timer = setInterval(eachMove,eachTime);
    }

oPrev.onclick = function () {
    if ( flag = false) return;
    moveImg(510);
    if (index == 0) {
        index = 4;
    }else{
        index--;
    }
    oListyle();
}
oNext.onclick = function () {
    if ( flag = false) return;
    moveImg(-510);
    if (index == 4) {
        index = 0;
    }else{
        index++;
    }
    oListyle();
}
function oListyle() {
    oList.getElementsByClassName("active")[0].className = "";
    oLi[index].className = "active";
}
for( var i=0;i<oLilength;i++){
    (function (j) {
        oLi[i].onclick=function(){
            var offset = (i-index)* -510;
            moveImg(offset);
            index = i;
            oListyle();
         }
    })(i)
}
timer2 = setInterval(oNext.onclick,2000);
ocontainer.onmouseover = function(){
    clearInterval(timer2);
}
ocontainer.onmouseout = function(){
    timer2 = setInterval(oNext.onclick,2000);
}
}