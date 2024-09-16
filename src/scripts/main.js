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
  sortedList.map((li, i) => {
    list[i].textContent = li.name;
    list[i].dataset.position = li.position;
    list[i].dataset.salary = '$' + li.salary.toLocaleString('en-Us');
    list[i].dataset.age = li.age;
  });
}

const nodeList = document.querySelectorAll('li');
const employees = getEmployees(nodeList);

sortList(employees);

setEmployees(nodeList, employees);
