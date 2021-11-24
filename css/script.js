var x = 0;
var sum = 0;
function skizb(){
    document.getElementById("prev").disabled = true;
    document.getElementById("prev1").disabled = true;
    document.getElementById("prev2").disabled = true;
    document.getElementById("prev3").disabled = true;
    document.getElementById("prev4").disabled = true;
    document.getElementById("prev5").disabled = true;
    document.getElementById("prev6").disabled = true;
}
function next(){
    x++;
    sum+=1500;
    document.querySelector(".nxt").innerHTML = x;
    document.querySelector(".sum").innerHTML = sum;
    document.getElementById("prev").disabled = false;
}
function prev(){
    x--
    if(x == 0) {
        x = 0;
        document.getElementById("prev").disabled = true;
    }

    sum-=1500;
    document.querySelector(".nxt").innerHTML = x;
    document.querySelector(".sum").innerHTML = sum;
}


var y = 0;
var sum1 = 0;

function next1(){
    y++;
    sum1+=2000;
    document.querySelector(".nxt1").innerHTML = y;
    document.querySelector(".sum1").innerHTML = sum1;
    document.getElementById("prev1").disabled = false;
}
function prev1(){
    y--
    if(y == 0) {
        y = 0;
        document.getElementById("prev1").disabled = true;
    }

    sum1-=2000;
    document.querySelector(".nxt1").innerHTML = y;
    document.querySelector(".sum1").innerHTML = sum1;
}


var c = 0;
var sum2 = 0;

function next2(){
    c++;
    sum2+=2500;
    document.querySelector(".nxt2").innerHTML = c;
    document.querySelector(".sum2").innerHTML = sum2;
    document.getElementById("prev2").disabled = false;
}
function prev2(){
    c--;
    if(c == 0) {
        c = 0;
        document.getElementById("prev2").disabled = true;
    }

    sum2-=2500;
    document.querySelector(".nxt2").innerHTML = c;
    document.querySelector(".sum2").innerHTML = sum2;
}


var g = 0;
var sum3 = 0;

function next3(){
    g++;
    sum3+=15000;
    document.querySelector(".nxt3").innerHTML = g;
    document.querySelector(".sum3").innerHTML = sum3;
    document.getElementById("prev3").disabled = false;
}
function prev3(){
    g--;
    if(g == 0){
        g = 0;
        document.getElementById("prev3").disabled = true;
    }
    
    sum3-=15000;
    document.querySelector(".nxt3").innerHTML = g;
    document.querySelector(".sum3").innerHTML = sum3;
}