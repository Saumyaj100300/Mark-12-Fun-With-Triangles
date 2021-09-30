const sides = document.querySelectorAll(".sides")
const areaBtn = document.querySelector("#calculate-area")
const outputDiv = document.querySelector("#output")

function calculateProductOfSides(b, h) {
    const productOfSides = b * h;
    return productOfSides;
}

function calculateArea() {
    if(Number(sides[0].value)>0 && Number(sides[1].value)>0) {
    const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value))
    const area  = productOfSides * 1/2;
    outputDiv.innerText = "The area of triangle is " + area + " cm square units." ;
    } else {
    outputDiv.innerText = "Enter positive values"
    }
}

areaBtn.addEventListener("click", calculateArea)