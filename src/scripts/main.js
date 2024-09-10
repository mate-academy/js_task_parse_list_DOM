'use strict';

const list = document.querySelectorAll('ul li');

function sortList() {
  const employeesList = Array.from(list).map((element) => {
    const text = element.dataset.salary.replace(/[^0-9.]/g, '');

    return parseFloat(text);
  });

  employeesList.sort((a, b) => b - a);

  const parentLi = list[0].parentNode;

  employeesList.forEach(({ element }) => {
    parentLi.appendChild(element);
  });
}

sortList();

function getEmployees() {
  const employees = Array.from(list).map((element) => {
    const nameEmp = element.textContent.trim();
    const position = element.dataset.position;
    const salary = element.dataset.salary;
    const age = element.dataset.age;

    return {
      name: nameEmp,
      position,
      salary,
      age,
    };
  });

  return employees;
}

getEmployees();
