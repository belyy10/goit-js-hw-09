const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timeoutId = null;
startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener('click',changeColor)
stopBtn.addEventListener('click',stopChangeColor)

function changeColor(e) {
    e.preventDefault();
    timeoutId = setInterval(function(){
        bodyRef.style.backgroundColor = getRandomHexColor();
    },2000);
    stopBtn.disabled = false;
    startBtn.disabled = true;
}
function stopChangeColor(e) {
    e.preventDefault()
    clearInterval(timeoutId)
    startBtn.disabled = false;
    
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }