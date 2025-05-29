'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsNumber = Array.from(items).map((el) => {
    const salaryStr = el.dataset.salary;
    const cleaned = salaryStr.replace(/[$,]/g, '');
    const salary = Number(cleaned);

    return { el, salary };
  });

  itemsNumber.sort((a, b) => b.salary - a.salary);
  itemsNumber.forEach((item) => list.append(item.el));
}

function getEmployees(list) {
  const employeeItems = list.querySelectorAll('li');
  const employees = Array.from(employeeItems).map((el) => {
    const fullName = el.textContent.trim();
    const position = el.dataset.position;
    const salary = Number(el.dataset.salary.replace(/[$,]/g, ''));
    const age = Number(el.dataset.age);

    return {
      name: fullName,
      position,
      salary,
      age,
    };
  });

  return employees;
}

sortList(employeesList);
getEmployees(employeesList);
