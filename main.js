var lastX, lastY;

var color = "black";
widthLine = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width
console.log(width);

if (width < 992) {
    console.log("reducing");
    canvas.width = screen.width - 70;
    canvas.height = screen.height - 300;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchstart);
canvas.addEventListener("touchmove", myTouchmove);

function myTouchstart(e) {
    console.log("touchstart");
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
    console.log(e.touches);
}

function myTouchmove(e) {
    console.log("touchmove");
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = document.getElementById("colorInput").value;
    ctx.lineWidth = document.getElementById("widthInput").value;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}