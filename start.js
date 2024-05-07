function start() {
    watchInterval = setInterval(function () {
        milliSeconds++;
        if (milliSeconds >= 999) {
            seconds++;
            milliSeconds = 0;
        }
        if (seconds >= 59) {
            minutes++;
            seconds = 0;
        }


        milliSeconds_html.innerText = milliSeconds;
        seconds_html.innerText = seconds;
        milliSeconds_html.innerText = minutes;
    }, 1);
}
