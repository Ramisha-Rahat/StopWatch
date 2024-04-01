let [seconds,minutes,hours]=[0,0,0];
let displayTime=document.getElementById("display-time");
let timer=null;

function stopwatch(){
   seconds++;
   if(seconds == 60){
    seconds=0;
    minutes++;
    if(minutes == 60){
        minutes=0;
        hours++;
    }
}
    displayTime.innerHTML=seconds+":"+minutes+":"+hours;

}

function Pause(){
    clearInterval(timer);
}

function Play(){
    if(timer!==0){
        clearInterval(timer);
    timer=setInterval(stopwatch,1000);
    }
}

function Restart(){
   clearInterval(timer);
   [seconds, minutes,hours]=[0,0,0];
   displayTime.innerHTML="00:00:00";
}