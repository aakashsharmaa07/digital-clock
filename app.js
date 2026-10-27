let time = document.querySelector("#clockDisplay");


setInterval(() => {
    let date = new Date();

    let hour = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    
    time.innerText=`${hour}:${minutes}:${seconds}`;
}, 1000);