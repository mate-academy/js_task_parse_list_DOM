'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');
const sortedList = sortList(listOfEmployees);
const objList = getEmployees(listOfEmployees);

sortedList.forEach(person => listOfEmployees.append(person));

function sortList(list) {
  return [...list.children].sort(sort);

  function sort(a, b) {
    return strToNumber(b.dataset.salary) - strToNumber(a.dataset.salary);
  }
};

function strToNumber(string) {
  return string.replace('$', '').split(',').join('');
};

function getEmployees(list) {
  return [...list.children].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}
