const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clockFace = document.querySelector('.clock-face');
const dgClockFace = document.querySelector('.clock-face-dg');
const dgText = document.querySelector('#dg-clock-number');
const dayDate = document.querySelector('#day-date');
const myWebFont = new FontFace('Josefin Sans', "url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap')",{weight : 'normal', style : 'normal'});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
drawClockCanvas();

function drawClockCanvas(){
    drawCircle(ctx, radius);
    myWebFont.load().then(function(font) {
        document.fonts.add(font);
    })
    drawDotNumbers(ctx, radius);
}

function setDate(){
    const time = new Date();
    const seconds = time.getSeconds();
    const mins = time.getMinutes();
    const hours = time.getHours();
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    if(seconds === 0) {
        secondHand.classList.toggle("resetTransition");
    }else {
        secondHand.classList.remove("resetTransition");
    }

    const minsDeg = ((mins / 60) * 360) + 90 + (seconds * 0.1);
    minHand.style.transform = `rotate(${minsDeg}deg)`;

    const hoursDeg = ((hours / 12) * 360) + 90 + (mins * 0.5);
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    
    
    dgText.innerHTML = `${('0' + hours).slice(-2)}:${('0' + mins).slice(-2)}`

    dayDate.innerHTML = `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`

}

function drawDotNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.fillStyle = "white" // To change numbers color
    ctx.font = `${radius*0.15}px 'Josefin Sans'`; // To change font
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.83);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.83);
      ctx.rotate(-ang);
    }
    ctx.fillStyle = "white" // To change numbers color
    for(num = 1; num < 61; num++){
        ang = num * Math.PI / 30;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.95);
        ctx.beginPath();
        if(num % 5 === 0){
            ctx.fillStyle = "black" // To change numbers color

            ctx.arc(0, 0, 1.7, 0, 2 * Math.PI);
        }else {
            ctx.fillStyle = "white" // To change numbers color

            ctx.arc(0, 0, 1, 0, 2 * Math.PI);
        }
        ctx.fill();
        ctx.translate(0, radius*0.95);
        ctx.rotate(-ang);  
    }
}

function drawCircle(ctx, radius) {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "rgba(0, 238, 255, 0.200)"; // Change to "rgba(...,0.0)" for transparent
    ctx.fill();
}

function setDgClock(e){
    if(e.path[1].className === "clock-face"){
        clockFace.style.display = "none";
        dgClockFace.style.display = "flex";
    } else if(e.path[0].className === "clock-face-dg" || e.path[1].className === "clock-face-dg"){
        dgClockFace.style.display = "none";
        clockFace.style.display = "";
    } else {
        return;
    }
}

window.addEventListener("click", setDgClock)
setInterval(setDate,1000);



