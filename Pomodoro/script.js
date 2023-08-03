const currentTime = document.querySelector('#current-time'); // current time for timer
const timers = document.querySelectorAll('.timer-name'); // selects all timer options
const timerArea = document.querySelector('#timers'); // selects timer AREA

timerArea.addEventListener('click', function(event) {
    // if user clicked outside of a timer option (Focus, Short Break, Long Break)
    if (!event.target.classList.contains('timer-name') || event.target.classList.contains('selected')) {
        return;
    } else {
        // if user clicked on an already selected option
        for (let i = 0; i < timers.length; i++) { // find the current selected element and un-select it
            if (timers[i].classList.contains('selected')) {
                timers[i].classList.toggle('selected');
            }
        }
        event.target.classList.add('selected'); // clicked element becomes selected
    }

    // set default times for each option
    if (event.target.classList.contains('focus')) {
        currentTime.innerHTML = '25:00';
    } else if (event.target.classList.contains('short')) {
        currentTime.innerHTML = '5:00';
    } else if (event.target.classList.contains('long')) {
        currentTime.innerHTML = '15:00';
    }
});