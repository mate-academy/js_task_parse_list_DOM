'use strict';

// write code here
const listE = document.querySelector('ul');

function helper(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(list) {
  const listEmployess = Array.from(list.querySelectorAll('li'));
  const sortedList = listEmployess.sort((a, b) => {
    return helper(b.dataset.salary) - helper(a.dataset.salary);
  });

  sortedList.forEach((employee) => {
    list.append(employee);
  });
}

function getEmployees(list) {
  const listEmployess = Array.from(list.querySelectorAll('li'));

  return listEmployess.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: helper(employee.dataset.salary),
      age: Number(employee.dataset.age),
    };
  });
}

sortList(listE);
getEmployees(listE);
