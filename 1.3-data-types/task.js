"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof (percent) !== typeof (1) || isNaN(percent)) {
        let message = "ПРОЦЕНТ ДОЛЖЕН БЫТЬ ЧИСЛОМ!";
        console.log(message);
        return message;
    } else if (typeof (contribution) !== typeof (1) || isNaN(contribution)) {
        let message = "НАЧАЛЬНЫЙ ВЗНОС ДОЛЖЕН БЫТЬ ЧИСЛОМ!";
        console.log(message);
        return message;
    } else if (typeof (amount) !== typeof (1) || isNaN(amount)) {
        let message = "ОБЩАЯ СТОИМОСТЬ ДОЛЖНА БЫТЬ ЧИСЛОМ!";
        console.log(message);
        return message;
    } else if ((typeof (date) !== typeof (new Date())) || date.toString() === "Invalid Date") {
        let message = "УКАЖИТЕ ДАТУ";
        console.log(message);
        return message;
    }

    let returnAmount = amount - contribution;
    let nowYear = new Date().getFullYear();
    let nowMonth = new Date().getMonth();
    let n = (date.getFullYear() - nowYear) * 12 + (date.getMonth() - nowMonth);
    let P = percent / 100 / 12;
    let totalAmount = n * (returnAmount * (P + P / (((1 + P) ** n) - 1)));

    totalAmount = totalAmount.toFixed(2);
    console.log(totalAmount);

    return Number(totalAmount);

}

function getGreeting(name) {
    let greeting;

    if (name)
        greeting = (`Привет, мир! Меня зовут ${name}`);

    else
        greeting = (`Привет, мир! Меня зовут Аноним`);

    console.log(greeting);


    return greeting;
}