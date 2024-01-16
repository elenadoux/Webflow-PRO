

let screenPrice = 12000;
let percentage = 10;
let allServicePrices;
let discountinfo;
let finalTitle = '';
let servicePercentPrice;
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;
let fullPrice;


const checkIsNumber = function(x) {
        return !isNaN(parseFloat(x)) && isFinite(x)
}

const asking = function () {
    titleProject = prompt('Название проекта?');
    screensValue = prompt('Укажите тип экрана (шаблонные, с уникальным дизайном, с анимациями)');
    responsive = prompt('Нужен ли респонсив на сайте?');
}

asking();

// let service1 = prompt('Какой сервис нужен?');
// let servicePrice1 = prompt('Сколько это будет стоить?');
// let service2 = prompt('Какой еще сервис тебе нужен?');
// let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');



const getAllServicePrices = function () {
        let sum = 0

        for (let i = 0; i <2; i++) {

                if (i === 0) {
                        service1 = prompt ('Какой сервис нужен?')
                } else if (i === 1) {
                        service2 = prompt ('Какой еще сервис нужен?')
                }
                
        let textFromPrompt = '';
        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
                textFromPrompt = prompt('Сколько это будет стоить?')
        }
        sum = sum + Number(textFromPrompt)
        }

return sum
}


function getFullPrice () {
        return screenPrice + allServicePrices;
}

function getTitle () {
        return finalTitle = titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
console.log(getTitle());


function getRollbackMessage () {
        return (fullPrice>=50000) ? 'Cделаем скидку в 10%' :
                            (fullPrice>=20000&&fullPrice<=40000) ? 'Cделаем скидку в 5%' :
                            (fullPrice<20000&&fullPrice>0) ? 'Скидка не предусмотрена' :
                            (fullPrice<0) ? 'Упс, что-то пошло не так' :
                            (fullPrice==0) ? 'Ну, нам не выгодно брать ваш проект, извините' :
                            'Вот это цена!';
}


function getServicePercentPrices () {
       return (Math.round(fullPrice - fullPrice*(percentage/100)))
}


console.log(screensValue, getRollbackMessage(),getServicePercentPrices() )


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
finalTitle = getTitle ();
discountInfo = getRollbackMessage();