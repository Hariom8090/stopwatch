 <script>
        let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn =document.getElementById('stopBtn');
let startBtn= document.getElementById('startBtn');
let ResetBtn =document.getElementById('ResetBtn');

let msecs = 00;
let secs = 00;
let mins = 00;
let timerId = null;

startBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId =setInterval(startTimer,10)
});
stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});

ResetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00` ;
    msecs = secs = mins = 00;
});

function startTimer(){
    msecs++;
    if(msecs == 100){
        msecs=0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;
        }
    }
    let msecsString = msecs < 10 ? `0${msecs}`:msecs;
    let secsString = secs < 10 ? `0${secs}`:secs;
    let minsString = mins < 10 ? `0${mins}`:mins;

    timerDisplay.innerHTML = `${minsString}  : ${secsString}
     :${msecsString} `;
}
    </script>
