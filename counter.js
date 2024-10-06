let userInputStartValue = document.getElementById('fromUserInput');
let userInputEndValue = document.getElementById('toUserInput');
let startButton = document.getElementById('startBtn');
let counterValue = document.getElementById('counterText');
let intervalId = null;  // Store the interval ID globally

function start() {
    // Validate input values
    if (userInputStartValue.value === '') {
        alert('Please enter the start value.');
        return;
    } else if (userInputEndValue.value === '') {
        alert('Please enter the end value.');
        return;
    }

    let startValue = parseInt(userInputStartValue.value);
    let endValue = parseInt(userInputEndValue.value);

    // Check if the start value is less than the end value
    if (startValue >= endValue) {
        alert('Start value should be less than the end value.');
        return;
    }

    // Prevent starting the timer if it's already running
    if (intervalId !== null) {
        return;  // Exit the function if the timer is already running
    }

    // Set the counter value to the start value
    counterValue.textContent = startValue;

    // Increment the counter every second until it reaches the end value
    let currentValue = startValue;
    intervalId = setInterval(function() {
        currentValue += 1;
        counterValue.textContent = currentValue;

        if (currentValue >= endValue) {
            clearInterval(intervalId);  // Stop the counter when it reaches the end value
            intervalId = null;  // Reset the interval ID to allow restarting the timer
        }
    }, 1000);
}

startButton.addEventListener('click', start);
