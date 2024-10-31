'use strict';

const employeeItems = document.querySelectorAll('li');
const list = [];

for (const employeeItem of employeeItems) {
  list.push({
    namePerson: employeeItem.textContent.trim(),
    position: employeeItem.dataset.position,
    salary: +employeeItem.dataset.salary.replace(/[$,]/g, ''),
    age: +employeeItem.dataset.age,
  });
}

function sortList(sortedList) {
  return sortedList.sort((first, second) => second.salary - first.salary);
}

sortList(list);

function getEmployees(empList) {
  for (let i = 0; i < empList.length; i++) {
    employeeItems[i].innerText = empList[i].namePerson;
  }
}

getEmployees(list);
