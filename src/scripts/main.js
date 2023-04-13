'use strict';

const list = document.body.children[1];

const employees = [];

function salaryToNumber(salary) {
  const slaryArray = salary.slice(1).split(',');
  let result = '';

  for (const element of slaryArray) {
    result += element;
  }

  return +result;
}

function toFormat(data) {
  let resultString = data.toString();
  const result = [];

  do {
    if (resultString.length % 3 !== 0) {
      result.push(resultString.slice(0, resultString.length % 3));
      resultString = resultString.slice(resultString.length % 3);
    }
    result.push(resultString.slice(0, 3));
    resultString = resultString.slice(3);
  } while (resultString.length > 0);

  return '$' + result.join(',');
}

for (const employee of list.children) {
  const employeeObject = {};

  employeeObject.name = employee.innerText;
  employeeObject.position = employee.dataset.position;
  employeeObject.salary = salaryToNumber(employee.dataset.salary);
  employeeObject.age = employee.dataset.age;

  employees.push(employeeObject);
}

const sortedBySalary = employees.sort((a, b) => b.salary - a.salary);

for (let i = 0; i < list.children.length; i++) {
  list.children[i].innerHTML = sortedBySalary[i].name;
  list.children[i].dataset.position = sortedBySalary[i].position;
  list.children[i].dataset.salary = toFormat(sortedBySalary[i].salary);
  list.children[i].dataset.age = sortedBySalary[i].age;
}
