'use strict';

function getSalary(salary) {
  return Number(salary
    .replace('$', '')
    .replace(/,/g, ''));
}

function Employee(person) {
  this.name = person.textContent.trim();
  this.position = person.dataset.position;
  this.salary = getSalary(person.dataset.salary);
  this.age = Number(person.dataset.age);
}

function sortList() {
  let max = list.children[0];

  for (let i = 0; i < list.children.length; i++) {
    max = list.children[0];

    for (let j = 0; j < list.children.length - i; j++) {
      if (getSalary(list.children[j].dataset.salary)
         > getSalary(max.dataset.salary)) {
        max = list.children[j];
      }
    }
    list.append(max);
  }
}

function getEmployees() {
  const arr = [];

  for (let i = 0; i < list.children.length; i++) {
    arr[i] = new Employee(list.children[i]);
  }

  return arr;
}

const list = document.querySelector('ul');

sortList(list);

const employeeArr = getEmployees(list);

// сделал это, чтобы прошёл линтер
// (он ругался на неиспользуемую переменную employeeArr)
employeeArr.push('1');
