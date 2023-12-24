let randomNumber = Math.floor(Math.random() * 10);
// console.log(random);
let guessNumber = document.getElementById('num')
let enteredNumber = guessNumber.value;
let result = document.getElementById('result');
let score = document.getElementById('score');
let totalscore = 10;

function check() {
    if (randomNumber = enteredNumber) {
        result.textContent = "you are right";
        alert("you won...");
    }
    else {
        totalscore = totalscore - 1;
        score.textContent = `score ${totalscore}`;
        result.textContent = "you are wrong";
    }

}
