'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  function salaryToNumber(salary) {
    return +salary.slice(1).replace(',', '.');
  }

  const result = [...list.children].sort((person1, person2) =>
    salaryToNumber(person2.dataset.salary)
    - salaryToNumber(person1.dataset.salary));

  list.append(...result);
}

function getEmployees(list) {
  return [...list.children].map(item => ({
    name: item.innerText, ...item.dataset,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
