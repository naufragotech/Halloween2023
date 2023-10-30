const pumpkin = document.getElementById("pumpkin");

function flashPumpkin() {

    setInterval(() => {
        pumpkin.classList.add("illuminate");

        const timer = Math.floor(Math.random() * 2500 + 1);

        setTimeout(() => {
            pumpkin.classList.remove("illuminate");
        }, timer);

    }, 500);

}


window.onload = flashPumpkin;