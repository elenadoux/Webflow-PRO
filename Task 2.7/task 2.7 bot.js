let attempts = 3;

const randomGenerate = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);   
}

const gameBotFunction = function () {
    minValue = +prompt('Задайте минимальное число', 10)
    maxValue = +prompt('Задайте максимальное число',100)
    return randomGenerate(minValue, maxValue);
}

let mysteryNumber = gameBotFunction();
console.log (mysteryNumber);


const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}


function finalResult () {
    function getResult() {
        while (attempts>0) {
            let answer = prompt('Попробуй угадать цифру от 0 до 100')

            if (answer === null) {
                alert('Вы закончили игру');
                return;
             } 

            while (!checkIsNumber(answer) || answer.trim() === '') {
            answer = prompt('Попробуй угадать цифру от 0 до 100')
             }
        
            answer = parseInt(answer);

            if (answer < mysteryNumber) {
                alert ("Твое число меньше, попробуй еще раз. " + 'Количество оставшихся попыток:' + attempts)
            } else if (answer > mysteryNumber) { 
                alert ("Твое число больше, попробуй еще раз. " + 'Количество оставшихся попыток:' + attempts)
            } else {
                const askToContinue = confirm("Ты угадал! Хочешь начать все заново?") 
                if (askToContinue === true) {
                    attempts = attempts + 3;
                    mysteryNumber = gameBotFunction();
                } else {
                    alert("Вы закончили игру")
                    return;
                }
            }
        attempts--;
        }
    const tryAgain = confirm('Попытки закончились. Хотите попробовать снова?');
        if (tryAgain === true) {
            attempts = 3;
            mysteryNumber = gameBotFunction();
            getResult();
        } else {
            alert('Вы завершили игру');
        }

    }
    getResult();
}   


finalResult();
