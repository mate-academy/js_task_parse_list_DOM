'use strict';

const listFromTag = document.querySelector('ul');
const employees = [...listFromTag.children];

function sortList(list) {
  list.sort((first, second) => {
    const salaryO1 = first.dataset.salary.replace(/[$,]/g, '');
    const salaryO2 = second.dataset.salary.replace(/[$,]/g, '');

    return salaryO2 - salaryO1;
  })

  listFromTag.append(...list);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.position,
      age: employee.dataset.age,
    }
  })
}

sortList(employees);
getEmployees(employees);
// write code here
