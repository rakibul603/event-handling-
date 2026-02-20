console.log('event file')


// Option 2 to handle event 

function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

function makeRead() {
    document.body.style.backgroundColor = "red"
}

// Option 3 to handle event 

const btnMakeBlue = document.getElementById("btn-blue");
// console.log(btnMakeBlue)

btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

//  option 3: different version 
const btnMakeGreen = document.getElementById("btn-green");
console.log(btnMakeGreen)
btnMakeGreen.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = "green";
}



// Option 4 to handle event 
