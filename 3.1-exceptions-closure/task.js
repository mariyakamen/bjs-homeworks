function parseCount(goods) {
  const _goods = Number.parseInt(goods);

  if (isNaN(_goods)) {
    throw new Error("Невалидное значение");
  }
  return _goods;
}

function validateCount(goods) {
  try {
    parseCount(goods);
  } catch (e) {
    return e;
  }

  const _goods = parseCount(goods);

  return _goods;
}
//console.log(parseCount(03));
//console.log(parseCount("gg"));
//console.log(validateCount(04));
//console.log(validateCount("dg"));

/******************************************************************** */

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    const newArray = [a, b, c];
    newArray.sort((a, b) => a - b);
    if (newArray[0] + newArray[1] < newArray[2]) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    const perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const geronArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(geronArea * 1000) / 1000;
  }
}

function getTriangle(a, b, c) {
  const nonTriangle = {
    getPerimeter: () => "Ошибка! Треугольник не существует",
    getArea: () => "Ошибка! Треугольник не существует",
  };

  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return nonTriangle;
  }
}

//const treu = new Triangle(2, 3, 4);
//console.log(treu.getPerimeter());
//console.log(treu.getArea());
