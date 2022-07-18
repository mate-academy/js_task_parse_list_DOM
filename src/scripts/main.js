'use strict';

function getEmployees(list) {
  const result = [];

  for (const employee of list) {
    result.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: +employee.dataset.salary.replace(/\$|,/g, ''),
      age: employee.dataset.age,
    });
  }

  return result;
}

function sortList(list) {
  list.sort((a, b) => b.salary - a.salary);
}

function setEmployees(list, sortedList) {
  for (let i = 0; i < list.length; i++) {
    list[i].textContent = sortedList[i].name;
    list[i].dataset.position = sortedList[i].position;
    list[i].dataset.salary = '$' + sortedList[i].salary.toLocaleString('en-Us');
    list[i].dataset.age = sortedList[i].age;
  }
}

const nodeList = document.querySelectorAll('li');
const employees = getEmployees(nodeList);

sortList(employees);

setEmployees(nodeList, employees);
