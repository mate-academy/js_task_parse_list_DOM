'use strict';

const employeeList = document.querySelectorAll('ul > li');

const parseSalary = (salary) =>
  Number(salary.replace('$', '').replace(',', ''));

const sortList = (list) => {
  const sortedList = [...list].sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  ul.append(...sortedList);
};

const getEmployees = (list) =>
  [...list].map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));

sortList(employeeList);

getEmployees(employeeList);
