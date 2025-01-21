'use strict';

const dataList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const parseSalary = (salaryString) =>
  Number(salaryString.replace('$', '').replace(',', ''));

const sortListBySalary = (list) => {
  const sortedList = [...list].sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  sortedList.forEach((el) => ul.appendChild(el));
};

const mapToEmployees = (list) =>
  list.map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

sortListBySalary(dataList);
mapToEmployees(dataList);
