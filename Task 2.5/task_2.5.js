

let screenPrice = 12000;
let percentage = 10;

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Укажите тип экрана (шаблонные, с уникальным дизайном, с анимациями)');
let responsiveAnswer = prompt('Нужен ли респонсивный дизайн?');
let responsive = (responsiveAnswer == 'да') ? true : false

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');



let getAllServicePrices = function () {
        return (+servicePrice1 + +servicePrice2);
}

let allServicePrices = getAllServicePrices();

function getFullPrice () {
        return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice();

function getTitle () {
        return finalTitle = titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase;
}
console.log(getTitle());

let discountinfo;

function getRollbackMessage () {
        return discountInfo = (fullPrice>=50000) ? 'Cделаем скидку в 10%' :
                            (fullPrice>=20000&&fullPrice<=40000) ? 'Cделаем скидку в 5%' :
                            (fullPrice<20000&&fullPrice>0) ? 'Скидка не предусмотрена' :
                            (fullPrice<0) ? 'Упс, что-то пошло не так' :
                            (fullPrice==0) ? 'Ну, нам не выгодно брать ваш проект, извините' :
                            'Вот это цена!';
}

let servicePercentPrice;

function getServicePercentPrices () {
        servicePercentPrice = Math.round(fullPrice - fullPrice*(percentage/100));
        return servicePercentPrice
}

function  showTypeOf () {
        console.log(typeof fullPrice)
}

showTypeOf();

console.log(screensValue, getRollbackMessage(),getServicePercentPrices() )

