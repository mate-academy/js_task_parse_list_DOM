'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [...items];

  itemsArray.sort((a, b) => {
    const salaryStringA = a.dataset.salary;
    const salaryStringB = b.dataset.salary;
    const salaryA = +salaryStringA.replace(/\$/g, '').replace(/,/g, '');
    const salaryB = +salaryStringB.replace(/\$/g, '').replace(/,/g, '');

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [...items];
  const employees = itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),

      position: item.dataset.position,
      salary: +item.dataset.salary.replace(/\$/g, '').replace(/,/g, ''),
      age: +item.dataset.age,
    };
  });

  return employees;
}

sortList(employeeList);

getEmployees(employeeList);
