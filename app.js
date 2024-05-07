var min_html = document.getElementById('min')
var seconds_html = document.getElementById('seconds')
var milliSeconds_html = document.getElementById('ms')

var seconds = 0
var milliSeconds =0
var minutes =0

var watchInterval;





function start () { 
    watchInterval = setInterval(function(){
milliSeconds++
if(milliSeconds >= 250){
    seconds++
    milliSeconds = 0
}
if(seconds >= 59){
    minutes++
    seconds = 0
}
    

milliSeconds_html.innerText = milliSeconds 
seconds_html.innerText = seconds < 10 ? '0' +seconds : seconds
min_html.innerText = minutes < 10 ? '0' + +minutes : minutes
} ,1)
}
function stop () {
    clearInterval(watchInterval)
}

function reset() {
    clearInterval(watchInterval)
    seconds = 0
 milliSeconds = 0
 minuter = 0
 min_html.innerText = 0
 seconds_html.innerText = 0
 milliSeconds_html.innerText = 0

}





















