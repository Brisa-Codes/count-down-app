//variables Time, Promotime, Days, Hours, Minutes, Seconds

//statements if it's greater or less than 0 what will happen
//function starting the countdown

let time = 150; // time in Minutes

let promoTime = time * 60; // seconds

let counting = document.getElementById("countdown");

//let's write the function

function startCountDown() {
    let promoTimer = setInterval(function() {
        if(promoTime <= 0) {
            counting.innerHTML = "Countdown has ended!";
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24); 
            const hours = Math.floor(promoTime / 3600)  % 24;
            const min = Math.floor(promoTime / 60) % 60;
            const sec = Math.floor(promoTime % 60);

            counting.innerHTML = `TIME: ${addzero(hours)} hours : ${addzero(min)} minutes : ${addzero(sec)} seconds`
            counting.style.fontSize = "24px"; 
        }

    }, 1000);

}

function addzero(t) {
    if(t < 10) {
        return `0${t}`;
    } else {
        return t;
    }

}

startCountDown();