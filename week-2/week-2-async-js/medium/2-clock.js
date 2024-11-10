function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}


function clock()
{
const date = new Date(); // Current date and time
const formattedTime = formatTime(date);
console.log(formattedTime); // Outputs in the format HH:MM:SS AM/PM

}

setInterval(clock,1000)

