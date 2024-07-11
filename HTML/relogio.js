const hoursElement = document.getElementById('horas')
const minutesElement = document.getElementById('minutos')
const secondsElement = document.getElementById('segundos')

function newTime(){

const date = new Date();

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

hoursElement.textContent = fixTime(hours)
minutesElement.textContent = fixTime(minutes)
secondsElement.textContent = fixTime(seconds)
}

function fixTime(time){
    return time < 10 ? '0'+time : time
}
setInterval(newTime, 1000)
