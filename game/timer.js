function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            alert("Time's up, you lost. Start over?");
            timer = duration;
            init(1);
        }
    }, 1000);
}

jQuery(function ($) {
    var threeMinutes = 60 * 3,
        display = $('#timeLbl');
    startTimer(threeMinutes, display);
});
