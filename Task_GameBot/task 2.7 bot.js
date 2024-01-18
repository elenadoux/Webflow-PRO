let minValue;
let maxValue;


const gameBotFunction = function () {
    minValue = +prompt('Задайте минимальное число', 10)
    maxValue = +prompt('Задайте максимальное число',100)
    const randomGenerate = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);   
    }
return randomGenerate(minValue, maxValue);
}

let mysteryNumber = gameBotFunction();
console.log (mysteryNumber);


const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}

function finalResult () {
    let attemptNumber = 1;
    for (attemptNumber = 1; attemptNumber <=3; attemptNumber++) {
        let answer = '';
        while (checkIsNumber(answer) || answer.trim() === '') {
            answer = prompt('Попробуй угадать цифру от 0 до 100')
            console.log(answer)
        }

        if (answer === null) {
            alert('Вы закончили игру');
        }
        if (answer < mysteryNumber) {
           alert ("Твое число меньше, попробуй еще раз. " + 'Количество твоих попыток:' + attemptNumber)
        }  
        if (answer > mysteryNumber) { 
           alert ("Твое число больше, попробуй еще раз. " + 'Количество твоих попыток:' + attemptNumber)
        } 
        if (answer === mysteryNumber) {
            let finalAnswer = confirm ("Ты угадал! Хочешь начать все заново?")
            alert (finalAnswer);
        } 
       
    }
}

finalResult();