let screenPrice = 12000;
let percentage = 10;

let titleProject = prompt('Название проекта?');
console.log('Название:' + titleProject);
let screensValue = prompt('Укажите тип экрана (шаблонные, с уникальным дизайном, с анимациями)');
console.log('Тип экрана:' + screensValue);
let responsiveAnswer = prompt('Нужен ли респонсивный дизайн?');
console.log('Нужен ли респонсив:' + responsiveAnswer);
let responsive = (responsiveAnswer == 'да') ? true : false
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log('Сервис 1:' + service1);
let servicePrice1 = prompt('Сколько это будет стоить?');
console.log('Цена сервис 1:' + servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?');
console.log('Сервис 2:' + service2);
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');
console.log('Цена сервис 2:' + servicePrice2);

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;
console.log('Вся цена:' + fullPrice);
let servicePercentPrice = Math.round(fullPrice - fullPrice*(percentage/100));

console.log(servicePercentPrice);

let discountInfo_option01;

if (fullPrice>=50000) {
        discountInfo_option01 = 'Cделаем скидку в 10%';
} else if (fullPrice>=20000&&fullPrice<=40000) {
        discountInfo_option01 = 'Cделаем скидку в 5%';
} else if (fullPrice<20000&&fullPrice>0) {
        discountInfo_option01 = 'Скидка не предусмотрена';
} else if (fullPrice<0) {
        discountInfo_option01 = 'Упс, что-то пошло не так';
} else if (fullPrice==0) {
        discountInfo_option01 = 'Ну, нам не выгодно брать ваш проект, извините';
} else {
        discountInfo_option01 = 'Вот это цена!'
};

console.log(discountInfo_option01);

let discountInfo_option02 = (fullPrice>=50000) ? 'Cделаем скидку в 10%' :
                            (fullPrice>=20000&&fullPrice<=40000) ? 'Cделаем скидку в 5%' :
                            (fullPrice<20000&&fullPrice>0) ? 'Скидка не предусмотрена' :
                            (fullPrice<0) ? 'Упс, что-то пошло не так' :
                            (fullPrice==0) ? 'Ну, нам не выгодно брать ваш проект, извините' :
                            'Вот это цена!';

console.log(discountInfo_option02);