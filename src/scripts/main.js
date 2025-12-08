'use strict';

const listNodes = document.querySelectorAll('li');

class Employee {
  constructor(nameEmployee, position, salary, age) {
    this.name = nameEmployee;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

// write code here
function sortList(list) {
  const copiedList = [...list];

  copiedList.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  // allList.children[0].before(...copiedList)
  list[0].parentNode.append(...copiedList);
}

function getEmployees(list) {
  const employeeObjects = [];

  list.forEach((i) => {
    employeeObjects.push(
      new Employee(
        i.innerText,
        i.dataset.position,
        parseSalary(i.dataset.salary),
        +i.dataset.age,
      ),
    );
  });

  return employeeObjects;
}

function parseSalary(salaryString) {
  const regexp = /\d+/g;

  return +salaryString.match(regexp).join('');
}

sortList(listNodes);

getEmployees(listNodes);
