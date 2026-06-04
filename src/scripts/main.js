'use strict';

function getEmployees(pagesTag) {
  return Array.from(pagesTag).map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

function sortList(employees) {
  return employees.sort((a, b) => {
    const parseSalary = (salary) => {
      return parseFloat(salary.replace(/[$,]/g, ''));
    };

    return parseSalary(b.salary) - parseSalary(a.salary);
  });
}

const listQuerry = document.querySelectorAll('li');
const list = getEmployees(listQuerry);
const sortedEmployees = sortList(list);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedEmployees.forEach((employee) => {
  const li = document.createElement('li');

  li.textContent = `${employee.name}`;

  li.dataset.position = employee.position;
  li.dataset.salary = employee.salary;
  li.dataset.age = employee.age;

  ul.appendChild(li);
});
