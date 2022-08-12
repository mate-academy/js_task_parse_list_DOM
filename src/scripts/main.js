'use strict';

const employeesList = document.querySelectorAll('li[data-position]');

const parseSalary = str => +str.replace(/\D/g, '');

const sortList = list => {
  const sortedList = [...list].sort((a, b) =>
    parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  sortedList.forEach(item => item.parentElement.appendChild(item));
};

const getEmployees = list => [...list].map(element => ({
  name: element.textContent.trim(),
  position: element.dataset.position,
  salary: element.dataset.salary,
  age: element.dataset.age,
}));

sortList(employeesList);
getEmployees(employeesList);
