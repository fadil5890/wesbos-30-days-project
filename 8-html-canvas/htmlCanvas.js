const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 8;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let saturation = 50;
let direction = true;

function draw(e){
    if(!isDrawing) return; //stop the fn when mouse down not click
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, ${saturation}%, 50%)`;
    ctx.moveTo(lastX,lastY);            //start from
    ctx.lineTo(e.offsetX,e.offsetY);    //go to
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue > 360)hue = 0;
    saturation++;
    ctx.lineWidth++;
    // lineWidth going backwards
    // 
    // if (ctx.lineWidth > 300 || ctx.lineWidth < 8){
    //     direction = !direction;
    // }
    // if(direction){
    //     ctx.lineWidth++;
    // }else {
    //     ctx.lineWidth--;
    // }
}

function reset() {
    isDrawing = false;
    ctx.lineWidth = 8;
}

canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',reset)
canvas.addEventListener('mouseout',reset)