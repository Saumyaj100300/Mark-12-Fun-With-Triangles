const sides =  document.querySelectorAll(".input")
const hypotenuseBtn = document.querySelector("#hypotenuse")
const outputDiv = document.querySelector("#output")

function calculateSquaresOfSides(p, b) {
    const sumOfSquares = p*p + b*b
    return sumOfSquares;
}

function checkHypotenuse() {
    if(Number(sides[0].value)>0 && Number(sides[1].value)>0) {
    const sumOfSquares = calculateSquaresOfSides(Number(sides[0].value), Number(sides[1].value ))
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    outputDiv.innerText =  "The length of Hypotenuse is " + hypotenuseLength + " cm."
    } else {
    outputDiv.innerText = "Enter positive values"
    }
    
}


hypotenuseBtn.addEventListener("click", checkHypotenuse)