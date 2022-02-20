'use strict';

const listFromTag = document.querySelector('ul');
const employees = [...listFromTag.children];

function sortList(list) {
  list.sort((o1, o2) => {
    const salaryO1 = o1.dataset.salary.replace(/[$,]/g, '');
    const salaryO2 = o2.dataset.salary.replace(/[$,]/g, '');

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
