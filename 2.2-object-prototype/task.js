String.prototype.isPalindrome = function () {
  let sameCase = this.toLowerCase();
  sameCase = sameCase.split(" ").join("");
  let strLen = sameCase.length;
  let result = "";

  for (let i = 0; i < strLen; i++) {
    if (sameCase[i] === sameCase[strLen - 1 - i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

console.log("А роза упала на лапу Азора".isPalindrome());

function getAverageMark(marks) {
  if (marks.length === 0) return 0;

  let sum = 0;
  let mark;
  for (mark of marks) {
    sum = sum + mark;
  }
  let roundedAverage = Math.round(sum / marks.length);
  return roundedAverage;
}

//console.log(getAverageMark([2, 3.5, 4]));

/*
function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
 */
