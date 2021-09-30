const quizForm = document.querySelector(".quiz");
const answerbtn = document.querySelector("#answer-btn");
const output = document.querySelector(".output")

const answers = ["Equilateral Triangle", "Both", "Obtuse Angle", "Hypotenuse", "60°"]

function scoreCalculator() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === answers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is " + score +".";

}


answerbtn.addEventListener("click", scoreCalculator)