
const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");

const start = document.getElementById('start');
const result = document.querySelector(".result");
const form = document.querySelector('form');

function validateHour(num)
{
    if(num === '')
    {
        alert("Please enter a valid number");
        return;
    }
    if(num < 0 || num > 24)
    {
        {alert("Please enter a valid number");}
        return;
    }

}

function validateMinute(num)
{
    if(num === '')
    {
        alert("Please enter a valid number");
        return;
    }
    if(num < 0 || num > 60)
    {
        alert("Please enter a valid number");
        return;
    }

}


let intervalId , totalSeconds;

function timerLogic(e)
{
    e.preventDefault();
    // console.log("clck event detected");
    validateHour(hour.value);
    validateMinute(min.value);
    validateMinute(sec.value);

    // console.log("Input validated");

    let hours = Number(hour.value);
    let minute = Number(min.value);
    let second = Number(sec.value);

    totalSeconds = (hours*60*60) + (minute*60) + second;

    console.log(totalSeconds);

    start.disabled = true;

     intervalId = setInterval(()=>{  

        if(!isPaused)
        {
            if(totalSeconds === 0)
                {
                    // alert("Timer ended");
                    clearInterval(intervalId);
                    start.disabled = false;
                    return;
                }
                totalSeconds--;
        
                const displayHour = Math.floor(totalSeconds/(60*60));
                const displyMinute = Math.floor((totalSeconds/60)%60);
                const displaySecond = Math.floor(totalSeconds%60);
        
                const result = document.querySelector(".result");
        
                result.innerHTML = `${displayHour} : ${displyMinute} : ${displaySecond}`;
        }
        

    },1000)
}

start.addEventListener('click',timerLogic);

const reset = document.getElementById("res");


reset.addEventListener('click',()=>{

    totalSeconds = 0;
    clearInterval(intervalId);
    result.innerHTML = 'Countdown Reset';
    start.disabled = false;

})

let isPaused = false;

const pause = document.getElementById("pause");

pause.addEventListener("click",(e)=>{

    e.preventDefault();
    isPaused = true;
    clearInterval("intervalId");
    // pause.innerHTML = "Resume";
    const displayHour = Math.floor(totalSeconds/(60*60));
    const displyMinute = Math.floor((totalSeconds/60)%60);
    const displaySecond = Math.floor(totalSeconds%60);

    const result = document.querySelector(".result");

    const resumeButton = document.createElement('button');
    resumeButton.innerHTML = "Resume";
    resumeButton.id = "resume";

    form.appendChild(resumeButton);    

    resumeButton.addEventListener('click',(e)=>{

        e.preventDefault();
    
        isPaused = false;
        form.removeChild(resumeButton);
        timerLogic();
    })

})

