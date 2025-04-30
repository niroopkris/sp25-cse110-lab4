function printDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(printDate, 1000);

