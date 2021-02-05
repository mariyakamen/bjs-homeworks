"use strict";

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let x1;
  let x2;
  let roots;

  if (D < 0) {
    roots = [];
  } else if (D === 0) {
    x1 = -b / (2 * a);
    roots = [x1];
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots = [x1, x2];
  }

  return {
    D,
    roots,
  };
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  let message;

  console.log("Вычисляем корни квадратного уравнения ax² + bx + c");
  console.log(`Значение дискриминанта: D =  ${result.D}`);

  if (result.D < 0) {
    message = "Уравнение не имеет вещественных корней";
  } else if (result.D === 0) {
    message = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  } else if (result.D > 0) {
    message = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  }

  return message;
}

console.log(showSolutionsMessage(1, 2, 3));
console.log(showSolutionsMessage(7, 20, -3));
console.log(showSolutionsMessage(2, 4, 2));

/*********************************************/

function getAverageMark(marks) {
  if (marks.length === 0) return 0;

  let sum = 0;
  let mark;
  for (mark of marks) {
    sum = sum + mark;
  }
  let averageMark = sum / marks.length;

  return averageMark;
}

//console.log(getAverageMark([2, 3, 4]));

function getAverageScore(data) {
  if (Object.keys(data).length === 0) {
    data["average"] = 0;

    return data;
  }
  let array = [];

  for (let subject in data) {
    let value = data[subject];
    data[subject] = getAverageMark(value);

    let subAverage = data[subject];
    array.push(subAverage);
    data["average"] = getAverageMark(array);
  }

  let totalAverage = data;
  return totalAverage;
}

/*let obj = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4],
};*/

let obj = {};

console.log(getAverageScore(obj));
