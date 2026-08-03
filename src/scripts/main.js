'use strict';

const employeeList = [...document.querySelectorAll('li')];

function converter(salary) {
  const cleanedSalary = salary.replaceAll('$', '');

  return Number(cleanedSalary.replaceAll(',', ''));
}

function sortList(list) {
  const sortedList = list.sort(
    (a, b) => converter(b.dataset.salary) - converter(a.dataset.salary),
  );

  const ul = document.querySelector('ul');

  for (const employee of sortedList) {
    ul.append(employee);
  }

  return sortedList;
}

function getEmployees(list) {
  const result = list.map((x) => ({
    name: x.textContent.trim(),
    ...x.dataset,
  }));

  return result;
}

const sorted = sortList(employeeList);

getEmployees(sorted);
