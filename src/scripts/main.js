'use strict';

let li = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = parseFloat(a.getAttribute('data-salary'));
    const salaryB = parseFloat(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  return sortedList;
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent.trim().split(' ')[0],
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };

    employees.push(employee);
  });

  return employees;
}

getEmployees(li);
li = sortList(li);
