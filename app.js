let time = document.querySelector("#clockDisplay");

setInterval(() => {
    let date = new Date();

    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    time.innerText = `${hour}:${minutes}:${seconds}`;
}, 1000);