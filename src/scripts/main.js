'use strict';

function parseSalary(salaryString) {
  const salary = parseInt(salaryString.replace(/[^0-9]/g, ''), 10);

  return isNaN(salary) ? 0 : salary;
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.append(...itemsArray);
}

function getEmployees(list) {
  const itemsArray = Array.from(list.children);

  return itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
