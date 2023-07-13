const button = document.querySelector (".btn");
button.addEventListener ("click", result);

function result(e) {
    e.preventDefault()
    let points = 0;
    if(document.querySelector("#answer1").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer2").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer3").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer4").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer5").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer6").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer7").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer8").checked) {
        points += 100/9;
    }
    if(document.querySelector("#answer9").checked) {
        points += 100/9;
    }
    
    

const par = document.querySelector ("#show")
par.textContent = "Ваш результат " + points.toFixed(0) + " %"


}

gsap.from("img", {rotation: -360, x: -100, duration: 1.2});