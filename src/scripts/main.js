'use strict';
class Employee {
  constructor(personName, position, salary, age) {
    this.name = personName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

const [...elementsList] = document.getElementsByTagName('li');
const elementsArr = elementsList.map(element => element.dataset);
const namesArr = elementsList.map((element) =>
  element.textContent.split('\n').join('').trim());

for (let i = 0; i < namesArr.length; i++) {
  elementsArr[i].name = namesArr[i];
}

function toNumber(string) {
  const number = +string.split('$').join('').split(',').join('');

  return number;
};

function sortList(list) {
  list.sort((a, b) => toNumber(b.salary) - toNumber(a.salary));

  return list;
};

function getEmployees(list) {
  const employeeArr = [];

  list.forEach(element => {
    employeeArr
      .push(new Employee(
        element.name, element.position, element.salary, element.age
      ));
  });

  for (let i = 0; i < elementsList.length; i++) {
    elementsList[i].textContent = employeeArr[i].name;
    elementsList[i].setAttribute('data-name', employeeArr[i].name);
    elementsList[i].setAttribute('data-position', employeeArr[i].position);
    elementsList[i].setAttribute('data-age', employeeArr[i].age);
    elementsList[i].setAttribute('data-salary', employeeArr[i].salary);
  };
};

sortList(elementsArr);
getEmployees(elementsArr);
