

//получаем два рандомных числа до 10
let rand1 = Math.floor(Math.random()*11);
let rand2 = Math.floor(Math.random()*11);

//возводим первое число в квадратную степень
let num1 = rand1 ** 2;
//увеличиваем второе число на 50
let num2 = rand2 + 50;
//сравниваем для нахождения большего и меньшего числа
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);
//разделяем большее число на меньшее, и округлим до большего значения
let otv =Math.ceil(max/min);

//проверяем
console.log("первое рандомное число = " + rand1);
console.log("второе рандомное число = " + rand2);
console.log("первое в квадрате = " + num1);
console.log("второе увеличеное на 50 = " + num2);
console.log("большее число = " + max);
console.log("меньшее число = " + min);
console.log("большее деленное на меньшее = " + otv);
