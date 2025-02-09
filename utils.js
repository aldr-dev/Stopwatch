document.addEventListener('DOMContentLoaded', () => {
    let interval;
    let seconds = 0;
    let minutes = 0;

    const zeroFill = (number, width) => {
        let string = String(number);
        while (string.length < width) {
            string = '0' + string;
        }
        return string;
    };

    const updateCount = () => {
        const secondsElement = document.getElementById('seconds');
        const minutesElement = document.getElementById('minutes');
        secondsElement.innerText = `${zeroFill(seconds, 2)}`;
        minutesElement.innerText = `${zeroFill(minutes, 2)}`;
    };

    const updateTimer = () => {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateCount();
        }, 1000);
    };

    const startTimer = document.getElementById('start');
    startTimer.addEventListener('click', () => {
        updateTimer();
        startTimer.disabled = true;
    });

    const pauseTimer = document.getElementById('pause');
    pauseTimer.addEventListener('click', () => {
        clearInterval(interval);
        startTimer.disabled = false;
    });

    const resetTimer = document.getElementById('reset');
    resetTimer.addEventListener('click', () => {
        seconds = 0;
        minutes = 0;
        updateCount();
        clearInterval(interval);
        startTimer.disabled = false;
    });
});

