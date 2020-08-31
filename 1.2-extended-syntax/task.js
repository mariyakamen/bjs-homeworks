"use strict";

function getResult(a, b, c) {

    let discr = b ** 2 - 4 * a * c;
    let result = [];
    if (discr < 0)
        result = [];
    else if (discr === 0)
        result = [((-b) / 2 * a)];
    else if (discr > 0)
    result = [(((-b) + discr ** (1 / 2)) / 2 * a), (((-b) - discr ** (1 / 2)) / 2 * a)];

    return result;
}

function getAverageMark(marks) {

    if (marks.length === 0)
        return 0;

    else if (marks.length > 5) {
        console.log("Не может быть не больше 5 оценок в массиве");
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    let mark;
    for (mark of marks) {
        sum = sum + mark;
    }
    let averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let message;

    if (age >= 18)
        message = `Не желаете ли олд-фэшн, ${name}?`;
    else
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return message;
}