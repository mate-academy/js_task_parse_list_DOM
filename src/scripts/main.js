'use strict';

function clearSalary(salary) {
  return Number(salary.replace('$', '').replaceAll(',', ''));
}

const list = document.querySelector('ul');

function sortList(listElement) {
  const listItems = [...listElement.querySelectorAll('li')];

  listItems.sort((a, b) => {
    const salaryA = clearSalary(a.dataset.salary);
    const salaryB = clearSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((employee) => {
    listElement.append(employee);
  });
}

sortList(list);

function getEmployees(listElement) {
  const listItems = [...listElement.querySelectorAll('li')];

  return listItems.map((employee) => {
    return {
      name: employee.textContent.trim(),
      salary: clearSalary(employee.dataset.salary),
      position: employee.dataset.position,
      age: Number(employee.dataset.age),
    };
  });
}

getEmployees(list);
