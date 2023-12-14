'use strict';

const employees = document.querySelectorAll('li');
const ul = document.querySelector('ul');

sortList(employees);
getEmployees(employees);

function formatSalary(element) {
  const salary = element.dataset.salary;

  return Number(salary.slice(1).replace(',', ''));
}

function sortList(list) {
  const listSalary = [];

  for (const li of list) {
    listSalary.push(formatSalary(li));
  };

  listSalary.sort((a, b) => b - a);

  for (let i = 0; i < listSalary.length; i++) {
    const selector = listSalary[i].toLocaleString('en-US');

    ul.append(ul.querySelector(`[data-salary="$${selector}"]`));
  }
}

function getEmployees(list) {
  const resultArr = [];

  for (const li of list) {
    resultArr.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  };

  return resultArr;
}
