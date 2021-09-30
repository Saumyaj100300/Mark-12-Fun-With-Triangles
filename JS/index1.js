const inputs = document.querySelectorAll(".angle-input")
const triangleBtn = document.querySelector("#is-triangle")
const outputDiv = document.querySelector("#output")

function CalculateAngles(angle1, angle2, angle3) {
    const sumAngles = angle1 + angle2  + angle3;
    return sumAngles;
}

function checkTriangle() {
    const sumAngles = CalculateAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    console.log(sumAngles)
    if(sumAngles === 180) {
        outputDiv.innerText = "These angles forms a triangle."
    }
    else {
        outputDiv.innerText = "These angles does not form a triangle."
    }

}

triangleBtn.addEventListener("click", checkTriangle)