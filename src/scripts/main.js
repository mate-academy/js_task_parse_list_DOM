'use strict';

let list = document.body.querySelectorAll('li');

function sortList(item) {
  const result = [...item].sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  return result;
};

list = sortList(list);

function getEmployees(item) {
  const resultArr = [];

  for (const person of item) {
    const obj = {};

    obj.name = person.innerText;
    obj.position = person.dataset.position;
    obj.salary = person.dataset.salary;
    obj.age = person.dataset.age;

    resultArr.push(obj);
  }

  return resultArr;
};

sortList(list);
getEmployees(list);

function salaryToNumber(money) {
  return +money.slice(1).split(',').join('');
}
