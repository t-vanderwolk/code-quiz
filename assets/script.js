
    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = `Time:${secondsLeft}s`;
    
            if (secondsLeft === 0 || questionCount === questions.length) {
                clearInterval(timerInterval);
                questionsEl.style.display = "none";
                finalEl.style.display = "block";
                scoreEl.textContent = secondsLeft;
            }
        }, 1000);
    }

}
